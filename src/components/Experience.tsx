'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      title: "Generative AI Intern",
      company: "Systems Limited",
      location: "Lahore, Pakistan",
      period: "April 2025 – Present",
      responsibilities: [
        "Contributed to the development of an AI-powered developer productivity tool using LLMs",
        "Implemented intelligent code completions and real-time bug detection and analysis using LLMs",
        "Designed automated code fixing pipelines to improve development efficiency and reduce human error",
        "Collaborated with frontend and UX teams to deliver an interactive system that explains and visualizes AI-generated suggestions"
      ]
    },
    {
      title: "Tech Intern",
      company: "Bright Network UK",
      location: "Remote",
      period: "July 2023 – August 2023",
      responsibilities: [
        "Worked in a global team setting, analyzing solutions to achieve Net Zero Emissions",
        "Researched clean technology trends and delivered a proposal for sustainability-focused innovation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-black/30 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.title}</h3>
                  <span className="text-blue-400 font-semibold">{exp.company}</span>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <p className="text-white/80">{exp.period}</p>
                  <p className="text-white/60">{exp.location}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.responsibilities.map((resp, idx) => (
                  <motion.li
                    key={idx}
                    className="text-white/80 flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * idx }}
                    viewport={{ once: true }}
                  >
                    <span className="text-blue-400 mr-2">•</span>
                    {resp}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
