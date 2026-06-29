'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Download } from 'lucide-react';
import { Button } from '@/components/Button';
import { contactInfo } from '@/lib/data';

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 text-sm font-medium text-accent-600 bg-accent-50 rounded-full mb-6">
            联系方式
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900">
            联系我
          </h2>
          <p className="mt-4 text-gray-600">
            欢迎随时联系，期待与您沟通
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
          <motion.a
            href={`mailto:${contactInfo.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-accent-50 hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center mb-4">
              <Mail size={24} className="text-accent-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">邮箱</span>
            <span className="text-xs text-gray-500 mt-1">{contactInfo.email}</span>
          </motion.a>

          <motion.a
            href={`tel:${contactInfo.phone}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-accent-50 hover:shadow-md transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-accent-100 flex items-center justify-center mb-4">
              <Phone size={24} className="text-accent-600" />
            </div>
            <span className="text-sm font-medium text-gray-900">电话</span>
            <span className="text-xs text-gray-500 mt-1">{contactInfo.phone}</span>
          </motion.a>
        </div>

        <motion.div
          id="resume"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="primary">
            <Download size={16} />
            下载简历 PDF
          </Button>
        </motion.div>
      </div>
    </section>
  );
}