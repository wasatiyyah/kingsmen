'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap } from 'lucide-react';

const TechStackSection: React.FC = () => {
  const techCategories = [
    {
      title: 'Cloud Platforms',
      technologies: [
        { name: 'AWS', logo: '☁️', color: 'from-orange-400 to-orange-600' },
        { name: 'Azure', logo: '☁️', color: 'from-blue-400 to-blue-600' },
        { name: 'Google Cloud', logo: '☁️', color: 'from-blue-400 to-green-400' },
        { name: 'DigitalOcean', logo: '🌊', color: 'from-blue-500 to-blue-700' }
      ]
    },
    {
      title: 'Frontend',
      technologies: [
        { name: 'React', logo: '⚛️', color: 'from-cyan-400 to-cyan-600' },
        { name: 'Vue.js', logo: '💚', color: 'from-green-400 to-green-600' },
        { name: 'Angular', logo: '🔺', color: 'from-red-500 to-red-700' },
        { name: 'Next.js', logo: '▲', color: 'from-gray-700 to-gray-900' }
      ]
    },
    {
      title: 'Backend',
      technologies: [
        { name: 'Node.js', logo: '🟢', color: 'from-green-500 to-green-700' },
        { name: 'Python', logo: '🐍', color: 'from-blue-400 to-yellow-400' },
        { name: 'Java', logo: '☕', color: 'from-red-500 to-blue-500' },
        { name: 'Go', logo: '🐹', color: 'from-cyan-400 to-cyan-600' }
      ]
    },
    {
      title: 'Databases',
      technologies: [
        { name: 'PostgreSQL', logo: '🐘', color: 'from-blue-500 to-blue-700' },
        { name: 'MongoDB', logo: '🍃', color: 'from-green-400 to-green-600' },
        { name: 'Redis', logo: '🔴', color: 'from-red-500 to-red-700' },
        { name: 'MySQL', logo: '🐬', color: 'from-blue-400 to-orange-400' }
      ]
    },
    {
      title: 'DevOps & Tools',
      technologies: [
        { name: 'Docker', logo: '🐳', color: 'from-blue-400 to-blue-600' },
        { name: 'Kubernetes', logo: '☸️', color: 'from-blue-500 to-blue-700' },
        { name: 'Jenkins', logo: '🎩', color: 'from-gray-600 to-red-500' },
        { name: 'Terraform', logo: '🏗️', color: 'from-purple-500 to-purple-700' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      technologies: [
        { name: 'TensorFlow', logo: '🧠', color: 'from-orange-400 to-orange-600' },
        { name: 'PyTorch', logo: '🔥', color: 'from-red-400 to-orange-400' },
        { name: 'OpenAI', logo: '🤖', color: 'from-green-400 to-blue-400' },
        { name: 'Scikit-learn', logo: '📊', color: 'from-blue-400 to-orange-400' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="tech-stack" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6"
          >
            <Cpu className="w-4 h-4 mr-2" />
            Technology Stack
          </motion.div>
          
          <h2 className="heading-2 text-gray-900 mb-6">
            Powered by{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Industry-Leading
            </span>{' '}
            Technologies
          </h2>
          
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            We leverage the most advanced and reliable technologies to build scalable, 
            secure, and innovative solutions for your business
          </p>
        </motion.div>

        {/* Technology Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="text-center"
            >
              <h3 className="heading-5 text-gray-700 mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + techIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="group cursor-pointer"
                  >
                    <div className="relative">
                      <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${tech.color} rounded-2xl shadow-lg flex items-center justify-center transform transition-all duration-300 group-hover:shadow-2xl`}>
                        <span className="text-4xl filter drop-shadow-md">{tech.logo}</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <p className="mt-3 text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                      {tech.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-white/80">Technologies Mastered</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/80">Cloud Native</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">DevOps Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-white/80">Uptime Guarantee</div>
            </div>
          </div>
        </motion.div>

        {/* Partnership Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-600 mb-6">Official Partners & Certifications</p>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { name: 'AWS Advanced Partner', badge: '🏆' },
              { name: 'Google Cloud Partner', badge: '🎖️' },
              { name: 'Microsoft Gold Partner', badge: '🥇' },
              { name: 'ISO 27001 Certified', badge: '✅' },
              { name: 'SOC 2 Compliant', badge: '🔒' }
            ].map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-full"
              >
                <span className="text-2xl">{partner.badge}</span>
                <span className="text-sm font-medium text-gray-700">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;