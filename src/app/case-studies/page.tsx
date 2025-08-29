&apos;use client&apos;;

import React, { useState } from &apos;react&apos;;
import { motion } from &apos;framer-motion&apos;;
import { 
  Award, Filter, ArrowRight, Clock, Users, TrendingUp,
  Globe, Shield, Database, Cloud, Smartphone, Monitor,
  CheckCircle, Star, BarChart, Zap, Code, Server
} from &apos;lucide-react&apos;;
import Card from &apos;@/components/ui/Card&apos;;
import Button from &apos;@/components/ui/Button&apos;;

const CaseStudiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(&apos;all&apos;);

  const categories = [
    { id: &apos;all&apos;, label: &apos;All Projects&apos; },
    { id: &apos;enterprise&apos;, label: &apos;Enterprise&apos; },
    { id: &apos;fintech&apos;, label: &apos;FinTech&apos; },
    { id: &apos;healthcare&apos;, label: &apos;Healthcare&apos; },
    { id: &apos;ecommerce&apos;, label: &apos;E-Commerce&apos; },
    { id: &apos;saas&apos;, label: &apos;SaaS&apos; },
    { id: &apos;startup&apos;, label: &apos;Startups&apos; }
  ];

  const caseStudies = [
    {
      id: 1,
      category: &apos;fintech&apos;,
      client: &apos;PayStream Solutions&apos;,
      title: &apos;Modernizing Small Business Payment Processing&apos;,
      description: &apos;Built a secure payment processing system handling 5,000+ transactions monthly for local businesses&apos;,
      challenge: &apos;PayStream needed to replace their outdated payment system that was causing transaction delays and customer complaints, while ensuring PCI DSS compliance.&apos;,
      solution: &apos;We developed a modern web application with secure payment processing, automated reconciliation, and real-time transaction monitoring using AWS and Stripe integration.&apos;,
      image: &apos;/case-studies/paystream.jpg&apos;,
      logo: &apos;/logos/paystream.png&apos;,
      duration: &apos;4 months&apos;,
      team: &apos;3 developers&apos;,
      technologies: [&apos;AWS&apos;, &apos;React&apos;, &apos;Node.js&apos;, &apos;PostgreSQL&apos;, &apos;Stripe API&apos;, &apos;Redis&apos;],
      results: [
        { metric: &apos;99.8%&apos;, label: &apos;Uptime Achieved&apos; },
        { metric: &apos;2s&apos;, label: &apos;Transaction Time&apos; },
        { metric: &apos;35%&apos;, label: &apos;Processing Cost Reduction&apos; },
        { metric: &apos;5K+&apos;, label: &apos;Monthly Transactions&apos; }
      ],
      testimonial: {
        quote: &apos;Kingsmen delivered exactly what we needed. Our payment processing is now reliable, fast, and our customers are much happier.&apos;,
        author: &apos;Sarah Chen&apos;,
        role: &apos;CEO, PayStream Solutions&apos;
      }
    },
    {
      id: 2,
      category: &apos;healthcare&apos;,
      client: &apos;CareConnect Clinic&apos;,
      title: &apos;Patient Management System for Growing Practice&apos;,
      description: &apos;Developed a comprehensive patient management system serving 2,500+ patients with appointment scheduling&apos;,
      challenge: &apos;CareConnect needed to digitize their paper-based patient records and streamline appointment scheduling as their practice grew from 1 to 3 locations.&apos;,
      solution: &apos;We built a HIPAA-compliant patient management system with online appointment booking, electronic health records, and automated appointment reminders.&apos;,
      image: &apos;/case-studies/careconnect.jpg&apos;,
      logo: &apos;/logos/careconnect.png&apos;,
      duration: &apos;6 months&apos;,
      team: &apos;4 developers&apos;,
      technologies: [&apos;Azure&apos;, &apos;React&apos;, &apos;Node.js&apos;, &apos;MongoDB&apos;, &apos;Twilio&apos;, &apos;FHIR&apos;],
      results: [
        { metric: &apos;2.5K+&apos;, label: &apos;Active Patients&apos; },
        { metric: &apos;25%&apos;, label: &apos;Reduced No-Shows&apos; },
        { metric: &apos;90%&apos;, label: &apos;Patient Satisfaction&apos; },
        { metric: &apos;20%&apos;, label: &apos;Administrative Time Saved&apos; }
      ],
      testimonial: {
        quote: &apos;The system has streamlined our operations significantly. We can now focus more on patient care rather than administrative tasks.&apos;,
        author: &apos;Dr. Michael Roberts&apos;,
        role: &apos;Medical Director, CareConnect Clinic&apos;
      }
    },
    {
      id: 3,
      category: &apos;ecommerce&apos;,
      client: &apos;Artisan Marketplace&apos;,
      title: &apos;E-Commerce Platform for Local Artisans&apos;,
      description: &apos;Built a custom e-commerce platform growing from startup to $2M annual revenue with 500+ vendors&apos;,
      challenge: &apos;Artisan Marketplace needed a platform to connect local artisans with customers, handling vendor management, payments, and order fulfillment.&apos;,
      solution: &apos;We developed a multi-vendor e-commerce platform with vendor dashboards, automated commission tracking, and integrated shipping solutions.&apos;,
      image: &apos;/case-studies/artisan.jpg&apos;,
      logo: &apos;/logos/artisan.png&apos;,
      duration: &apos;5 months&apos;,
      team: &apos;4 developers&apos;,
      technologies: [&apos;React&apos;, &apos;Node.js&apos;, &apos;Shopify API&apos;, &apos;Stripe Connect&apos;, &apos;AWS S3&apos;, &apos;SendGrid&apos;],
      results: [
        { metric: &apos;180%&apos;, label: &apos;Revenue Growth&apos; },
        { metric: &apos;3.2s&apos;, label: &apos;Page Load Time&apos; },
        { metric: &apos;28%&apos;, label: &apos;Conversion Rate Increase&apos; },
        { metric: &apos;50K+&apos;, label: &apos;Monthly Visitors&apos; }
      ],
      testimonial: {
        quote: &apos;The platform exceeded our expectations. Our artisans can now focus on creating while we handle the technology seamlessly.&apos;,
        author: &apos;Jennifer Martinez&apos;,
        role: &apos;Founder, Artisan Marketplace&apos;
      }
    },
    {
      id: 4,
      category: &apos;enterprise&apos;,
      client: &apos;MidSize Manufacturing&apos;,
      title: &apos;Inventory Management System Overhaul&apos;,
      description: &apos;Modernized inventory management for a 200-employee manufacturing company across 3 facilities&apos;,
      challenge: &apos;MidSize Manufacturing was using spreadsheets and paper forms to track inventory across multiple locations, leading to stock-outs and overordering.&apos;,
      solution: &apos;We built a cloud-based inventory management system with real-time tracking, automated reorder points, and mobile barcode scanning capabilities.&apos;,
      image: &apos;/case-studies/midsize.jpg&apos;,
      logo: &apos;/logos/midsize.png&apos;,
      duration: &apos;7 months&apos;,
      team: &apos;5 developers&apos;,
      technologies: [&apos;Vue.js&apos;, &apos;Laravel&apos;, &apos;MySQL&apos;, &apos;AWS&apos;, &apos;Barcode API&apos;, &apos;QuickBooks API&apos;],
      results: [
        { metric: &apos;25%&apos;, label: &apos;Inventory Reduction&apos; },
        { metric: &apos;$500K&apos;, label: &apos;Annual Savings&apos; },
        { metric: &apos;3&apos;, label: &apos;Facilities Connected&apos; },
        { metric: &apos;60%&apos;, label: &apos;Faster Stock Takes&apos; }
      ],
      testimonial: {
        quote: &apos;We finally have real visibility into our inventory. The system has eliminated our stock-out issues and reduced waste significantly.&apos;,
        author: &apos;Robert Johnson&apos;,
        role: &apos;Operations Manager, MidSize Manufacturing&apos;
      }
    },
    {
      id: 5,
      category: &apos;saas&apos;,
      client: &apos;TaskFlow&apos;,
      title: &apos;Project Management SaaS for Small Teams&apos;,
      description: &apos;Built a project management platform serving 150+ small businesses with team collaboration features&apos;,
      challenge: &apos;TaskFlow needed to create a simple yet powerful project management tool that small businesses could afford and easily adopt without complex training.&apos;,
      solution: &apos;We developed an intuitive SaaS platform with project tracking, team collaboration, time tracking, and client reporting features with a freemium pricing model.&apos;,
      image: &apos;/case-studies/taskflow.jpg&apos;,
      logo: &apos;/logos/taskflow.png&apos;,
      duration: &apos;6 months&apos;,
      team: &apos;4 developers&apos;,
      technologies: [&apos;React&apos;, &apos;Node.js&apos;, &apos;PostgreSQL&apos;, &apos;Stripe&apos;, &apos;WebSocket&apos;, &apos;AWS&apos;],
      results: [
        { metric: &apos;150+&apos;, label: &apos;Business Clients&apos; },
        { metric: &apos;25%&apos;, label: &apos;Productivity Increase&apos; },
        { metric: &apos;$300K&apos;, label: &apos;Annual Revenue&apos; },
        { metric: &apos;99.2%&apos;, label: &apos;Platform Uptime&apos; }
      ],
      testimonial: {
        quote: &apos;TaskFlow has become essential for managing our projects. It\&apos;s simple enough for our team to use but powerful enough to handle our growing needs.&apos;,
        author: &apos;Alex Thompson&apos;,
        role: &apos;CEO, Design Studio Pro&apos;
      }
    },
    {
      id: 6,
      category: &apos;startup&apos;,
      client: &apos;SkillBridge Academy&apos;,
      title: &apos;Online Learning Platform for Professionals&apos;,
      description: &apos;Helped EdTech startup scale from idea to 3,500+ active learners and break-even in 8 months&apos;,
      challenge: &apos;SkillBridge needed to build a professional learning platform quickly, validate the market, and achieve sustainable growth with limited funding.&apos;,
      solution: &apos;We built a lean MVP with video courses, progress tracking, certificates, and payment processing, then iteratively added features based on user feedback.&apos;,
      image: &apos;/case-studies/skillbridge.jpg&apos;,
      logo: &apos;/logos/skillbridge.png&apos;,
      duration: &apos;4 months&apos;,
      team: &apos;3 developers&apos;,
      technologies: [&apos;Next.js&apos;, &apos;Node.js&apos;, &apos;MongoDB&apos;, &apos;Vimeo API&apos;, &apos;Stripe&apos;, &apos;AWS S3&apos;],
      results: [
        { metric: &apos;3.5K+&apos;, label: &apos;Active Learners&apos; },
        { metric: &apos;4.6/5&apos;, label: &apos;User Rating&apos; },
        { metric: &apos;Break-even&apos;, label: &apos;in 8 months&apos; },
        { metric: &apos;78%&apos;, label: &apos;Course Completion&apos; }
      ],
      testimonial: {
        quote: &apos;Kingsmen helped us validate our idea quickly and build a platform our users love. We\&apos;re now profitable and growing steadily.&apos;,
        author: &apos;Maria Rodriguez&apos;,
        role: &apos;Founder, SkillBridge Academy&apos;
      }
    },
    {
      id: 7,
      category: &apos;fintech&apos;,
      client: &apos;LocalCredit Union&apos;,
      title: &apos;Digital Banking Platform Modernization&apos;,
      description: &apos;Modernized online banking system for a community credit union serving 12,000+ members&apos;,
      challenge: &apos;LocalCredit Union\&apos;s legacy banking system was outdated, slow, and couldn\&apos;t support modern features like mobile deposits and real-time notifications.&apos;,
      solution: &apos;We built a secure, modern banking platform with mobile deposit capture, real-time notifications, budgeting tools, and seamless bill pay integration.&apos;,
      image: &apos;/case-studies/localcredit.jpg&apos;,
      logo: &apos;/logos/localcredit.png&apos;,
      duration: &apos;8 months&apos;,
      team: &apos;6 developers&apos;,
      technologies: [&apos;React Native&apos;, &apos;Node.js&apos;, &apos;PostgreSQL&apos;, &apos;Redis&apos;, &apos;Plaid API&apos;, &apos;AWS&apos;],
      results: [
        { metric: &apos;12K+&apos;, label: &apos;Active Members&apos; },
        { metric: &apos;85%&apos;, label: &apos;Mobile Adoption&apos; },
        { metric: &apos;50%&apos;, label: &apos;Support Call Reduction&apos; },
        { metric: &apos;4.7/5&apos;, label: &apos;App Store Rating&apos; }
      ],
      testimonial: {
        quote: &apos;Our members love the new platform. It\&apos;s modern, secure, and has all the features they expect from digital banking.&apos;,
        author: &apos;David Kim&apos;,
        role: &apos;IT Director, LocalCredit Union&apos;
      }
    },
    {
      id: 8,
      category: &apos;healthcare&apos;,
      client: &apos;Wellness Tracker Pro&apos;,
      title: &apos;Corporate Wellness Platform&apos;,
      description: &apos;Built a wellness tracking platform for mid-sized companies to improve employee health outcomes&apos;,
      challenge: &apos;Companies needed a way to track and incentivize employee wellness programs while maintaining privacy and HIPAA compliance.&apos;,
      solution: &apos;We created a privacy-first wellness platform with activity tracking, health challenges, progress dashboards, and integration with popular fitness devices.&apos;,
      image: &apos;/case-studies/wellness.jpg&apos;,
      logo: &apos;/logos/wellness.png&apos;,
      duration: &apos;5 months&apos;,
      team: &apos;4 developers&apos;,
      technologies: [&apos;React&apos;, &apos;Node.js&apos;, &apos;MongoDB&apos;, &apos;Fitbit API&apos;, &apos;Apple Health&apos;, &apos;AWS&apos;],
      results: [
        { metric: &apos;25&apos;, label: &apos;Corporate Clients&apos; },
        { metric: &apos;8K+&apos;, label: &apos;Active Users&apos; },
        { metric: &apos;30%&apos;, label: &apos;Engagement Increase&apos; },
        { metric: &apos;15%&apos;, label: &apos;Healthcare Cost Reduction&apos; }
      ],
      testimonial: {
        quote: &apos;The platform has significantly improved our employee wellness program participation and outcomes. It\&apos;s easy to use and respects privacy.&apos;,
        author: &apos;Dr. Emily Watson&apos;,
        role: &apos;Chief Wellness Officer, TechStart Inc&apos;
      }
    }
  ];

  const filteredCaseStudies = selectedCategory === &apos;all&apos; 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <div className=&quot;min-h-screen&quot;>
      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50&quot;></div>
        
        {/* Animated Background */}
        <div className=&quot;absolute inset-0&quot;>
          <motion.div
            className=&quot;absolute top-10 left-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40&quot;
            animate={{ scale: [1, 1.3, 1], x: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className=&quot;absolute bottom-10 right-20 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40&quot;
            animate={{ scale: [1.3, 1, 1.3], x: [0, -50, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </div>

        <div className=&quot;container-custom relative z-10&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;text-center max-w-4xl mx-auto&quot;
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className=&quot;inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6&quot;
            >
              <Award className=&quot;w-4 h-4 mr-2&quot; />
              Success Stories
            </motion.div>

            <h1 className=&quot;heading-1 text-gray-900 mb-6&quot;>
              Transforming Vision into <span className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent&quot;>Reality</span>
            </h1>
            
            <p className=&quot;body-large text-gray-600 mb-8&quot;>
              Explore how we&apos;ve helped businesses across industries achieve extraordinary results 
              through innovative technology solutions and strategic partnerships.
            </p>

            {/* Stats */}
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 mt-12&quot;>
              {[
                { value: &apos;85+&apos;, label: &apos;Projects Delivered&apos; },
                { value: &apos;94%&apos;, label: &apos;Client Retention&apos; },
                { value: &apos;$15M+&apos;, label: &apos;Client Value Created&apos; },
                { value: &apos;12+&apos;, label: &apos;Industry Recognitions&apos; }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className=&quot;text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent&quot;>
                    {stat.value}
                  </div>
                  <div className=&quot;text-gray-600 text-sm mt-1&quot;>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className=&quot;section-padding bg-white&quot;>
        <div className=&quot;container-custom&quot;>
          {/* Category Filter */}
          <div className=&quot;flex flex-wrap justify-center gap-3 mb-12&quot;>
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
                  selectedCategory === category.id
                    ? &apos;bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg&apos;
                    : &apos;bg-gray-100 text-gray-700 hover:bg-gray-200&apos;
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
                {category.id === &apos;all&apos; && (
                  <span className=&quot;ml-2 text-xs opacity-80&quot;>
                    ({caseStudies.length})
                  </span>
                )}
              </motion.button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
            {filteredCaseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className=&quot;h-full overflow-hidden hover:shadow-2xl transition-shadow&quot;>
                  {/* Image/Visual Section */}
                  <div className=&quot;h-48 bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden&quot;>
                    <div className=&quot;absolute inset-0 flex items-center justify-center&quot;>
                      <div className=&quot;text-center&quot;>
                        <div className=&quot;w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-3&quot;>
                          {study.category === &apos;fintech&apos; && <BarChart className=&quot;w-10 h-10 text-blue-600&quot; />}
                          {study.category === &apos;healthcare&apos; && <Shield className=&quot;w-10 h-10 text-green-600&quot; />}
                          {study.category === &apos;ecommerce&apos; && <Globe className=&quot;w-10 h-10 text-purple-600&quot; />}
                          {study.category === &apos;enterprise&apos; && <Server className=&quot;w-10 h-10 text-gray-600&quot; />}
                          {study.category === &apos;saas&apos; && <Cloud className=&quot;w-10 h-10 text-blue-600&quot; />}
                          {study.category === &apos;startup&apos; && <Zap className=&quot;w-10 h-10 text-yellow-600&quot; />}
                        </div>
                        <div className=&quot;text-2xl font-bold text-gray-800&quot;>{study.client}</div>
                      </div>
                    </div>
                    <div className=&quot;absolute top-4 right-4&quot;>
                      <span className=&quot;px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-medium text-gray-700 capitalize&quot;>
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className=&quot;p-6&quot;>
                    <h3 className=&quot;heading-4 text-gray-900 mb-3&quot;>{study.title}</h3>
                    <p className=&quot;text-gray-600 mb-4&quot;>{study.description}</p>

                    {/* Key Metrics */}
                    <div className=&quot;grid grid-cols-2 gap-4 mb-4&quot;>
                      {study.results.slice(0, 4).map((result) => (
                        <div key={result.label} className=&quot;text-center p-3 bg-gray-50 rounded-lg&quot;>
                          <div className=&quot;text-xl font-bold text-blue-600&quot;>{result.metric}</div>
                          <div className=&quot;text-xs text-gray-600&quot;>{result.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className=&quot;flex flex-wrap gap-2 mb-4&quot;>
                      {study.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className=&quot;px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium&quot;>
                          {tech}
                        </span>
                      ))}
                      {study.technologies.length > 4 && (
                        <span className=&quot;px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium&quot;>
                          +{study.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className=&quot;flex items-center gap-4 text-sm text-gray-600 mb-4&quot;>
                      <div className=&quot;flex items-center&quot;>
                        <Clock className=&quot;w-4 h-4 mr-1&quot; />
                        {study.duration}
                      </div>
                      <div className=&quot;flex items-center&quot;>
                        <Users className=&quot;w-4 h-4 mr-1&quot; />
                        {study.team}
                      </div>
                    </div>

                    {/* Testimonial Preview */}
                    <div className=&quot;border-t pt-4&quot;>
                      <div className=&quot;flex items-start&quot;>
                        <Star className=&quot;w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5&quot; />
                        <div>
                          <p className=&quot;text-sm italic text-gray-600 line-clamp-2&quot;>
                            &quot;{study.testimonial.quote}&quot;
                          </p>
                          <p className=&quot;text-xs text-gray-500 mt-2&quot;>
                            — {study.testimonial.author}, {study.testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Button 
                      variant=&quot;outline&quot; 
                      size=&quot;sm&quot; 
                      className=&quot;w-full mt-4&quot;
                      icon={<ArrowRight className=&quot;w-4 h-4&quot; />}
                      iconPosition=&quot;right&quot;
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
      <section className=&quot;section-padding bg-gradient-to-br from-blue-600 to-purple-600 text-white&quot;>
        <div className=&quot;container-custom text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;heading-2 text-white mb-6&quot;>
              Ready to Be Our Next Success Story?
            </h2>
            <p className=&quot;body-large text-white/90 max-w-3xl mx-auto mb-8&quot;>
              Join hundreds of companies that have transformed their business with our solutions. 
              Let&apos;s discuss how we can help you achieve extraordinary results.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button variant=&quot;accent&quot; size=&quot;lg&quot;>
                Start Your Project
              </Button>
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; className=&quot;bg-white/10 border-white/20 text-white hover:bg-white hover:text-blue-600&quot;>
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