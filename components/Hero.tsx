"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { useEffect, useState, type PointerEvent } from "react";

const introEvent = "portfolio:intro-ready";

const contentVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 12 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const instantVariants: Variants = {
  hidden: { opacity: 1, filter: "blur(0px)", y: 0 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0 },
  },
};

const skills = [
  { name: "React", className: "left-0 top-[17%]" },
  { name: "Laravel", className: "right-0 top-[49%]" },
  { name: "IoT", className: "bottom-[10%] left-[5%]" },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [introReady, setIntroReady] = useState(false);
  const [lensVisible, setLensVisible] = useState(false);
  const [ctaActive, setCtaActive] = useState(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothPointerX = useSpring(pointerX, {
    stiffness: 120,
    damping: 22,
    mass: 0.4,
  });
  const smoothPointerY = useSpring(pointerY, {
    stiffness: 120,
    damping: 22,
    mass: 0.4,
  });
  const portraitX = useTransform(smoothPointerX, [-1, 1], [-7, 7]);
  const portraitY = useTransform(smoothPointerY, [-1, 1], [-7, 7]);
  const skillParallaxX = useTransform(smoothPointerX, [-1, 1], [4, -4]);
  const skillParallaxY = useTransform(smoothPointerY, [-1, 1], [4, -4]);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothCursorX = useSpring(cursorX, {
    stiffness: 280,
    damping: 28,
    mass: 0.2,
  });
  const smoothCursorY = useSpring(cursorY, {
    stiffness: 280,
    damping: 28,
    mass: 0.2,
  });

  useEffect(() => {
    const handleIntroReady = () => setIntroReady(true);
    window.addEventListener(introEvent, handleIntroReady);
    return () => window.removeEventListener(introEvent, handleIntroReady);
  }, []);

  function handlePointerMove(event: PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse" || reduceMotion) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 2);
    pointerY.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 2);

    const target = event.target;
    if (target instanceof Element && target.closest("[data-lens-target]")) {
      cursorX.set(event.clientX - bounds.left);
      cursorY.set(event.clientY - bounds.top);
    }
  }

  function handlePointerLeave() {
    pointerX.set(0);
    pointerY.set(0);
    setLensVisible(false);
  }

  return (
      <section
        id="hero"
        aria-labelledby="hero-heading"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="relative isolate scroll-mt-24 py-16 sm:py-20 lg:flex lg:min-h-[min(760px,88svh)] lg:items-center lg:py-24"
      >
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate={introReady ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reduceMotion ? 0 : 0.1 },
            },
          }}
          className="relative z-10 grid w-full items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(17rem,0.85fr)] lg:gap-8"
        >
          <div className="relative">
            <div className="mb-5 min-h-8">
              <AnimatePresence initial={false}>
                {introReady && (
                  <motion.p
                    layoutId="portfolio-intro-name"
                    transition={{
                      layout: { duration: reduceMotion ? 0 : 0.72 },
                    }}
                    className="w-fit font-display text-lg font-semibold tracking-[-0.04em] text-white sm:text-xl"
                  >
                    Ghabriel Theo P. S.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.h1
              id="hero-heading"
              variants={reduceMotion ? instantVariants : contentVariants}
              className="relative max-w-[10ch] font-display text-[clamp(3.1rem,9.2vw,7rem)] font-medium leading-[0.86] tracking-[-0.075em] text-white lg:pr-4"
            >
              <span className="block">Interfaces</span>
              <span className="block">
                for <span className="text-primary">real</span>
              </span>
              <span className="block">systems.</span>
            </motion.h1>

            <motion.p
              variants={reduceMotion ? instantVariants : contentVariants}
              className="mt-7 max-w-lg text-base leading-7 text-text-secondary sm:text-lg sm:leading-8"
            >
              I work across frontend and backend development, connecting clear
              interfaces to the systems and devices behind them.
            </motion.p>

            <motion.p
              variants={reduceMotion ? instantVariants : contentVariants}
              aria-hidden="true"
              style={{ fontFamily: '"Segoe Print", "Bradley Hand", cursive' }}
              className="mt-2 w-fit -rotate-2 text-base text-tertiary sm:text-lg"
            >
              from interface to device
            </motion.p>

            <motion.div
              variants={reduceMotion ? instantVariants : contentVariants}
              className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3"
            >
              <motion.a
                href="#projects"
                aria-label="Browse selected projects"
                data-lens-target
                onPointerEnter={(event) => {
                  if (event.pointerType === "mouse") {
                    setLensVisible(!reduceMotion);
                    setCtaActive(!reduceMotion);
                  }
                }}
                onPointerLeave={() => {
                  setLensVisible(false);
                  setCtaActive(false);
                }}
                onFocus={() => setCtaActive(true)}
                onBlur={() => setCtaActive(false)}
                style={{ cursor: lensVisible ? "none" : "pointer" }}
                className="group relative grid size-32 shrink-0 place-items-center rounded-full text-primary outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-secondary active:scale-[0.97] sm:size-36"
              >
                <motion.svg
                  viewBox="0 0 140 140"
                  aria-hidden="true"
                  className="absolute inset-0 size-full"
                  animate={{ rotate: ctaActive && !reduceMotion ? 360 : 0 }}
                  transition={{ duration: 0.85, ease: [0.2, 0.7, 0.2, 1] }}
                >
                  <defs>
                    <path
                      id="hero-cta-orbit"
                      d="M70,70 m-52,0 a52,52 0 1,1 104,0 a52,52 0 1,1 -104,0"
                    />
                  </defs>
                  <text
                    fill="currentColor"
                    className="font-mono text-[8.5px] tracking-[0.14em]"
                  >
                    <textPath href="#hero-cta-orbit">
                      VIEW SELECTED PROJECTS / VIEW SELECTED PROJECTS /
                    </textPath>
                  </text>
                </motion.svg>
                <span className="relative z-10 max-w-16 text-center font-display text-sm font-medium leading-tight text-white transition-colors group-hover:text-primary group-active:text-secondary">
                  Selected work
                </span>
              </motion.a>

              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center text-sm font-medium text-text-secondary underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-primary active:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                View CV
              </a>
            </motion.div>
          </div>

          <motion.aside
            aria-label="Selected technologies and portrait"
            className="relative mx-auto w-full max-w-[25rem] lg:ml-0 lg:mr-0 lg:mt-12"
          >
            <motion.figure
              style={
                reduceMotion
                  ? undefined
                  : { x: portraitX, y: portraitY }
              }
              className="relative mx-auto aspect-[4/5] w-[84%] overflow-hidden"
            >
              <div
                className="relative size-full overflow-hidden"
                style={{
                  borderRadius:
                    "42% 58% 47% 53% / 34% 39% 61% 66%",
                }}
              >
                <Image
                  src="/profile.jpg"
                  alt="Ghabriel Theo Petra Sagala"
                  fill
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 1023px) min(84vw, 21rem), 340px"
                  className="object-cover object-[50%_24%] saturate-[0.82]"
                  style={{
                    maskImage:
                      "radial-gradient(ellipse 82% 82% at 50% 46%, #000 62%, transparent 100%)",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 82% 82% at 50% 46%, #000 62%, transparent 100%)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral/75 via-transparent to-transparent"
                />
              </div>
              <figcaption className="absolute bottom-[13%] left-[13%] font-mono text-[10px] text-white sm:text-[11px]">
                Malang, Indonesia
              </figcaption>
            </motion.figure>

            {skills.map((skill) => (
              <motion.span
                key={skill.name}
                style={
                  reduceMotion
                    ? undefined
                    : { x: skillParallaxX, y: skillParallaxY }
                }
                className={`absolute z-10 bg-neutral px-1.5 py-1 font-mono text-xs font-bold text-primary sm:text-sm ${skill.className}`}
              >
                {skill.name}
              </motion.span>
            ))}
          </motion.aside>
        </motion.div>

        <AnimatePresence>
          {lensVisible && (
            <motion.div
              aria-hidden="true"
              initial={{ opacity: 0, scale: 0.72 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.82 }}
              transition={{ duration: 0.16 }}
              style={{ x: smoothCursorX, y: smoothCursorY }}
              className="pointer-events-none absolute left-0 top-0 z-30 grid size-[4.25rem] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white bg-white font-mono text-[9px] font-bold tracking-widest text-neutral mix-blend-difference"
            >
              VIEW
            </motion.div>
          )}
        </AnimatePresence>
      </section>
  );
}
