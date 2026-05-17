import { motion } from "framer-motion";

const SectionHeader = ({ text, para }) => {
  return (
    <>
      {/* left line */}
      <div className="flex items-center gap-4 mb-6 ">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
          className="h-px bg-gradient-to-r from-transparent to-sky-500 flex-1"
        />

        {/* heading */}

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-black bg-linear-to-r from-cyan-400 to-sky-400 bg-clip-text text-transparent whitespace-nowrap"
        >
          {text}
        </motion.h2>

        {/* right line */}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: true }}
          style={{ originX: 1 }}
          className="h-px bg-gradient-to-l from-transparent to-sky-500 flex-1"
        />
      </div>

      {/* paragraph */}

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-white/60 text-lg max-w-2xl mx-auto text-center mt-4"
      >
        {para}
      </motion.p>

      {/* horizontal line */}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        style={{ originX: 0.5 }}
        className="h-1 bg-cyan-500 mt-8 mb-8 w-20 rounded-xl mx-auto"
      />
    </>
  );
};

export default SectionHeader;
