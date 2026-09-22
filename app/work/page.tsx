'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function WorkPage() {
  return (
    <main className="bg-[#0B0B12] min-h-screen">
      {/* Hero Section */}
      <section className="pt-[140px] pb-20 bg-[#0B0B12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-4">Selected Work</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">What We&apos;ve Built.</h1>
            <p className="text-[#8B8BAD] text-xl max-w-2xl">
              Real projects. No manufactured case studies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-[#0D0D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#13131F] border border-[#1C1C2E] rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-300 group"
          >
            <div className="flex flex-col md:flex-row">
              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="font-display text-4xl font-bold text-white">BharatSaver</h2>
                  <span className="px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider rounded-full">
                    LIVE
                  </span>
                </div>
                
                <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#52526E] mb-6">Financial Technology</p>
                
                <p className="text-[#8B8BAD] text-lg leading-relaxed mb-10">
                  Financial technology platform providing financial calculators and tools for Indian consumers. Built to help individuals understand financial products, compare options and make informed decisions.
                </p>
                
                <div>
                  <a 
                    href="https://bharatsaver.com/en" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-transparent border border-[#1C1C2E] hover:border-amber-500/30 text-white font-medium px-6 py-3 rounded-lg transition-all duration-200 group-hover:bg-[#17172A]"
                  >
                    Visit BharatSaver
                    <ExternalLink className="w-4 h-4 text-amber-400" />
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/2 bg-gradient-to-br from-[#1C1C2E] to-[#13131F] border-t md:border-t-0 md:border-l border-[#1C1C2E] p-8 md:p-12 flex items-center justify-center min-h-[300px]">
                {/* Abstract visualization or logo placeholder */}
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-amber-600 to-orange-700 opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 absolute"></div>
                <div className="relative z-10 font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
                  Bharat<span className="text-amber-400">Saver</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-24 bg-[#0B0B12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-4">More projects coming.</h3>
            <p className="text-[#52526E] text-lg">
              We share genuine work only. No manufactured case studies or inflated client lists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 pb-32 bg-[#0B0B12]">
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
              Discuss a project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
