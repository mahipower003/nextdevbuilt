'use client';

import { motion } from 'framer-motion';
import { Users, Target, Award, Lightbulb, Code, Server, Cloud, Database, FileText, Shield } from 'lucide-react';
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

export default function AboutPage() {
  return (
      <div className="min-h-screen pt-16">
        {/* Privacy Policy Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
                <Shield className="w-8 h-8 text-purple-600" />
                Privacy Policy
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                At NextDevBuild, we respect your privacy and are committed to safeguarding your personal information.
              </p>
            </motion.div>

            <div className="space-y-8 text-gray-700">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">1. Data Collection</h3>
                <p>We collect only the information necessary to provide our services effectively, such as contact details and project requirements.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">2. Data Usage</h3>
                <p>Your data is used exclusively for project communication, service delivery, and improving our offerings. We do not sell or share your information with third parties without consent.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">3. Data Security</h3>
                <p>We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">4. Third-Party Services</h3>
                <p>In some cases, we may use trusted third-party providers (e.g., hosting, payment gateways). These providers adhere to strict security and compliance standards.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">5. User Rights</h3>
                <p>You have the right to request access, modification, or deletion of your personal data at any time by contacting us.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">6. Updates to Policy</h3>
                <p>Our privacy policy may be updated periodically to reflect changes in law or our practices. Updates will be posted on this page.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
}
