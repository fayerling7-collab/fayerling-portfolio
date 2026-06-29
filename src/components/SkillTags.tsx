'use client';

import { motion } from 'framer-motion';
import { SkillCategory } from '@/types';

interface SkillTagsProps {
  categories: SkillCategory[];
}

export function SkillTags({ categories }: SkillTagsProps) {
  return (
    <div className="space-y-8">
      {categories.map((category) => (
        <motion.div
          key={category.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            {category.name}
          </h4>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.05, backgroundColor: '#eff6ff', color: '#2563eb' }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-700 rounded-lg transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}