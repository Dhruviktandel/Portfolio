import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "React", level: 80 },
    { name: "JavaScript", level: 75 },
    { name: "Git / GitHub", level: 70 },
    { name: "HTML / CSS", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Framer Motion", level: 65 },
  ];

  const concepts = [
    {
      title: "Responsive Design",
      description:
        "Building layouts that adapt seamlessly to any screen size — mobile, tablet or desktop.",
      icon: "📱",
    },
    {
      title: "Reusable Components",
      description:
        "Breaking UI into small, independent pieces that can be used anywhere in the app.",
      icon: "🧩",
    },
    {
      title: "Agile Methodology",
      description:
        "Working in iterative cycles to deliver features faster and adapt to change efficiently.",
      icon: "🔄",
    },
  ];

  return (
    <section id="skills" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          text="What I Know"
          para="Technologies I work with to build modern web experiences."
        />

        {/* skills grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* skill name and percent */}
              <div className="flex justify-between mb-2">
                <span className="text-white/80 text-sm font-medium">
                  {skill.name}
                </span>
                <span className="text-sky-400 text-sm font-medium">
                  {skill.level}%
                </span>
              </div>

              {/* progress bar track */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                {/* fill */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="h-full rounded-full relative overflow-hidden"
                  style={{
                    background: "linear-gradient(to right, #0ea5e9, #22d3ee)",
                  }}
                >
                  {/* shimmer effect */}
                  <motion.div
                    animate={{ x: ["-100%", "300%"] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "linear",
                      repeatDelay: 0.3,
                    }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "60%",
                      height: "100%",
                      background:
                        "linear-gradient(to right, transparent, rgba(255,255,255,0.7), transparent)",
                      transform: "skewX(-12deg)",
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {concepts.map((concept, i) => (
            <motion.div
              key={concept.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm"
            >
              <span className="text-2xl mb-3 block">{concept.icon}</span>
              <h4 className="text-white font-semibold text-sm mb-2">
                {concept.title}
              </h4>
              <p className="text-white/50 text-xs leading-relaxed">
                {concept.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
