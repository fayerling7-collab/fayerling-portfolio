'use client';

import { motion } from 'framer-motion';
import { SkillTags } from '@/components/SkillTags';
import { skillCategories } from '@/lib/data';

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent-600 bg-accent-50 rounded-full mb-6">
            技能证书
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900">
            专业技能
          </h2>
          <p className="mt-4 text-gray-600">
            鼠标悬停标签查看交互效果
          </p>
        </motion.div>

        <SkillTags categories={skillCategories} />
      </div>
    </section>
  );
}