&apos;use client&apos;;

import React, { useState } from &apos;react&apos;;
import { motion } from &apos;framer-motion&apos;;
import { 
  Building2, Heart, ShoppingCart, Banknote, Factory, 
  GraduationCap, Car, Plane, Hotel, Briefcase, ArrowRight,
  CheckCircle, Target, TrendingUp, Shield, Zap, Globe,
  Users, BarChart, Cpu, Database, Cloud, Lock
} from &apos;lucide-react&apos;;
import Card from &apos;@/components/ui/Card&apos;;
import Button from &apos;@/components/ui/Button&apos;;

const SolutionsPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(&apos;fintech&apos;);

  const industries = [
    {
      id: &apos;fintech&apos;,
      icon: Banknote,
      name: &apos;Financial Technology&apos;,
      description: &apos;Revolutionizing financial services with secure, scalable solutions&apos;,
      challenges: [
        &apos;Regulatory compliance and security requirements&apos;,
        &apos;High-frequency trading and real-time processing&apos;,
        &apos;Legacy system modernization&apos;,
        &apos;Fraud detection and prevention&apos;
      ],
      solutions: [
        {
          title: &apos;Digital Payment Platforms&apos;,
          description: &apos;Secure, PCI-compliant payment processing systems with real-time fraud detection&apos;,
          features: [&apos;Real-time transaction processing&apos;, &apos;Multi-currency support&apos;, &apos;Advanced fraud detection&apos;, &apos;Regulatory compliance&apos;]
        },
        {
          title: &apos;Trading & Investment Platforms&apos;,
          description: &apos;High-performance trading systems with algorithmic trading capabilities&apos;,
          features: [&apos;Low-latency execution&apos;, &apos;Portfolio management&apos;, &apos;Risk analytics&apos;, &apos;Mobile trading apps&apos;]
        },
        {
          title: &apos;Blockchain & Cryptocurrency&apos;,
          description: &apos;Decentralized finance solutions and cryptocurrency exchange platforms&apos;,
          features: [&apos;Smart contracts&apos;, &apos;Wallet integration&apos;, &apos;DeFi protocols&apos;, &apos;Compliance tools&apos;]
        }
      ],
      technologies: [&apos;Python&apos;, &apos;Go&apos;, &apos;React&apos;, &apos;PostgreSQL&apos;, &apos;Redis&apos;, &apos;Blockchain&apos;, &apos;AWS&apos;, &apos;Kubernetes&apos;],
      caseStudy: {
        client: &apos;PayStream Solutions&apos;,
        result: &apos;5K+ monthly transactions with 35% cost reduction&apos;
      }
    },
    {
      id: &apos;healthcare&apos;,
      icon: Heart,
      name: &apos;Healthcare & Life Sciences&apos;,
      description: &apos;Transforming patient care with innovative digital health solutions&apos;,
      challenges: [
        &apos;Patient data privacy and HIPAA compliance&apos;,
        &apos;Interoperability between healthcare systems&apos;,
        &apos;Remote patient monitoring&apos;,
        &apos;Clinical decision support&apos;
      ],
      solutions: [
        {
          title: &apos;Electronic Health Records (EHR)&apos;,
          description: &apos;Comprehensive EHR systems with AI-powered clinical insights&apos;,
          features: [&apos;Patient data management&apos;, &apos;Clinical workflows&apos;, &apos;Interoperability&apos;, &apos;Analytics dashboard&apos;]
        },
        {
          title: &apos;Telemedicine Platforms&apos;,
          description: &apos;Secure video consultation and remote patient monitoring systems&apos;,
          features: [&apos;Video consultations&apos;, &apos;Remote monitoring&apos;, &apos;Prescription management&apos;, &apos;Patient portals&apos;]
        },
        {
          title: &apos;AI-Powered Diagnostics&apos;,
          description: &apos;Machine learning models for medical imaging and diagnostic support&apos;,
          features: [&apos;Medical imaging analysis&apos;, &apos;Predictive analytics&apos;, &apos;Clinical decision support&apos;, &apos;Research tools&apos;]
        }
      ],
      technologies: [&apos;Python&apos;, &apos;TensorFlow&apos;, &apos;React Native&apos;, &apos;Node.js&apos;, &apos;Azure&apos;, &apos;FHIR&apos;, &apos;IoT&apos;, &apos;MongoDB&apos;],
      caseStudy: {
        client: &apos;CareConnect Clinic&apos;,
        result: &apos;2.5K+ patients served with 25% reduced no-shows&apos;
      }
    },
    {
      id: &apos;ecommerce&apos;,
      icon: ShoppingCart,
      name: &apos;E-Commerce & Retail&apos;,
      description: &apos;Building next-generation shopping experiences that drive conversions&apos;,
      challenges: [
        &apos;Scalability during peak traffic periods&apos;,
        &apos;Personalization at scale&apos;,
        &apos;Omnichannel customer experience&apos;,
        &apos;Inventory and supply chain optimization&apos;
      ],
      solutions: [
        {
          title: &apos;Headless Commerce Platforms&apos;,
          description: &apos;Flexible, API-first commerce solutions for multi-channel selling&apos;,
          features: [&apos;Headless architecture&apos;, &apos;API-first design&apos;, &apos;Mobile optimization&apos;, &apos;Third-party integrations&apos;]
        },
        {
          title: &apos;AI-Powered Personalization&apos;,
          description: &apos;Machine learning algorithms for personalized product recommendations&apos;,
          features: [&apos;Recommendation engine&apos;, &apos;Dynamic pricing&apos;, &apos;Customer segmentation&apos;, &apos;A/B testing&apos;]
        },
        {
          title: &apos;Inventory Management Systems&apos;,
          description: &apos;Real-time inventory tracking and supply chain optimization&apos;,
          features: [&apos;Real-time tracking&apos;, &apos;Demand forecasting&apos;, &apos;Supplier integration&apos;, &apos;Analytics dashboard&apos;]
        }
      ],
      technologies: [&apos;Next.js&apos;, &apos;Node.js&apos;, &apos;GraphQL&apos;, &apos;PostgreSQL&apos;, &apos;Redis&apos;, &apos;AWS&apos;, &apos;Shopify&apos;, &apos;Stripe&apos;],
      caseStudy: {
        client: &apos;Artisan Marketplace&apos;,
        result: &apos;180% revenue growth with 28% conversion rate increase&apos;
      }
    },
    {
      id: &apos;manufacturing&apos;,
      icon: Factory,
      name: &apos;Manufacturing & Industrial&apos;,
      description: &apos;Enabling smart manufacturing with IoT and predictive analytics&apos;,
      challenges: [
        &apos;Equipment downtime and maintenance costs&apos;,
        &apos;Quality control and compliance&apos;,
        &apos;Supply chain visibility&apos;,
        &apos;Energy efficiency and sustainability&apos;
      ],
      solutions: [
        {
          title: &apos;Industrial IoT Platforms&apos;,
          description: &apos;Connected factory solutions with real-time monitoring and analytics&apos;,
          features: [&apos;IoT sensor integration&apos;, &apos;Real-time monitoring&apos;, &apos;Predictive maintenance&apos;, &apos;Energy optimization&apos;]
        },
        {
          title: &apos;Quality Management Systems&apos;,
          description: &apos;Automated quality control with AI-powered defect detection&apos;,
          features: [&apos;Automated inspection&apos;, &apos;Quality analytics&apos;, &apos;Compliance tracking&apos;, &apos;Supplier management&apos;]
        },
        {
          title: &apos;Supply Chain Optimization&apos;,
          description: &apos;End-to-end supply chain visibility and optimization platform&apos;,
          features: [&apos;Supply chain tracking&apos;, &apos;Demand planning&apos;, &apos;Risk management&apos;, &apos;Logistics optimization&apos;]
        }
      ],
      technologies: [&apos;Python&apos;, &apos;IoT Core&apos;, &apos;TensorFlow&apos;, &apos;Kubernetes&apos;, &apos;BigQuery&apos;, &apos;Angular&apos;, &apos;GCP&apos;, &apos;SAP&apos;],
      caseStudy: {
        client: &apos;MidSize Manufacturing&apos;,
        result: &apos;25% inventory reduction with $500K annual savings&apos;
      }
    },
    {
      id: &apos;education&apos;,
      icon: GraduationCap,
      name: &apos;Education & EdTech&apos;,
      description: &apos;Empowering learning with personalized educational technology&apos;,
      challenges: [
        &apos;Student engagement and retention&apos;,
        &apos;Personalized learning pathways&apos;,
        &apos;Remote and hybrid learning&apos;,
        &apos;Assessment and progress tracking&apos;
      ],
      solutions: [
        {
          title: &apos;Learning Management Systems&apos;,
          description: &apos;Comprehensive LMS with AI-powered adaptive learning&apos;,
          features: [&apos;Course management&apos;, &apos;Student analytics&apos;, &apos;Mobile learning&apos;, &apos;Integration tools&apos;]
        },
        {
          title: &apos;Virtual Classrooms&apos;,
          description: &apos;Interactive online learning environments with collaboration tools&apos;,
          features: [&apos;Video conferencing&apos;, &apos;Interactive whiteboards&apos;, &apos;Breakout rooms&apos;, &apos;Recording capabilities&apos;]
        },
        {
          title: &apos;Student Information Systems&apos;,
          description: &apos;Complete student lifecycle management and analytics platform&apos;,
          features: [&apos;Student records&apos;, &apos;Grade management&apos;, &apos;Parent portals&apos;, &apos;Reporting tools&apos;]
        }
      ],
      technologies: [&apos;React&apos;, &apos;Node.js&apos;, &apos;WebRTC&apos;, &apos;MongoDB&apos;, &apos;AWS&apos;, &apos;OpenAI&apos;, &apos;Zoom SDK&apos;, &apos;Canvas API&apos;],
      caseStudy: {
        client: &apos;SkillBridge Academy&apos;,
        result: &apos;3.5K+ active learners with 78% course completion&apos;
      }
    },
    {
      id: &apos;logistics&apos;,
      icon: Car,
      name: &apos;Logistics & Transportation&apos;,
      description: &apos;Optimizing supply chains with intelligent logistics solutions&apos;,
      challenges: [
        &apos;Route optimization and fuel efficiency&apos;,
        &apos;Real-time tracking and visibility&apos;,
        &apos;Fleet management and maintenance&apos;,
        &apos;Last-mile delivery optimization&apos;
      ],
      solutions: [
        {
          title: &apos;Fleet Management Systems&apos;,
          description: &apos;Comprehensive fleet tracking and optimization platform&apos;,
          features: [&apos;GPS tracking&apos;, &apos;Route optimization&apos;, &apos;Maintenance scheduling&apos;, &apos;Driver management&apos;]
        },
        {
          title: &apos;Warehouse Management&apos;,
          description: &apos;Automated warehouse operations with robotics integration&apos;,
          features: [&apos;Inventory tracking&apos;, &apos;Order fulfillment&apos;, &apos;Robotics integration&apos;, &apos;Analytics dashboard&apos;]
        },
        {
          title: &apos;Delivery Optimization&apos;,
          description: &apos;AI-powered last-mile delivery optimization and customer experience&apos;,
          features: [&apos;Route planning&apos;, &apos;Real-time tracking&apos;, &apos;Customer notifications&apos;, &apos;Delivery analytics&apos;]
        }
      ],
      technologies: [&apos;Python&apos;, &apos;React Native&apos;, &apos;PostgreSQL&apos;, &apos;Redis&apos;, &apos;AWS IoT&apos;, &apos;Machine Learning&apos;, &apos;Maps API&apos;, &apos;WebRTC&apos;],
      caseStudy: {
        client: &apos;Regional Delivery Co.&apos;,
        result: &apos;20% faster deliveries with 15% cost savings&apos;
      }
    }
  ];

  const currentIndustry = industries.find(ind => ind.id === selectedIndustry) || industries[0];

  return (
    <div className=&quot;min-h-screen&quot;>
      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50&quot;></div>
        
        {/* Animated Background */}
        <div className=&quot;absolute inset-0&quot;>
          <motion.div
            className=&quot;absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50&quot;
            animate={{ scale: [1, 1.2, 1], rotate: [0, 120, 240, 360] }}
            transition={{ duration: 30, repeat: Infinity }}
          />
          <motion.div
            className=&quot;absolute bottom-20 right-10 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50&quot;
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 240, 120, 0] }}
            transition={{ duration: 35, repeat: Infinity }}
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
              className=&quot;inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6&quot;
            >
              <Target className=&quot;w-4 h-4 mr-2&quot; />
              Industry Solutions
            </motion.div>

            <h1 className=&quot;heading-1 text-gray-900 mb-6&quot;>
              Tailored Solutions for{&apos; &apos;}
              <span className=&quot;bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent&quot;>
                Every Industry
              </span>
            </h1>
            
            <p className=&quot;body-large text-gray-600 mb-8&quot;>
              We understand that every industry has unique challenges. Our specialized solutions 
              are designed to address your specific needs and drive measurable business outcomes.
            </p>

            {/* Industry Stats */}
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mt-12&quot;>
              {[
                { value: &apos;8+&apos;, label: &apos;Industries Served&apos; },
                { value: &apos;94%&apos;, label: &apos;Success Rate&apos; },
                { value: &apos;$15M+&apos;, label: &apos;Client Value Created&apos; },
                { value: &apos;12+&apos;, label: &apos;Industry Experts&apos; }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <div className=&quot;text-3xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent&quot;>
                    {stat.value}
                  </div>
                  <div className=&quot;text-gray-600 text-sm&quot;>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Selection */}
      <section className=&quot;section-padding bg-white&quot;>
        <div className=&quot;container-custom&quot;>
          {/* Industry Navigation */}
          <div className=&quot;grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12&quot;>
            {industries.map((industry) => (
              <motion.button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`p-4 rounded-2xl text-center transition-all ${
                  selectedIndustry === industry.id
                    ? &apos;bg-gradient-to-br from-blue-600 to-green-600 text-white shadow-lg&apos;
                    : &apos;bg-gray-50 text-gray-700 hover:bg-gray-100&apos;
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <industry.icon className=&quot;w-8 h-8 mx-auto mb-2&quot; />
                <div className=&quot;text-sm font-medium&quot;>{industry.name.split(&apos; &apos;)[0]}</div>
                <div className=&quot;text-xs opacity-75&quot;>{industry.name.split(&apos; &apos;).slice(1).join(&apos; &apos;)}</div>
              </motion.button>
            ))}
          </div>

          {/* Selected Industry Details */}
          <motion.div
            key={selectedIndustry}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className=&quot;grid lg:grid-cols-3 gap-12&quot;
          >
            {/* Industry Overview */}
            <div className=&quot;lg:col-span-1&quot;>
              <Card className=&quot;p-6 h-full&quot;>
                <div className=&quot;flex items-center mb-4&quot;>
                  <div className=&quot;w-12 h-12 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl flex items-center justify-center mr-4&quot;>
                    <currentIndustry.icon className=&quot;w-6 h-6 text-blue-600&quot; />
                  </div>
                  <h3 className=&quot;heading-3 text-gray-900&quot;>{currentIndustry.name}</h3>
                </div>
                
                <p className=&quot;text-gray-600 mb-6&quot;>{currentIndustry.description}</p>

                {/* Key Challenges */}
                <h4 className=&quot;heading-5 text-gray-900 mb-4&quot;>Key Challenges</h4>
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {currentIndustry.challenges.map((challenge, index) => (
                    <li key={index} className=&quot;flex items-start text-sm text-gray-600&quot;>
                      <Shield className=&quot;w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0&quot; />
                      {challenge}
                    </li>
                  ))}
                </ul>

                {/* Case Study Highlight */}
                <div className=&quot;bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-4&quot;>
                  <div className=&quot;flex items-center mb-2&quot;>
                    <TrendingUp className=&quot;w-5 h-5 text-green-600 mr-2&quot; />
                    <span className=&quot;font-semibold text-gray-900&quot;>Success Story</span>
                  </div>
                  <p className=&quot;text-sm text-gray-700 mb-1&quot;>{currentIndustry.caseStudy.client}</p>
                  <p className=&quot;text-xs text-gray-600&quot;>{currentIndustry.caseStudy.result}</p>
                </div>
              </Card>
            </div>

            {/* Solutions */}
            <div className=&quot;lg:col-span-2&quot;>
              <h3 className=&quot;heading-3 text-gray-900 mb-6&quot;>Our Solutions</h3>
              <div className=&quot;space-y-6&quot;>
                {currentIndustry.solutions.map((solution, index) => (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className=&quot;p-6 hover:shadow-lg transition-shadow&quot;>
                      <h4 className=&quot;heading-4 text-gray-900 mb-3&quot;>{solution.title}</h4>
                      <p className=&quot;text-gray-600 mb-4&quot;>{solution.description}</p>
                      
                      <div className=&quot;grid md:grid-cols-2 gap-3&quot;>
                        {solution.features.map((feature) => (
                          <div key={feature} className=&quot;flex items-center text-sm text-gray-600&quot;>
                            <CheckCircle className=&quot;w-4 h-4 text-green-500 mr-2 flex-shrink-0&quot; />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Technologies */}
              <div className=&quot;mt-8&quot;>
                <h4 className=&quot;heading-4 text-gray-900 mb-4&quot;>Technologies We Use</h4>
                <div className=&quot;flex flex-wrap gap-2&quot;>
                  {currentIndustry.technologies.map((tech) => (
                    <span
                      key={tech}
                      className=&quot;px-3 py-1 bg-gradient-to-r from-blue-100 to-green-100 text-gray-700 rounded-lg text-sm font-medium&quot;
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className=&quot;mt-8&quot;>
                <Button 
                  variant=&quot;primary&quot; 
                  size=&quot;lg&quot; 
                  icon={<ArrowRight className=&quot;w-5 h-5&quot; />} 
                  iconPosition=&quot;right&quot;
                >
                  Discuss Your {currentIndustry.name} Project
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className=&quot;section-padding bg-gray-50&quot;>
        <div className=&quot;container-custom&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;heading-2 text-gray-900 mb-6&quot;>
              Why Choose Our{&apos; &apos;}
              <span className=&quot;bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent&quot;>
                Industry Expertise
              </span>
            </h2>
            <p className=&quot;body-large text-gray-600 max-w-3xl mx-auto&quot;>
              We combine deep industry knowledge with cutting-edge technology to deliver solutions that truly understand your business
            </p>
          </motion.div>

          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            {[
              {
                icon: Users,
                title: &apos;Industry Veterans&apos;,
                description: &apos;Our team includes domain experts with decades of experience in each industry we serve&apos;
              },
              {
                icon: Shield,
                title: &apos;Compliance First&apos;,
                description: &apos;We understand regulatory requirements and build compliance into every solution from day one&apos;
              },
              {
                icon: Zap,
                title: &apos;Rapid Innovation&apos;,
                description: &apos;Stay ahead of industry trends with our cutting-edge technology and innovation approach&apos;
              },
              {
                icon: Globe,
                title: &apos;Global Perspective&apos;,
                description: &apos;Local expertise with global best practices to ensure your solution works anywhere&apos;
              },
              {
                icon: BarChart,
                title: &apos;Measurable Results&apos;,
                description: &apos;Data-driven approach with clear KPIs and ROI tracking for every project&apos;
              },
              {
                icon: Lock,
                title: &apos;Enterprise Security&apos;,
                description: &apos;Bank-level security and data protection across all our industry solutions&apos;
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className=&quot;p-6 h-full text-center hover:shadow-xl transition-shadow&quot;>
                  <div className=&quot;w-16 h-16 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                    <benefit.icon className=&quot;w-8 h-8 text-blue-600&quot; />
                  </div>
                  <h4 className=&quot;heading-4 text-gray-900 mb-3&quot;>{benefit.title}</h4>
                  <p className=&quot;text-gray-600 text-sm&quot;>{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;section-padding bg-gradient-to-br from-blue-600 to-green-600 text-white&quot;>
        <div className=&quot;container-custom text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;heading-2 text-white mb-6&quot;>
              Ready to Transform Your Industry?
            </h2>
            <p className=&quot;body-large text-white/90 max-w-3xl mx-auto mb-8&quot;>
              Let&apos;s discuss how our industry-specific expertise can help you overcome challenges 
              and achieve unprecedented growth in your market.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button variant=&quot;accent&quot; size=&quot;lg&quot;>
                Schedule Industry Consultation
              </Button>
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; className=&quot;bg-white/10 border-white/20 text-white hover:bg-white hover:text-blue-600&quot;>
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