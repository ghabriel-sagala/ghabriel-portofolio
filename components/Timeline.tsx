"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useReducedMotionPreference } from "@/hooks/useReducedMotionPreference";

interface TimelineItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  shortDesc?: string;
  fullDesc: string;
}

interface TimelineProps {
  items: TimelineItem[];
  title: string;
}

export default function Timeline({ items, title }: TimelineProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const reduceMotion = useReducedMotionPreference();
  const isOrganization = title === "Organization & Leadership";

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: reduceMotion ? 0 : 0.45 }}
          className="mb-9 max-w-2xl"
        >
          <p className="mb-3 font-mono text-xs text-secondary">
            {isOrganization ? "ORGANIZATIONS" : "EXPERIENCE"}
          </p>
          <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-text-secondary sm:text-base">
            {isOrganization
              ? "Roles and responsibilities across student organizations and community events."
              : "Professional work across public digital services and connected systems."}
          </p>
        </motion.header>

        {items.length === 0 ? (
          <p className="border-t border-white/15 py-6 text-sm text-text-secondary">
            No entries have been added to this section yet.
          </p>
        ) : (
          <div className="relative space-y-3 border-l border-white/15 pl-5 sm:space-y-4 sm:pl-8">
            {items.map((item, index) => {
              const isExpanded = expandedId === item.id;
              const detailsId = `timeline-details-${item.id}`;

              return (
                <motion.article
                  key={item.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                    delay: reduceMotion ? 0 : Math.min(index * 0.04, 0.16),
                  }}
                  className={`relative rounded-xl border p-5 transition-colors sm:p-6 ${
                    isOrganization && index === 0
                      ? "border-white/30 bg-white/5"
                      : "border-white/12 bg-bg-secondary"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[1.65rem] top-7 h-2.5 w-2.5 rounded-full border-2 border-neutral sm:-left-[2.15rem] ${
                      isOrganization && index === 0
                        ? "bg-secondary"
                        : "bg-primary"
                    }`}
                  />

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-medium leading-snug text-white sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-text-secondary">
                        {item.subtitle}
                      </p>
                    </div>
                    <p className="shrink-0 font-mono text-[11px] leading-5 text-tertiary">
                      {item.period}
                    </p>
                  </div>

                  <motion.div
                    id={detailsId}
                    initial={false}
                    animate={
                      isExpanded
                        ? { height: "auto", opacity: 1, marginTop: 16 }
                        : { height: 0, opacity: 0, marginTop: 0 }
                    }
                    transition={{ duration: reduceMotion ? 0 : 0.22 }}
                    aria-hidden={!isExpanded}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-white/10 pt-4 text-sm leading-7 text-text-secondary">
                      {item.fullDesc}
                    </p>
                  </motion.div>

                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={detailsId}
                    onClick={() =>
                      setExpandedId(isExpanded ? null : item.id)
                    }
                    className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-md text-xs font-medium text-primary transition-colors hover:text-white active:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                  >
                    {isExpanded ? "Hide details" : "Read details"}
                    <ChevronDown
                      size={15}
                      aria-hidden="true"
                      className={`transition-transform ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </motion.article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
