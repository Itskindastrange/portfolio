import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="bg-black/30 backdrop-blur-sm rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <a 
                href="tel:+923114739994"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors w-full md:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                <span>+92 311 4739994</span>
              </a>
              <a 
                href="mailto:abdullahahmaddd789@gmail.com"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors w-full md:w-auto justify-center"
              >
                <Mail className="w-5 h-5" />
                <span>abdullahahmaddd789@gmail.com</span>
              </a>
            </div>
            <div className="flex justify-center gap-8 mt-8">
              <a 
                href="https://www.linkedin.com/in/abdullah-ahmad-ab7b19229/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="hidden md:inline">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/itskindastrange"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="hidden md:inline">GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 