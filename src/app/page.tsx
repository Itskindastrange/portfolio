'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import AboutMe from '@/components/AboutMe';
import MilestoneLabel from '@/components/MilestoneLabel';
import SocialLinks from '@/components/SocialLinks';
import Navigation from '@/components/Navigation';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';

// Define professional milestones
const milestones = [
  { x: -20, y: -20, height: 3, label: 'First Job' },
  { x: 20, y: -15, height: 4, label: 'Major Project' },
  { x: -15, y: 20, height: 5, label: 'Career Growth' },
  { x: 15, y: 15, height: 6, label: 'Current Role' },
];

// Dynamically import the Landscape component to avoid SSR issues
const Landscape = dynamic(() => import('@/components/Landscape'), { 
  ssr: false,
  loading: () => (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4a90e2" />
    </mesh>
  )
});

export default function Home() {
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <main className="relative w-full" onMouseMove={handleMouseMove}>
      <Navigation />
      <SocialLinks />
      
      {/* Hero Section with 3D Landscape */}
      <section id="hero" className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 5, 10], fov: 75 }}>
            <Suspense fallback={
              <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="#4a90e2" />
              </mesh>
            }>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <Landscape />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Abdullah Ahmad
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-white/80 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Developer | Machine Learning & AI Enthusiast
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a href="tel:+923114739994" className="text-white/60 hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
            </a>
            <a href="mailto:abdullahahmaddd789@gmail.com" className="text-white/60 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/abdullah-ahmad-ab7b19229/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/itskindastrange" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Milestone Labels */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {milestones.map((milestone, index) => (
          <MilestoneLabel
            key={index}
            label={milestone.label}
            position={mousePosition}
            isVisible={hoveredMilestone === index}
          />
        ))}
      </div>

      {/* About Me Section */}
      <section id="about" className="min-h-screen bg-black/30 relative z-10 pt-16">
        <AboutMe />
      </section>

      {/* Skills Section */}
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

      {/* Projects Section */}
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
                  href="https://github.com/itskindastrange/btcprice"
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

            {/* Static Bug Analysis */}
            <motion.div
              className="bg-black/30 backdrop-blur-sm rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">Static Bug Analysis</h3>
                <a 
                  href="https://github.com/itskindastrange/buganalysis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p className="text-white/60 mb-4">A tool for analyzing code and detecting potential bugs using static analysis techniques.</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'AST', 'Pylint', 'Flask'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* EcoSort */}
            <motion.div
              className="bg-black/30 backdrop-blur-sm rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">EcoSort</h3>
                <a 
                  href="https://github.com/itskindastrange/ecosort"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p className="text-white/60 mb-4">An AI-powered waste sorting system that helps users properly categorize and dispose of waste.</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'TensorFlow', 'OpenCV', 'React'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Secure Blockchain Voting System */}
            <motion.div
              className="bg-black/30 backdrop-blur-sm rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-white">Secure Blockchain Voting System</h3>
                <a 
                  href="https://github.com/itskindastrange/voting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
              <p className="text-white/60 mb-4">A decentralized voting platform built on blockchain technology for secure and transparent elections.</p>
              <div className="flex flex-wrap gap-2">
                {['Solidity', 'Web3.js', 'React', 'Node.js'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
    </main>
  );
} 