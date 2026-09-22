'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FileText, TrendingDown, Settings2, Bot, GitMerge, ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: 'AI Document Processing',
    icon: FileText,
    description: 'Extract, classify, validate and route information from documents at scale.',
    examples: ['invoices', 'applications', 'contracts', 'statements', 'claims', 'financial documents'],
  },
  {
    title: 'Finance Automation',
    icon: TrendingDown,
    description: 'Reduce repetitive financial operations and reconciliation work.',
    examples: ['reconciliation', 'invoice processing', 'reporting', 'transaction review', 'expense analysis', 'collections workflows'],
  },
  {
    title: 'Operations Automation',
    icon: Settings2,
    description: 'Automate repetitive workflows across teams and systems.',
    examples: ['onboarding', 'approvals', 'verification', 'email workflows', 'data entry', 'exception handling'],
  },
  {
    title: 'AI Agents',
    icon: Bot,
    description: 'Build AI systems that can perform multi-step business workflows while keeping humans involved where judgment is required.',
    note: 'We build practical, supervised AI systems — not "fully autonomous" agents.',
    examples: [],
  },
  {
    title: 'Enterprise Integrations',
    icon: GitMerge,
    description: 'Connect the automation to the systems your business already uses.',
    examples: ['ERP', 'CRM', 'databases', 'internal APIs', 'email', 'cloud systems', 'spreadsheets'],
  },
];

export default function WhatWeSolvePage() {
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
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-4">Automation Solutions</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">What We Automate.</h1>
            <p className="text-[#8B8BAD] text-xl max-w-2xl">
              We don&apos;t start with a technology. We start with a business problem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-[#0D0D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#13131F] border border-[#1C1C2E] rounded-xl p-8 hover:bg-[#17172A] hover:border-amber-500/30 transition-all duration-250 group flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-amber-500/10 rounded-lg flex items-center justify-center border border-amber-500/20 group-hover:border-amber-500/40 transition-colors">
                  <solution.icon className="w-8 h-8 text-amber-400" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-2xl font-bold text-white mb-3">{solution.title}</h3>
                  <p className="text-[#8B8BAD] text-lg mb-4">{solution.description}</p>
                  
                  {solution.note && (
                    <p className="text-[#52526E] italic text-sm mb-4">{solution.note}</p>
                  )}

                  {solution.examples.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {solution.examples.map((example) => (
                        <span 
                          key={example}
                          className="px-3 py-1 bg-[#0B0B12] border border-[#1C1C2E] text-[#8B8BAD] text-sm rounded-full"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 bg-[#0B0B12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#13131F] border border-[#1C1C2E] rounded-2xl p-12 md:p-16 flex flex-col items-center max-w-4xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">Ready to discuss a specific workflow?</h2>
            <Link 
              href="/discuss"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-px"
            >
              Discuss Your Business
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
