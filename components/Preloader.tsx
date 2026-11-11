"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

const INTRO_READY_EVENT = "portfolio:intro-ready";
const INTRO_DURATION = 1380;
const EXIT_DURATION = 360;

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const reduceMotion = useReducedMotionPreference();

  useEffect(() => {
    const readyTimer = window.setTimeout(() => {
      window.dispatchEvent(new Event(INTRO_READY_EVENT));
    }, reduceMotion ? 0 : INTRO_DURATION);
    const exitTimer = window.setTimeout(
      () => setIsVisible(false),
      reduceMotion ? 80 : INTRO_DURATION + EXIT_DURATION,
    );

    return () => {
      window.clearTimeout(readyTimer);
      window.clearTimeout(exitTimer);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!isVisible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : EXIT_DURATION / 1000 }}
          className="portfolio-green-gradient fixed inset-0 z-[9999] grid min-h-dvh place-items-center px-6"
        >
          <div className="text-center">
            <p className="sr-only" role="status">
              Welcome to Ghabriel&apos;s portfolio
            </p>
            <p
              aria-hidden="true"
              className="intro-typewriter font-mono text-[clamp(1.25rem,5vw,2rem)] tracking-[-0.06em] text-[#E8DCC4]"
            >
              {"<? Welcome... ?>"}
            </p>
            <p className="mt-4 text-sm text-[#E8DCC4]/85 sm:text-base">
              Ghabriel Theo P. S. <span aria-hidden="true">·</span>{" "}
              Software Engineer
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
