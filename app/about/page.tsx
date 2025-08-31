'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb, Code, Server, Cloud, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We focus on delivering solutions that create real business value and drive measurable results.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We stay ahead of technology trends to provide cutting-edge solutions for modern challenges.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our success. We build long-term partnerships based on trust and excellence.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Every project undergoes rigorous testing and quality assurance for production-ready delivery.',
  },
];

const expertise = [
  { icon: Code, title: 'Frontend Development', years: '8+' },
  { icon: Server, title: 'Backend Development', years: '10+' },
  { icon: Cloud, title: 'Cloud Architecture', years: '6+' },
  { icon: Database, title: 'Data Engineering', years: '7+' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">NextDevBuild</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate developers and technology experts dedicated to building 
              innovative solutions that drive business success in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="prose prose-lg prose-gray max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                NextDevBuild was founded with a simple mission: to bridge the gap between complex technology 
                and practical business solutions. We recognized that many businesses struggle to navigate 
                the rapidly evolving tech landscape while maintaining focus on their core operations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our team combines deep technical expertise with real-world business understanding. 
                We've worked with startups scaling from zero to millions of users, and enterprises 
                modernizing legacy systems. This diverse experience allows us to choose the right 
                technology stack for each unique challenge.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we specialize in modern web development, cloud architecture, and specialized 
                financial tools like our comprehensive LIC calculator suite. Every project we take on 
                is an opportunity to deliver exceptional value and build lasting partnerships.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.title} variants={itemVariants}>
                  <Card className="h-full text-center group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Years of hands-on experience across the full technology stack.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-10 h-10 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                    {item.years}
                  </div>
                  <p className="text-gray-600">Years of Experience</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Ready to start your next project? We'd love to hear about your ideas and discuss how we can help bring them to life.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white hover:text-purple-700 px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transform hover:scale-105 transition-all duration-200">
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}