import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const contactInfo = [
  {
    icon: MdEmail,
    label: "Email",
    value: "dhruvik.tandel03@gmail.com",
    color: "#38bdf8",
  },
  {
    icon: MdPhone,
    label: "Phone",
    value: "+91 9510197557",
    color: "#34d399",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Dhruviktandel",
    color: "#ffffff",
  },
];

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex-1 flex flex-col md:max-w-md mx-10"
    >
      {/* heading */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">
          Let's Work Together
        </h3>
        <p className="text-white/60 text-sm leading-relaxed mb-6">
          Have a project in mind or just want to say hello? Feel free to reach
          out — I'm always open to new opportunities.
        </p>
      </div>

      {/* contact cards */}
      <div className="flex flex-col gap-4">
        {contactInfo.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white/5">
                <Icon size={20} color={item.color} />
              </div>
              <div>
                <p className="text-white/40 text-xs mb-1">{item.label}</p>
                <p className="text-white text-sm font-medium">{item.value}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ContactInfo;
