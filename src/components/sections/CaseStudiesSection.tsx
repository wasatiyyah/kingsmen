'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const CaseStudiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'software', name: 'Software Development' },
    { id: 'cloud', name: 'Cloud Architecture' },
    { id: 'digital', name: 'Digital Transformation' },
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform Modernization',
      category: 'software',
      client: 'TechRetail Inc.',
      industry: 'E-Commerce',
      description: 'Complete modernization of legacy e-commerce platform with microservices architecture, resulting in significant performance improvements and enhanced reliability.',
      results: [
        '60% performance improvement',
        '99.5% uptime achieved',
        '35% reduction in infrastructure costs',
        '25K+ monthly active users'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB', 'Redis'],
      duration: '6 months',
      team: '4 developers',
      image: '/api/placeholder/400/300',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Migration & DevOps Transformation',
      category: 'cloud',
      client: 'FinTech Solutions',
      industry: 'Financial Services',
      description: 'Migrated monolithic application to cloud-native architecture with automated CI/CD pipelines and comprehensive monitoring.',
      results: [
        '50% faster deployment cycles',
        '40% reduction in operational costs',
        'Zero-downtime deployments',
        '24/7 automated monitoring'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Prometheus'],
      duration: '4 months',
      team: '3 engineers',
      image: '/api/placeholder/400/300',
      featured: true
    },
    {
      id: 3,
      title: 'Analytics Dashboard Development',
      category: 'digital',
      client: 'DataCorp Analytics',
      industry: 'Data Analytics',
      description: 'Built intelligent analytics platform with data visualization capabilities for real-time business insights and reporting.',
      results: [
        'Real-time data processing',
        '85% reporting accuracy',
        '30% faster decision making',
        '$150K+ cost savings annually'
      ],
      technologies: ['Python', 'React', 'PostgreSQL', 'Redis', 'Chart.js'],
      duration: '5 months',
      team: '4 specialists',
      image: '/api/placeholder/400/300',
      featured: false
    },
    {
      id: 4,
      title: 'Healthcare Management System',
      category: 'software',
      client: 'MediCare Plus',
      industry: 'Healthcare',
      description: 'Comprehensive healthcare management system with patient portals, appointment scheduling, and secure data management.',
      results: [
        'HIPAA compliant architecture',
        '30% reduction in administrative overhead',
        'Improved patient satisfaction',
        'Secure data encryption'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'HIPAA'],
      duration: '7 months',
      team: '5 developers',
      image: '/api/placeholder/400/300',
      featured: false
    },
    {
      id: 5,
      title: 'IoT Monitoring Platform',
      category: 'digital',
      client: 'SmartManufacturing',
      industry: 'Manufacturing',
      description: 'IoT platform for smart manufacturing with real-time monitoring, maintenance alerts, and quality tracking.',
      results: [
        '20% reduction in downtime',
        'Predictive maintenance alerts',
        'Real-time quality monitoring',
        '$75K annual savings'
      ],
      technologies: ['IoT', 'Python', 'React', 'MongoDB', 'AWS IoT'],
      duration: '6 months',
      team: '4 engineers',
      image: '/api/placeholder/400/300',
      featured: false
    },
    {
      id: 6,
      title: 'Multi-Cloud Strategy Implementation',
      category: 'cloud',
      client: 'GlobalTech Corp',
      industry: 'Technology',
      description: 'Implemented multi-cloud strategy across AWS and Azure for optimal performance and cost efficiency.',
      results: [
        '25% cost optimization',
        'Enhanced disaster recovery',
        'Improved performance',
        'Reduced vendor lock-in'
      ],
      technologies: ['AWS', 'Azure', 'Terraform', 'Docker'],
      duration: '4 months',
      team: '3 architects',
      image: '/api/placeholder/400/300',
      featured: false
    }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <section id="case-studies" className="section-padding bg-white">
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
            className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6"
          >
            <Star className="w-4 h-4 mr-2 fill-current" />
            Success Stories
          </motion.div>
          
          <h2 className="heading-2 text-gray-900 mb-6">
            Transforming Businesses Through{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>
          
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped organizations across industries achieve remarkable results 
            through cutting-edge technology solutions and strategic implementation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Featured Case Study */}
        <AnimatePresence>
          {filteredCaseStudies.filter(study => study.featured).map((study) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Image */}
                  <div className="relative h-64 lg:h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-xl lg:rounded-l-xl lg:rounded-t-none">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                        Featured Project
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-4xl font-bold mb-2">{study.client}</div>
                        <div className="text-lg opacity-90">{study.industry}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="heading-3 text-gray-900 mb-4">{study.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{study.description}</p>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Results:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {study.results.map((result, index) => (
                          <div key={index} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies & Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          Duration: {study.duration}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Users className="w-4 h-4 mr-2" />
                          Team: {study.team}
                        </div>
                      </div>
                    </div>

                    <Button variant="primary" icon={<ExternalLink className="w-4 h-4" />} iconPosition="right">
                      View Full Case Study
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Case Studies Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredCaseStudies.filter(study => !study.featured).map((study) => (
              <motion.div
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-xl font-bold">{study.client}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="heading-4 text-gray-900 mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                      {study.description}
                    </p>

                    {/* Quick Results */}
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Key Results:
                      </div>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className="flex items-center text-xs text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {study.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {tech}
                          </span>
                        ))}
                        {study.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            +{study.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <Button variant="outline" size="sm" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right" className="w-full">
                      Learn More
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="heading-3 mb-4">Ready to Start Your Success Story?</h3>
            <p className="body-large mb-8 opacity-90 max-w-2xl mx-auto">
              Join the hundreds of companies that have transformed their business with our expertise. 
              Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-gray-900">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
