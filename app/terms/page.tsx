'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb, Code, Server, Cloud, Database, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from "next/link";
import { Button } from '@/components/ui/button';

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
        {/* Terms & Conditions Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
                <FileText className="w-8 h-8 text-purple-600" />
                Terms & Conditions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                The following terms govern how we deliver our IT services and engage with clients.
              </p>
            </motion.div>

            <div className="space-y-8 text-gray-700">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">1. Service Engagement</h3>
                <p>All services provided by NextDevBuild are subject to a written agreement outlining scope, deliverables, and timelines. Any modifications must be mutually agreed upon in writing.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">2. Intellectual Property</h3>
                <p>Unless otherwise agreed, all code, designs, and solutions developed remain the property of NextDevBuild until full payment is received. Upon completion and settlement, ownership is transferred to the client.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">3. Confidentiality</h3>
                <p>We treat all client data, business information, and intellectual property with strict confidentiality and use them only for the purpose of delivering agreed services.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">4. Payment Terms</h3>
                <p>Invoices must be settled according to the agreed schedule. Delayed payments may result in project suspension or late fees.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">5. Limitation of Liability</h3>
                <p>While we ensure quality delivery, NextDevBuild is not liable for indirect losses, such as lost profits or business interruptions, arising from service use.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">6. Termination</h3>
                <p>Either party may terminate an engagement with prior written notice. Clients are responsible for payment of all completed work up to the termination date.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
  );
}
