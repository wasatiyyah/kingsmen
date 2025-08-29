&apos;use client&apos;;

import React from &apos;react&apos;;
import { motion } from &apos;framer-motion&apos;;
import { Code, Cloud, Database, Shield, Zap, Users, ArrowRight, CheckCircle } from &apos;lucide-react&apos;;
import Card from &apos;../ui/Card&apos;;
import Button from &apos;../ui/Button&apos;;

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: &apos;Custom Software Development&apos;,
      description: &apos;Tailored software solutions built with cutting-edge technologies to meet your unique business requirements.&apos;,
      features: [
        &apos;Web & Mobile Applications&apos;,
        &apos;API Development & Integration&apos;,
        &apos;Legacy System Modernization&apos;,
        &apos;Scalable Architecture Design&apos;
      ],
      color: &apos;from-blue-500 to-blue-600&apos;,
      bgColor: &apos;bg-blue-50&apos;,
      iconColor: &apos;text-blue-600&apos;
    },
    {
      icon: Cloud,
      title: &apos;Cloud Architecture & Migration&apos;,
      description: &apos;Expert cloud solutions that optimize performance, reduce costs, and ensure scalability for your business.&apos;,
      features: [
        &apos;AWS, Azure & Google Cloud&apos;,
        &apos;Microservices Architecture&apos;,
        &apos;DevOps & CI/CD Pipelines&apos;,
        &apos;Cost Optimization Strategies&apos;
      ],
      color: &apos;from-purple-500 to-purple-600&apos;,
      bgColor: &apos;bg-purple-50&apos;,
      iconColor: &apos;text-purple-600&apos;
    },
    {
      icon: Database,
      title: &apos;Data Engineering & Analytics&apos;,
      description: &apos;Transform your data into actionable insights with our advanced analytics and data engineering solutions.&apos;,
      features: [
        &apos;Data Pipeline Development&apos;,
        &apos;Business Intelligence Dashboards&apos;,
        &apos;Machine Learning Integration&apos;,
        &apos;Real-time Analytics&apos;
      ],
      color: &apos;from-green-500 to-green-600&apos;,
      bgColor: &apos;bg-green-50&apos;,
      iconColor: &apos;text-green-600&apos;
    },
    {
      icon: Shield,
      title: &apos;Cybersecurity & Compliance&apos;,
      description: &apos;Protect your digital assets with enterprise-grade security solutions and compliance frameworks.&apos;,
      features: [
        &apos;Security Audits & Assessments&apos;,
        &apos;Compliance Implementation&apos;,
        &apos;Threat Detection & Response&apos;,
        &apos;Data Protection Strategies&apos;
      ],
      color: &apos;from-red-500 to-red-600&apos;,
      bgColor: &apos;bg-red-50&apos;,
      iconColor: &apos;text-red-600&apos;
    },
    {
      icon: Zap,
      title: &apos;Digital Transformation&apos;,
      description: &apos;Accelerate your digital journey with strategic consulting and technology implementation.&apos;,
      features: [
        &apos;Digital Strategy Consulting&apos;,
        &apos;Process Automation&apos;,
        &apos;Technology Roadmapping&apos;,
        &apos;Change Management&apos;
      ],
      color: &apos;from-yellow-500 to-yellow-600&apos;,
      bgColor: &apos;bg-yellow-50&apos;,
      iconColor: &apos;text-yellow-600&apos;
    },
    {
      icon: Users,
      title: &apos;Technical Consulting&apos;,
      description: &apos;Expert guidance on technology decisions, architecture reviews, and strategic planning.&apos;,
      features: [
        &apos;Technology Assessment&apos;,
        &apos;Architecture Reviews&apos;,
        &apos;Performance Optimization&apos;,
        &apos;Strategic Planning&apos;
      ],
      color: &apos;from-indigo-500 to-indigo-600&apos;,
      bgColor: &apos;bg-indigo-50&apos;,
      iconColor: &apos;text-indigo-600&apos;
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
    <section id=&quot;services&quot; className=&quot;section-padding bg-gray-50&quot;>
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
            className=&quot;inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6&quot;
          >
            <Zap className=&quot;w-4 h-4 mr-2&quot; />
            Our Services
          </motion.div>
          
          <h2 className=&quot;heading-2 text-gray-900 mb-6&quot;>
            Comprehensive Solutions for{&apos; &apos;}
            <span className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent&quot;>
              Modern Businesses
            </span>
          </h2>
          
          <p className=&quot;body-large text-gray-600 max-w-3xl mx-auto&quot;>
            From custom software development to cloud architecture, we provide end-to-end solutions 
            that drive innovation and accelerate your business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial=&quot;hidden&quot;
          whileInView=&quot;visible&quot;
          viewport={{ once: true }}
          className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Card className=&quot;h-full p-8 hover:shadow-2xl&quot;>
                {/* Service Icon */}
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                </div>

                {/* Service Title */}
                <h3 className=&quot;heading-4 text-gray-900 mb-4&quot;>{service.title}</h3>

                {/* Service Description */}
                <p className=&quot;text-gray-600 mb-6 leading-relaxed&quot;>
                  {service.description}
                </p>

                {/* Service Features */}
                <ul className=&quot;space-y-3 mb-8&quot;>
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className=&quot;flex items-center text-sm text-gray-600&quot;
                    >
                      <CheckCircle className=&quot;w-4 h-4 text-green-500 mr-3 flex-shrink-0&quot; />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  variant=&quot;outline&quot;
                  size=&quot;sm&quot;
                  icon={<ArrowRight className=&quot;w-4 h-4&quot; />}
                  iconPosition=&quot;right&quot;
                  className=&quot;w-full&quot;
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
          className=&quot;text-center mt-16&quot;
        >
          <div className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white&quot;>
            <h3 className=&quot;heading-3 mb-4&quot;>Ready to Transform Your Business?</h3>
            <p className=&quot;body-large mb-8 opacity-90 max-w-2xl mx-auto&quot;>
              Let&apos;s discuss how our expertise can help you achieve your digital transformation goals 
              and drive measurable business outcomes.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Button variant=&quot;accent&quot; size=&quot;lg&quot; icon={<ArrowRight className=&quot;w-5 h-5&quot; />} iconPosition=&quot;right&quot;>
                Schedule Consultation
              </Button>
              <Button variant=&quot;outline&quot; size=&quot;lg&quot; className=&quot;bg-white/10 border-white/20 text-white hover:bg-white hover:text-blue-600&quot;>
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
