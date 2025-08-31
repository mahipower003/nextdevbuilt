'use client';

import { motion } from 'framer-motion';
import { Code, Server, Cloud, Database, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const services = [
  {
    id: 'react',
    icon: Code,
    title: 'React/Next.js Frontend Development',
    description: 'Modern, responsive web applications built with cutting-edge React and Next.js technologies.',
    color: 'from-blue-500 to-cyan-500',
    features: [
      'Server-Side Rendering (SSR) and Static Site Generation (SSG)',
      'Progressive Web Apps (PWA) development',
      'Responsive design with Tailwind CSS',
      'State management with Redux or Zustand',
      'Performance optimization and Core Web Vitals',
      'SEO-friendly architecture',
    ],
    technologies: ['React 18', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
  },
  {
    id: 'java',
    icon: Server,
    title: 'Java/Spring Boot Backend Development',
    description: 'Scalable, secure backend services using enterprise-grade Java and Spring Boot framework.',
    color: 'from-green-500 to-emerald-500',
    features: [
      'RESTful API development with Spring Boot',
      'Microservices architecture design',
      'Database integration (PostgreSQL, MySQL, MongoDB)',
      'Authentication and authorization (JWT, OAuth2)',
      'Unit and integration testing',
      'API documentation with Swagger/OpenAPI',
    ],
    technologies: ['Java 17+', 'Spring Boot 3', 'Spring Security', 'JPA/Hibernate', 'Maven', 'Docker'],
  },
  {
    id: 'aws',
    icon: Cloud,
    title: 'AWS Cloud Solutions',
    description: 'Complete cloud infrastructure setup and management for scalable, reliable applications.',
    color: 'from-orange-500 to-red-500',
    features: [
      'AWS Lambda serverless functions',
      'EC2 instance management and auto-scaling',
      'Kubernetes cluster setup and orchestration',
      'Docker containerization strategies',
      'CloudFormation Infrastructure as Code',
      'CI/CD pipeline setup with AWS CodePipeline',
    ],
    technologies: ['AWS Lambda', 'EC2', 'EKS', 'Docker', 'Kubernetes', 'CloudFormation'],
  },
  {
    id: 'data',
    icon: Database,
    title: 'Data Engineering & Analytics',
    description: 'Advanced data processing, analytics, and business intelligence solutions.',
    color: 'from-purple-500 to-pink-500',
    features: [
      'Databricks data lakehouse architecture',
      'Apache Flink real-time stream processing',
      'ETL/ELT pipeline development',
      'WordPress custom plugin development',
      'Business intelligence dashboards',
      'Data warehouse design and optimization',
    ],
    technologies: ['Databricks', 'Apache Flink', 'Spark', 'WordPress', 'Python', 'SQL'],
  },
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

export default function ServicesPage() {
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
              Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to accelerate your business growth with cutting-edge technologies and expert implementation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}>
                    <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-2xl`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies We Use:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white rounded-full text-sm font-medium text-gray-700 border border-gray-200 shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button className={`bg-gradient-to-r ${service.color} hover:shadow-lg text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 group`}>
                        Get Started
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </Link>
                  </div>

                  {/* Image/Visual */}
                  <div className={`${!isEven ? 'lg:col-start-1' : ''} relative`}>
                    <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-2xl">
                      <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                        <Icon className={`w-24 h-24 bg-gradient-to-br ${service.color} text-transparent bg-clip-text`} />
                      </div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss your project requirements and create a solution that drives results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transform hover:scale-105 transition-all duration-200 shadow-xl">
                  Start Your Project
                </Button>
              </Link>
              <Link href="/calculators">
                <Button variant="outline" size="lg" className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold">
                  Try Our Calculators
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}