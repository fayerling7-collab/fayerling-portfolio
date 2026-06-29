'use client';

import { motion } from 'framer-motion';
import { Briefcase, Building2, Award, BookOpen } from 'lucide-react';
import { personalInfo } from '@/lib/data';

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent-600 bg-accent-50 rounded-full mb-6">
            关于我
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900">
            个人简介
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            {personalInfo.shortBio}
          </p>

          <p className="text-base text-accent-600 font-medium">
            {personalInfo.target}
          </p>

          <div className="grid sm:grid-cols-4 gap-4 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-accent-100 flex items-center justify-center">
                <Briefcase size={20} className="text-accent-600" />
              </div>
              <div className="text-2xl font-bold text-accent-600 mb-1">4</div>
              <div className="text-sm text-gray-600">实习经历</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-accent-100 flex items-center justify-center">
                <Building2 size={20} className="text-accent-600" />
              </div>
              <div className="text-2xl font-bold text-accent-600 mb-1">4</div>
              <div className="text-sm text-gray-600">实习单位</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-accent-100 flex items-center justify-center">
                <Award size={20} className="text-accent-600" />
              </div>
              <div className="text-2xl font-bold text-accent-600 mb-1">Top 10%</div>
              <div className="text-sm text-gray-600">专业排名</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="text-center p-6 bg-gray-50 rounded-xl"
            >
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-accent-100 flex items-center justify-center">
                <BookOpen size={20} className="text-accent-600" />
              </div>
              <div className="text-2xl font-bold text-accent-600 mb-1">2026</div>
              <div className="text-sm text-gray-600">届毕业生</div>
            </motion.div>
          </div>

          <div className="mt-10 p-6 bg-accent-50/50 rounded-xl border border-accent-100">
            <h3 className="text-lg font-semibold text-navy-900 mb-4">个人能力</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                <span>拥有互联网、外企、四大会计师事务所及财务共享中心实习经历，熟悉商业化财务、应收应付及供应商管理流程。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                <span>擅长Excel数据整理、核对与分析，能够快速完成多源数据整合、异常排查及月结支持。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                <span>具备流程梳理能力，可建立并持续优化SOP，提高工作规范性及协作效率。</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                <span>责任心强，学习能力强，具备良好的跨部门沟通及执行能力。</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}