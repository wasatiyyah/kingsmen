&apos;use client&apos;;

import React, { useState } from &apos;react&apos;;
import { motion } from &apos;framer-motion&apos;;
import { Mail, Phone, MapPin, Clock, MessageSquare, ArrowRight, CheckCircle } from &apos;lucide-react&apos;;
import Card from &apos;../ui/Card&apos;;
import Button from &apos;../ui/Button&apos;;

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: &apos;&apos;,
    email: &apos;&apos;,
    company: &apos;&apos;,
    phone: &apos;&apos;,
    service: &apos;&apos;,
    message: &apos;&apos;,
    budget: &apos;&apos;,
    timeline: &apos;&apos;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: &apos;&apos;,
        email: &apos;&apos;,
        company: &apos;&apos;,
        phone: &apos;&apos;,
        service: &apos;&apos;,
        message: &apos;&apos;,
        budget: &apos;&apos;,
        timeline: &apos;&apos;
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: &apos;Email Us&apos;,
      description: &apos;Get in touch via email for detailed inquiries&apos;,
      contact: &apos;hello@kingsmenconsultancy.com&apos;,
      action: &apos;Send Email&apos;,
      color: &apos;from-blue-500 to-blue-600&apos;,
      bgColor: &apos;bg-blue-50&apos;,
      iconColor: &apos;text-blue-600&apos;
    },
    {
      icon: Phone,
      title: &apos;Call Us&apos;,
      description: &apos;Speak directly with our team&apos;,
      contact: &apos;+1 (555) 123-4567&apos;,
      action: &apos;Call Now&apos;,
      color: &apos;from-green-500 to-green-600&apos;,
      bgColor: &apos;bg-green-50&apos;,
      iconColor: &apos;text-green-600&apos;
    },
    {
      icon: MessageSquare,
      title: &apos;Live Chat&apos;,
      description: &apos;Chat with us in real-time&apos;,
      contact: &apos;Available 24/7&apos;,
      action: &apos;Start Chat&apos;,
      color: &apos;from-purple-500 to-purple-600&apos;,
      bgColor: &apos;bg-purple-50&apos;,
      iconColor: &apos;text-purple-600&apos;
    },
    {
      icon: MapPin,
      title: &apos;Visit Us&apos;,
      description: &apos;Schedule an in-person meeting&apos;,
      contact: &apos;San Francisco, CA&apos;,
      action: &apos;Get Directions&apos;,
      color: &apos;from-orange-500 to-orange-600&apos;,
      bgColor: &apos;bg-orange-50&apos;,
      iconColor: &apos;text-orange-600&apos;
    }
  ];

  const services = [
    &apos;Custom Software Development&apos;,
    &apos;Cloud Architecture & Migration&apos;,
    &apos;Data Engineering & Analytics&apos;,
    &apos;Cybersecurity & Compliance&apos;,
    &apos;Digital Transformation&apos;,
    &apos;Technical Consulting&apos;
  ];

  const budgets = [
    &apos;$10K - $50K&apos;,
    &apos;$50K - $100K&apos;,
    &apos;$100K - $250K&apos;,
    &apos;$250K - $500K&apos;,
    &apos;$500K+&apos;
  ];

  const timelines = [
    &apos;1-3 months&apos;,
    &apos;3-6 months&apos;,
    &apos;6-12 months&apos;,
    &apos;12+ months&apos;,
    &apos;Not sure yet&apos;
  ];

  return (
    <section id=&quot;contact&quot; className=&quot;section-padding bg-gray-50&quot;>
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
            <MessageSquare className=&quot;w-4 h-4 mr-2&quot; />
            Get In Touch
          </motion.div>
          
          <h2 className=&quot;heading-2 text-gray-900 mb-6&quot;>
            Ready to Transform Your{&apos; &apos;}
            <span className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent&quot;>
              Business?
            </span>
          </h2>
          
          <p className=&quot;body-large text-gray-600 max-w-3xl mx-auto&quot;>
            Let&apos;s discuss your project requirements and explore how our expertise can help you 
            achieve your business goals. We&apos;re here to help you succeed.
          </p>
        </motion.div>

        <div className=&quot;grid lg:grid-cols-2 gap-12&quot;>
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className=&quot;p-8&quot;>
              <h3 className=&quot;heading-3 text-gray-900 mb-6&quot;>Start Your Project</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className=&quot;text-center py-12&quot;
                >
                  <div className=&quot;w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                    <CheckCircle className=&quot;w-8 h-8 text-green-600&quot; />
                  </div>
                  <h4 className=&quot;heading-4 text-gray-900 mb-2&quot;>Thank You!</h4>
                  <p className=&quot;text-gray-600&quot;>
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
                  <div className=&quot;grid md:grid-cols-2 gap-6&quot;>
                    <div>
                      <label htmlFor=&quot;name&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                        Full Name *
                      </label>
                      <input
                        type=&quot;text&quot;
                        id=&quot;name&quot;
                        name=&quot;name&quot;
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors&quot;
                        placeholder=&quot;John Doe&quot;
                      />
                    </div>
                    
                    <div>
                      <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                        Email Address *
                      </label>
                      <input
                        type=&quot;email&quot;
                        id=&quot;email&quot;
                        name=&quot;email&quot;
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors&quot;
                        placeholder=&quot;john@company.com&quot;
                      />
                    </div>
                  </div>

                  <div className=&quot;grid md:grid-cols-2 gap-6&quot;>
                    <div>
                      <label htmlFor=&quot;company&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                        Company Name
                      </label>
                      <input
                        type=&quot;text&quot;
                        id=&quot;company&quot;
                        name=&quot;company&quot;
                        value={formData.company}
                        onChange={handleInputChange}
                        className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors&quot;
                        placeholder=&quot;Your Company&quot;
                      />
                    </div>
                    
                    <div>
                      <label htmlFor=&quot;phone&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                        Phone Number
                      </label>
                      <input
                        type=&quot;tel&quot;
                        id=&quot;phone&quot;
                        name=&quot;phone&quot;
                        value={formData.phone}
                        onChange={handleInputChange}
                        className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors&quot;
                        placeholder=&quot;+1 (555) 123-4567&quot;
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor=&quot;service&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                      Service Interest *
                    </label>
                    <select
                      id=&quot;service&quot;
                      name=&quot;service&quot;
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors&quot;
                    >
                      <option value=&quot;&quot;>Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className=&quot;grid md:grid-cols-2 gap-6&quot;>
                    <div>
                      <label htmlFor=&quot;budget&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                        Project Budget
                      </label>
                      <select
                        id=&quot;budget&quot;
                        name=&quot;budget&quot;
                        value={formData.budget}
                        onChange={handleInputChange}
                        className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors&quot;
                      >
                        <option value=&quot;&quot;>Select budget range</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor=&quot;timeline&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                        Project Timeline
                      </label>
                      <select
                        id=&quot;timeline&quot;
                        name=&quot;timeline&quot;
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors&quot;
                      >
                        <option value=&quot;&quot;>Select timeline</option>
                        {timelines.map((timeline) => (
                          <option key={timeline} value={timeline}>{timeline}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor=&quot;message&quot; className=&quot;block text-sm font-medium text-gray-700 mb-2&quot;>
                      Project Details *
                    </label>
                    <textarea
                      id=&quot;message&quot;
                      name=&quot;message&quot;
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className=&quot;w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none&quot;
                      placeholder=&quot;Tell us about your project requirements, goals, and any specific challenges you&apos;re facing...&quot;
                    />
                  </div>

                  <Button
                    type=&quot;submit&quot;
                    variant=&quot;primary&quot;
                    size=&quot;lg&quot;
                    disabled={isSubmitting}
                    icon={<ArrowRight className=&quot;w-5 h-5&quot; />}
                    iconPosition=&quot;right&quot;
                    className=&quot;w-full&quot;
                  >
                    {isSubmitting ? &apos;Sending...&apos; : &apos;Send Message&apos;}
                  </Button>
                </form>
              )}
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;space-y-8&quot;
          >
            {/* Contact Methods */}
            <div className=&quot;grid sm:grid-cols-2 gap-6&quot;>
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className=&quot;p-6 text-center hover:shadow-xl transition-shadow&quot;>
                    <div className={`w-12 h-12 ${method.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <method.icon className={`w-6 h-6 ${method.iconColor}`} />
                    </div>
                    <h4 className=&quot;font-semibold text-gray-900 mb-2&quot;>{method.title}</h4>
                    <p className=&quot;text-sm text-gray-600 mb-3&quot;>{method.description}</p>
                    <p className=&quot;text-sm font-medium text-gray-900 mb-4&quot;>{method.contact}</p>
                    <Button variant=&quot;outline&quot; size=&quot;sm&quot; className=&quot;w-full&quot;>
                      {method.action}
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Office Hours */}
            <Card className=&quot;p-6&quot;>
              <div className=&quot;flex items-center mb-4&quot;>
                <div className=&quot;w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4&quot;>
                  <Clock className=&quot;w-5 h-5 text-blue-600&quot; />
                </div>
                <div>
                  <h4 className=&quot;font-semibold text-gray-900&quot;>Office Hours</h4>
                  <p className=&quot;text-sm text-gray-600&quot;>We&apos;re here to help</p>
                </div>
              </div>
              <div className=&quot;space-y-2 text-sm text-gray-600&quot;>
                <div className=&quot;flex justify-between&quot;>
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM PST</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM PST</span>
                </div>
                <div className=&quot;flex justify-between&quot;>
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </Card>

            {/* Response Time */}
            <Card className=&quot;p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white&quot;>
              <div className=&quot;text-center&quot;>
                <h4 className=&quot;font-semibold mb-2&quot;>Quick Response</h4>
                <p className=&quot;text-sm opacity-90 mb-4&quot;>
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
                <div className=&quot;flex items-center justify-center space-x-4 text-sm&quot;>
                  <div className=&quot;flex items-center&quot;>
                    <CheckCircle className=&quot;w-4 h-4 mr-2&quot; />
                    <span>24h Response</span>
                  </div>
                  <div className=&quot;flex items-center&quot;>
                    <CheckCircle className=&quot;w-4 h-4 mr-2&quot; />
                    <span>Free Consultation</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
