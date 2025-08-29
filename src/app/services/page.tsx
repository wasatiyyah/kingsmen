&apos;use client&apos;;

import React, { useState } from &apos;react&apos;;
import { motion } from &apos;framer-motion&apos;;
import { 
  Code, Cloud, Database, Shield, Zap, Users, 
  ArrowRight, CheckCircle, Cpu, Globe, Lock, 
  Smartphone, Monitor, Server, GitBranch, Layers,
  TrendingUp, BarChart, Brain, Palette, Settings
} from &apos;lucide-react&apos;;
import Card from &apos;@/components/ui/Card&apos;;
import Button from &apos;@/components/ui/Button&apos;;

const ServicesPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      id: &apos;software-dev&apos;,
      icon: Code,
      title: &apos;Custom Software Development&apos;,
      tagline: &apos;Transforming Ideas into Powerful Digital Solutions&apos;,
      description: &apos;We craft bespoke software solutions that perfectly align with your business objectives. Our full-stack development expertise spans from intuitive user interfaces to robust backend systems, ensuring seamless performance and scalability.&apos;,
      features: [
        {
          title: &apos;Web Application Development&apos;,
          description: &apos;Modern, responsive web applications using React, Angular, Vue.js, and Next.js&apos;
        },
        {
          title: &apos;Mobile App Development&apos;,
          description: &apos;Native and cross-platform mobile apps for iOS and Android&apos;
        },
        {
          title: &apos;API Development & Integration&apos;,
          description: &apos;RESTful and GraphQL APIs with seamless third-party integrations&apos;
        },
        {
          title: &apos;Enterprise Software Solutions&apos;,
          description: &apos;Large-scale systems designed for performance and reliability&apos;
        },
        {
          title: &apos;Legacy System Modernization&apos;,
          description: &apos;Transform outdated systems into modern, efficient solutions&apos;
        },
        {
          title: &apos;SaaS Product Development&apos;,
          description: &apos;End-to-end SaaS platform development with multi-tenancy&apos;
        }
      ],
      technologies: [&apos;React&apos;, &apos;Node.js&apos;, &apos;Python&apos;, &apos;Java&apos;, &apos;.NET&apos;, &apos;Go&apos;, &apos;TypeScript&apos;, &apos;PostgreSQL&apos;, &apos;MongoDB&apos;],
      process: [
        &apos;Requirements Analysis&apos;,
        &apos;Architecture Design&apos;,
        &apos;Agile Development&apos;,
        &apos;Quality Assurance&apos;,
        &apos;Deployment&apos;,
        &apos;Maintenance&apos;
      ]
    },
    {
      id: &apos;cloud-architecture&apos;,
      icon: Cloud,
      title: &apos;Cloud Architecture & Migration&apos;,
      tagline: &apos;Scaling Your Business to the Cloud&apos;,
      description: &apos;Navigate your cloud journey with confidence. We design, implement, and optimize cloud infrastructures that reduce costs, improve performance, and ensure business continuity across AWS, Azure, and Google Cloud Platform.&apos;,
      features: [
        {
          title: &apos;Cloud Strategy & Consulting&apos;,
          description: &apos;Comprehensive cloud adoption roadmap tailored to your business&apos;
        },
        {
          title: &apos;Cloud Migration Services&apos;,
          description: &apos;Seamless migration of applications, data, and infrastructure&apos;
        },
        {
          title: &apos;Multi-Cloud Architecture&apos;,
          description: &apos;Leverage the best of AWS, Azure, and GCP&apos;
        },
        {
          title: &apos;Kubernetes & Containerization&apos;,
          description: &apos;Container orchestration for scalable microservices&apos;
        },
        {
          title: &apos;Serverless Architecture&apos;,
          description: &apos;Cost-effective serverless solutions with AWS Lambda, Azure Functions&apos;
        },
        {
          title: &apos;Cloud Cost Optimization&apos;,
          description: &apos;Reduce cloud spending by up to 40% with our optimization strategies&apos;
        }
      ],
      technologies: [&apos;AWS&apos;, &apos;Azure&apos;, &apos;GCP&apos;, &apos;Kubernetes&apos;, &apos;Docker&apos;, &apos;Terraform&apos;, &apos;CloudFormation&apos;, &apos;Ansible&apos;],
      process: [
        &apos;Cloud Assessment&apos;,
        &apos;Architecture Design&apos;,
        &apos;Migration Planning&apos;,
        &apos;Implementation&apos;,
        &apos;Optimization&apos;,
        &apos;Monitoring&apos;
      ]
    },
    {
      id: &apos;data-engineering&apos;,
      icon: Database,
      title: &apos;Data Engineering & Analytics&apos;,
      tagline: &apos;Turn Data into Your Competitive Advantage&apos;,
      description: &apos;Unlock the power of your data with our comprehensive data engineering and analytics solutions. We build robust data pipelines, create insightful dashboards, and implement machine learning models that drive informed decision-making.&apos;,
      features: [
        {
          title: &apos;Data Pipeline Development&apos;,
          description: &apos;ETL/ELT pipelines for real-time and batch data processing&apos;
        },
        {
          title: &apos;Data Warehouse Solutions&apos;,
          description: &apos;Modern data warehouses with Snowflake, Redshift, BigQuery&apos;
        },
        {
          title: &apos;Business Intelligence&apos;,
          description: &apos;Interactive dashboards with Tableau, Power BI, and Looker&apos;
        },
        {
          title: &apos;Machine Learning Engineering&apos;,
          description: &apos;Production-ready ML models and MLOps pipelines&apos;
        },
        {
          title: &apos;Real-time Analytics&apos;,
          description: &apos;Stream processing with Kafka, Spark, and Flink&apos;
        },
        {
          title: &apos;Data Governance&apos;,
          description: &apos;Ensure data quality, security, and compliance&apos;
        }
      ],
      technologies: [&apos;Python&apos;, &apos;Spark&apos;, &apos;Airflow&apos;, &apos;Snowflake&apos;, &apos;Databricks&apos;, &apos;TensorFlow&apos;, &apos;PyTorch&apos;, &apos;Kafka&apos;],
      process: [
        &apos;Data Assessment&apos;,
        &apos;Pipeline Design&apos;,
        &apos;Implementation&apos;,
        &apos;Model Development&apos;,
        &apos;Deployment&apos;,
        &apos;Monitoring&apos;
      ]
    },
    {
      id: &apos;cybersecurity&apos;,
      icon: Shield,
      title: &apos;Cybersecurity & Compliance&apos;,
      tagline: &apos;Protecting Your Digital Assets&apos;,
      description: &apos;Safeguard your business with enterprise-grade security solutions. Our comprehensive cybersecurity services protect against evolving threats while ensuring compliance with industry regulations and standards.&apos;,
      features: [
        {
          title: &apos;Security Audits & Assessments&apos;,
          description: &apos;Comprehensive vulnerability assessments and penetration testing&apos;
        },
        {
          title: &apos;Cloud Security&apos;,
          description: &apos;Secure cloud architectures with zero-trust principles&apos;
        },
        {
          title: &apos;Compliance Implementation&apos;,
          description: &apos;GDPR, HIPAA, SOC 2, ISO 27001 compliance solutions&apos;
        },
        {
          title: &apos;Identity & Access Management&apos;,
          description: &apos;Implement SSO, MFA, and privileged access management&apos;
        },
        {
          title: &apos;Security Operations Center&apos;,
          description: &apos;24/7 threat monitoring and incident response&apos;
        },
        {
          title: &apos;DevSecOps Integration&apos;,
          description: &apos;Embed security into your CI/CD pipeline&apos;
        }
      ],
      technologies: [&apos;SIEM&apos;, &apos;WAF&apos;, &apos;IDS/IPS&apos;, &apos;OAuth&apos;, &apos;SAML&apos;, &apos;Vault&apos;, &apos;Sentinel&apos;, &apos;CrowdStrike&apos;],
      process: [
        &apos;Risk Assessment&apos;,
        &apos;Security Architecture&apos;,
        &apos;Implementation&apos;,
        &apos;Testing&apos;,
        &apos;Monitoring&apos;,
        &apos;Incident Response&apos;
      ]
    },
    {
      id: &apos;digital-transformation&apos;,
      icon: Zap,
      title: &apos;Digital Transformation&apos;,
      tagline: &apos;Accelerate Your Digital Evolution&apos;,
      description: &apos;Lead your industry with comprehensive digital transformation strategies. We help organizations reimagine their business models, optimize operations, and create exceptional digital experiences that drive growth.&apos;,
      features: [
        {
          title: &apos;Digital Strategy Consulting&apos;,
          description: &apos;Roadmap for digital innovation and competitive advantage&apos;
        },
        {
          title: &apos;Process Automation&apos;,
          description: &apos;RPA and intelligent automation to streamline operations&apos;
        },
        {
          title: &apos;Customer Experience Design&apos;,
          description: &apos;Omnichannel experiences that delight customers&apos;
        },
        {
          title: &apos;IoT Solutions&apos;,
          description: &apos;Connected devices and smart systems integration&apos;
        },
        {
          title: &apos;Blockchain Development&apos;,
          description: &apos;Decentralized applications and smart contracts&apos;
        },
        {
          title: &apos;Change Management&apos;,
          description: &apos;Guide your organization through digital adoption&apos;
        }
      ],
      technologies: [&apos;IoT&apos;, &apos;Blockchain&apos;, &apos;RPA&apos;, &apos;AI/ML&apos;, &apos;AR/VR&apos;, &apos;Edge Computing&apos;, &apos;Quantum&apos;, &apos;5G&apos;],
      process: [
        &apos;Digital Maturity Assessment&apos;,
        &apos;Strategy Development&apos;,
        &apos;Pilot Projects&apos;,
        &apos;Scale Implementation&apos;,
        &apos;Change Management&apos;,
        &apos;Continuous Innovation&apos;
      ]
    },
    {
      id: &apos;devops&apos;,
      icon: GitBranch,
      title: &apos;DevOps & Site Reliability&apos;,
      tagline: &apos;Accelerate Delivery, Ensure Reliability&apos;,
      description: &apos;Transform your software delivery with modern DevOps practices. We implement CI/CD pipelines, infrastructure as code, and monitoring solutions that accelerate deployment while maintaining rock-solid reliability.&apos;,
      features: [
        {
          title: &apos;CI/CD Pipeline Development&apos;,
          description: &apos;Automated build, test, and deployment pipelines&apos;
        },
        {
          title: &apos;Infrastructure as Code&apos;,
          description: &apos;Terraform, CloudFormation, and Pulumi implementations&apos;
        },
        {
          title: &apos;Container Orchestration&apos;,
          description: &apos;Kubernetes cluster setup and management&apos;
        },
        {
          title: &apos;Monitoring & Observability&apos;,
          description: &apos;Comprehensive monitoring with Prometheus, Grafana, ELK&apos;
        },
        {
          title: &apos;Site Reliability Engineering&apos;,
          description: &apos;Achieve 99.99% uptime with SRE practices&apos;
        },
        {
          title: &apos;GitOps Implementation&apos;,
          description: &apos;Declarative infrastructure and application delivery&apos;
        }
      ],
      technologies: [&apos;Jenkins&apos;, &apos;GitHub Actions&apos;, &apos;GitLab CI&apos;, &apos;ArgoCD&apos;, &apos;Prometheus&apos;, &apos;Grafana&apos;, &apos;ELK Stack&apos;, &apos;Datadog&apos;],
      process: [
        &apos;Current State Analysis&apos;,
        &apos;DevOps Strategy&apos;,
        &apos;Tool Selection&apos;,
        &apos;Pipeline Implementation&apos;,
        &apos;Automation&apos;,
        &apos;Continuous Improvement&apos;
      ]
    }
  ];

  const methodologies = [
    {
      icon: Layers,
      title: &apos;Agile Development&apos;,
      description: &apos;Iterative development with regular feedback and continuous improvement&apos;
    },
    {
      icon: GitBranch,
      title: &apos;DevOps Integration&apos;,
      description: &apos;Seamless collaboration between development and operations teams&apos;
    },
    {
      icon: Brain,
      title: &apos;Design Thinking&apos;,
      description: &apos;Human-centered approach to innovation and problem-solving&apos;
    },
    {
      icon: TrendingUp,
      title: &apos;Continuous Delivery&apos;,
      description: &apos;Rapid, reliable software releases through automation&apos;
    }
  ];

  return (
    <div className=&quot;min-h-screen&quot;>
      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50&quot;></div>
        
        {/* Animated Background */}
        <div className=&quot;absolute inset-0&quot;>
          <motion.div
            className=&quot;absolute top-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50&quot;
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
          />
          <motion.div
            className=&quot;absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50&quot;
            animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
            transition={{ duration: 30, repeat: Infinity }}
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
              <Zap className=&quot;w-4 h-4 mr-2&quot; />
              Our Services
            </motion.div>

            <h1 className=&quot;heading-1 text-gray-900 mb-6&quot;>
              World-Class <span className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent&quot;>Technology Solutions</span> for Modern Businesses
            </h1>
            
            <p className=&quot;body-large text-gray-600 mb-8&quot;>
              From custom software development to cloud architecture and digital transformation, 
              we deliver comprehensive solutions that drive innovation, efficiency, and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Tabs Section */}
      <section className=&quot;section-padding bg-white&quot;>
        <div className=&quot;container-custom&quot;>
          {/* Service Navigation */}
          <div className=&quot;flex flex-wrap justify-center gap-4 mb-12&quot;>
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setSelectedService(index)}
                className={`px-6 py-3 rounded-xl font-medium transition-all ${
                  selectedService === index
                    ? &apos;bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg&apos;
                    : &apos;bg-gray-100 text-gray-700 hover:bg-gray-200&apos;
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <service.icon className=&quot;w-5 h-5 inline mr-2&quot; />
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
            <div className=&quot;grid lg:grid-cols-2 gap-12 mb-16&quot;>
              <div>
                <h2 className=&quot;heading-2 text-gray-900 mb-4&quot;>
                  {services[selectedService].title}
                </h2>
                <p className=&quot;text-xl text-blue-600 mb-6&quot;>
                  {services[selectedService].tagline}
                </p>
                <p className=&quot;text-gray-600 leading-relaxed mb-8&quot;>
                  {services[selectedService].description}
                </p>

                {/* Process Steps */}
                <div className=&quot;bg-gray-50 rounded-2xl p-6&quot;>
                  <h4 className=&quot;heading-4 text-gray-900 mb-4&quot;>Our Process</h4>
                  <div className=&quot;space-y-3&quot;>
                    {services[selectedService].process.map((step, index) => (
                      <div key={step} className=&quot;flex items-center&quot;>
                        <div className=&quot;w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3&quot;>
                          {index + 1}
                        </div>
                        <span className=&quot;text-gray-700&quot;>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                {/* Features */}
                <h4 className=&quot;heading-4 text-gray-900 mb-6&quot;>Key Capabilities</h4>
                <div className=&quot;space-y-4 mb-8&quot;>
                  {services[selectedService].features.map((feature) => (
                    <Card key={feature.title} className=&quot;p-4&quot;>
                      <h5 className=&quot;font-semibold text-gray-900 mb-2 flex items-center&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-500 mr-2&quot; />
                        {feature.title}
                      </h5>
                      <p className=&quot;text-gray-600 text-sm ml-7&quot;>{feature.description}</p>
                    </Card>
                  ))}
                </div>

                {/* Technologies */}
                <div className=&quot;bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6&quot;>
                  <h4 className=&quot;heading-5 text-gray-900 mb-4&quot;>Technologies We Use</h4>
                  <div className=&quot;flex flex-wrap gap-2&quot;>
                    {services[selectedService].technologies.map((tech) => (
                      <span
                        key={tech}
                        className=&quot;px-3 py-1 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm&quot;
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className=&quot;text-center&quot;>
              <Button variant=&quot;primary&quot; size=&quot;lg&quot; icon={<ArrowRight className=&quot;w-5 h-5&quot; />} iconPosition=&quot;right&quot;>
                Get Started with {services[selectedService].title}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Methodology */}
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
              Our <span className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent&quot;>Methodology</span>
            </h2>
            <p className=&quot;body-large text-gray-600 max-w-3xl mx-auto&quot;>
              We follow industry best practices and proven methodologies to ensure project success
            </p>
          </motion.div>

          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {methodologies.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className=&quot;p-6 h-full text-center hover:shadow-xl transition-shadow&quot;>
                  <div className=&quot;w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                    <method.icon className=&quot;w-8 h-8 text-blue-600&quot; />
                  </div>
                  <h4 className=&quot;heading-5 text-gray-900 mb-3&quot;>{method.title}</h4>
                  <p className=&quot;text-gray-600 text-sm&quot;>{method.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Preview */}
      <section className=&quot;section-padding bg-white&quot;>
        <div className=&quot;container-custom&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;heading-2 text-gray-900 mb-6&quot;>
              Powered by <span className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent&quot;>Leading Technologies</span>
            </h2>
            <p className=&quot;body-large text-gray-600 max-w-3xl mx-auto&quot;>
              We leverage the most advanced tools and frameworks to deliver exceptional results
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-3 md:grid-cols-6 gap-8&quot;>
            {[
              { name: &apos;AWS&apos;, icon: Cloud },
              { name: &apos;Azure&apos;, icon: Cloud },
              { name: &apos;Google Cloud&apos;, icon: Cloud },
              { name: &apos;React&apos;, icon: Code },
              { name: &apos;Python&apos;, icon: Code },
              { name: &apos;Docker&apos;, icon: Server },
              { name: &apos;Kubernetes&apos;, icon: Server },
              { name: &apos;TensorFlow&apos;, icon: Brain },
              { name: &apos;Node.js&apos;, icon: Code },
              { name: &apos;PostgreSQL&apos;, icon: Database },
              { name: &apos;MongoDB&apos;, icon: Database },
              { name: &apos;Jenkins&apos;, icon: GitBranch }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className=&quot;flex flex-col items-center&quot;
              >
                <div className=&quot;w-20 h-20 bg-gray-50 rounded-xl flex items-center justify-center mb-2 hover:shadow-lg transition-shadow&quot;>
                  <tech.icon className=&quot;w-10 h-10 text-gray-600&quot; />
                </div>
                <span className=&quot;text-sm text-gray-600&quot;>{tech.name}</span>
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
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;body-large text-white/90 max-w-3xl mx-auto mb-8&quot;>
              Let&apos;s discuss how our services can help you achieve your goals and drive measurable results
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button variant=&quot;accent&quot; size=&quot;lg&quot;>
                Schedule Free Consultation
              </Button>
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; className=&quot;bg-white/10 border-white/20 text-white hover:bg-white hover:text-blue-600&quot;>
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