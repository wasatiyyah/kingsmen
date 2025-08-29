'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, FileText, Video, Headphones, Calendar,
  ArrowRight, Clock, User, Tag, Search, Filter,
  Download, Share, Eye, TrendingUp, Star, Award
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources', count: 45 },
    { id: 'blog', label: 'Blog Posts', count: 18 },
    { id: 'whitepaper', label: 'Whitepapers', count: 8 },
    { id: 'case-study', label: 'Case Studies', count: 12 },
    { id: 'video', label: 'Videos', count: 5 },
    { id: 'webinar', label: 'Webinars', count: 2 }
  ];

  const featuredResources = [
    {
      id: 1,
      type: 'whitepaper',
      title: 'The Ultimate Guide to Cloud Migration in 2024',
      description: 'Comprehensive 40-page guide covering cloud migration strategies, best practices, and common pitfalls to avoid.',
      author: 'Sarah Chen, CTO',
      readTime: '25 min read',
      publishDate: '2024-01-15',
      downloads: 2450,
      featured: true,
      image: '/resources/cloud-migration-guide.jpg',
      tags: ['Cloud', 'Migration', 'AWS', 'Strategy']
    },
    {
      id: 2,
      type: 'blog',
      title: 'Microservices vs Monoliths: Making the Right Choice',
      description: 'Deep dive into architectural patterns and when to choose microservices over monolithic architecture.',
      author: 'Michael Kingston, CEO',
      readTime: '8 min read',
      publishDate: '2024-01-10',
      views: 15420,
      image: '/resources/microservices-blog.jpg',
      tags: ['Architecture', 'Microservices', 'Development']
    },
    {
      id: 3,
      type: 'case-study',
      title: 'How GlobalPay Scaled to 10M Daily Transactions',
      description: 'Detailed case study of our fintech client\'s journey from startup to processing millions of payments daily.',
      author: 'Engineering Team',
      readTime: '15 min read',
      publishDate: '2024-01-08',
      views: 8920,
      image: '/resources/globalpay-case-study.jpg',
      tags: ['FinTech', 'Scalability', 'Performance']
    }
  ];

  const resources = [
    {
      id: 4,
      type: 'video',
      title: 'Building Secure APIs: Best Practices Masterclass',
      description: 'Join our CTO for a 45-minute deep dive into API security, authentication, and authorization best practices.',
      author: 'Sarah Chen, CTO',
      duration: '45 min',
      publishDate: '2024-01-05',
      views: 5240,
      tags: ['Security', 'API', 'Development']
    },
    {
      id: 5,
      type: 'blog',
      title: 'AI-Powered DevOps: The Future of Software Delivery',
      description: 'Exploring how artificial intelligence is revolutionizing DevOps practices and accelerating software delivery.',
      author: 'James Thompson, Head of Cloud',
      readTime: '10 min read',
      publishDate: '2024-01-03',
      views: 12100,
      tags: ['AI', 'DevOps', 'Automation']
    },
    {
      id: 6,
      type: 'whitepaper',
      title: 'Cybersecurity in the Cloud: A Complete Framework',
      description: 'Enterprise security framework for cloud-native applications with compliance checklists.',
      author: 'Security Team',
      readTime: '30 min read',
      publishDate: '2023-12-28',
      downloads: 1850,
      tags: ['Security', 'Cloud', 'Compliance']
    },
    {
      id: 7,
      type: 'webinar',
      title: 'Digital Transformation Strategies for 2024',
      description: 'Live webinar discussing emerging trends and strategies for successful digital transformation.',
      author: 'Leadership Team',
      duration: '60 min',
      publishDate: '2023-12-20',
      attendees: 450,
      tags: ['Strategy', 'Digital Transformation']
    },
    {
      id: 8,
      type: 'blog',
      title: 'Kubernetes Cost Optimization: Save 40% on Your Cloud Bill',
      description: 'Practical tips and strategies to optimize Kubernetes deployments and reduce cloud infrastructure costs.',
      author: 'David Martinez, Head of Engineering',
      readTime: '12 min read',
      publishDate: '2023-12-15',
      views: 18700,
      tags: ['Kubernetes', 'Cost Optimization', 'Cloud']
    }
  ];

  const allResources = [...featuredResources, ...resources];
  const filteredResources = allResources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.type === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getResourceIcon = (type: string) => {
    switch (type) {
      case 'blog': return BookOpen;
      case 'whitepaper': return FileText;
      case 'video': return Video;
      case 'webinar': return Headphones;
      case 'case-study': return Award;
      default: return FileText;
    }
  };

  const getResourceColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-blue-500 to-blue-600';
      case 'whitepaper': return 'from-purple-500 to-purple-600';
      case 'video': return 'from-red-500 to-red-600';
      case 'webinar': return 'from-green-500 to-green-600';
      case 'case-study': return 'from-yellow-500 to-yellow-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
            animate={{ scale: [1, 1.1, 1], x: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
            animate={{ scale: [1.1, 1, 1.1], x: [0, -30, 0] }}
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
              className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6"
            >
              <BookOpen className="w-4 h-4 mr-2" />
              Knowledge Center
            </motion.div>

            <h1 className="heading-1 text-gray-900 mb-6">
              Expert Insights &{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            
            <p className="body-large text-gray-600 mb-8">
              Stay ahead of the curve with our latest insights, whitepapers, case studies, 
              and thought leadership content from industry experts.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search resources, topics, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-padding bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
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
                <span className="ml-2 text-xs opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      {selectedCategory === 'all' && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="heading-2 text-gray-900 mb-4">Featured Resources</h2>
              <p className="body-large text-gray-600">
                Must-read content from our experts
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => {
                const IconComponent = getResourceIcon(resource.type);
                return (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full overflow-hidden hover:shadow-2xl transition-shadow">
                      {/* Resource Type Badge */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 bg-gradient-to-r ${getResourceColor(resource.type)} text-white rounded-full text-xs font-medium capitalize`}>
                            {resource.type.replace('-', ' ')}
                          </span>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                            <IconComponent className="w-10 h-10 text-gray-600" />
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="heading-4 text-gray-900 mb-3 line-clamp-2">{resource.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">{resource.description}</p>

                        {/* Meta Information */}
                        <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                          <div className="flex items-center">
                            <User className="w-3 h-3 mr-1" />
                            {resource.author}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            {resource.readTime || resource.duration}
                          </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {resource.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Stats */}
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {resource.views || resource.downloads || resource.attendees || 0}
                          </div>
                          <div>{resource.publishDate}</div>
                        </div>

                        {/* CTA */}
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full"
                          icon={<ArrowRight className="w-4 h-4" />}
                          iconPosition="right"
                        >
                          {resource.type === 'whitepaper' ? 'Download' : 
                           resource.type === 'video' || resource.type === 'webinar' ? 'Watch' : 'Read'}
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* All Resources */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-gray-900 mb-4">
              {selectedCategory === 'all' ? 'Latest Resources' : `${categories.find(c => c.id === selectedCategory)?.label}`}
            </h2>
            <p className="text-gray-600">
              {filteredResources.length} resources found
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredResources.map((resource, index) => {
              const IconComponent = getResourceIcon(resource.type);
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${getResourceColor(resource.type)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-medium text-gray-500 capitalize">
                            {resource.type.replace('-', ' ')}
                          </span>
                          <span className="text-xs text-gray-400">{resource.publishDate}</span>
                        </div>
                        
                        <h3 className="heading-5 text-gray-900 mb-2 line-clamp-2">{resource.title}</h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{resource.description}</p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                          <div className="flex items-center space-x-3">
                            <span>{resource.author}</span>
                            <span>•</span>
                            <span>{resource.readTime || resource.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {resource.views || resource.downloads || resource.attendees || 0}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {resource.tags.slice(0, 2).map((tag) => (
                              <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <Button variant="ghost" size="sm" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                            {resource.type === 'whitepaper' ? 'Download' : 
                             resource.type === 'video' || resource.type === 'webinar' ? 'Watch' : 'Read'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="heading-4 text-gray-600 mb-2">No resources found</h3>
              <p className="text-gray-500">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-white mb-6">
              Stay Updated with Latest Insights
            </h2>
            <p className="body-large text-white/90 max-w-3xl mx-auto mb-8">
              Join 10,000+ technology leaders who receive our weekly newsletter with the latest 
              industry insights, trends, and best practices.
            </p>
            
            <div className="max-w-md mx-auto flex gap-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button variant="accent" size="md">
                Subscribe
              </Button>
            </div>
            
            <p className="text-white/70 text-xs mt-4">
              No spam, unsubscribe at any time. Privacy policy applies.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;