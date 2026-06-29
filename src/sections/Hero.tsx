'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/Button';
import { personalInfo } from '@/lib/data';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-50/50 via-white to-white" />
      
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent-600 bg-accent-50 rounded-full">
            {personalInfo.title}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy-900 tracking-tight"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
        >
          {personalInfo.valueProposition}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button onClick={() => scrollToSection('#experience')}>
            查看实习经历
          </Button>
          <Button variant="outline" onClick={() => scrollToSection('#contact')}>
            <Download size={16} />
            下载简历
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer"
            onClick={() => scrollToSection('#about')}
          >
            <ArrowDown size={20} className="text-gray-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}