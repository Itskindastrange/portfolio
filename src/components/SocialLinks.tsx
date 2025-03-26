'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/itskindastrange',
    color: 'hover:text-gray-300'
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/abdullah-ahmad-ab7b19229/',
    color: 'hover:text-blue-400'
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    url: 'https://www.instagram.com/theaahmd/',
    color: 'hover:text-pink-400'
  },
  {
    name: 'Email',
    icon: MdEmail,
    url: 'mailto:abdullahahmaddd789@gmail.com',
    color: 'hover:text-red-400'
  }
];

export default function SocialLinks() {
  return (
    <motion.div 
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`p-3 bg-black/30 backdrop-blur-sm rounded-full text-white/60 ${link.color} transition-all duration-300 hover:scale-110`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <link.icon className="w-6 h-6" />
        </motion.a>
      ))}
    </motion.div>
  );
} 