import { useEffect, useState } from "react";
import MenuButton from "../UI/MenuButton";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setscrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setscrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrolltoSection = (href) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  /* animation property */

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
    exit: { opacity: 0 },
  };

  const itemsVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 40 },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${scrolled ? "backdrop-blur-md bg-white/5 border-b border-white/10" : "bg-transparent"}`}
    >
      {/* container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* logo */}
        <div
          style={{ fontFamily: "'Orbitron', sans-serif" }}
          className="bg-linear-to-br from-indigo-600 to-sky-500 bg-clip-text text-transparent font-black text-3xl"
        >
          DHRUVIK<span className="text-cyan-400">.</span>
        </div>
        {/*navlink  */}

        <nav className="hidden mx-4 md:block">
          <motion.ul
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:flex md:flex-row md:gap-7"
          >
            {menuItems.map((item) => {
              return (
                <li className="relative group" key={item.name}>
                  <button
                    className="cursor-pointer text-xl bg-linear-90  from-indigo-500 to-cyan-400 bg-clip-text text-transparent font-medium"
                    onClick={() => scrolltoSection(item.href)}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
              );
            })}
          </motion.ul>
        </nav>
        {/* navlink end */}
        {/* mobile menu */}
        <MenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      {/* container end */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
            style={{ transformOrigin: "top right" }}
            className="md:hidden bg-white/10 px-6 py-8 backdrop-blur-md border-2 rounded-xl border-white/20 absolute right-6 top-full w-64"
          >
            <motion.ul
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col gap-6"
            >
              {menuItems.map((item) => {
                return (
                  <motion.li
                    variants={itemsVariants}
                    transition={{ type: "spring", bounce: 0.3 }}
                    className="text-xl text-white"
                    key={item.name}
                  >
                    <button
                      className="cursor-pointer"
                      onClick={() => scrolltoSection(item.href)}
                    >
                      {item.name}
                    </button>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
