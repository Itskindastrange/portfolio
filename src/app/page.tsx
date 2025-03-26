'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Navigation from "@/components/Navigation";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import SocialLinks from "@/components/SocialLinks";
import Typewriter from 'typewriter-effect';

// Dynamically import the Landscape component to avoid SSR issues
const Landscape = dynamic(() => import('@/components/Landscape'), { 
  ssr: false,
  loading: () => null
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
      {/* Three.js Canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 15, 30], fov: 60 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <Suspense fallback={null}>
            <Landscape />
          </Suspense>
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <SocialLinks />
        
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white flex flex-col items-center">
                <span className="text-xl sm:text-2xl md:text-3xl text-white/90">Hi, I'm</span>
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
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto px-4 font-medium">
                Developer | AI Enthusiast | Problem Solver
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-blue-600/80 hover:bg-blue-700 rounded-lg font-medium transition-colors text-center"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 border border-blue-400/50 hover:bg-blue-600/20 rounded-lg font-medium transition-colors text-center"
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
      </div>
    </main>
  );
} 