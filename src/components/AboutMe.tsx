'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <section id="about" className="min-h-screen bg-black/40 relative z-10 pt-16">
      <div className="container mx-auto px-4 py-16">
        <motion.h2 
          className="text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative h-[500px] w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-full rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm">
              <Image
                src="/profile.jpg"
                alt="Abdullah Ahmad"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </motion.div>
          <motion.div
            className="space-y-6 text-white/80"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed">
              I am a <span className="text-blue-400 font-semibold">Machine Learning and AI enthusiast</span> with a strong passion for <span className="text-blue-400 font-semibold">autonomous systems, self-driving technology, and deep learning</span>. My experience includes working on <span className="text-blue-400 font-semibold">computer vision, super-resolution, and automation projects</span>, such as <span className="text-blue-400 font-semibold">Urdu Text Restore</span>, where I fine-tune <span className="text-blue-400 font-semibold">GANs and CNN-based models</span> to enhance degraded Urdu text images.
            </p>
            <p className="text-lg leading-relaxed">
              I have also built <span className="text-blue-400 font-semibold">AI-driven automation tools</span>, including a <span className="text-blue-400 font-semibold">cold email generator</span> and a <span className="text-blue-400 font-semibold">static bug analysis system using LLMs</span>. With a keen interest in <span className="text-blue-400 font-semibold">research and academia</span>, I aim to pursue a <span className="text-blue-400 font-semibold">Career in AI/ML</span> while exploring <span className="text-blue-400 font-semibold">cutting-edge advancements in robotics and automation</span>.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond tech, I am passionate about <span className="text-blue-400 font-semibold">automobiles, aviation, networking, and cooking</span>.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 