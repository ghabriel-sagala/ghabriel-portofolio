"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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

const Timeline: React.FC<TimelineProps> = ({ items, title }) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section className="relative py-24">
      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[var(--color-accent)]/6 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            {title === "Experience"
              ? "My professional journey and career experience"
              : "Active involvement and leadership in organizations"}
          </p>
        </motion.div>

        {/* Timeline line */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)]/40 via-white/6 to-[var(--color-accent-secondary)]/40 md:-translate-x-1/2" />

          {/* Items */}
          <div className="space-y-6 md:space-y-10">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-12 items-start md:items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-orange-500 flex items-center justify-center border-2 border-[var(--color-bg-primary)] shadow-lg shadow-[var(--color-accent)]/20 relative z-20 mt-1"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-white" />
                </motion.div>

                {/* Content */}
                <div className={`flex-1 w-full ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    onClick={() =>
                      setExpandedId(expandedId === item.id ? null : item.id)
                    }
                    className="glass-card rounded-2xl p-5 md:p-6 border border-white/6 hover:border-white/10 transition-all duration-300 cursor-pointer group"
                  >
                    {/* Header */}
                    <div className={`flex flex-col gap-1.5 mb-3 ${index % 2 === 0 ? "md:items-end" : ""}`}>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base md:text-lg font-bold text-white group-hover:text-[var(--color-accent)] transition-colors font-display">
                          {item.title}
                        </h3>
                        <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider text-[var(--color-accent-secondary)] bg-[var(--color-accent-secondary)]/10 rounded-full border border-[var(--color-accent-secondary)]/20">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400">{item.subtitle}</p>
                    </div>

                    {/* Expandable content */}
                    <AnimatePresence initial={false}>
                      {expandedId === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className={`text-sm text-gray-400 leading-relaxed font-body pt-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                            {item.fullDesc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Expand hint */}
                    {item.fullDesc.length > 80 && (
                      <div className={`flex items-center gap-1.5 mt-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="text-[10px] text-[var(--color-accent-secondary)] font-medium">
                          {expandedId === item.id ? "Hide" : "Show details"}
                        </span>
                        <motion.div
                          animate={{
                            rotate: expandedId === item.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.25 }}
                        >
                          <ChevronDown size={12} className="text-[var(--color-accent-secondary)]" />
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
