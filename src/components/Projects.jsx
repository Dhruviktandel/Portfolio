import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Food Delivery Cart",
    description:
      "A fully functional food ordering app built with React. Features cart management using useReducer, reusable API request hooks and global state with Context API.",
    tech: ["React", "Context API", "useReducer"],
    image: "/projects/food-delivery.png",
  },
  {
    title: "Agency AI",
    description:
      "A modern AI agency landing page with smooth animations, responsive layout and clean UI design built with latest web technologies.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/projects/responsive.png",
  },
  {
    title: "Todo App",
    description:
      "A clean and minimal task manager with add, delete and complete features. Focused on component structure and state management.",
    tech: ["React", "useState"],
    image: "/projects/todo-list.png",
  },
  {
    title: "Project Management App",
    description:
      "A project management tool to organize tasks efficiently. Features include adding and deleting tasks, each with a title and description for better clarity and tracking.",
    tech: ["React", "useState", "useEffect"],
    image: "/projects/project-management.png",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          text="Projects"
          para="A collection of projects I've built to sharpen my skills and bring ideas to life with clean code and modern tools."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm cursor-pointer"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* left image */}
                <div className="w-full md:w-2/5 h-48 md:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* right content */}
                <div className="flex-1 p-5 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
