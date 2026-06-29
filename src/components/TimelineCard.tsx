'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Building2, Calendar, MapPin } from 'lucide-react';

interface TimelineCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
}

export function TimelineCard({
  company,
  role,
  period,
  location,
  description,
  responsibilities,
  achievements,
  skills,
}: TimelineCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      <div className="absolute left-0 top-4 w-4 h-4 rounded-full bg-accent-500 border-4 border-white shadow-sm" />
      <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-gray-200 last:hidden" />

      <motion.div
        className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
              <Building2 size={14} />
              <span>{company}</span>
            </div>
            <h3 className="text-lg font-semibold text-navy-900 mb-1">{role}</h3>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {period}
              </span>
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {location}
              </span>
            </div>
            <p className="mt-3 text-gray-600 leading-relaxed">{description}</p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ChevronDown size={20} className="text-gray-400" />
          </motion.div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-navy-900 mb-3">工作职责</h4>
                  <ul className="space-y-2">
                    {responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-navy-900 mb-3">工作成果</h4>
                  <ul className="space-y-2">
                    {achievements.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-accent-600 font-medium">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-navy-900 mb-3">相关技能</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full hover:bg-accent-50 hover:text-accent-600 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}