'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {Calculator, TrendingUp, PieChart, BarChart3, Target, Shield, Award, DollarSign, ArrowRight} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const calculators = [
  {
    id: 'term-insurance',
    icon: Shield,
    title: 'Term Insurance Calculator',
    description: 'Calculate optimal term insurance coverage based on your age, income, and financial goals.',
    color: 'from-blue-500 to-cyan-500',
    features: ['Coverage amount calculation', 'Premium estimation', 'Age-based recommendations'],
  },
  {
    id: 'maturity',
    icon: TrendingUp,
    title: 'Maturity Calculator',
    description: 'Project maturity amounts for endowment and money-back policies with bonus estimates.',
    color: 'from-orange-500 to-red-500',
    features: ['Compound growth visualization', 'Bonus projections', 'Inflation adjustment'],
  },
  {
    id: 'pension',
    icon: Target,
    title: 'Pension Calculator',
    description: 'Plan your retirement with pension schemes and annuity calculations.',
    color: 'from-indigo-500 to-purple-500',
    features: ['Retirement planning', 'Annuity calculations', 'Tax implications'],
  },
  {
    id: 'child-plan',
    icon: BarChart3,
    title: 'Child Plan Calculator',
    description: 'Calculate education and marriage benefits for child insurance plans.',
    color: 'from-pink-500 to-rose-500',
    features: ['Education fund planning', 'Milestone-based payouts', 'Waiver of premium'],
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

export default function CalculatorsPage() {
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
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Insurance <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Calculators</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Make informed decisions about your insurance policies with our comprehensive suite of calculators. 
              Get accurate premium estimates, maturity projections, and compare different policy options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {calculators.map((calculator) => {
              const Icon = calculator.icon;
              return (
                <motion.div key={calculator.id} variants={itemVariants}>
                  <Card className="h-full group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="text-center pb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${calculator.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                        {calculator.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {calculator.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-6">
                        {calculator.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-gradient-to-r ${calculator.color} rounded-full`}></div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link href={`/calculators/${calculator.id}`}>
                        <Button className={`w-full bg-gradient-to-r ${calculator.color} hover:shadow-lg text-white rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 group`}>
                          Use Calculator
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Why Use Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Calculators?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our calculators are built with the latest policy guidelines and provide accurate, 
              real-time calculations to help you make the best insurance decisions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Accurate Calculations</h3>
              <p className="text-gray-600">Based on latest LIC guidelines and policy terms for precise results.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <PieChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visual Reports</h3>
              <p className="text-gray-600">Interactive charts and graphs to visualize your policy projections.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Future Projections</h3>
              <p className="text-gray-600">Long-term projections with inflation and bonus considerations.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}