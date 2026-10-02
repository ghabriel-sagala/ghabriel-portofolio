"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", level: 92, color: "from-gray-900 to-white" },
  { name: "React.js", level: 90, color: "from-blue-400 to-cyan-400" },
  { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-400" },
  { name: "Tailwind CSS", level: 94, color: "from-cyan-400 to-blue-500" },
  { name: "Laravel / PHP", level: 88, color: "from-red-500 to-orange-400" },
  { name: "Node.js", level: 80, color: "from-green-500 to-green-600" },
  { name: "UI/UX Design", level: 82, color: "from-purple-500 to-pink-500" },
  { name: "MySQL / Database", level: 86, color: "from-orange-400 to-red-500" },
  { name: "JavaScript", level: 92, color: "from-yellow-400 to-yellow-500" },
  { name: "Machine Learning", level: 75, color: "from-purple-500 to-indigo-500" },
  { name: "IoT & Arduino", level: 78, color: "from-green-500 to-emerald-500" },
];

const skillCategories = [
  {
    title: "Frontend",
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "UI/UX Design"],
    icon: "🎨",
  },
  {
    title: "Backend",
    skills: ["Laravel / PHP", "MySQL / Database", "Node.js", "REST API"],
    icon: "⚙️",
  },
  {
    title: "AI & ML",
    skills: ["Machine Learning", "Python", "Google Gemini", "Data Analysis"],
    icon: "🤖",
  },
  {
    title: "Tools & DevOps",
    skills: ["Git & GitHub", "VS Code", "Docker", "Linux", "npm/yarn"],
    icon: "🛠️",
  },
  {
    title: "IoT & Hardware",
    skills: ["Arduino", "Sensor Integration", "Real-time Monitoring", "Embedded Systems"],
    icon: "📡",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
  return (
    <section className="relative py-24">
      {/* Ambient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[var(--color-accent)]/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[var(--color-accent-secondary)]/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--color-accent-secondary)]">
            03 — Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-display mt-3 mb-4 tracking-tight">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            My technical capabilities, developed through hands-on experience
            and continuous learning.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 md:mb-20"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/10 to-[var(--color-accent-secondary)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10" />

              <div className="relative rounded-2xl bg-[var(--color-bg-tertiary)] border border-white/6 p-5 md:p-7 transition-all duration-300 h-full group-hover:border-white/10">
                <div className="flex items-center gap-3 mb-4 md:mb-5">
                  <span className="text-xl md:text-2xl">{category.icon}</span>
                  <h3 className="text-base md:text-lg font-bold text-white font-display">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.04 }}
                      className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-200 cursor-default border border-white/[0.04] bg-white/[0.02] text-gray-400 group-hover:border-white/10 group-hover:bg-white/[0.04] group-hover:text-white"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency */}
        <div className="max-w-xl mx-auto">
          <h3 className="text-xl md:text-2xl font-bold text-white font-display text-center mb-6 md:mb-10">
            Proficiency Level
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-y-4 md:grid-cols-2 gap-x-6 md:gap-y-5"
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={item}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs md:text-sm text-gray-300 font-medium truncate">
                    {skill.name}
                  </span>
                  <span className="text-xs md:text-sm font-bold text-[var(--color-accent)] font-mono">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
