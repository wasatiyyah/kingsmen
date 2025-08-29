&apos;use client&apos;;

import React, { useState } from &apos;react&apos;;
import { motion, AnimatePresence } from &apos;framer-motion&apos;;
import { ArrowRight, ExternalLink, Star, TrendingUp, Users, Clock, CheckCircle } from &apos;lucide-react&apos;;
import Card from &apos;../ui/Card&apos;;
import Button from &apos;../ui/Button&apos;;

const CaseStudiesSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(&apos;all&apos;);

  const categories = [
    { id: &apos;all&apos;, name: &apos;All Projects&apos; },
    { id: &apos;software&apos;, name: &apos;Software Development&apos; },
    { id: &apos;cloud&apos;, name: &apos;Cloud Architecture&apos; },
    { id: &apos;digital&apos;, name: &apos;Digital Transformation&apos; },
  ];

  const caseStudies = [
    {
      id: 1,
      title: &apos;E-Commerce Platform Modernization&apos;,
      category: &apos;software&apos;,
      client: &apos;TechRetail Inc.&apos;,
      industry: &apos;E-Commerce&apos;,
      description: &apos;Complete modernization of legacy e-commerce platform with microservices architecture, resulting in significant performance improvements and enhanced reliability.&apos;,
      results: [
        &apos;60% performance improvement&apos;,
        &apos;99.5% uptime achieved&apos;,
        &apos;35% reduction in infrastructure costs&apos;,
        &apos;25K+ monthly active users&apos;
      ],
      technologies: [&apos;React&apos;, &apos;Node.js&apos;, &apos;AWS&apos;, &apos;MongoDB&apos;, &apos;Redis&apos;],
      duration: &apos;6 months&apos;,
      team: &apos;4 developers&apos;,
      image: &apos;/api/placeholder/400/300&apos;,
      featured: true
    },
    {
      id: 2,
      title: &apos;Cloud Migration & DevOps Transformation&apos;,
      category: &apos;cloud&apos;,
      client: &apos;FinTech Solutions&apos;,
      industry: &apos;Financial Services&apos;,
      description: &apos;Migrated monolithic application to cloud-native architecture with automated CI/CD pipelines and comprehensive monitoring.&apos;,
      results: [
        &apos;50% faster deployment cycles&apos;,
        &apos;40% reduction in operational costs&apos;,
        &apos;Zero-downtime deployments&apos;,
        &apos;24/7 automated monitoring&apos;
      ],
      technologies: [&apos;AWS&apos;, &apos;Docker&apos;, &apos;Kubernetes&apos;, &apos;Jenkins&apos;, &apos;Prometheus&apos;],
      duration: &apos;4 months&apos;,
      team: &apos;3 engineers&apos;,
      image: &apos;/api/placeholder/400/300&apos;,
      featured: true
    },
    {
      id: 3,
      title: &apos;Analytics Dashboard Development&apos;,
      category: &apos;digital&apos;,
      client: &apos;DataCorp Analytics&apos;,
      industry: &apos;Data Analytics&apos;,
      description: &apos;Built intelligent analytics platform with data visualization capabilities for real-time business insights and reporting.&apos;,
      results: [
        &apos;Real-time data processing&apos;,
        &apos;85% reporting accuracy&apos;,
        &apos;30% faster decision making&apos;,
        &apos;$150K+ cost savings annually&apos;
      ],
      technologies: [&apos;Python&apos;, &apos;React&apos;, &apos;PostgreSQL&apos;, &apos;Redis&apos;, &apos;Chart.js&apos;],
      duration: &apos;5 months&apos;,
      team: &apos;4 specialists&apos;,
      image: &apos;/api/placeholder/400/300&apos;,
      featured: false
    },
    {
      id: 4,
      title: &apos;Healthcare Management System&apos;,
      category: &apos;software&apos;,
      client: &apos;MediCare Plus&apos;,
      industry: &apos;Healthcare&apos;,
      description: &apos;Comprehensive healthcare management system with patient portals, appointment scheduling, and secure data management.&apos;,
      results: [
        &apos;HIPAA compliant architecture&apos;,
        &apos;30% reduction in administrative overhead&apos;,
        &apos;Improved patient satisfaction&apos;,
        &apos;Secure data encryption&apos;
      ],
      technologies: [&apos;React&apos;, &apos;Node.js&apos;, &apos;PostgreSQL&apos;, &apos;AWS&apos;, &apos;HIPAA&apos;],
      duration: &apos;7 months&apos;,
      team: &apos;5 developers&apos;,
      image: &apos;/api/placeholder/400/300&apos;,
      featured: false
    },
    {
      id: 5,
      title: &apos;IoT Monitoring Platform&apos;,
      category: &apos;digital&apos;,
      client: &apos;SmartManufacturing&apos;,
      industry: &apos;Manufacturing&apos;,
      description: &apos;IoT platform for smart manufacturing with real-time monitoring, maintenance alerts, and quality tracking.&apos;,
      results: [
        &apos;20% reduction in downtime&apos;,
        &apos;Predictive maintenance alerts&apos;,
        &apos;Real-time quality monitoring&apos;,
        &apos;$75K annual savings&apos;
      ],
      technologies: [&apos;IoT&apos;, &apos;Python&apos;, &apos;React&apos;, &apos;MongoDB&apos;, &apos;AWS IoT&apos;],
      duration: &apos;6 months&apos;,
      team: &apos;4 engineers&apos;,
      image: &apos;/api/placeholder/400/300&apos;,
      featured: false
    },
    {
      id: 6,
      title: &apos;Multi-Cloud Strategy Implementation&apos;,
      category: &apos;cloud&apos;,
      client: &apos;GlobalTech Corp&apos;,
      industry: &apos;Technology&apos;,
      description: &apos;Implemented multi-cloud strategy across AWS and Azure for optimal performance and cost efficiency.&apos;,
      results: [
        &apos;25% cost optimization&apos;,
        &apos;Enhanced disaster recovery&apos;,
        &apos;Improved performance&apos;,
        &apos;Reduced vendor lock-in&apos;
      ],
      technologies: [&apos;AWS&apos;, &apos;Azure&apos;, &apos;Terraform&apos;, &apos;Docker&apos;],
      duration: &apos;4 months&apos;,
      team: &apos;3 architects&apos;,
      image: &apos;/api/placeholder/400/300&apos;,
      featured: false
    }
  ];

  const filteredCaseStudies = selectedCategory === &apos;all&apos; 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <section id=&quot;case-studies&quot; className=&quot;section-padding bg-white&quot;>
      <div className=&quot;container-custom&quot;>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=&quot;text-center mb-16&quot;
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className=&quot;inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6&quot;
          >
            <Star className=&quot;w-4 h-4 mr-2 fill-current&quot; />
            Success Stories
          </motion.div>
          
          <h2 className=&quot;heading-2 text-gray-900 mb-6&quot;>
            Transforming Businesses Through{&apos; &apos;}
            <span className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent&quot;>
              Innovation
            </span>
          </h2>
          
          <p className=&quot;body-large text-gray-600 max-w-3xl mx-auto&quot;>
            Discover how we&apos;ve helped organizations across industries achieve remarkable results 
            through cutting-edge technology solutions and strategic implementation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? &apos;bg-blue-600 text-white shadow-lg&apos;
                  : &apos;bg-gray-100 text-gray-700 hover:bg-gray-200&apos;
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
              className=&quot;mb-16&quot;
            >
              <Card className=&quot;overflow-hidden&quot;>
                <div className=&quot;grid lg:grid-cols-2 gap-8&quot;>
                  {/* Image */}
                  <div className=&quot;relative h-64 lg:h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-xl lg:rounded-l-xl lg:rounded-t-none&quot;>
                    <div className=&quot;absolute inset-0 bg-black/20&quot;></div>
                    <div className=&quot;absolute top-4 left-4&quot;>
                      <span className=&quot;inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full&quot;>
                        Featured Project
                      </span>
                    </div>
                    <div className=&quot;absolute inset-0 flex items-center justify-center&quot;>
                      <div className=&quot;text-center text-white&quot;>
                        <div className=&quot;text-4xl font-bold mb-2&quot;>{study.client}</div>
                        <div className=&quot;text-lg opacity-90&quot;>{study.industry}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className=&quot;p-8&quot;>
                    <h3 className=&quot;heading-3 text-gray-900 mb-4&quot;>{study.title}</h3>
                    <p className=&quot;text-gray-600 mb-6 leading-relaxed&quot;>{study.description}</p>

                    {/* Results */}
                    <div className=&quot;mb-6&quot;>
                      <h4 className=&quot;font-semibold text-gray-900 mb-3&quot;>Key Results:</h4>
                      <div className=&quot;grid grid-cols-1 sm:grid-cols-2 gap-3&quot;>
                        {study.results.map((result, index) => (
                          <div key={index} className=&quot;flex items-center text-sm text-gray-600&quot;>
                            <CheckCircle className=&quot;w-4 h-4 text-green-500 mr-2 flex-shrink-0&quot; />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies & Details */}
                    <div className=&quot;grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8&quot;>
                      <div>
                        <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>Technologies:</h4>
                        <div className=&quot;flex flex-wrap gap-2&quot;>
                          {study.technologies.map((tech) => (
                            <span key={tech} className=&quot;px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full&quot;>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className=&quot;space-y-2&quot;>
                        <div className=&quot;flex items-center text-sm text-gray-600&quot;>
                          <Clock className=&quot;w-4 h-4 mr-2&quot; />
                          Duration: {study.duration}
                        </div>
                        <div className=&quot;flex items-center text-sm text-gray-600&quot;>
                          <Users className=&quot;w-4 h-4 mr-2&quot; />
                          Team: {study.team}
                        </div>
                      </div>
                    </div>

                    <Button variant=&quot;primary&quot; icon={<ExternalLink className=&quot;w-4 h-4&quot; />} iconPosition=&quot;right&quot;>
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
          className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
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
                <Card className=&quot;h-full overflow-hidden&quot;>
                  {/* Image */}
                  <div className=&quot;relative h-48 bg-gradient-to-br from-blue-500 to-purple-600&quot;>
                    <div className=&quot;absolute inset-0 bg-black/20&quot;></div>
                    <div className=&quot;absolute top-4 left-4&quot;>
                      <span className=&quot;inline-flex items-center px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full&quot;>
                        {study.industry}
                      </span>
                    </div>
                    <div className=&quot;absolute inset-0 flex items-center justify-center&quot;>
                      <div className=&quot;text-center text-white&quot;>
                        <div className=&quot;text-xl font-bold&quot;>{study.client}</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className=&quot;p-6&quot;>
                    <h3 className=&quot;heading-4 text-gray-900 mb-3&quot;>{study.title}</h3>
                    <p className=&quot;text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3&quot;>
                      {study.description}
                    </p>

                    {/* Quick Results */}
                    <div className=&quot;mb-4&quot;>
                      <div className=&quot;flex items-center text-sm text-gray-600 mb-2&quot;>
                        <TrendingUp className=&quot;w-4 h-4 mr-2&quot; />
                        Key Results:
                      </div>
                      <ul className=&quot;space-y-1&quot;>
                        {study.results.slice(0, 2).map((result, index) => (
                          <li key={index} className=&quot;flex items-center text-xs text-gray-600&quot;>
                            <CheckCircle className=&quot;w-3 h-3 text-green-500 mr-2 flex-shrink-0&quot; />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className=&quot;mb-4&quot;>
                      <div className=&quot;flex flex-wrap gap-1&quot;>
                        {study.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className=&quot;px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded&quot;>
                            {tech}
                          </span>
                        ))}
                        {study.technologies.length > 3 && (
                          <span className=&quot;px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded&quot;>
                            +{study.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    <Button variant=&quot;outline&quot; size=&quot;sm&quot; icon={<ArrowRight className=&quot;w-4 h-4&quot; />} iconPosition=&quot;right&quot; className=&quot;w-full&quot;>
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
          className=&quot;text-center mt-16&quot;
        >
          <div className=&quot;bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-white&quot;>
            <h3 className=&quot;heading-3 mb-4&quot;>Ready to Start Your Success Story?</h3>
            <p className=&quot;body-large mb-8 opacity-90 max-w-2xl mx-auto&quot;>
              Join the hundreds of companies that have transformed their business with our expertise. 
              Let&apos;s discuss how we can help you achieve similar results.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button variant=&quot;accent&quot; size=&quot;lg&quot; icon={<ArrowRight className=&quot;w-5 h-5&quot; />} iconPosition=&quot;right&quot;>
                Start Your Project
              </Button>
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; className=&quot;bg-white/10 border-white/20 text-white hover:bg-white hover:text-gray-900&quot;>
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
