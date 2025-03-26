'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import AboutMe from '@/components/AboutMe';
import MilestoneLabel from '@/components/MilestoneLabel';
import SocialLinks from '@/components/SocialLinks';
import Navigation from '@/components/Navigation';

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
  const { scrollY } = useScroll();

  // Enhanced parallax effects
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 0.8]);
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const aboutOpacity = useTransform(scrollY, [300, 600], [0, 1]);
  const aboutY = useTransform(scrollY, [300, 600], [50, 0]);
  const skillsOpacity = useTransform(scrollY, [800, 1100], [0, 1]);
  const skillsY = useTransform(scrollY, [800, 1100], [50, 0]);
  const projectsOpacity = useTransform(scrollY, [1300, 1600], [0, 1]);
  const projectsY = useTransform(scrollY, [1300, 1600], [50, 0]);
  const contactOpacity = useTransform(scrollY, [1800, 2100], [0, 1]);
  const contactY = useTransform(scrollY, [1800, 2100], [50, 0]);

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
      <motion.section 
        id="hero"
        style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        className="h-screen relative"
      >
        <div className="canvas-container">
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
        
        <div className="content-container">
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <h1 className="text-6xl font-bold text-white mb-4">Abdullah Ahmad</h1>
              <p className="text-2xl text-white/80 mb-8">Developer | Machine Learning & AI Enthusiast</p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
                <a href="tel:+923114739994" className="hover:text-white transition-colors">+92 311 4739994</a>
                <a href="mailto:abdullahahmaddd789@gmail.com" className="hover:text-white transition-colors">abdullahahmaddd789@gmail.com</a>
                
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Milestone Labels */}
      {milestones.map((milestone, index) => (
        <MilestoneLabel
          key={index}
          label={milestone.label}
          position={mousePosition}
          isVisible={hoveredMilestone === index}
        />
      ))}

      {/* About Me Section */}
      <motion.section 
        id="about"
        style={{ opacity: aboutOpacity, y: aboutY }}
        className="min-h-screen bg-black/30 relative z-10 pt-16"
      >
        <AboutMe />
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills"
        style={{ opacity: skillsOpacity, y: skillsY }}
        className="min-h-screen bg-black/50 relative z-10 pt-16"
      >
        <div className="container mx-auto px-4 py-16">
          <motion.h2 
            className="text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'C/C++', 'SQL', 'JavaScript', 'HTML/CSS', 'Solidity', 'Golang', 'Assembly'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Flask', 'Tensorflow', 'WordPress', 'Git', 'Docker', 'VS Code'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {['Pandas', 'NumPy', 'Matplotlib'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        style={{ opacity: projectsOpacity, y: projectsY }}
        className="min-h-screen bg-black/40 relative z-10 pt-16"
      >
        <div className="container mx-auto px-4 py-16">
          <motion.h2 
            className="text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 gap-8">
            {[
              {
                title: 'Text Restore',
                link: 'github.com/textrestore',
                tech: 'Python, React, Tensorflow, PyTorch, OpenCV',
                period: 'August 2024 – Present',
                description: [
                  'Developed a React-based website',
                  'Doing research and developing a super-resolution pipeline to enhance degraded Urdu text images',
                  'Created a custom dataset by collecting Urdu manuscripts and applying artificial degradation techniques',
                  'Training, Fine-tuning and comparison of state-of-the-art models (SRCNN, ESRGAN, Real-ESRGAN) with PSNR and SSIM metrics for evaluation'
                ]
              },
              {
                title: 'Bitcoin Price Prediction',
                link: 'github.com/BTCPrice',
                tech: 'Python, Pandas, Scikit-Learn',
                period: 'August 2024 – Present',
                description: [
                  'Preprocessed Bitcoin data using Pandas, focusing on handling missing values, scaling, and feature engineering for time-series analysis',
                  'Planned to develop models predicting daily high, daily low, weekly, and monthly prices for enhanced financial insights'
                ]
              },
              {
                title: 'Static Bug Analysis',
                link: 'github.com/BugAnalysis',
                tech: 'Python, PyTorch, BERT, Gemini API',
                period: 'Oct. 2024 – Dec. 2024',
                description: [
                  'Developed a static analysis tool utilizing a BERT-based model to detect vulnerabilities and assess danger levels in code snippets',
                  'Created a custom dataset comprising code snippets labeled with specific vulnerabilities and danger levels',
                  'Integrated the Gemini API to provide automated code fix suggestions'
                ]
              },
              {
                title: 'EcoSort',
                link: 'github.com/EcoSort',
                tech: 'Python, Tensorflow, Flask, React',
                period: 'March 2024 – May 2024',
                description: [
                  'Developed an image classification system to sort waste into categories for improved recycling',
                  'Built and trained a deep learning model using TensorFlow for accurate waste classification',
                  'Deployed a full-stack web application with a Flask backend and a React-based frontend'
                ]
              },
              {
                title: 'Secure Blockchain Voting System',
                link: 'github.com/voting',
                tech: 'Go (Golang)',
                period: 'Jan. 2024 – Jan. 2024',
                description: [
                  'Developed a blockchain-based voting system',
                  'Created core functionalities in Go for voter registration, vote casting, and election result calculation',
                  'Enabled easy usage by allowing users to run the main program to simulate the voting process'
                ]
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <a 
                    href={`https://${project.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    View Project →
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.split(', ').map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-white/60 text-sm mb-4">{project.period}</p>
                <ul className="list-disc list-inside space-y-2 text-white/80">
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        style={{ opacity: contactOpacity, y: contactY }}
        className="min-h-screen bg-black/60 relative z-10 pt-16"
      >
        <div className="container mx-auto px-4 py-16">
          <motion.h2 
            className="text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Contact
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <motion.div 
              className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-white/80 text-center text-lg">
                Contact form coming soon...
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
} 