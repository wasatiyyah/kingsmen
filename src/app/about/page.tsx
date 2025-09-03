'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Users, Globe, TrendingUp, Heart, Code, Briefcase, Star, CheckCircle } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Client-Centric Excellence',
      description: 'We put our clients at the heart of everything we do, delivering solutions that exceed expectations and drive measurable business value.'
    },
    {
      icon: Code,
      title: 'Technical Innovation',
      description: 'We leverage cutting-edge technologies and best practices to build robust, scalable solutions that stand the test of time.'
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      description: 'We believe in true partnership, working alongside our clients as an extension of their team to achieve shared success.'
    },
    {
      icon: Heart,
      title: 'Integrity & Trust',
      description: 'We build lasting relationships through transparency, honesty, and unwavering commitment to our promises.'
    }
  ];

  const milestones = [
    { year: '2015', event: 'Founded with a vision to transform businesses through technology' },
    { year: '2017', event: 'Expanded to cloud architecture and DevOps services' },
    { year: '2019', event: 'Achieved AWS Advanced Partner status' },
    { year: '2021', event: 'Launched AI/ML consulting division' },
    { year: '2023', event: 'Reached 500+ successful project deliveries' },
    { year: '2024', event: 'Recognized as Top Software Development Company' }
  ];

  // Team section temporarily removed - will add back later
  // const team = [
  //   {
  //     name: 'Michael Kingston',
  //     role: 'CEO & Founder',
  //     bio: 'Former Google engineer with 15+ years in enterprise software architecture',
  //     image: '/team/ceo.svg'
  //   },
  //   {
  //     name: 'Sarah Chen',
  //     role: 'CTO',
  //     bio: 'Cloud architecture expert, AWS certified solutions architect professional',
  //     image: '/team/cto.svg'
  //   },
  //   {
  //     name: 'David Martinez',
  //     role: 'Head of Engineering',
  //     bio: 'Full-stack development leader with expertise in scalable systems',
  //     image: '/team/engineering.svg'
  //   },
  //   {
  //     name: 'Emily Watson',
  //     role: 'Head of Design',
  //     bio: 'UX/UI visionary focused on human-centered design principles',
  //     image: '/team/design.svg'
  //   },
  //   {
  //     name: 'James Thompson',
  //     role: 'Head of Cloud Services',
  //     bio: 'Multi-cloud specialist with certifications in AWS, Azure, and GCP',
  //     image: '/team/cloud.svg'
  //   },
  //   {
  //     name: 'Priya Patel',
  //     role: 'Head of AI/ML',
  //     bio: 'Machine learning expert with a PhD in Computer Science from MIT',
  //     image: '/team/ai.svg'
  //   }
  // ];

  const stats = [
    { value: '120+', label: 'Projects Delivered' },
    { value: '85+', label: 'Satisfied Clients' },
    { value: '12+', label: 'Team Members' },
    { value: '8+', label: 'Industries Served' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 30, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 35, repeat: Infinity }}
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
              About Kingsmen Consultancy
            </motion.div>

            <h1 className="heading-1 text-gray-900 mb-6">
              Building the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Future</span> of Digital Excellence
            </h1>
            
            <p className="body-large text-gray-600 mb-8">
              Since 2015, we've been transforming ambitious ideas into powerful digital solutions. 
              Our passion for innovation, combined with deep technical expertise, enables us to deliver 
              exceptional results that drive real business impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-blue-50 to-white">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="heading-3 text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses worldwide with innovative technology solutions that drive growth, 
                  enhance efficiency, and create lasting competitive advantages. We transform complex 
                  challenges into elegant, scalable solutions that propel our clients toward unprecedented success.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-purple-50 to-white">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="heading-3 text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the global leader in transformative technology consulting, recognized for our 
                  unwavering commitment to excellence, innovation, and client success. We envision a 
                  future where every business, regardless of size, can harness the full power of technology.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we deliver
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h4 className="heading-5 text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
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
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              A decade of innovation, growth, and transformative impact
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-1">
                    <div className={`${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                      <Card className="p-6 inline-block">
                        <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <p className="text-gray-600">{milestone.event}</p>
                      </Card>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex w-6 h-6 bg-white border-4 border-blue-600 rounded-full z-10"></div>
                  
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Visionary leaders with deep expertise driving innovation and excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {team.map((member, index) => ( */}
            {/*   <motion.div */}
            {/*     key={member.name} */}
            {/*     initial={{ opacity: 0, y: 50 }} */}
            {/*     whileInView={{ opacity: 1, y: 0 }} */}
            {/*     transition={{ duration: 0.6, delay: index * 0.1 }} */}
            {/*     viewport={{ once: true }} */}
            {/*   > */}
            {/*     <Card className="p-6 text-center hover:shadow-xl transition-shadow"> */}
            {/*       <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center"> */}
            {/*         <Users className="w-16 h-16 text-blue-600" /> */}
            {/*       </div> */}
            {/*       <h4 className="heading-4 text-gray-900 mb-1">{member.name}</h4> */}
            {/*       <p className="text-blue-600 font-medium mb-3">{member.role}</p> */}
            {/*       <p className="text-gray-600 text-sm">{member.bio}</p> */}
            {/*     </Card> */}
            {/*   </motion.div> */}
            {/* ))} */}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 text-white mb-6">
              Why Choose Kingsmen Consultancy?
            </h2>
            <p className="body-large text-white/90 max-w-3xl mx-auto">
              We don't just build software; we build partnerships that transform businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'Global Expertise',
                points: [
                  'Teams across 3 continents',
                  '24/7 support coverage',
                  'Multi-cultural perspectives',
                  'Local market understanding'
                ]
              },
              {
                icon: Award,
                title: 'Proven Excellence',
                points: [
                  '99% client satisfaction',
                  'Industry-leading NPS score',
                  'Multiple industry awards',
                  'Certified partnerships'
                ]
              },
              {
                icon: Briefcase,
                title: 'Enterprise Ready',
                points: [
                  'Fortune 500 trusted',
                  'SOC 2 Type II certified',
                  'ISO 27001 compliant',
                  'GDPR compliant'
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6"
              >
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="heading-4 text-white mb-4">{item.title}</h4>
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start text-white/80 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="accent" size="lg">
              Start Your Journey With Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;