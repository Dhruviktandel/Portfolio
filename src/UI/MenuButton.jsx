import { motion } from "framer-motion";

export default function MenuButton({ isMenuOpen, setIsMenuOpen }) {
  return (
    <button
      onClick={() => setIsMenuOpen((prev) => !prev)}
      className="flex flex-col justify-center items-center w-10 h-10 gap-1.5 cursor-pointer md:hidden"
    >
      {/* Top bar */}
      <motion.span
        animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="block w-6 h-0.5 bg-white origin-center"
      />
      {/* middle bar */}
      <motion.span
        animate={isMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2 }}
        className="block w-6 h-0.5 bg-white origin-center"
      />
      {/* bottom bar */}
      <motion.span
        animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="block w-6 h-0.5 bg-white origin-center"
      />
    </button>
  );
}
