'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calculator } from 'lucide-react';

const stages = [
  {
    num: '01',
    title: 'Discover',
    description: 'We understand the process, people and systems involved.'
  },
  {
    num: '02',
    title: 'Map',
    description: 'We document the workflow from start to finish.'
  },
  {
    num: '03',
    title: 'Measure',
    description: 'We estimate volume, time, cost and bottlenecks.'
  },
  {
    num: '04',
    title: 'Identify',
    description: 'We determine where AI, automation or better software could create measurable value.'
  },
  {
    num: '05',
    title: 'Build',
    description: 'We create a focused proof of concept around the highest-value opportunity.'
  },
  {
    num: '06',
    title: 'Scale',
    description: 'Once the economics are proven, we integrate the solution into the business.'
  }
];

export default function HowItWorksPage() {
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
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-4">Our Process</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">How We Work.</h1>
            <p className="text-[#8B8BAD] text-xl max-w-2xl">
              We don&apos;t start with technology. We start with the business problem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-[#0D0D16]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-2 border-[#1C1C2E] ml-6 md:ml-8 pl-8 md:pl-12 space-y-16">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[58px] md:-left-[74px] top-1 w-12 h-12 bg-[#13131F] border-2 border-amber-500 rounded-full flex items-center justify-center font-display font-bold text-amber-400 z-10 shadow-[0_0_15px_rgba(217,119,6,0.2)]">
                  {stage.num}
                </div>
                
                <h3 className="font-display text-3xl font-bold text-white mb-3">{stage.title}</h3>
                <p className="text-[#8B8BAD] text-lg max-w-xl">{stage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Economics Section */}
      <section className="py-24 bg-[#0B0B12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#13131F] border border-[#1C1C2E] rounded-2xl p-8 md:p-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <Calculator className="w-8 h-8 text-amber-400" />
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">The Economics Matter</h2>
            </div>
            
            <div className="grid md:grid-cols-5 gap-4 items-center text-center font-mono text-[#8B8BAD]">
              <div className="bg-[#0B0B12] border border-[#1C1C2E] rounded-lg p-6 flex flex-col justify-center h-full">
                <span className="text-white text-lg font-bold mb-2">Volume</span>
                <span className="text-sm">Monthly transactions</span>
              </div>
              <div className="text-2xl hidden md:block text-[#52526E]">×</div>
              <div className="bg-[#0B0B12] border border-[#1C1C2E] rounded-lg p-6 flex flex-col justify-center h-full">
                <span className="text-white text-lg font-bold mb-2">Time</span>
                <span className="text-sm">Per transaction</span>
              </div>
              <div className="text-2xl hidden md:block text-[#52526E]">×</div>
              <div className="bg-[#0B0B12] border border-[#1C1C2E] rounded-lg p-6 flex flex-col justify-center h-full">
                <span className="text-white text-lg font-bold mb-2">People & Cost</span>
                <span className="text-sm">Team involved × Hourly rate</span>
              </div>
            </div>
            
            <div className="mt-6 p-6 bg-amber-500/10 border border-amber-500/20 rounded-lg text-center">
              <span className="text-2xl md:text-3xl font-display font-bold text-amber-400">
                = Manual Process Cost
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0D0D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              href="/discuss"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-px"
            >
              Start with a discovery conversation
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
