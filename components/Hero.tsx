"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent,
  type ReactNode,
} from "react";

const introEvent = "portfolio:intro-ready";

const technologies = [
  {
    name: "React / Next.js",
    position: "left-[2%] top-[16%] -rotate-6",
    surface: "rounded-full bg-[#E8DCC4]/12 px-4 py-2",
    duration: 7.2,
  },
  {
    name: "Laravel",
    position: "right-[-2%] top-[48%] rotate-3",
    surface: "rounded-sm bg-[#E8DCC4]/10 px-4 py-2.5",
    duration: 8.4,
  },
  {
    name: "IoT",
    position: "bottom-[14%] left-[12%] rotate-2",
    surface: "rounded-full bg-[#E8DCC4]/12 px-4 py-2",
    duration: 6.6,
  },
];

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};

const instantRevealVariants: Variants = {
  hidden: { opacity: 1, y: 0, filter: "blur(0px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0 } },
};

type OrientationEventConstructor = typeof DeviceOrientationEvent & {
  requestPermission?: () => Promise<"granted" | "denied">;
};

function clamp(value: number) {
  return Math.max(-1, Math.min(1, value));
}

function MagneticLink({
  href,
  children,
  desktopMotion,
}: {
  href: string;
  children: ReactNode;
  desktopMotion: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 340, damping: 24, mass: 0.35 });
  const y = useSpring(pointerY, { stiffness: 340, damping: 24, mass: 0.35 });

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>) {
    if (!desktopMotion || reduceMotion || event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set(
      Math.max(-7, Math.min(7, (event.clientX - bounds.left - bounds.width / 2) * 0.12)),
    );
    pointerY.set(
      Math.max(-6, Math.min(6, (event.clientY - bounds.top - bounds.height / 2) * 0.16)),
    );
  }

  function resetPointer() {
    pointerX.set(0);
    pointerY.set(0);
  }

  return (
    <motion.a
      href={href}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      style={reduceMotion ? undefined : { x, y }}
      className="inline-flex min-h-11 items-center justify-center rounded-sm bg-[#E8DCC4] px-5 py-2.5 font-display text-sm font-semibold text-[#1F3D2B] transition-colors hover:bg-[#E8DCC4]/90 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8DCC4]"
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const [introReady, setIntroReady] = useState(false);
  const [desktopMotion, setDesktopMotion] = useState(false);
  const [motionPlaying, setMotionPlaying] = useState(true);
  const [deviceTiltEnabled, setDeviceTiltEnabled] = useState(false);
  const [deviceTiltStatus, setDeviceTiltStatus] = useState("");
  const stageRef = useRef<HTMLDivElement>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const mappedRotateX = useTransform(pointerY, [-1, 1], [15, -15]);
  const mappedRotateY = useTransform(pointerX, [-1, 1], [-15, 15]);
  const rotateX = useSpring(mappedRotateX, {
    stiffness: 90,
    damping: 20,
    mass: 0.65,
  });
  const rotateY = useSpring(mappedRotateY, {
    stiffness: 90,
    damping: 20,
    mass: 0.65,
  });
  const reveal = reduceMotion ? instantRevealVariants : revealVariants;
  const ambientMotion = motionPlaying && !reduceMotion;

  useEffect(() => {
    const handleIntroReady = () => setIntroReady(true);
    window.addEventListener(introEvent, handleIntroReady);
    return () => window.removeEventListener(introEvent, handleIntroReady);
  }, []);

  useEffect(() => {
    const media = window.matchMedia(
      "(min-width: 1024px) and (hover: hover) and (pointer: fine)",
    );
    const updatePointerMode = () => setDesktopMotion(media.matches);

    updatePointerMode();
    media.addEventListener("change", updatePointerMode);
    return () => media.removeEventListener("change", updatePointerMode);
  }, []);

  useEffect(() => {
    if (motionPlaying && !reduceMotion) return;
    pointerX.set(0);
    pointerY.set(0);
  }, [motionPlaying, pointerX, pointerY, reduceMotion]);

  useEffect(() => {
    if (
      !deviceTiltEnabled ||
      desktopMotion ||
      !motionPlaying ||
      reduceMotion
    ) {
      return;
    }

    function handleOrientation(event: DeviceOrientationEvent) {
      if (event.beta === null || event.gamma === null) return;
      pointerY.set(clamp(event.beta / 45));
      pointerX.set(clamp(event.gamma / 30));
    }

    window.addEventListener("deviceorientation", handleOrientation);
    return () => window.removeEventListener("deviceorientation", handleOrientation);
  }, [desktopMotion, deviceTiltEnabled, motionPlaying, pointerX, pointerY, reduceMotion]);

  function handleMouseMove(event: ReactMouseEvent<HTMLElement>) {
    if (!desktopMotion || !motionPlaying || reduceMotion) return;

    const stage = stageRef.current;
    if (!stage) return;
    const bounds = stage.getBoundingClientRect();

    pointerX.set(clamp(((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
    pointerY.set(clamp(((event.clientY - bounds.top) / bounds.height - 0.5) * 2));
  }

  function handleMouseLeave() {
    if (!desktopMotion) return;
    pointerX.set(0);
    pointerY.set(0);
  }

  async function toggleDeviceTilt() {
    if (deviceTiltEnabled) {
      setDeviceTiltEnabled(false);
      setDeviceTiltStatus("Phone tilt is off.");
      pointerX.set(0);
      pointerY.set(0);
      return;
    }

    if (!("DeviceOrientationEvent" in window)) {
      setDeviceTiltStatus("Device tilt is not available in this browser.");
      return;
    }

    const orientationEvent = window.DeviceOrientationEvent as OrientationEventConstructor;

    try {
      if (orientationEvent.requestPermission) {
        const permission = await orientationEvent.requestPermission();
        if (permission !== "granted") {
          setDeviceTiltStatus("Motion access was not granted. You can try again in browser settings.");
          return;
        }
      }

      setDeviceTiltEnabled(true);
      setDeviceTiltStatus("Phone tilt is on.");
    } catch (error) {
      console.error("Could not request device orientation permission.", error);
      setDeviceTiltStatus("Phone tilt could not be enabled. Check your browser settings.");
    }
  }

  function toggleMotion() {
    setMotionPlaying((playing) => !playing);
    if (motionPlaying) {
      pointerX.set(0);
      pointerY.set(0);
    }
  }

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative isolate -mx-4 overflow-hidden bg-[#1F3D2B] px-4 py-12 text-[#E8DCC4] sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-10 lg:px-10 lg:py-0"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <span className="absolute left-[-8%] top-[22%] whitespace-nowrap font-display text-[clamp(8rem,21vw,23rem)] font-semibold leading-none tracking-[-0.1em] text-transparent [-webkit-text-stroke:1px_rgba(232,220,196,0.12)]">
          ENGINEER
        </span>
      </div>

      <div className="relative mx-auto w-full max-w-[90rem] lg:min-h-[max(46rem,calc(100svh-4.5rem))]">
        <motion.div
          initial="hidden"
          animate={introReady ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.12 } },
          }}
          className="relative z-20 max-w-2xl lg:absolute lg:left-0 lg:top-1/2 lg:w-[48%] lg:-translate-y-1/2"
        >
          <motion.p
            variants={reveal}
            className="mb-5 text-sm text-[#E8DCC4]/85 sm:text-base"
          >
            Ghabriel Theo P. S.
          </motion.p>
          <motion.h1
            id="hero-heading"
            variants={reveal}
            className="max-w-[10ch] font-display text-[clamp(3.35rem,8vw,7.75rem)] font-medium leading-[0.88] tracking-[-0.075em] text-[#E8DCC4]"
          >
            Interfaces for real systems.
          </motion.h1>
          <motion.p
            variants={reveal}
            className="mt-6 max-w-[31rem] text-base leading-7 text-[#E8DCC4]/85 sm:mt-7 sm:text-lg sm:leading-8"
          >
            I build web experiences for real-world work, connecting clear
            interfaces to the systems and devices behind them.
          </motion.p>
          <motion.div
            variants={reveal}
            className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-8"
          >
            <MagneticLink href="#projects" desktopMotion={desktopMotion}>
              View selected work
            </MagneticLink>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-sm text-sm font-medium text-[#E8DCC4] underline decoration-[#E8DCC4]/55 underline-offset-4 transition-colors hover:decoration-[#E8DCC4] active:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8DCC4]"
            >
              View CV
            </a>
            {!reduceMotion && (
              <button
                type="button"
                aria-pressed={!motionPlaying}
                onClick={toggleMotion}
                className="inline-flex min-h-11 items-center rounded-sm px-1 text-sm text-[#E8DCC4]/80 underline decoration-[#E8DCC4]/40 underline-offset-4 transition-colors hover:text-[#E8DCC4] active:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8DCC4]"
              >
                {motionPlaying ? "Pause motion" : "Resume motion"}
              </button>
            )}
          </motion.div>
        </motion.div>

        <div
          ref={stageRef}
          style={{ perspective: 1000 }}
          className="relative mx-auto mt-8 aspect-[4/5] w-[min(82vw,25rem)] sm:mt-10 lg:absolute lg:right-[3%] lg:top-1/2 lg:mt-0 lg:w-[clamp(22rem,34vw,30rem)] lg:-translate-y-1/2"
        >
          <motion.figure
            initial="hidden"
            animate={introReady ? "visible" : "hidden"}
            variants={reveal}
            style={
              reduceMotion
                ? undefined
                : {
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                  }
            }
            className="relative size-full [transform-style:preserve-3d]"
          >
            <motion.div
              animate={ambientMotion ? { y: [0, -10, 0] } : { y: 0 }}
              transition={
                ambientMotion
                  ? { duration: 7, repeat: Infinity, ease: "easeInOut" }
                  : { duration: 0.25 }
              }
              className="relative size-full overflow-hidden rounded-[48%_52%_43%_57%/38%_42%_58%_62%] drop-shadow-[0_28px_45px_rgba(232,220,196,0.12)]"
            >
              <Image
                src="/profile.jpg"
                alt="Ghabriel Theo Petra Sagala"
                fill
                loading="eager"
                fetchPriority="high"
                sizes="(max-width: 1023px) min(82vw, 25rem), (max-width: 1280px) 34vw, 30rem"
                className="object-cover object-[50%_24%]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1F3D2B]/60 to-transparent"
              />
            </motion.div>
            <figcaption className="absolute bottom-[2%] left-1/2 -translate-x-1/2 font-mono text-xs text-[#E8DCC4]">
              Malang, Indonesia
            </figcaption>
          </motion.figure>

          <ul
            aria-label="Technology stack"
            className="pointer-events-none absolute inset-0 z-10 list-none"
          >
            {technologies.map((technology) => (
              <motion.li
                key={technology.name}
                animate={
                  ambientMotion
                    ? { y: [0, -10, 0] }
                    : { y: 0 }
                }
                transition={
                  ambientMotion
                    ? {
                        duration: technology.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : { duration: 0.25 }
                }
                className={`absolute whitespace-nowrap font-display text-sm font-medium text-[#E8DCC4] sm:text-base ${technology.position} ${technology.surface}`}
              >
                {technology.name}
              </motion.li>
            ))}
          </ul>
        </div>

        {!reduceMotion && (
          <div className="relative z-20 mt-5 flex flex-col items-center gap-2 lg:hidden">
            <button
              type="button"
              aria-pressed={deviceTiltEnabled}
              onClick={toggleDeviceTilt}
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#E8DCC4]/12 px-5 text-sm font-medium text-[#E8DCC4] transition-colors hover:bg-[#E8DCC4]/20 active:bg-[#E8DCC4]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8DCC4]"
            >
              {deviceTiltEnabled ? "Phone tilt on" : "Enable phone tilt"}
            </button>
            <p aria-live="polite" className="min-h-5 max-w-sm text-center text-xs text-[#E8DCC4]/80">
              {deviceTiltStatus}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
