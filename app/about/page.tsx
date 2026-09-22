'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function AboutPage() {
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
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-4">About Us</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
              We build software around real business problems.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-[#0D0D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-xl text-[#8B8BAD] leading-relaxed space-y-6"
          >
            <p>
              NextDevBuild was created with a simple idea: businesses don&apos;t need more technology for the sake of technology.
            </p>
            <p>
              They need technology that removes friction from the way work gets done.
            </p>
            <p>
              Our focus is identifying repetitive workflows, understanding the economics behind them and building practical software systems that improve how businesses operate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-[#0B0B12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#13131F] border border-[#1C1C2E] rounded-2xl p-8 md:p-12 max-w-4xl flex flex-col md:flex-row gap-10 items-center"
          >
            <div className="flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-amber-500 to-orange-700 p-1">
              <div className="w-full h-full bg-[#13131F] rounded-full flex items-center justify-center">
                <span className="font-display font-bold text-4xl text-white">MC</span>
              </div>
            </div>
            
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-1">Mahesh Chaube</h2>
              <p className="text-amber-400 font-medium mb-4">Founder, NextDevBuild</p>
              <p className="text-[#8B8BAD] text-lg mb-6 leading-relaxed">
                Software engineer and technology builder with experience across enterprise software, cloud infrastructure, data engineering and financial technology.
              </p>
              <a 
                href="https://www.linkedin.com/in/mahi003/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border border-[#1C1C2E] hover:border-amber-500/30 text-[#8B8BAD] hover:text-white font-medium px-6 py-3 rounded-lg transition-all duration-200"
              >
                Connect with Mahesh
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#0D0D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-8">Our Approach</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "We identify the workflow before recommending a solution.",
              "We quantify the economics before starting a build.",
              "We choose the right technology, not the most fashionable one."
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-[#13131F] border border-[#1C1C2E] rounded-xl p-8"
              >
                <p className="text-white text-lg font-medium leading-relaxed">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0B0B12]">
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
              Work with us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}