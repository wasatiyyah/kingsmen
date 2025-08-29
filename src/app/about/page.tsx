&apos;use client&apos;;

import React from &apos;react&apos;;
import { motion } from &apos;framer-motion&apos;;
import { Award, Target, Users, Globe, TrendingUp, Heart, Code, Briefcase, CheckCircle } from &apos;lucide-react&apos;;
import Card from &apos;@/components/ui/Card&apos;;
import Button from &apos;@/components/ui/Button&apos;;

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: &apos;Client-Centric Excellence&apos;,
      description: &apos;We put our clients at the heart of everything we do, delivering solutions that exceed expectations and drive measurable business value.&apos;
    },
    {
      icon: Code,
      title: &apos;Technical Innovation&apos;,
      description: &apos;We leverage cutting-edge technologies and best practices to build robust, scalable solutions that stand the test of time.&apos;
    },
    {
      icon: Users,
      title: &apos;Collaborative Partnership&apos;,
      description: &apos;We believe in true partnership, working alongside our clients as an extension of their team to achieve shared success.&apos;
    },
    {
      icon: Heart,
      title: &apos;Integrity & Trust&apos;,
      description: &apos;We build lasting relationships through transparency, honesty, and unwavering commitment to our promises.&apos;
    }
  ];

  const milestones = [
    { year: &apos;2015&apos;, event: &apos;Founded with a vision to transform businesses through technology&apos; },
    { year: &apos;2017&apos;, event: &apos;Expanded to cloud architecture and DevOps services&apos; },
    { year: &apos;2019&apos;, event: &apos;Achieved AWS Advanced Partner status&apos; },
    { year: &apos;2021&apos;, event: &apos;Launched AI/ML consulting division&apos; },
    { year: &apos;2023&apos;, event: &apos;Reached 500+ successful project deliveries&apos; },
    { year: &apos;2024&apos;, event: &apos;Recognized as Top Software Development Company&apos; }
  ];

  const team = [
    {
      name: &apos;Michael Kingston&apos;,
      role: &apos;CEO & Founder&apos;,
      bio: &apos;Former Google engineer with 15+ years in enterprise software architecture&apos;,
      image: &apos;/team/ceo.jpg&apos;
    },
    {
      name: &apos;Sarah Chen&apos;,
      role: &apos;CTO&apos;,
      bio: &apos;Cloud architecture expert, AWS certified solutions architect professional&apos;,
      image: &apos;/team/cto.jpg&apos;
    },
    {
      name: &apos;David Martinez&apos;,
      role: &apos;Head of Engineering&apos;,
      bio: &apos;Full-stack development leader with expertise in scalable systems&apos;,
      image: &apos;/team/engineering.jpg&apos;
    },
    {
      name: &apos;Emily Watson&apos;,
      role: &apos;Head of Design&apos;,
      bio: &apos;UX/UI visionary focused on human-centered design principles&apos;,
      image: &apos;/team/design.jpg&apos;
    },
    {
      name: &apos;James Thompson&apos;,
      role: &apos;Head of Cloud Services&apos;,
      bio: &apos;Multi-cloud specialist with certifications in AWS, Azure, and GCP&apos;,
      image: &apos;/team/cloud.jpg&apos;
    },
    {
      name: &apos;Priya Patel&apos;,
      role: &apos;Head of AI/ML&apos;,
      bio: &apos;Machine learning expert with a PhD in Computer Science from MIT&apos;,
      image: &apos;/team/ai.jpg&apos;
    }
  ];

  const stats = [
    { value: &apos;120+&apos;, label: &apos;Projects Delivered&apos; },
    { value: &apos;85+&apos;, label: &apos;Satisfied Clients&apos; },
    { value: &apos;12+&apos;, label: &apos;Team Members&apos; },
    { value: &apos;8+&apos;, label: &apos;Industries Served&apos; }
  ];

  return (
    <div className=&quot;min-h-screen&quot;>
      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 overflow-hidden&quot;>
        <div className=&quot;absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50&quot;></div>
        
        {/* Animated Background */}
        <div className=&quot;absolute inset-0&quot;>
          <motion.div
            className=&quot;absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50&quot;
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 30, repeat: Infinity }}
          />
          <motion.div
            className=&quot;absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50&quot;
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
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
              className=&quot;inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6&quot;
            >
              <Award className=&quot;w-4 h-4 mr-2&quot; />
              About Kingsmen Consultancy
            </motion.div>

            <h1 className=&quot;heading-1 text-gray-900 mb-6&quot;>
              Building the <span className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent&quot;>Future</span> of Digital Excellence
            </h1>
            
            <p className=&quot;body-large text-gray-600 mb-8&quot;>
              Since 2015, we&apos;ve been transforming ambitious ideas into powerful digital solutions. 
              Our passion for innovation, combined with deep technical expertise, enables us to deliver 
              exceptional results that drive real business impact.
            </p>

            {/* Stats */}
            <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 mt-16&quot;>
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className=&quot;text-center&quot;
                >
                  <div className=&quot;text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent&quot;>
                    {stat.value}
                  </div>
                  <div className=&quot;text-gray-600 mt-2&quot;>{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className=&quot;section-padding bg-white&quot;>
        <div className=&quot;container-custom&quot;>
          <div className=&quot;grid md:grid-cols-2 gap-12&quot;>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className=&quot;p-8 h-full bg-gradient-to-br from-blue-50 to-white&quot;>
                <div className=&quot;w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6&quot;>
                  <Target className=&quot;w-8 h-8 text-blue-600&quot; />
                </div>
                <h3 className=&quot;heading-3 text-gray-900 mb-4&quot;>Our Mission</h3>
                <p className=&quot;text-gray-600 leading-relaxed&quot;>
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
              <Card className=&quot;p-8 h-full bg-gradient-to-br from-purple-50 to-white&quot;>
                <div className=&quot;w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6&quot;>
                  <TrendingUp className=&quot;w-8 h-8 text-purple-600&quot; />
                </div>
                <h3 className=&quot;heading-3 text-gray-900 mb-4&quot;>Our Vision</h3>
                <p className=&quot;text-gray-600 leading-relaxed&quot;>
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
              Our Core <span className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent&quot;>Values</span>
            </h2>
            <p className=&quot;body-large text-gray-600 max-w-3xl mx-auto&quot;>
              These principles guide every decision we make and every solution we deliver
            </p>
          </motion.div>

          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className=&quot;p-6 h-full hover:shadow-xl transition-shadow&quot;>
                  <div className=&quot;w-14 h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4&quot;>
                    <value.icon className=&quot;w-7 h-7 text-blue-600&quot; />
                  </div>
                  <h4 className=&quot;heading-5 text-gray-900 mb-3&quot;>{value.title}</h4>
                  <p className=&quot;text-gray-600 text-sm leading-relaxed&quot;>{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
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
              Our <span className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent&quot;>Journey</span>
            </h2>
            <p className=&quot;body-large text-gray-600 max-w-3xl mx-auto&quot;>
              A decade of innovation, growth, and transformative impact
            </p>
          </motion.div>

          <div className=&quot;relative&quot;>
            {/* Timeline Line */}
            <div className=&quot;absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block&quot;></div>

            <div className=&quot;space-y-12&quot;>
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${index % 2 === 0 ? &apos;md:flex-row&apos; : &apos;md:flex-row-reverse&apos;}`}
                >
                  <div className=&quot;flex-1&quot;>
                    <div className={`${index % 2 === 0 ? &apos;md:text-right md:pr-8&apos; : &apos;md:text-left md:pl-8&apos;}`}>
                      <Card className=&quot;p-6 inline-block&quot;>
                        <div className=&quot;text-2xl font-bold text-blue-600 mb-2&quot;>{milestone.year}</div>
                        <p className=&quot;text-gray-600&quot;>{milestone.event}</p>
                      </Card>
                    </div>
                  </div>
                  
                  <div className=&quot;hidden md:flex w-6 h-6 bg-white border-4 border-blue-600 rounded-full z-10&quot;></div>
                  
                  <div className=&quot;flex-1&quot;></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Meet Our <span className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent&quot;>Leadership</span>
            </h2>
            <p className=&quot;body-large text-gray-600 max-w-3xl mx-auto&quot;>
              Visionary leaders with deep expertise driving innovation and excellence
            </p>
          </motion.div>

          <div className=&quot;grid md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className=&quot;p-6 text-center hover:shadow-xl transition-shadow&quot;>
                  <div className=&quot;w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center&quot;>
                    <Users className=&quot;w-16 h-16 text-blue-600&quot; />
                  </div>
                  <h4 className=&quot;heading-4 text-gray-900 mb-1&quot;>{member.name}</h4>
                  <p className=&quot;text-blue-600 font-medium mb-3&quot;>{member.role}</p>
                  <p className=&quot;text-gray-600 text-sm&quot;>{member.bio}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className=&quot;section-padding bg-gradient-to-br from-blue-600 to-purple-600 text-white&quot;>
        <div className=&quot;container-custom&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;heading-2 text-white mb-6&quot;>
              Why Choose Kingsmen Consultancy?
            </h2>
            <p className=&quot;body-large text-white/90 max-w-3xl mx-auto&quot;>
              We don&apos;t just build software; we build partnerships that transform businesses
            </p>
          </motion.div>

          <div className=&quot;grid md:grid-cols-3 gap-8&quot;>
            {[
              {
                icon: Globe,
                title: &apos;Global Expertise&apos;,
                points: [
                  &apos;Teams across 3 continents&apos;,
                  &apos;24/7 support coverage&apos;,
                  &apos;Multi-cultural perspectives&apos;,
                  &apos;Local market understanding&apos;
                ]
              },
              {
                icon: Award,
                title: &apos;Proven Excellence&apos;,
                points: [
                  &apos;99% client satisfaction&apos;,
                  &apos;Industry-leading NPS score&apos;,
                  &apos;Multiple industry awards&apos;,
                  &apos;Certified partnerships&apos;
                ]
              },
              {
                icon: Briefcase,
                title: &apos;Enterprise Ready&apos;,
                points: [
                  &apos;Fortune 500 trusted&apos;,
                  &apos;SOC 2 Type II certified&apos;,
                  &apos;ISO 27001 compliant&apos;,
                  &apos;GDPR compliant&apos;
                ]
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-white/10 backdrop-blur-md rounded-2xl p-6&quot;
              >
                <div className=&quot;w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4&quot;>
                  <item.icon className=&quot;w-7 h-7 text-white&quot; />
                </div>
                <h4 className=&quot;heading-4 text-white mb-4&quot;>{item.title}</h4>
                <ul className=&quot;space-y-2&quot;>
                  {item.points.map((point) => (
                    <li key={point} className=&quot;flex items-start text-white/80 text-sm&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0&quot; />
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
            className=&quot;text-center mt-12&quot;
          >
            <Button variant=&quot;accent&quot; size=&quot;lg&quot;>
              Start Your Journey With Us
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;