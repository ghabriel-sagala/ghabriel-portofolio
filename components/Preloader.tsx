"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const BOOT_MESSAGE = "GHABRIEL.EXE // INITIALIZED";
const HERO_NAME = "Ghabriel Theo P. S.";
const SCRAMBLE_CHARACTERS = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%";
const PROGRESS_DURATION = 1180;
const MORPH_DELAY = 160;
const EXIT_DELAY = 320;
const INTRO_READY_EVENT = "portfolio:intro-ready";

const shellVariants = {
  visible: {},
  exit: {
    transition: {
      when: "afterChildren" as const,
      staggerChildren: 0.03,
    },
  },
};

const reducedShellVariants = {
  visible: {},
  exit: {
    transition: {
      when: "afterChildren" as const,
      staggerChildren: 0,
    },
  },
};

const shutterVariants = {
  visible: { y: "0%" },
  exit: {
    y: "-105%",
    transition: {
      type: "spring" as const,
      duration: 0.42,
      bounce: 0.12,
    },
  },
};

const lowerShutterVariants = {
  visible: { y: "0%" },
  exit: {
    y: "105%",
    transition: {
      type: "spring" as const,
      duration: 0.42,
      bounce: 0.12,
    },
  },
};

const reducedShutterVariants = {
  visible: { y: "0%" },
  exit: { y: "0%", transition: { duration: 0 } },
};

const contentVariants = {
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: {
    opacity: 0,
    scale: 0.99,
    filter: "blur(5px)",
    transition: { duration: 0.16 },
  },
};

const reducedContentVariants = {
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
  exit: {
    opacity: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0 },
  },
};

function getBootMessage(progress: number) {
  const resolvedCharacters = Math.floor(
    (progress / 100) * BOOT_MESSAGE.length,
  );
  const scrambleFrame = Math.floor(progress / 3);

  return Array.from(BOOT_MESSAGE, (character, index) => {
    if (character === " " || index < resolvedCharacters || progress === 100) {
      return character;
    }

    return SCRAMBLE_CHARACTERS[
      (index * 11 + scrambleFrame * 7) % SCRAMBLE_CHARACTERS.length
    ];
  }).join("");
}

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isMorphing, setIsMorphing] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const startedAt = performance.now();
    let frameId = 0;
    let lastProgress = -1;

    const updateProgress = (now: number) => {
      const nextProgress = reduceMotion
        ? 100
        : Math.min(
            100,
            Math.round(((now - startedAt) / PROGRESS_DURATION) * 100),
          );

      if (nextProgress !== lastProgress) {
        lastProgress = nextProgress;
        setProgress(nextProgress);
      }

      if (nextProgress < 100) {
        frameId = window.requestAnimationFrame(updateProgress);
      }
    };

    frameId = window.requestAnimationFrame(updateProgress);

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (progress < 100) return;

    const morphTimer = window.setTimeout(() => {
      setIsMorphing(true);
      window.dispatchEvent(new Event(INTRO_READY_EVENT));
    }, reduceMotion ? 0 : MORPH_DELAY);
    const exitTimer = window.setTimeout(
      () => setIsVisible(false),
      reduceMotion ? 120 : EXIT_DELAY,
    );

    return () => {
      window.clearTimeout(morphTimer);
      window.clearTimeout(exitTimer);
    };
  }, [progress, reduceMotion]);

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
          variants={reduceMotion ? reducedShellVariants : shellVariants}
          initial="visible"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[9999] overflow-hidden bg-neutral"
        >
          <motion.div
            variants={reduceMotion ? reducedShutterVariants : shutterVariants}
            className="absolute inset-x-0 top-0 h-1/2 origin-top bg-neutral"
          />
          <motion.div
            variants={
              reduceMotion ? reducedShutterVariants : lowerShutterVariants
            }
            className="absolute inset-x-0 bottom-0 h-1/2 origin-bottom bg-neutral"
          />

          <motion.div
            variants={
              reduceMotion ? reducedContentVariants : contentVariants
            }
            className="relative z-10 flex min-h-dvh items-center justify-center px-6 py-12"
          >
            <div className="w-full max-w-3xl">
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-tertiary sm:text-xs">
                Portfolio initialization / Malang, ID
              </p>

              <div className="mt-8 flex min-h-16 items-end justify-between gap-5 sm:mt-10 sm:min-h-20">
                <motion.p
                  layoutId="portfolio-intro-name"
                  aria-hidden="true"
                  transition={{
                    layout: { duration: reduceMotion ? 0 : 0.72 },
                  }}
                  className="min-w-0 break-words font-display text-[clamp(1.25rem,5vw,2rem)] font-semibold leading-tight tracking-[-0.045em] text-white"
                >
                  {isMorphing ? HERO_NAME : getBootMessage(progress)}
                </motion.p>

                <div
                  role="progressbar"
                  aria-label="Portfolio initialization"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={progress}
                  aria-valuetext={`${progress}%`}
                  className="flex shrink-0 items-baseline font-mono text-primary"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={Math.floor(progress / 10)}
                      initial={
                        reduceMotion
                          ? false
                          : { opacity: 0, y: 7, rotateX: -45 }
                      }
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      exit={
                        reduceMotion
                          ? undefined
                          : { opacity: 0, y: -7, rotateX: 45 }
                      }
                      transition={{ duration: reduceMotion ? 0 : 0.12 }}
                      className="inline-block w-[3ch] text-right text-xl font-bold tabular-nums sm:text-2xl"
                    >
                      {Math.floor(progress / 10) * 10}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-xs">%</span>
                </div>
              </div>

              <p className="mt-3 font-mono text-[10px] text-text-muted sm:text-xs">
                {progress < 100 ? "Waking up the interface" : "Ready"}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
