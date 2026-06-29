'use client';

import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { education, certifications, awards } from '@/lib/data';

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent-600 bg-accent-50 rounded-full mb-6">
            教育背景
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900">
            学历与证书
          </h2>
        </motion.div>

        <div className="space-y-6 mb-16">
          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8"
            >
              <div className="absolute left-0 top-4 w-4 h-4 rounded-full bg-accent-500 border-4 border-white shadow-sm" />
              <div className={`absolute left-2 top-8 bottom-0 w-0.5 bg-gray-200 ${index === education.length - 1 ? 'hidden' : ''}`} />

              <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <GraduationCap size={14} />
                      <span>{item.institution}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-navy-900 mb-1">
                      {item.degree}
                    </h3>
                    <p className="text-sm text-accent-600 font-medium mb-2">
                      {item.major}
                    </p>
                    <p className="text-sm text-gray-500">{item.period}</p>
                    <p className="mt-3 text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center">
                <BookOpen size={16} className="text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900">专业证书</h3>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-navy-900 text-sm">{cert.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{cert.issuer} · {cert.date}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center">
                <Award size={16} className="text-accent-600" />
              </div>
              <h3 className="text-lg font-semibold text-navy-900">荣誉奖项</h3>
            </div>
            <div className="space-y-3">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-navy-900 text-sm">{award.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{award.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}