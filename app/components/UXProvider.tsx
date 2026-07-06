"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Theme = "light" | "dark";
interface ThemeContextValue {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within UXProvider");
  }
  return context;
}

export default function UXProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [flash, setFlash] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme") as Theme | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const initialTheme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : systemTheme;
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.("a");
      if (!target) return;
      const href = (target as HTMLAnchorElement).getAttribute("href");
      const targetAttr = (target as HTMLAnchorElement).getAttribute("target");

      if (!href) return;
      // Skip external links and anchors with target _blank
      const isExternal = href.startsWith("http") || targetAttr === "_blank" || href.startsWith("mailto:") || href.startsWith("tel:");
      if (isExternal) return;

      // Prevent default navigation to play animation
      e.preventDefault();
      setFlash(true);

      const delay = 320; // ms to let animation play
      setTimeout(() => {
        setFlash(false);
        // If href is a hash, use location hash
        if (href.startsWith("#")) {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
          return;
        }
        router.push(href);
      }, delay);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="relative">
        {children}
        <div
          aria-hidden
          className={`link-flash ${flash ? "show" : ""}`}
          style={{
            background: "radial-gradient(circle at 20% 10%, rgba(0,255,209,0.10), transparent 12%), radial-gradient(circle at 80% 90%, rgba(124,92,255,0.08), transparent 18%)",
          }}
        />
      </div>
    </ThemeContext.Provider>
  );
}
