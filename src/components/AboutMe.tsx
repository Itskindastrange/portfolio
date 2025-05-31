'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutMe() {
  return (
    <div id="about" className="container mx-auto px-4 py-16">
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-white mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="relative w-full h-[400px] md:h-[500px]"
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
  <p className="text-base md:text-lg leading-relaxed">
    I’m a passionate learner and builder in the domain of <span className="text-blue-400 font-semibold">Artificial Intelligence, Machine Learning, and Data Science</span>, with a strong fascination for <span className="text-blue-400 font-semibold">robotics, autonomous systems, and AI on hardware</span>. I'm especially drawn to the intersection of intelligence and real-world interaction, where algorithms don’t just predict, but act.
  </p>
  <p className="text-base md:text-lg leading-relaxed">
    My curiosity drives me to explore how intelligent systems can perceive, decide, and move, whether through <span className="text-blue-400 font-semibold">self-driving technology, robotics, or edge AI applications</span>. I love diving deep into <span className="text-blue-400 font-semibold">deep learning, computer vision, and data-driven automation</span>, always striving to build systems that learn, adapt, and improve.
  </p>
  <p className="text-base md:text-lg leading-relaxed">
    Beyond tech, I find joy in <span className="text-blue-400 font-semibold">automobiles, aviation, connecting with like-minded people, and experimenting in the kitchen</span>. I’m a firm believer in lifelong learning and pushing boundaries, both technically and personally.
  </p>
</motion.div>

      </div>
    </div>
  );
} 