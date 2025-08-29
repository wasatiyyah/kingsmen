'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Cloud, Database, Shield, Zap, Users, 
  ArrowRight, CheckCircle, Cpu, Globe, Lock, 
  Smartphone, Monitor, Server, GitBranch, Layers,
  TrendingUp, BarChart, Brain, Palette, Settings
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      id: 'software-dev',
      icon: Code,
      title: 'Custom Software Development',
      tagline: 'Transforming Ideas into Powerful Digital Solutions',
      description: 'We craft bespoke software solutions that perfectly align with your business objectives. Our full-stack development expertise spans from intuitive user interfaces to robust backend systems, ensuring seamless performance and scalability.',
      features: [
        {
          title: 'Web Application Development',
          description: 'Modern, responsive web applications using React, Angular, Vue.js, and Next.js'
        },
        {
          title: 'Mobile App Development',
          description: 'Native and cross-platform mobile apps for iOS and Android'
        },
        {
          title: 'API Development & Integration',
          description: 'RESTful and GraphQL APIs with seamless third-party integrations'
        },
        {
          title: 'Enterprise Software Solutions',
          description: 'Large-scale systems designed for performance and reliability'
        },
        {
          title: 'Legacy System Modernization',
          description: 'Transform outdated systems into modern, efficient solutions'
        },
        {
          title: 'SaaS Product Development',
          description: 'End-to-end SaaS platform development with multi-tenancy'
        }
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', '.NET', 'Go', 'TypeScript', 'PostgreSQL', 'MongoDB'],
      process: [
        'Requirements Analysis',
        'Architecture Design',
        'Agile Development',
        'Quality Assurance',
        'Deployment',
        'Maintenance'
      ]
    },
    {
      id: 'cloud-architecture',
      icon: Cloud,
      title: 'Cloud Architecture & Migration',
      tagline: 'Scaling Your Business to the Cloud',
      description: 'Navigate your cloud journey with confidence. We design, implement, and optimize cloud infrastructures that reduce costs, improve performance, and ensure business continuity across AWS, Azure, and Google Cloud Platform.',
      features: [
        {
          title: 'Cloud Strategy & Consulting',
          description: 'Comprehensive cloud adoption roadmap tailored to your business'
        },
        {
          title: 'Cloud Migration Services',
          description: 'Seamless migration of applications, data, and infrastructure'
        },
        {
          title: 'Multi-Cloud Architecture',
          description: 'Leverage the best of AWS, Azure, and GCP'
        },
        {
          title: 'Kubernetes & Containerization',
          description: 'Container orchestration for scalable microservices'
        },
        {
          title: 'Serverless Architecture',
          description: 'Cost-effective serverless solutions with AWS Lambda, Azure Functions'
        },
        {
          title: 'Cloud Cost Optimization',
          description: 'Reduce cloud spending by up to 40% with our optimization strategies'
        }
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'Terraform', 'CloudFormation', 'Ansible'],
      process: [
        'Cloud Assessment',
        'Architecture Design',
        'Migration Planning',
        'Implementation',
        'Optimization',
        'Monitoring'
      ]
    },
    {
      id: 'data-engineering',
      icon: Database,
      title: 'Data Engineering & Analytics',
      tagline: 'Turn Data into Your Competitive Advantage',
      description: 'Unlock the power of your data with our comprehensive data engineering and analytics solutions. We build robust data pipelines, create insightful dashboards, and implement machine learning models that drive informed decision-making.',
      features: [
        {
          title: 'Data Pipeline Development',
          description: 'ETL/ELT pipelines for real-time and batch data processing'
        },
        {
          title: 'Data Warehouse Solutions',
          description: 'Modern data warehouses with Snowflake, Redshift, BigQuery'
        },
        {
          title: 'Business Intelligence',
          description: 'Interactive dashboards with Tableau, Power BI, and Looker'
        },
        {
          title: 'Machine Learning Engineering',
          description: 'Production-ready ML models and MLOps pipelines'
        },
        {
          title: 'Real-time Analytics',
          description: 'Stream processing with Kafka, Spark, and Flink'
        },
        {
          title: 'Data Governance',
          description: 'Ensure data quality, security, and compliance'
        }
      ],
      technologies: ['Python', 'Spark', 'Airflow', 'Snowflake', 'Databricks', 'TensorFlow', 'PyTorch', 'Kafka'],
      process: [
        'Data Assessment',
        'Pipeline Design',
        'Implementation',
        'Model Development',
        'Deployment',
        'Monitoring'
      ]
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      tagline: 'Protecting Your Digital Assets',
      description: 'Safeguard your business with enterprise-grade security solutions. Our comprehensive cybersecurity services protect against evolving threats while ensuring compliance with industry regulations and standards.',
      features: [
        {
          title: 'Security Audits & Assessments',
          description: 'Comprehensive vulnerability assessments and penetration testing'
        },
        {
          title: 'Cloud Security',
          description: 'Secure cloud architectures with zero-trust principles'
        },
        {
          title: 'Compliance Implementation',
          description: 'GDPR, HIPAA, SOC 2, ISO 27001 compliance solutions'
        },
        {
          title: 'Identity & Access Management',
          description: 'Implement SSO, MFA, and privileged access management'
        },
        {
          title: 'Security Operations Center',
          description: '24/7 threat monitoring and incident response'
        },
        {
          title: 'DevSecOps Integration',
          description: 'Embed security into your CI/CD pipeline'
        }
      ],
      technologies: ['SIEM', 'WAF', 'IDS/IPS', 'OAuth', 'SAML', 'Vault', 'Sentinel', 'CrowdStrike'],
      process: [
        'Risk Assessment',
        'Security Architecture',
        'Implementation',
        'Testing',
        'Monitoring',
        'Incident Response'
      ]
    },
    {
      id: 'digital-transformation',
      icon: Zap,
      title: 'Digital Transformation',
      tagline: 'Accelerate Your Digital Evolution',
      description: 'Lead your industry with comprehensive digital transformation strategies. We help organizations reimagine their business models, optimize operations, and create exceptional digital experiences that drive growth.',
      features: [
        {
          title: 'Digital Strategy Consulting',
          description: 'Roadmap for digital innovation and competitive advantage'
        },
        {
          title: 'Process Automation',
          description: 'RPA and intelligent automation to streamline operations'
        },
        {
          title: 'Customer Experience Design',
          description: 'Omnichannel experiences that delight customers'
        },
        {
          title: 'IoT Solutions',
          description: 'Connected devices and smart systems integration'
        },
        {
          title: 'Blockchain Development',
          description: 'Decentralized applications and smart contracts'
        },
        {
          title: 'Change Management',
          description: 'Guide your organization through digital adoption'
        }
      ],
      technologies: ['IoT', 'Blockchain', 'RPA', 'AI/ML', 'AR/VR', 'Edge Computing', 'Quantum', '5G'],
      process: [
        'Digital Maturity Assessment',
        'Strategy Development',
        'Pilot Projects',
        'Scale Implementation',
        'Change Management',
        'Continuous Innovation'
      ]
    },
    {
      id: 'devops',
      icon: GitBranch,
      title: 'DevOps & Site Reliability',
      tagline: 'Accelerate Delivery, Ensure Reliability',
      description: 'Transform your software delivery with modern DevOps practices. We implement CI/CD pipelines, infrastructure as code, and monitoring solutions that accelerate deployment while maintaining rock-solid reliability.',
      features: [
        {
          title: 'CI/CD Pipeline Development',
          description: 'Automated build, test, and deployment pipelines'
        },
        {
          title: 'Infrastructure as Code',
          description: 'Terraform, CloudFormation, and Pulumi implementations'
        },
        {
          title: 'Container Orchestration',
          description: 'Kubernetes cluster setup and management'
        },
        {
          title: 'Monitoring & Observability',
          description: 'Comprehensive monitoring with Prometheus, Grafana, ELK'
        },
        {
          title: 'Site Reliability Engineering',
          description: 'Achieve 99.99% uptime with SRE practices'
        },
        {
          title: 'GitOps Implementation',
          description: 'Declarative infrastructure and application delivery'
        }
      ],
      technologies: ['Jenkins', 'GitHub Actions', 'GitLab CI', 'ArgoCD', 'Prometheus', 'Grafana', 'ELK Stack', 'Datadog'],
      process: [
        'Current State Analysis',
        'DevOps Strategy',
        'Tool Selection',
        'Pipeline Implementation',
        'Automation',
        'Continuous Improvement'
      ]
    }
  ];

  const methodologies = [
    {
      icon: Layers,
      title: 'Agile Development',
      description: 'Iterative development with regular feedback and continuous improvement'
    },
    {
      icon: GitBranch,
      title: 'DevOps Integration',
      description: 'Seamless collaboration between development and operations teams'
    },
    {
      icon: Brain,
      title: 'Design Thinking',
      description: 'Human-centered approach to innovation and problem-solving'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Delivery',
      description: 'Rapid, reliable software releases through automation'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
            transition={{ duration: 30, repeat: Infinity }}
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
              <Zap className="w-4 h-4 mr-2" />
              Our Services
            </motion.div>

            <h1 className="heading-1 text-gray-900 mb-6">
              World-Class <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technology Solutions</span> for Modern Businesses
            </h1>
            
            <p className="body-large text-gray-600 mb-8">
              From custom software development to cloud architecture and digital transformation, 
              we deliver comprehensive solutions that drive innovation, efficiency, and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Tabs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Service Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setSelectedService(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedService === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <service.icon className="w-5 h-5 inline mr-2" />
                {service.title}
              </motion.button>
            ))}
          </div>

          {/* Service Details */}
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="heading-2 text-gray-900 mb-4">
                  {services[selectedService].title}
                </h2>
                <p className="text-xl text-blue-600 mb-6">
                  {services[selectedService].tagline}
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {services[selectedService].description}
                </p>

                {/* Process Steps */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="heading-4 text-gray-900 mb-4">Our Process</h4>
                  <div className="space-y-3">
                    {services[selectedService].process.map((step, index) => (
                      <div key={step} className="flex items-center">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                {/* Features */}
                <h4 className="heading-4 text-gray-900 mb-6">Key Capabilities</h4>
                <div className="space-y-4 mb-8">
                  {services[selectedService].features.map((feature) => (
                    <Card key={feature.title} className="p-4">
                      <h5 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        {feature.title}
                      </h5>
                      <p className="text-gray-600 text-sm ml-7">{feature.description}</p>
                    </Card>
                  ))}
                </div>

                {/* Technologies */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
                  <h4 className="heading-5 text-gray-900 mb-4">Technologies We Use</h4>
                  <div className="flex flex-wrap gap-2">
                    {services[selectedService].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />} iconPosition="right">
                Get Started with {services[selectedService].title}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Methodology */}
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
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Methodology</span>
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We follow industry best practices and proven methodologies to ensure project success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodologies.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="heading-5 text-gray-900 mb-3">{method.title}</h4>
                  <p className="text-gray-600 text-sm">{method.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-gray-900 mb-6">
              Powered by <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Leading Technologies</span>
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We leverage the most advanced tools and frameworks to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {[
              { name: 'AWS', icon: Cloud },
              { name: 'Azure', icon: Cloud },
              { name: 'Google Cloud', icon: Cloud },
              { name: 'React', icon: Code },
              { name: 'Python', icon: Code },
              { name: 'Docker', icon: Server },
              { name: 'Kubernetes', icon: Server },
              { name: 'TensorFlow', icon: Brain },
              { name: 'Node.js', icon: Code },
              { name: 'PostgreSQL', icon: Database },
              { name: 'MongoDB', icon: Database },
              { name: 'Jenkins', icon: GitBranch }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center mb-2 hover:shadow-lg transition-shadow">
                  <tech.icon className="w-10 h-10 text-gray-600" />
                </div>
                <span className="text-sm text-gray-600">{tech.name}</span>
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
              Ready to Transform Your Business?
            </h2>
            <p className="body-large text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how our services can help you achieve your goals and drive measurable results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="accent" size="lg">
                Schedule Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-blue-600">
                Download Service Catalog
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;