import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* logo */}
        <div
          style={{ fontFamily: "'Orbitron', sans-serif" }}
          className="text-xl font-black bg-linear-65 from-blue-500 to-sky-500 bg-clip-text text-transparent"
        >
          DHRUVIK<span className="text-cyan-400">.</span>
        </div>

        {/* text */}
        <p className="text-white/30 text-sm">
          Designed & Built by Dhruvik Tandel © 2026
        </p>

        {/* icons */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:dhruvik.tandel03@gmail.com"
            className="text-white/40 hover:text-sky-400 transition-colors duration-300"
          >
            <MdEmail size={20} />
          </a>
          <a
            href="https://github.com/Dhruviktandel"
            target="_blank"
            className="text-white/40 hover:text-sky-400 transition-colors duration-300"
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
