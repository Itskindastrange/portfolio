import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Text Restore */}
          <motion.div
            className="bg-black/30 backdrop-blur-sm rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white">Text Restore</h3>
              <a 
                href="https://github.com/itskindastrange/textrestore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/60 mb-4">A machine learning model that restores damaged or degraded text using deep learning techniques.</p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'TensorFlow', 'OpenCV', 'NumPy'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Bitcoin Price Prediction */}
          <motion.div
            className="bg-black/30 backdrop-blur-sm rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white">Bitcoin Price Prediction</h3>
              <a 
                href="https://github.com/Itskindastrange/Bitcoin-Price-Predection"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/60 mb-4">A deep learning model that predicts Bitcoin prices using historical data and market indicators.</p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'TensorFlow', 'Pandas', 'Scikit-learn'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cold Email Generator */}
          <motion.div
            className="bg-black/30 backdrop-blur-sm rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold text-white">Cold Email Generator</h3>
              <a 
                href="https://github.com/Itskindastrange/Cold-Email-Generator"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/60 mb-4">An AI-powered tool that generates personalized cold emails using LangChain and vector embeddings for better outreach effectiveness.</p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'LangChain', 'Vector Embeddings', 'Next.js'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 