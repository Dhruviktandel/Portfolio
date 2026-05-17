import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section id="about" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          text="About Me"
          para="I'm a passionate Frontend Developer who loves building modern,
          responsive and visually engaging web experiences."
        />
        {/* two columns */}

        <div className="flex flex-col md:flex-row gap-14 mt-12 items-start">
          {/* left side */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white">Dhruvik Tandel</h3>
            <p className="text-sky-400 font-medium mb-3">Frontend Developer</p>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              I enjoy turning ideas into reality through clean code and
              thoughtful design. Always learning, always building.
            </p>

            {/* 4 squared inside cards */}

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "📍 Location", value: "Bilimora, Gujarat" },
                { label: "💼 Status", value: "Open to Work" },
                { label: "🎯 Focus", value: "Frontend Dev" },
                { label: "🎓 Education", value: "CSE Graduate, S.S. Agarwal" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-3"
                >
                  <p className="text-sky-400 text-xs font-medium mb-1">
                    {item.label}
                  </p>
                  <p className="text-white text-sm font-semibold">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* right side */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex-1 flex flex-col justify-center gap-4"
          >
            {[
              "Building responsive UIs with React & Tailwind",
              "Creating smooth animations with Framer Motion",
              "Writing clean and maintainable code",
              "Turning designs into pixel-perfect pages",
              "Optimizing performance and user experience",
              "Continuously learning new tools and technologies",
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-start gap-3"
              >
                <span className="text-sky-400 mt-1">▹</span>
                <p className="text-white/70 text-sm leading-relaxed">{point}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
