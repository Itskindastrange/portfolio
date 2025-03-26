import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Languages */}
          <motion.div
            className="bg-black/30 backdrop-blur-sm rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
            <ul className="space-y-2">
              {['Python', 'C/C++', 'SQL', 'JavaScript', 'HTML/CSS', 'Solidity', 'Golang', 'Assembly'].map((skill) => (
                <li key={skill} className="text-white/60">{skill}</li>
              ))}
            </ul>
          </motion.div>

          {/* Frameworks & Tools */}
          <motion.div
            className="bg-black/30 backdrop-blur-sm rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Frameworks & Tools</h3>
            <ul className="space-y-2">
              {['React', 'Node.js', 'Flask', 'Tensorflow', 'WordPress', 'Git', 'Docker', 'VS Code'].map((skill) => (
                <li key={skill} className="text-white/60">{skill}</li>
              ))}
            </ul>
          </motion.div>

          {/* Libraries */}
          <motion.div
            className="bg-black/30 backdrop-blur-sm rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Libraries</h3>
            <ul className="space-y-2">
              {['Pandas', 'NumPy', 'Matplotlib'].map((skill) => (
                <li key={skill} className="text-white/60">{skill}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 