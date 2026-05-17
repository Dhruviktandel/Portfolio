import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const typingText = "Developer";

export default function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayed.length < typingText.length) {
            setDisplayed(typingText.slice(0, displayed.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          if (displayed.length > 0) {
            setDisplayed(typingText.slice(0, displayed.length - 1));
          } else {
            setIsDeleting(false);
          }
        }
      },
      isDeleting ? 50 : 80,
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting]);

  const scrolltoSection = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen px-6 pt-32">
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        <div className="flex-1">
          {/* Available tag */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8 w-fit px-4 py-2 rounded-full border border-sky-500/30 bg-sky-500/10 mx-auto"
          >
            {/* plushing dot */}
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
            </span>
            <span className="text-sky-300 text-sm font-medium">
              Available for opportunities
            </span>
          </motion.div>

          {/* greetings */}

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-xl mb-2"
          >
            Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ fontFamily: "'Orbitron', sans-serif" }}
            className="text-6xl md:text-8xl font-black bg-linear-65 from-blue-500 to-sky-400 bg-clip-text text-transparent mb-4"
          >
            Dhruvik
          </motion.h1>

          {/* role */}

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-2xl md:text-4xl font-semibold text-white mb-6"
            style={{ fontFamily: "'Archivo Black', sans-serif" }}
          >
            Frontend{" "}
            <span className=" text-sky-400">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </motion.h2>

          {/* bio */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-white/60 text-lg max-w-xl mb-10 leading-relaxed mx-auto"
          >
            Crafting modern web experiences with React & Tailwind. Focused on
            clean code, smooth UI and pixel-perfect design
          </motion.p>

          {/* buttons */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <button
              onClick={() => scrolltoSection("#projects")}
              className="px-8 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-semibold transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              View Projects
            </button>
            <a
              href="/TANDEL_DHRUVIK_v4.pdf"
              download="Dhruvik_CV.pdf"
              className="px-8 py-3 rounded-full border border-sky-500/50 text-sky-300 font-semibold hover:bg-sky-500/10 transition-all duration-300 hover:scale-105"
            >
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
