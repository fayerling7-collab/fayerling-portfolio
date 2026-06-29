'use client';

import { motion } from 'framer-motion';
import { Award, Users, Star } from 'lucide-react';
import { projects } from '@/lib/data';

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent-600 bg-accent-50 rounded-full mb-6">
            项目经历
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900">
            社会实践
          </h2>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full bg-accent-100 flex items-center justify-center">
                      <Users size={20} className="text-accent-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900">
                        {project.name}
                      </h3>
                      <p className="text-sm text-accent-600 font-medium">
                        {project.role}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex sm:flex-col gap-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Award size={16} className="text-yellow-500" />
                    <span className="text-gray-600">上海市二等奖</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star size={16} className="text-yellow-500" />
                    <span className="text-gray-600">校级特等奖</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}