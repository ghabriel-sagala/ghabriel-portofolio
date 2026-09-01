"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", level: 92, color: "from-black to-white" },
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
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-red-500/10 to-orange-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-space text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-inter">
            Keahlian teknis yang telah saya kembangkan melalui pengalaman praktis
            dan pembelajaran berkelanjutan
          </p>
        </motion.div>

        {/* Skills by Category */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/15 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10" />

              <div className="relative glass-card border border-white/[0.08] group-hover:border-[var(--brand-primary)]/20 rounded-2xl p-7 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-bold text-white font-space">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-white/5 hover:bg-gradient-to-r hover:from-[var(--brand-primary)]/20 hover:to-orange-500/20 text-gray-300 rounded-full text-sm font-medium transition-all duration-200 cursor-default border border-white/5 hover:border-[var(--brand-primary)]/20"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Levels */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-white font-space">
            Proficiency Level
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
          >
            {skills.map((skill) => (
              <motion.div key={skill.name} variants={item}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium text-sm">
                    {skill.name}
                  </span>
                  <span className="text-[var(--brand-primary)] font-bold text-sm font-mono">
                    {skill.level}%
                  </span>
                </div>
                <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
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
