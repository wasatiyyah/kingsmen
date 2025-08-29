'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, Filter, ArrowRight, Clock, Users, TrendingUp,
  Globe, Shield, Database, Cloud, Smartphone, Monitor,
  CheckCircle, Star, BarChart, Zap, Code, Server
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'fintech', label: 'FinTech' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'saas', label: 'SaaS' },
    { id: 'startup', label: 'Startups' }
  ];

  const caseStudies = [
    {
      id: 1,
      category: 'fintech',
      client: 'PayStream Solutions',
      title: 'Modernizing Small Business Payment Processing',
      description: 'Built a secure payment processing system handling 5,000+ transactions monthly for local businesses',
      challenge: 'PayStream needed to replace their outdated payment system that was causing transaction delays and customer complaints, while ensuring PCI DSS compliance.',
      solution: 'We developed a modern web application with secure payment processing, automated reconciliation, and real-time transaction monitoring using AWS and Stripe integration.',
      image: '/case-studies/paystream.jpg',
      logo: '/logos/paystream.png',
      duration: '4 months',
      team: '3 developers',
      technologies: ['AWS', 'React', 'Node.js', 'PostgreSQL', 'Stripe API', 'Redis'],
      results: [
        { metric: '99.8%', label: 'Uptime Achieved' },
        { metric: '2s', label: 'Transaction Time' },
        { metric: '35%', label: 'Processing Cost Reduction' },
        { metric: '5K+', label: 'Monthly Transactions' }
      ],
      testimonial: {
        quote: 'Kingsmen delivered exactly what we needed. Our payment processing is now reliable, fast, and our customers are much happier.',
        author: 'Sarah Chen',
        role: 'CEO, PayStream Solutions'
      }
    },
    {
      id: 2,
      category: 'healthcare',
      client: 'CareConnect Clinic',
      title: 'Patient Management System for Growing Practice',
      description: 'Developed a comprehensive patient management system serving 2,500+ patients with appointment scheduling',
      challenge: 'CareConnect needed to digitize their paper-based patient records and streamline appointment scheduling as their practice grew from 1 to 3 locations.',
      solution: 'We built a HIPAA-compliant patient management system with online appointment booking, electronic health records, and automated appointment reminders.',
      image: '/case-studies/careconnect.jpg',
      logo: '/logos/careconnect.png',
      duration: '6 months',
      team: '4 developers',
      technologies: ['Azure', 'React', 'Node.js', 'MongoDB', 'Twilio', 'FHIR'],
      results: [
        { metric: '2.5K+', label: 'Active Patients' },
        { metric: '25%', label: 'Reduced No-Shows' },
        { metric: '90%', label: 'Patient Satisfaction' },
        { metric: '20%', label: 'Administrative Time Saved' }
      ],
      testimonial: {
        quote: 'The system has streamlined our operations significantly. We can now focus more on patient care rather than administrative tasks.',
        author: 'Dr. Michael Roberts',
        role: 'Medical Director, CareConnect Clinic'
      }
    },
    {
      id: 3,
      category: 'ecommerce',
      client: 'Artisan Marketplace',
      title: 'E-Commerce Platform for Local Artisans',
      description: 'Built a custom e-commerce platform growing from startup to $2M annual revenue with 500+ vendors',
      challenge: 'Artisan Marketplace needed a platform to connect local artisans with customers, handling vendor management, payments, and order fulfillment.',
      solution: 'We developed a multi-vendor e-commerce platform with vendor dashboards, automated commission tracking, and integrated shipping solutions.',
      image: '/case-studies/artisan.jpg',
      logo: '/logos/artisan.png',
      duration: '5 months',
      team: '4 developers',
      technologies: ['React', 'Node.js', 'Shopify API', 'Stripe Connect', 'AWS S3', 'SendGrid'],
      results: [
        { metric: '180%', label: 'Revenue Growth' },
        { metric: '3.2s', label: 'Page Load Time' },
        { metric: '28%', label: 'Conversion Rate Increase' },
        { metric: '50K+', label: 'Monthly Visitors' }
      ],
      testimonial: {
        quote: 'The platform exceeded our expectations. Our artisans can now focus on creating while we handle the technology seamlessly.',
        author: 'Jennifer Martinez',
        role: 'Founder, Artisan Marketplace'
      }
    },
    {
      id: 4,
      category: 'enterprise',
      client: 'MidSize Manufacturing',
      title: 'Inventory Management System Overhaul',
      description: 'Modernized inventory management for a 200-employee manufacturing company across 3 facilities',
      challenge: 'MidSize Manufacturing was using spreadsheets and paper forms to track inventory across multiple locations, leading to stock-outs and overordering.',
      solution: 'We built a cloud-based inventory management system with real-time tracking, automated reorder points, and mobile barcode scanning capabilities.',
      image: '/case-studies/midsize.jpg',
      logo: '/logos/midsize.png',
      duration: '7 months',
      team: '5 developers',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS', 'Barcode API', 'QuickBooks API'],
      results: [
        { metric: '25%', label: 'Inventory Reduction' },
        { metric: '$500K', label: 'Annual Savings' },
        { metric: '3', label: 'Facilities Connected' },
        { metric: '60%', label: 'Faster Stock Takes' }
      ],
      testimonial: {
        quote: 'We finally have real visibility into our inventory. The system has eliminated our stock-out issues and reduced waste significantly.',
        author: 'Robert Johnson',
        role: 'Operations Manager, MidSize Manufacturing'
      }
    },
    {
      id: 5,
      category: 'saas',
      client: 'TaskFlow',
      title: 'Project Management SaaS for Small Teams',
      description: 'Built a project management platform serving 150+ small businesses with team collaboration features',
      challenge: 'TaskFlow needed to create a simple yet powerful project management tool that small businesses could afford and easily adopt without complex training.',
      solution: 'We developed an intuitive SaaS platform with project tracking, team collaboration, time tracking, and client reporting features with a freemium pricing model.',
      image: '/case-studies/taskflow.jpg',
      logo: '/logos/taskflow.png',
      duration: '6 months',
      team: '4 developers',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'WebSocket', 'AWS'],
      results: [
        { metric: '150+', label: 'Business Clients' },
        { metric: '25%', label: 'Productivity Increase' },
        { metric: '$300K', label: 'Annual Revenue' },
        { metric: '99.2%', label: 'Platform Uptime' }
      ],
      testimonial: {
        quote: 'TaskFlow has become essential for managing our projects. It\'s simple enough for our team to use but powerful enough to handle our growing needs.',
        author: 'Alex Thompson',
        role: 'CEO, Design Studio Pro'
      }
    },
    {
      id: 6,
      category: 'startup',
      client: 'SkillBridge Academy',
      title: 'Online Learning Platform for Professionals',
      description: 'Helped EdTech startup scale from idea to 3,500+ active learners and break-even in 8 months',
      challenge: 'SkillBridge needed to build a professional learning platform quickly, validate the market, and achieve sustainable growth with limited funding.',
      solution: 'We built a lean MVP with video courses, progress tracking, certificates, and payment processing, then iteratively added features based on user feedback.',
      image: '/case-studies/skillbridge.jpg',
      logo: '/logos/skillbridge.png',
      duration: '4 months',
      team: '3 developers',
      technologies: ['Next.js', 'Node.js', 'MongoDB', 'Vimeo API', 'Stripe', 'AWS S3'],
      results: [
        { metric: '3.5K+', label: 'Active Learners' },
        { metric: '4.6/5', label: 'User Rating' },
        { metric: 'Break-even', label: 'in 8 months' },
        { metric: '78%', label: 'Course Completion' }
      ],
      testimonial: {
        quote: 'Kingsmen helped us validate our idea quickly and build a platform our users love. We\'re now profitable and growing steadily.',
        author: 'Maria Rodriguez',
        role: 'Founder, SkillBridge Academy'
      }
    },
    {
      id: 7,
      category: 'fintech',
      client: 'LocalCredit Union',
      title: 'Digital Banking Platform Modernization',
      description: 'Modernized online banking system for a community credit union serving 12,000+ members',
      challenge: 'LocalCredit Union\'s legacy banking system was outdated, slow, and couldn\'t support modern features like mobile deposits and real-time notifications.',
      solution: 'We built a secure, modern banking platform with mobile deposit capture, real-time notifications, budgeting tools, and seamless bill pay integration.',
      image: '/case-studies/localcredit.jpg',
      logo: '/logos/localcredit.png',
      duration: '8 months',
      team: '6 developers',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis', 'Plaid API', 'AWS'],
      results: [
        { metric: '12K+', label: 'Active Members' },
        { metric: '85%', label: 'Mobile Adoption' },
        { metric: '50%', label: 'Support Call Reduction' },
        { metric: '4.7/5', label: 'App Store Rating' }
      ],
      testimonial: {
        quote: 'Our members love the new platform. It\'s modern, secure, and has all the features they expect from digital banking.',
        author: 'David Kim',
        role: 'IT Director, LocalCredit Union'
      }
    },
    {
      id: 8,
      category: 'healthcare',
      client: 'Wellness Tracker Pro',
      title: 'Corporate Wellness Platform',
      description: 'Built a wellness tracking platform for mid-sized companies to improve employee health outcomes',
      challenge: 'Companies needed a way to track and incentivize employee wellness programs while maintaining privacy and HIPAA compliance.',
      solution: 'We created a privacy-first wellness platform with activity tracking, health challenges, progress dashboards, and integration with popular fitness devices.',
      image: '/case-studies/wellness.jpg',
      logo: '/logos/wellness.png',
      duration: '5 months',
      team: '4 developers',
      technologies: ['React', 'Node.js', 'MongoDB', 'Fitbit API', 'Apple Health', 'AWS'],
      results: [
        { metric: '25', label: 'Corporate Clients' },
        { metric: '8K+', label: 'Active Users' },
        { metric: '30%', label: 'Engagement Increase' },
        { metric: '15%', label: 'Healthcare Cost Reduction' }
      ],
      testimonial: {
        quote: 'The platform has significantly improved our employee wellness program participation and outcomes. It\'s easy to use and respects privacy.',
        author: 'Dr. Emily Watson',
        role: 'Chief Wellness Officer, TechStart Inc'
      }
    }
  ];

  const filteredCaseStudies = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-10 left-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
            animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
            animate={{ scale: [1.3, 1, 1.3], x: [0, -50, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
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
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6"
            >
              <Award className="w-4 h-4 mr-2" />
              Success Stories
            </motion.div>

            <h1 className="heading-1 text-gray-900 mb-6">
              Transforming Vision into <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Reality</span>
            </h1>
            
            <p className="body-large text-gray-600 mb-8">
              Explore how we've helped businesses across industries achieve extraordinary results 
              through innovative technology solutions and strategic partnerships.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {[
                { value: '85+', label: 'Projects Delivered' },
                { value: '94%', label: 'Client Retention' },
                { value: '$15M+', label: 'Client Value Created' },
                { value: '12+', label: 'Industry Recognitions' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
                {category.id === 'all' && (
                  <span className="ml-2 text-xs opacity-80">
                    ({caseStudies.length})
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden hover:shadow-2xl transition-shadow">
                  {/* Image/Visual Section */}
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-3">
                          {study.category === 'fintech' && <BarChart className="w-10 h-10 text-blue-600" />}
                          {study.category === 'healthcare' && <Shield className="w-10 h-10 text-green-600" />}
                          {study.category === 'ecommerce' && <Globe className="w-10 h-10 text-purple-600" />}
                          {study.category === 'enterprise' && <Server className="w-10 h-10 text-gray-600" />}
                          {study.category === 'saas' && <Cloud className="w-10 h-10 text-blue-600" />}
                          {study.category === 'startup' && <Zap className="w-10 h-10 text-yellow-600" />}
                        </div>
                        <div className="text-2xl font-bold text-gray-800">{study.client}</div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-medium text-gray-700 capitalize">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="heading-4 text-gray-900 mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      {study.results.slice(0, 4).map((result) => (
                        <div key={result.label} className="text-center p-3 bg-gray-50 rounded-lg">
                          <div className="text-xl font-bold text-blue-600">{result.metric}</div>
                          <div className="text-xs text-gray-600">{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                          +{study.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.team}
                      </div>
                    </div>

                    {/* Testimonial Preview */}
                    <div className="border-t pt-4">
                      <div className="flex items-start">
                        <Star className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm italic text-gray-600 line-clamp-2">
                            "{study.testimonial.quote}"
                          </p>
                          <p className="text-xs text-gray-500 mt-2">
                            — {study.testimonial.author}, {study.testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full mt-4"
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      View Full Case Study
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-white mb-6">
              Ready to Be Our Next Success Story?
            </h2>
            <p className="body-large text-white/90 max-w-3xl mx-auto mb-8">
              Join hundreds of companies that have transformed their business with our solutions. 
              Let's discuss how we can help you achieve extraordinary results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg">
                Start Your Project
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-blue-600">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;