'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';

const articles = [
  {
    slug: '#',
    category: 'Finance Automation',
    title: 'Why finance teams still use Excel for reconciliation',
    excerpt:
      "The software exists. The integrations exist. So why does reconciliation still happen in spreadsheets? We explore the operational and organisational reasons finance teams default to Excel — and what it costs.",
    readTime: '5 min read',
    tag: 'Coming soon',
  },
  {
    slug: '#',
    category: 'AI in Practice',
    title: 'Where AI actually works in invoice processing',
    excerpt:
      "Vendor names, amounts, dates, line items, GL codes. Invoice processing sounds automatable. Sometimes it is. Sometimes it isn't. Here's how to tell the difference before you build anything.",
    readTime: '7 min read',
    tag: 'Coming soon',
  },
  {
    slug: '#',
    category: 'Operational Efficiency',
    title: '5 manual workflows costing finance teams thousands of hours',
    excerpt:
      "After mapping dozens of finance operations, a pattern emerges. The same five workflows appear in almost every organisation above a certain size — and none of them should be manual.",
    readTime: '6 min read',
    tag: 'Coming soon',
  },
  {
    slug: '#',
    category: 'AI Strategy',
    title: 'AI agents vs traditional automation: when to use each',
    excerpt:
      "AI agents are powerful. Traditional automation is reliable. Most businesses need both — but for different tasks. A practical framework for deciding which approach fits your workflow.",
    readTime: '8 min read',
    tag: 'Coming soon',
  },
  {
    slug: '#',
    category: 'Workflow Discovery',
    title: 'What we learned from mapping 20 finance workflows',
    excerpt:
      "Every company describes their process differently. But underneath the language, the same structural problems appear again and again. Here's what we found — and what it implies about where to automate first.",
    readTime: '9 min read',
    tag: 'Coming soon',
  },
  {
    slug: '#',
    category: 'For Executives',
    title: 'How to calculate the cost of a manual process before automating it',
    excerpt:
      "Volume × time × people × cost. It sounds simple. In practice, most organisations have never done this calculation. We walk through the methodology and what the number usually reveals.",
    readTime: '5 min read',
    tag: 'Coming soon',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function InsightsPage() {
  return (
    <div className="bg-[#0B0B12] min-h-screen">
      {/* Hero */}
      <section className="pt-[120px] pb-20 relative overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#6366F1 1px, transparent 1px), linear-gradient(90deg, #6366F1 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/20 via-transparent to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-4">
              Insights
            </p>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Thinking about{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                business automation.
              </span>
            </h1>
            <p className="text-[#8B8BAD] text-lg md:text-xl leading-relaxed max-w-2xl">
              Not generic AI hype. Specific observations about how businesses operate,
              where manual work is most expensive, and what technology actually helps.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notice bar */}
      <div className="border-t border-b border-[#1C1C2E] bg-[#0D0D16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-start sm:items-center gap-3">
          <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
          <p className="text-[#8B8BAD] text-sm">
            These articles are being written based on real workflow discovery conversations.{' '}
            <span className="text-white">
              Notify me when published →
            </span>{' '}
            <a
              href="mailto:maheshchaube333@gmail.com?subject=Notify me about NextDevBuild Insights"
              className="text-amber-400 hover:text-amber-300 transition-colors"
            >
              maheshchaube333@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Articles grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {articles.map((article, i) => (
              <motion.div key={i} variants={cardVariants}>
                <div className="bg-[#13131F] border border-[#1C1C2E] rounded-xl p-6 flex flex-col h-full hover:bg-[#17172A] hover:border-amber-500/20 transition-all duration-250 group relative overflow-hidden">
                  {/* Coming soon overlay */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#52526E] bg-[#1C1C2E] border border-[#1C1C2E] px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500/70"></span>
                      {article.tag}
                    </span>
                  </div>

                  {/* Category */}
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-amber-400 mb-3 pr-20">
                    {article.category}
                  </p>

                  {/* Title */}
                  <h2 className="font-display text-lg font-bold text-white mb-3 leading-snug group-hover:text-amber-100 transition-colors duration-200 pr-4">
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-[#8B8BAD] text-sm leading-relaxed flex-1 mb-6">
                    {article.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#1C1C2E]">
                    <div className="flex items-center gap-1.5 text-[#52526E] text-xs">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                    <span className="text-[#52526E] text-xs">
                      Publishing soon
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Subscribe CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 bg-[#13131F] border border-[#1C1C2E] rounded-2xl p-6 sm:p-8 md:p-12 text-center"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-3">
              Stay informed
            </p>
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Get notified when we publish.
            </h2>
            <p className="text-[#8B8BAD] text-base mb-8 max-w-xl mx-auto">
              We write when we have something useful to say — not on a content calendar.
              Practical observations about business automation, AI implementation and
              operational efficiency.
            </p>
            <a
              href="mailto:maheshchaube333@gmail.com?subject=Notify me about NextDevBuild Insights"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-px w-full sm:w-auto justify-center"
            >
              Notify me when published
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* From the founder */}
      <section className="py-20 bg-[#0D0D16] border-t border-[#1C1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-4">
              From the Founder
            </p>
            <h2 className="font-display text-2xl font-bold text-white mb-4">
              Why I write about business workflows, not technology trends.
            </h2>
            <p className="text-[#8B8BAD] text-base leading-relaxed mb-6">
              Most technology writing is about the technology. I'm more interested in the
              operational problem it's supposed to solve. These articles come out of real
              conversations with finance and operations teams — what they actually do every
              day, why they do it manually, and what it would actually take to change that.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center text-white font-bold text-sm shrink-0">
                  MC
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Mahesh Chaube</p>
                  <p className="text-[#52526E] text-sm">Founder, NextDevBuild</p>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/mahi003/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors"
              >
                Connect on LinkedIn
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#0B0B12] border-t border-[#1C1C2E]">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Have a workflow you'd like to discuss?
            </h2>
            <p className="text-[#8B8BAD] mb-8">
              We're more useful in a conversation than in an article.
            </p>
            <Link
              href="/discuss"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-px"
            >
              Discuss a Workflow
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
