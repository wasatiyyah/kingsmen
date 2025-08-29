'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, Database, Shield, Zap, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.',
      features: [
        'Web & Mobile Applications',
        'API Development & Integration',
        'Legacy System Modernization',
        'Scalable Architecture Design'
      ],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture & Migration',
      description: 'Expert cloud solutions that optimize performance, reduce costs, and ensure scalability for your business.',
      features: [
        'AWS, Azure & Google Cloud',
        'Microservices Architecture',
        'DevOps & CI/CD Pipelines',
        'Cost Optimization Strategies'
      ],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Database,
      title: 'Data Engineering & Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics and data engineering solutions.',
      features: [
        'Data Pipeline Development',
        'Business Intelligence Dashboards',
        'Machine Learning Integration',
        'Real-time Analytics'
      ],
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Protect your digital assets with enterprise-grade security solutions and compliance frameworks.',
      features: [
        'Security Audits & Assessments',
        'Compliance Implementation',
        'Threat Detection & Response',
        'Data Protection Strategies'
      ],
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Accelerate your digital journey with strategic consulting and technology implementation.',
      features: [
        'Digital Strategy Consulting',
        'Process Automation',
        'Technology Roadmapping',
        'Change Management'
      ],
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Users,
      title: 'Technical Consulting',
      description: 'Expert guidance on technology decisions, architecture reviews, and strategic planning.',
      features: [
        'Technology Assessment',
        'Architecture Reviews',
        'Performance Optimization',
        'Strategic Planning'
      ],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      iconColor: 'text-indigo-600'
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="section-padding bg-gray-50">
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
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
          >
            <Zap className="w-4 h-4 mr-2" />
            Our Services
          </motion.div>
          
          <h2 className="heading-2 text-gray-900 mb-6">
            Comprehensive Solutions for{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </h2>
          
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            From custom software development to cloud architecture, we provide end-to-end solutions 
            that drive innovation and accelerate your business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full p-8 hover:shadow-2xl">
                {/* Service Icon */}
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                {/* Service Title */}
                <h3 className="heading-4 text-gray-900 mb-4">{service.title}</h3>

                {/* Service Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant="outline"
                  size="sm"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                  className="w-full"
                >
                  Learn More
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="heading-3 mb-4">Ready to Transform Your Business?</h3>
            <p className="body-large mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss how our expertise can help you achieve your digital transformation goals 
              and drive measurable business outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-blue-600">
                View Case Studies
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
