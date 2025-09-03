'use client';

import React, { useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Mail, Phone, Calendar } from 'lucide-react';
import { useAnalytics } from '@/contexts/AnalyticsContext';
import { useSearchParams } from 'next/navigation';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const ThankYouPageContent: React.FC = () => {
  const { trackConversion, trackEvent } = useAnalytics();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track the thank you page view
    trackEvent('page_view', {
      page_name: 'thank_you',
      page_title: 'Thank You - Kingsmen Consultancy',
    });

    // Track conversion based on URL parameters
    const source = searchParams.get('source') || 'contact_form';
    const value = searchParams.get('value') || '0';
    const conversionType = searchParams.get('type') || 'lead_generation';

    // Track conversion
    trackConversion(conversionType, parseFloat(value), 'USD');

    // Track specific conversion event
    trackEvent('conversion_completed', {
      conversion_type: conversionType,
      source: source,
      value: parseFloat(value),
      currency: 'USD',
    });

    // Track goal completion
    trackEvent('goal_completion', {
      goal_name: 'contact_form_submission',
      goal_value: parseFloat(value),
    });
  }, [trackConversion, trackEvent, searchParams]);

  const nextSteps = [
    {
      icon: Mail,
      title: 'Confirmation Email',
      description: 'You\'ll receive a confirmation email within 5 minutes with next steps and project details.',
      action: 'Check your inbox',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Phone,
      title: 'Discovery Call',
      description: 'Our team will reach out within 24 hours to schedule your free discovery call.',
      action: 'Expect our call',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Calendar,
      title: 'Project Planning',
      description: 'We\'ll work together to create a detailed project plan and timeline.',
      action: 'Get ready to plan',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const resources = [
    {
      title: 'Download Our Service Catalog',
      description: 'Get detailed information about our services and pricing',
      action: 'Download PDF',
      href: '#'
    },
    {
      title: 'View Case Studies',
      description: 'See how we\'ve helped other businesses succeed',
      action: 'Browse Projects',
      href: '/case-studies'
    },
    {
      title: 'Join Our Newsletter',
      description: 'Stay updated with industry insights and company news',
      action: 'Subscribe',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle className="w-12 h-12 text-green-600" />
            </motion.div>

            {/* Main Message */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="heading-1 text-gray-900 mb-6"
            >
              Thank You for Reaching Out!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="body-large text-gray-600 mb-8"
            >
              We've received your message and are excited to work with you on your project. 
              Our team will be in touch within 24 hours to discuss your requirements and next steps.
            </motion.p>

            {/* Reference Number */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8"
            >
              <p className="text-sm text-gray-600 mb-2">Reference Number</p>
              <p className="text-2xl font-mono font-bold text-blue-600">
                {`KCM-${Date.now().toString().slice(-6)}`}
              </p>
              <p className="text-xs text-gray-500 mt-2">Keep this for your records</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Next Steps */}
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
              What Happens <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Next?</span>
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Here's what you can expect from us in the coming days
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {nextSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center h-full">
                  <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <h3 className="heading-4 text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>
                  <p className="text-sm font-medium text-blue-600">{step.action}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
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
              While You <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Wait</span>
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Explore these resources to learn more about our services and expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full">
                  <h3 className="heading-4 text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <Button variant="outline" size="sm" className="w-full">
                    {resource.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
              Have More Questions?
            </h2>
            <p className="body-large text-white/90 max-w-3xl mx-auto mb-8">
              Don't wait for our call - reach out directly if you have urgent questions or want to get started immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="accent" 
                size="lg"
                onClick={() => trackEvent('button_click', { button_name: 'contact_immediately', button_location: 'thank_you_page' })}
              >
                Contact Us Now
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-blue-600"
                onClick={() => trackEvent('button_click', { button_name: 'back_to_home', button_location: 'thank_you_page' })}
              >
                Back to Home
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const ThankYouPage: React.FC = () => {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    }>
      <ThankYouPageContent />
    </Suspense>
  );
};

export default ThankYouPage;
