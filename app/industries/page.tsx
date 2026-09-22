'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Landmark, Shield, Building2, ArrowRight } from 'lucide-react';

const industries = [
  {
    title: 'Financial Services',
    icon: Landmark,
    description: 'Lending, finance operations, document processing, reconciliation and reporting.',
    workflows: ['Loan document review', 'Bank reconciliation', 'Transaction monitoring', 'Regulatory reporting']
  },
  {
    title: 'Insurance',
    icon: Shield,
    description: 'Claims, policy operations, verification and document workflows.',
    workflows: ['Claims processing', 'Policy document extraction', 'Underwriting data', 'Compliance checks']
  },
  {
    title: 'Mid-Market Businesses',
    icon: Building2,
    description: 'Finance, operations, reporting, vendor management and internal workflows.',
    workflows: ['Invoice processing', 'Month-end reporting', 'Vendor onboarding', 'Approval workflows']
  }
];

export default function IndustriesPage() {
  return (
    <main className="bg-[#0B0B12] min-h-screen">
      {/* Hero Section */}
      <section className="pt-[140px] pb-24 bg-[#0B0B12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-4">Industries</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">Where We Work.</h1>
            <p className="text-[#8B8BAD] text-xl max-w-2xl">
              We don&apos;t serve every industry. We focus where complex manual work is expensive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-[#0D0D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((ind, index) => (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#13131F] border border-[#1C1C2E] rounded-xl p-8 hover:bg-[#17172A] hover:border-amber-500/30 transition-all duration-250 group flex flex-col"
              >
                <div className="w-14 h-14 bg-amber-500/10 rounded-lg flex items-center justify-center border border-amber-500/20 mb-6 group-hover:border-amber-500/40 transition-colors">
                  <ind.icon className="w-7 h-7 text-amber-400" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-white mb-4">{ind.title}</h3>
                <p className="text-[#8B8BAD] mb-6 flex-grow">{ind.description}</p>
                
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-amber-400 mb-3">Example Workflows</h4>
                  <div className="flex flex-wrap gap-2">
                    {ind.workflows.map((wf) => (
                      <span 
                        key={wf}
                        className="px-3 py-1 bg-[#0B0B12] border border-[#1C1C2E] text-[#8B8BAD] text-xs rounded-full"
                      >
                        {wf}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-[#0B0B12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#13131F] border-2 border-amber-500/30 rounded-2xl p-10 text-center max-w-4xl mx-auto"
          >
            <h2 className="font-display text-3xl font-bold text-white mb-4">Don&apos;t see your industry?</h2>
            <p className="text-[#8B8BAD] text-lg mb-8 max-w-2xl mx-auto">
              That&apos;s okay. We&apos;re interested in the workflow, not just the industry.
            </p>
            <Link 
              href="/discuss"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-px"
            >
              Tell us about your workflow
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
