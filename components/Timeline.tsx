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
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[var(--brand-primary)]/8 to-[var(--brand-secondary)]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-space text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            {title}
          </h2>
          <p className="text-lg text-gray-400 font-inter">
            {title === "Experience"
              ? "Perjalanan karir dan pengalaman profesional saya"
              : "Keterlibatan aktif dan kepemimpinan dalam organisasi"}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--brand-primary)]/40 via-white/10 to-[var(--brand-secondary)]/40 md:-translate-x-1/2" />

          {/* Timeline items */}
          <div className="space-y-8 md:space-y-12">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-12 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-[var(--brand-primary)] to-orange-500 flex items-center justify-center border-2 border-[#0a0a0f] shadow-lg shadow-[var(--brand-primary)]/20 relative z-20"
                >
                  <div className="w-3 h-3 rounded-full bg-white" />
                </motion.div>

                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    onClick={() =>
                      setExpandedId(expandedId === item.id ? null : item.id)
                    }
                    className="glass-card rounded-2xl p-6 md:p-7 border border-white/[0.08] hover:border-[var(--brand-primary)]/20 transition-all duration-300 cursor-pointer group"
                  >
                    <div
                      className={`flex flex-col gap-1.5 mb-3 ${
                        index % 2 === 0 ? "md:items-end" : ""
                      }`}
                    >
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[var(--brand-primary)] transition-colors font-space">
                          {item.title}
                        </h3>
                        <span className="px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--brand-secondary)] bg-[var(--brand-secondary)]/10 rounded-full border border-[var(--brand-secondary)]/20">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{item.subtitle}</p>
                    </div>

                    <AnimatePresence initial={false}>
                      {expandedId === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p
                            className={`text-sm text-gray-400 leading-relaxed font-inter pt-2 ${
                              index % 2 === 0 ? "md:text-right" : ""
                            }`}
                          >
                            {item.fullDesc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {item.fullDesc.length > 80 && (
                      <div
                        className={`flex items-center gap-1 mt-2 ${
                          index % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        <span className="text-xs text-[var(--brand-secondary)] font-medium">
                          {expandedId === item.id ? "Tutup" : "Lihat Detail"}
                        </span>
                        <motion.div
                          animate={{
                            rotate: expandedId === item.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown
                            size={14}
                            className="text-[var(--brand-secondary)]"
                          />
                        </motion.div>
                      </div>
                    )}
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
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
