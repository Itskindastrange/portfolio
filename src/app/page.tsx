'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navigation from "@/components/Navigation";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";
import Typewriter from 'typewriter-effect';
import { Phone, Mail, Linkedin, Github } from 'lucide-react';
import MilestoneLabel from '@/components/MilestoneLabel';

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
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navigation />
      <SocialLinks />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white flex flex-col items-center">
              <span className="text-xl sm:text-2xl md:text-3xl text-white/80">Hi, I'm</span>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('Abdullah Ahmad')
                      .pauseFor(1000)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    loop: true,
                    autoStart: true,
                  }}
                />
              </div>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto px-4">
              A passionate Full Stack Developer crafting beautiful and functional web experiences
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors text-center"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-blue-600 hover:bg-blue-600/10 rounded-lg font-medium transition-colors text-center"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
} 