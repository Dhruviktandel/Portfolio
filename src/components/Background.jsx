import { motion } from "framer-motion";

const blobs = [
  {
    animate: {
      x: [0, 40, -20, 0],
      y: [0, -30, 20, 0],
      scale: [1, 1.1, 0.95, 1],
    },
    duration: 8,
    className: "top-[-100px] left-[-100px] w-[500px] h-[500px] bg-sky-500/20",
  },
  {
    animate: {
      x: [0, -40, 30, 0],
      y: [0, 40, -20, 0],
      scale: [1, 0.9, 1.1, 1],
    },
    duration: 10,
    delay: 2,
    className: "top-[200px] right-[-50px] w-[400px] h-[400px] bg-sky-400/15",
  },
  {
    animate: {
      x: [0, 30, -40, 0],
      y: [0, -20, 30, 0],
      scale: [1, 1.05, 0.9, 1],
    },
    duration: 12,
    delay: 4,
    className: "bottom-[-100px] left-[30%] w-[450px] h-[450px] bg-blue-600/20",
  },
];

const Background = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          animate={blob.animate}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: blob.delay || 0,
          }}
          className={`absolute rounded-full blur-[100px] ${blob.className}`}
        />
      ))}
    </div>
  );
};

export default Background;
