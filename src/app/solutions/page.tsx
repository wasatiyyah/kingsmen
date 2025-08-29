'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, Heart, ShoppingCart, Banknote, Factory, 
  GraduationCap, Car, Plane, Hotel, Briefcase, ArrowRight,
  CheckCircle, Target, TrendingUp, Shield, Zap, Globe,
  Users, BarChart, Cpu, Database, Cloud, Lock
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const SolutionsPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('fintech');

  const industries = [
    {
      id: 'fintech',
      icon: Banknote,
      name: 'Financial Technology',
      description: 'Revolutionizing financial services with secure, scalable solutions',
      challenges: [
        'Regulatory compliance and security requirements',
        'High-frequency trading and real-time processing',
        'Legacy system modernization',
        'Fraud detection and prevention'
      ],
      solutions: [
        {
          title: 'Digital Payment Platforms',
          description: 'Secure, PCI-compliant payment processing systems with real-time fraud detection',
          features: ['Real-time transaction processing', 'Multi-currency support', 'Advanced fraud detection', 'Regulatory compliance']
        },
        {
          title: 'Trading & Investment Platforms',
          description: 'High-performance trading systems with algorithmic trading capabilities',
          features: ['Low-latency execution', 'Portfolio management', 'Risk analytics', 'Mobile trading apps']
        },
        {
          title: 'Blockchain & Cryptocurrency',
          description: 'Decentralized finance solutions and cryptocurrency exchange platforms',
          features: ['Smart contracts', 'Wallet integration', 'DeFi protocols', 'Compliance tools']
        }
      ],
      technologies: ['Python', 'Go', 'React', 'PostgreSQL', 'Redis', 'Blockchain', 'AWS', 'Kubernetes'],
      caseStudy: {
        client: 'PayStream Solutions',
        result: '5K+ monthly transactions with 35% cost reduction'
      }
    },
    {
      id: 'healthcare',
      icon: Heart,
      name: 'Healthcare & Life Sciences',
      description: 'Transforming patient care with innovative digital health solutions',
      challenges: [
        'Patient data privacy and HIPAA compliance',
        'Interoperability between healthcare systems',
        'Remote patient monitoring',
        'Clinical decision support'
      ],
      solutions: [
        {
          title: 'Electronic Health Records (EHR)',
          description: 'Comprehensive EHR systems with AI-powered clinical insights',
          features: ['Patient data management', 'Clinical workflows', 'Interoperability', 'Analytics dashboard']
        },
        {
          title: 'Telemedicine Platforms',
          description: 'Secure video consultation and remote patient monitoring systems',
          features: ['Video consultations', 'Remote monitoring', 'Prescription management', 'Patient portals']
        },
        {
          title: 'AI-Powered Diagnostics',
          description: 'Machine learning models for medical imaging and diagnostic support',
          features: ['Medical imaging analysis', 'Predictive analytics', 'Clinical decision support', 'Research tools']
        }
      ],
      technologies: ['Python', 'TensorFlow', 'React Native', 'Node.js', 'Azure', 'FHIR', 'IoT', 'MongoDB'],
      caseStudy: {
        client: 'CareConnect Clinic',
        result: '2.5K+ patients served with 25% reduced no-shows'
      }
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      name: 'E-Commerce & Retail',
      description: 'Building next-generation shopping experiences that drive conversions',
      challenges: [
        'Scalability during peak traffic periods',
        'Personalization at scale',
        'Omnichannel customer experience',
        'Inventory and supply chain optimization'
      ],
      solutions: [
        {
          title: 'Headless Commerce Platforms',
          description: 'Flexible, API-first commerce solutions for multi-channel selling',
          features: ['Headless architecture', 'API-first design', 'Mobile optimization', 'Third-party integrations']
        },
        {
          title: 'AI-Powered Personalization',
          description: 'Machine learning algorithms for personalized product recommendations',
          features: ['Recommendation engine', 'Dynamic pricing', 'Customer segmentation', 'A/B testing']
        },
        {
          title: 'Inventory Management Systems',
          description: 'Real-time inventory tracking and supply chain optimization',
          features: ['Real-time tracking', 'Demand forecasting', 'Supplier integration', 'Analytics dashboard']
        }
      ],
      technologies: ['Next.js', 'Node.js', 'GraphQL', 'PostgreSQL', 'Redis', 'AWS', 'Shopify', 'Stripe'],
      caseStudy: {
        client: 'Artisan Marketplace',
        result: '180% revenue growth with 28% conversion rate increase'
      }
    },
    {
      id: 'manufacturing',
      icon: Factory,
      name: 'Manufacturing & Industrial',
      description: 'Enabling smart manufacturing with IoT and predictive analytics',
      challenges: [
        'Equipment downtime and maintenance costs',
        'Quality control and compliance',
        'Supply chain visibility',
        'Energy efficiency and sustainability'
      ],
      solutions: [
        {
          title: 'Industrial IoT Platforms',
          description: 'Connected factory solutions with real-time monitoring and analytics',
          features: ['IoT sensor integration', 'Real-time monitoring', 'Predictive maintenance', 'Energy optimization']
        },
        {
          title: 'Quality Management Systems',
          description: 'Automated quality control with AI-powered defect detection',
          features: ['Automated inspection', 'Quality analytics', 'Compliance tracking', 'Supplier management']
        },
        {
          title: 'Supply Chain Optimization',
          description: 'End-to-end supply chain visibility and optimization platform',
          features: ['Supply chain tracking', 'Demand planning', 'Risk management', 'Logistics optimization']
        }
      ],
      technologies: ['Python', 'IoT Core', 'TensorFlow', 'Kubernetes', 'BigQuery', 'Angular', 'GCP', 'SAP'],
      caseStudy: {
        client: 'MidSize Manufacturing',
        result: '25% inventory reduction with $500K annual savings'
      }
    },
    {
      id: 'education',
      icon: GraduationCap,
      name: 'Education & EdTech',
      description: 'Empowering learning with personalized educational technology',
      challenges: [
        'Student engagement and retention',
        'Personalized learning pathways',
        'Remote and hybrid learning',
        'Assessment and progress tracking'
      ],
      solutions: [
        {
          title: 'Learning Management Systems',
          description: 'Comprehensive LMS with AI-powered adaptive learning',
          features: ['Course management', 'Student analytics', 'Mobile learning', 'Integration tools']
        },
        {
          title: 'Virtual Classrooms',
          description: 'Interactive online learning environments with collaboration tools',
          features: ['Video conferencing', 'Interactive whiteboards', 'Breakout rooms', 'Recording capabilities']
        },
        {
          title: 'Student Information Systems',
          description: 'Complete student lifecycle management and analytics platform',
          features: ['Student records', 'Grade management', 'Parent portals', 'Reporting tools']
        }
      ],
      technologies: ['React', 'Node.js', 'WebRTC', 'MongoDB', 'AWS', 'OpenAI', 'Zoom SDK', 'Canvas API'],
      caseStudy: {
        client: 'SkillBridge Academy',
        result: '3.5K+ active learners with 78% course completion'
      }
    },
    {
      id: 'logistics',
      icon: Car,
      name: 'Logistics & Transportation',
      description: 'Optimizing supply chains with intelligent logistics solutions',
      challenges: [
        'Route optimization and fuel efficiency',
        'Real-time tracking and visibility',
        'Fleet management and maintenance',
        'Last-mile delivery optimization'
      ],
      solutions: [
        {
          title: 'Fleet Management Systems',
          description: 'Comprehensive fleet tracking and optimization platform',
          features: ['GPS tracking', 'Route optimization', 'Maintenance scheduling', 'Driver management']
        },
        {
          title: 'Warehouse Management',
          description: 'Automated warehouse operations with robotics integration',
          features: ['Inventory tracking', 'Order fulfillment', 'Robotics integration', 'Analytics dashboard']
        },
        {
          title: 'Delivery Optimization',
          description: 'AI-powered last-mile delivery optimization and customer experience',
          features: ['Route planning', 'Real-time tracking', 'Customer notifications', 'Delivery analytics']
        }
      ],
      technologies: ['Python', 'React Native', 'PostgreSQL', 'Redis', 'AWS IoT', 'Machine Learning', 'Maps API', 'WebRTC'],
      caseStudy: {
        client: 'Regional Delivery Co.',
        result: '20% faster deliveries with 15% cost savings'
      }
    }
  ];

  const currentIndustry = industries.find(ind => ind.id === selectedIndustry) || industries[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 120, 240, 360] }}
            transition={{ duration: 30, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 240, 120, 0] }}
            transition={{ duration: 35, repeat: Infinity }}
          />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6"
            >
              <Target className="w-4 h-4 mr-2" />
              Industry Solutions
            </motion.div>

            <h1 className="heading-1 text-gray-900 mb-6">
              Tailored Solutions for{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Every Industry
              </span>
            </h1>
            
            <p className="body-large text-gray-600 mb-8">
              We understand that every industry has unique challenges. Our specialized solutions 
              are designed to address your specific needs and drive measurable business outcomes.
            </p>

            {/* Industry Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { value: '8+', label: 'Industries Served' },
                { value: '94%', label: 'Success Rate' },
                { value: '$15M+', label: 'Client Value Created' },
                { value: '12+', label: 'Industry Experts' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Selection */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Industry Navigation */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {industries.map((industry) => (
              <motion.button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`p-4 rounded-2xl text-center transition-all ${
                  selectedIndustry === industry.id
                    ? 'bg-gradient-to-br from-blue-600 to-green-600 text-white shadow-lg'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <industry.icon className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm font-medium">{industry.name.split(' ')[0]}</div>
                <div className="text-xs opacity-75">{industry.name.split(' ').slice(1).join(' ')}</div>
              </motion.button>
            ))}
          </div>

          {/* Selected Industry Details */}
          <motion.div
            key={selectedIndustry}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-3 gap-12"
          >
            {/* Industry Overview */}
            <div className="lg:col-span-1">
              <Card className="p-6 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mr-4">
                    <currentIndustry.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="heading-3 text-gray-900">{currentIndustry.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6">{currentIndustry.description}</p>

                {/* Key Challenges */}
                <h4 className="heading-5 text-gray-900 mb-4">Key Challenges</h4>
                <ul className="space-y-3 mb-6">
                  {currentIndustry.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-600">
                      <Shield className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      {challenge}
                    </li>
                  ))}
                </ul>

                {/* Case Study Highlight */}
                <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                    <span className="font-semibold text-gray-900">Success Story</span>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">{currentIndustry.caseStudy.client}</p>
                  <p className="text-xs text-gray-600">{currentIndustry.caseStudy.result}</p>
                </div>
              </Card>
            </div>

            {/* Solutions */}
            <div className="lg:col-span-2">
              <h3 className="heading-3 text-gray-900 mb-6">Our Solutions</h3>
              <div className="space-y-6">
                {currentIndustry.solutions.map((solution, index) => (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <h4 className="heading-4 text-gray-900 mb-3">{solution.title}</h4>
                      <p className="text-gray-600 mb-4">{solution.description}</p>
                      
                      <div className="grid md:grid-cols-2 gap-3">
                        {solution.features.map((feature) => (
                          <div key={feature} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mt-8">
                <h4 className="heading-4 text-gray-900 mb-4">Technologies We Use</h4>
                <div className="flex flex-wrap gap-2">
                  {currentIndustry.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-green-100 text-gray-700 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Button 
                  variant="primary" 
                  size="lg" 
                  icon={<ArrowRight className="w-5 h-5" />} 
                  iconPosition="right"
                >
                  Discuss Your {currentIndustry.name} Project
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-gray-900 mb-6">
              Why Choose Our{' '}
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Industry Expertise
              </span>
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We combine deep industry knowledge with cutting-edge technology to deliver solutions that truly understand your business
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Industry Veterans',
                description: 'Our team includes domain experts with decades of experience in each industry we serve'
              },
              {
                icon: Shield,
                title: 'Compliance First',
                description: 'We understand regulatory requirements and build compliance into every solution from day one'
              },
              {
                icon: Zap,
                title: 'Rapid Innovation',
                description: 'Stay ahead of industry trends with our cutting-edge technology and innovation approach'
              },
              {
                icon: Globe,
                title: 'Global Perspective',
                description: 'Local expertise with global best practices to ensure your solution works anywhere'
              },
              {
                icon: BarChart,
                title: 'Measurable Results',
                description: 'Data-driven approach with clear KPIs and ROI tracking for every project'
              },
              {
                icon: Lock,
                title: 'Enterprise Security',
                description: 'Bank-level security and data protection across all our industry solutions'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="heading-4 text-gray-900 mb-3">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-white mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="body-large text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how our industry-specific expertise can help you overcome challenges 
              and achieve unprecedented growth in your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg">
                Schedule Industry Consultation
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-blue-600">
                Download Industry Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;