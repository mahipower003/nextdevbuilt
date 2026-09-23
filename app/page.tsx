"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FileText,
  RefreshCcw,
  BarChart3,
  Mail,
  UserCheck,
  CheckSquare,
  ArrowRight,
  CheckCircle2,
  Linkedin,
  ExternalLink
} from "lucide-react";

export default function Home() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  };

  return (
    <main className="min-h-screen bg-[#0B0B12] selection:bg-amber-500/30">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen pt-28 md:pt-[120px] pb-16 md:pb-24 overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 z-0 bg-[#0B0B12]" />
        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at center top, rgba(217, 119, 6, 0.35), transparent 60%)"
          }}
        />
        <div
          className="absolute inset-0 z-0 opacity-40"
          style={{
            backgroundImage: "linear-gradient(#1C1C2E 1px, transparent 1px), linear-gradient(90deg, #1C1C2E 1px, transparent 1px)",
            backgroundSize: "48px 48px"
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start max-w-4xl"
          >
            <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400">
                AI WORKFLOW ENGINEERING
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Turn Expensive Manual Work Into Intelligent Software.
            </h1>

            <p className="text-[#8B8BAD] text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl leading-relaxed">
              We help businesses identify repetitive financial and operational workflows, then design and build AI-powered systems to automate them.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                href="/discuss"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-px"
              >
                Discuss a Workflow <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://calendar.app.google/MLAfP4WQRKfpMoWv6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-transparent border border-[#1C1C2E] hover:border-amber-500/30 text-[#8B8BAD] hover:text-white font-medium px-8 py-4 rounded-lg transition-all duration-200"
              >
                Book a 30-Minute Call <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <p className="text-[#52526E] text-sm mt-6 font-medium">
              No generic AI pitch. We start with your workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#0D0D16] border-t border-[#1C1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-3">
                THE REALITY
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Your business may already have enough software.
              </h2>
              <p className="text-[#8B8BAD] text-lg mb-8">
                The problem is what's happening between the software.
              </p>
              <blockquote className="border-l-2 border-amber-500 pl-4 sm:pl-6 mb-6 sm:mb-8 text-lg sm:text-xl text-white font-medium italic">
                "Every manual handoff creates cost, delay and opportunity for error."
              </blockquote>
              <Link
                href="/discuss"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
              >
                Show Us Your Workflow <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <div className="relative p-8 rounded-2xl bg-[#0B0B12] border border-[#1C1C2E]">
              <div className="flex flex-col items-center gap-2 font-mono text-sm">
                {["EMAIL", "EXCEL", "PDF"].map((node, i) => (
                  <motion.div
                    key={node}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="w-48 text-center bg-[#13131F] border border-[#1C1C2E] rounded-md py-3 text-[#8B8BAD]"
                  >
                    {node}
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 3 * 0.15 }}
                  className="w-48 text-center bg-red-500/10 border border-red-500/30 text-red-400 rounded-md py-3 font-semibold"
                >
                  MANUAL REVIEW
                </motion.div>

                {["ERP / CRM", "EXCEL"].map((node, i) => (
                  <motion.div
                    key={node}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (4 + i) * 0.15 }}
                    className="w-48 text-center bg-[#13131F] border border-[#1C1C2E] rounded-md py-3 text-[#8B8BAD]"
                  >
                    {node}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 6 * 0.15 }}
                  className="w-48 text-center bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-md py-3 font-semibold"
                >
                  APPROVAL
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 7 * 0.15 }}
                  className="w-48 text-center bg-[#13131F] border border-[#1C1C2E] rounded-md py-3 text-[#8B8BAD]"
                >
                  EMAIL
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PAIN POINTS */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#0B0B12] border-t border-[#1C1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-3">
              WHAT KEEPS YOUR TEAM BUSY
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              What keeps your operations team busy?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <FileText className="w-6 h-6 text-amber-400" />,
                title: "Document-heavy work",
                desc: "Employees spend hours reading, extracting and validating information from documents."
              },
              {
                icon: <RefreshCcw className="w-6 h-6 text-amber-400" />,
                title: "Reconciliation",
                desc: "Data needs to be compared across systems, spreadsheets and statements."
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-amber-400" />,
                title: "Reporting",
                desc: "Teams repeatedly collect data, prepare spreadsheets and create management reports."
              },
              {
                icon: <Mail className="w-6 h-6 text-amber-400" />,
                title: "Email-driven processes",
                desc: "Important work starts and ends inside inboxes."
              },
              {
                icon: <UserCheck className="w-6 h-6 text-amber-400" />,
                title: "Verification",
                desc: "Employees manually check customers, vendors, transactions or applications."
              },
              {
                icon: <CheckSquare className="w-6 h-6 text-amber-400" />,
                title: "Approvals",
                desc: "Teams spend time chasing information and moving work between people."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#13131F] border border-[#1C1C2E] rounded-xl p-8 hover:bg-[#17172A] hover:border-amber-500/30 transition-all duration-250 group"
              >
                <div className="mb-4 bg-amber-500/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[#8B8BAD] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-8 text-center"
          >
            <p className="text-lg text-amber-100 font-medium">
              If your company performs a process hundreds or thousands of times every month, it may be a candidate for automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NEW: BEFORE -> AFTER SECTION */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#0D0D16] border-t border-[#1C1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-3">
              THE TRANSFORMATION
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Same business process. Less manual work.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* BEFORE */}
            <motion.div
              {...fadeUp}
              className="bg-[#13131F] border border-[#1C1C2E] rounded-xl p-8"
            >
              <div className="inline-flex items-center rounded bg-red-500/10 px-2 py-1 mb-6 border border-red-500/20">
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-red-400">
                  BEFORE
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-sm">
                <div className="px-4 py-2 bg-[#1C1C2E] rounded-md text-[#8B8BAD]">Email</div>
                <ArrowRight className="w-4 h-4 text-[#52526E]" />
                <div className="px-4 py-2 bg-[#1C1C2E] rounded-md text-[#8B8BAD]">Excel</div>
                <ArrowRight className="w-4 h-4 text-[#52526E]" />
                <div className="px-4 py-2 bg-[#1C1C2E] rounded-md text-[#8B8BAD]">PDF</div>
                <ArrowRight className="w-4 h-4 text-[#52526E]" />
                <div className="px-4 py-2 bg-red-500/10 border border-red-500/30 text-red-400 rounded-md font-semibold">Human Review</div>
                <ArrowRight className="w-4 h-4 text-[#52526E]" />
                <div className="px-4 py-2 bg-[#1C1C2E] rounded-md text-[#8B8BAD]">ERP</div>
                <ArrowRight className="w-4 h-4 text-[#52526E]" />
                <div className="px-4 py-2 bg-[#1C1C2E] rounded-md text-[#8B8BAD]">Excel</div>
                <ArrowRight className="w-4 h-4 text-[#52526E]" />
                <div className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-md font-semibold">Approval</div>
                <ArrowRight className="w-4 h-4 text-[#52526E]" />
                <div className="px-4 py-2 bg-[#1C1C2E] rounded-md text-[#8B8BAD]">Email</div>
              </div>
            </motion.div>

            {/* AFTER */}
            <motion.div
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="bg-[#13131F] border border-amber-500/30 rounded-xl p-8 relative overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle at top right, rgba(99, 102, 241, 1), transparent 50%)"
                }}
              />
              <div className="relative z-10">
                <div className="inline-flex items-center rounded bg-emerald-500/10 px-2 py-1 mb-6 border border-emerald-500/20">
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-emerald-400">
                    AFTER
                  </span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-sm">
                  <div className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-md">Email</div>
                  <ArrowRight className="w-4 h-4 text-amber-500/50" />
                  <div className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-md font-semibold">AI Processing</div>
                  <ArrowRight className="w-4 h-4 text-amber-500/50" />
                  <div className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-md font-semibold">Automated Validation</div>
                  <ArrowRight className="w-4 h-4 text-amber-500/50" />
                  <div className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-md">Exception Review</div>
                  <ArrowRight className="w-4 h-4 text-amber-500/50" />
                  <div className="px-4 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-md">ERP</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <motion.div {...fadeUp} className="text-center">
            <p className="text-white font-bold text-xl">Same business process. Less manual work.</p>
          </motion.div>
        </div>
      </section>

      {/* NEW: BUSINESS PROBLEMS WE SOLVE */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#0B0B12] border-t border-[#1C1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-3">
              PROBLEMS WE SOLVE
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              We solve business problems. Not technology problems.
            </h2>
            <p className="text-[#8B8BAD] text-lg max-w-2xl mx-auto">
              These are the workflows executives describe to us most often.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Manual Finance Operations",
                desc: "Month-end closes, accruals and finance processes that require too much human effort."
              },
              {
                title: "Reconciliation Across Systems",
                desc: "Matching data between ERP, bank systems, spreadsheets and reports."
              },
              {
                title: "Document-Heavy Processes",
                desc: "Extracting, reviewing and routing information from PDFs, emails and scanned documents."
              },
              {
                title: "Repetitive Reporting",
                desc: "Building the same management reports from multiple data sources every week or month."
              },
              {
                title: "Customer / Vendor Onboarding",
                desc: "Collecting, verifying and processing information from new customers or suppliers."
              },
              {
                title: "Approval Workflows",
                desc: "Moving work between people and tracking what needs sign-off."
              },
              {
                title: "Data Movement Between Systems",
                desc: "Copying information from one system into another, manually."
              },
              {
                title: "Internal Tools That Don't Exist",
                desc: "Processes being run in email and spreadsheets because no software was ever built for them."
              }
            ].map((prob, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[#13131F] border border-[#1C1C2E] rounded-xl p-6 hover:bg-[#17172A] hover:border-amber-500/30 transition-all duration-250"
              >
                <h3 className="text-white font-bold mb-2">{prob.title}</h3>
                <p className="text-[#8B8BAD] text-sm leading-relaxed">{prob.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            className="border border-amber-500/30 bg-amber-500/5 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <p className="text-white text-lg font-medium">
              Have a problem that isn't listed? Tell us about it.
            </p>
            <Link
              href="/discuss"
              className="shrink-0 inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
              Describe Your Workflow <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. KEY SALES SECTION */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#0D0D16] border-y border-[#1C1C2E] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Tell us what your team spends too much time doing.
            </h2>
            <div className="text-xl text-[#8B8BAD] space-y-6 mb-12 max-w-2xl mx-auto">
              <p>You don't need to know whether AI is the answer.</p>
              <p>Tell us how the process works today. We'll help identify where technology could remove unnecessary manual work.</p>
            </div>
            <Link
              href="/discuss"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 text-white font-semibold px-6 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-px"
            >
              Discuss a Workflow <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 5. HOW WE WORK */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#0B0B12] border-t border-[#1C1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16 text-center md:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-3">
              OUR PROCESS
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-3xl">
              We don't start with technology. We start with the business problem.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
            {[
              { num: "01", name: "Discover", desc: "We understand the process, people and systems involved." },
              { num: "02", name: "Map", desc: "We document the workflow from start to finish." },
              { num: "03", name: "Measure", desc: "We estimate volume, time, cost and bottlenecks." },
              { num: "04", name: "Identify", desc: "We determine where AI, automation or better software could create measurable value." },
              { num: "05", name: "Build", desc: "We create a focused proof of concept around the highest-value opportunity." },
              { num: "06", name: "Scale", desc: "Once the economics are proven, we integrate the solution into the business." }
            ].map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="text-3xl font-display font-bold text-amber-500/40 mb-2">{stage.num}</div>
                <h3 className="text-xl font-bold text-white mb-3">{stage.name}</h3>
                <p className="text-[#52526E] leading-relaxed">{stage.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: BUILD vs BUY vs AUTOMATE vs AI */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#0D0D16] border-t border-[#1C1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-3">
              OUR APPROACH
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Sometimes the answer isn't custom software.
            </h2>
            <p className="text-[#8B8BAD] text-lg max-w-2xl mx-auto">
              We help determine whether the right approach is building, buying, integrating or automating.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
            {[
              { tag: "BUY", desc: "Use an existing product that already solves the problem." },
              { tag: "INTEGRATE", desc: "Connect the systems you already have." },
              { tag: "AUTOMATE", desc: "Remove repetitive manual work without rebuilding." },
              { tag: "BUILD", desc: "Create software where existing solutions don't fit." },
              { tag: "AI", desc: "Apply AI where judgment, document or knowledge work can genuinely benefit." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#13131F] border border-[#1C1C2E] rounded-xl p-6 text-center flex flex-col items-center"
              >
                <div className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 mb-4 border border-amber-500/30">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {item.tag}
                  </span>
                </div>
                <p className="text-[#8B8BAD] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div {...fadeUp} className="text-center">
            <p className="text-white font-medium">
              We recommend the right approach for the problem — not the most profitable one for us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* NEW SECTION: WHY TALK TO US */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#0B0B12] border-t border-[#1C1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-3">
              WHY TALK TO US
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Why businesses work with NextDevBuild
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Business-first",
                desc: "We understand the workflow before recommending technology."
              },
              {
                title: "Engineering depth",
                desc: "AI, backend systems, APIs, cloud and data engineering under one roof."
              },
              {
                title: "Practical AI",
                desc: "We use AI where it creates measurable value—not because it's trendy."
              },
              {
                title: "End-to-end",
                desc: "From discovery and prototype to production integration."
              },
              {
                title: "Founder-led",
                desc: "You work directly with the people designing the solution."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#13131F] border border-[#1C1C2E] rounded-xl p-6 hover:border-amber-500/30 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                  <p className="text-[#8B8BAD] text-sm leading-relaxed">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: ENTERPRISE READINESS */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#0D0D16] border-y border-[#1C1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-3">
              BUILT FOR BUSINESS
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Built for business environments.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12 max-w-4xl mx-auto"
          >
            {[
              "Secure Architecture",
              "Role-Based Access",
              "Audit Trails",
              "API Integrations",
              "Cloud Deployment",
              "Data Protection",
              "Human Approval Workflows"
            ].map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 px-4 py-2 bg-[#13131F] border border-[#1C1C2E] rounded-full text-white text-sm font-medium shadow-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                {feature}
              </div>
            ))}
          </motion.div>

          <motion.p
            {...fadeUp}
            className="text-[#52526E] text-sm italic max-w-2xl mx-auto"
          >
            We describe our architectural practices accurately. We don't display certifications we haven't earned.
          </motion.p>
        </div>
      </section>

      {/* 6. TRUST SECTION */}
      <section className="py-16 sm:py-20 md:py-28 bg-[#0D0D16] text-center border-y border-[#1C1C2E]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Sometimes AI isn't the answer.
            </h2>
            <p className="text-[#8B8BAD] text-base sm:text-lg md:text-xl leading-relaxed">
              We don't recommend AI simply because it's fashionable. Sometimes the right solution is a workflow change, API integration, traditional automation or better software. We choose the technology based on the business problem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7. FOR EXECUTIVES */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#0B0B12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-3">
              BUILT FOR DECISION MAKERS
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl mx-auto mb-4">
              Built for people responsible for the business — not just the technology.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {[
              { role: "CEO", desc: "Identify where your company is spending expensive human time on work that could be redesigned or automated." },
              { role: "CFO", desc: "Understand the cost of repetitive financial operations and identify opportunities to reduce manual effort." },
              { role: "COO", desc: "Improve throughput without simply adding more people." },
              { role: "CTO", desc: "Turn manual processes into secure, maintainable software integrated with your existing systems." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#13131F] border border-[#1C1C2E] rounded-xl p-8 hover:bg-[#17172A] hover:border-amber-500/30 transition-all duration-250"
              >
                <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-4">{item.role}</div>
                <p className="text-white text-lg font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* FOUNDER CREDIBILITY CARD */}
          <motion.div
            {...fadeUp}
            className="max-w-3xl mx-auto bg-[#13131F] border border-amber-500/30 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 block">
                FOUNDER & LEAD ENGINEER
              </span>
              <h3 className="text-white font-bold text-2xl">Built by Mahesh Chaube</h3>
              <p className="text-[#8B8BAD] text-sm leading-relaxed max-w-xl">
                Software engineer with experience across enterprise software, cloud, data engineering and financial technology.
              </p>
            </div>
            <a
              href="https://www.linkedin.com/in/mahesh-chaube-3075b8226/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 hover:border-amber-500 text-amber-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-all text-sm"
            >
              <Linkedin className="w-4 h-4 text-amber-400" /> LinkedIn <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 8. ROI ECONOMICS */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#0D0D16] border-y border-[#1C1C2E]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-3">
              THE ECONOMICS
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Before we build anything, we want to understand the economics.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#13131F] border border-[#1C1C2E] rounded-2xl p-8 max-w-2xl mx-auto mb-8 font-mono shadow-2xl"
          >
            <div className="flex flex-col gap-4 text-[#8B8BAD]">
              <div className="flex justify-between items-center border-b border-[#1C1C2E] pb-4">
                <span>Monthly volume</span>
                <span className="text-white">v</span>
              </div>
              <div className="text-center text-xs text-[#52526E]">×</div>
              <div className="flex justify-between items-center border-b border-[#1C1C2E] pb-4">
                <span>Time per transaction</span>
                <span className="text-white">t</span>
              </div>
              <div className="text-center text-xs text-[#52526E]">×</div>
              <div className="flex justify-between items-center border-b border-[#1C1C2E] pb-4">
                <span>People involved</span>
                <span className="text-white">p</span>
              </div>
              <div className="text-center text-xs text-[#52526E]">×</div>
              <div className="flex justify-between items-center border-b border-[#1C1C2E] pb-4">
                <span>Cost per hour</span>
                <span className="text-white">$</span>
              </div>
              <div className="flex justify-between items-center pt-2 text-amber-400 font-bold text-lg">
                <span>= Manual process cost</span>
                <span>$$$</span>
              </div>
            </div>
          </motion.div>

          <motion.p
            {...fadeUp}
            className="text-center text-[#8B8BAD] text-xl max-w-2xl mx-auto"
          >
            Once we understand the economics, we can determine whether automation is actually worth building.
          </motion.p>
        </div>
      </section>

      {/* 9. TECH CREDIBILITY */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#0B0B12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeUp} className="mb-12">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-3">
              ENGINEERING
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Built on enterprise-grade engineering.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto"
          >
            {[
              "AI / LLMs", "Java", "Spring Boot", "AWS",
              "Cloud Infrastructure", "Data Engineering",
              "APIs", "Databases", "Workflow Automation",
              "Enterprise Applications"
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-[#13131F] border border-amber-500/30 rounded-full text-[#8B8BAD] font-mono text-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.p
            {...fadeUp}
            className="text-[#8B8BAD] text-lg max-w-2xl mx-auto"
          >
            Our engineering background allows us to take an automation from prototype to production system.
          </motion.p>
        </div>
      </section>

      {/* 10. SELECTED WORK */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#0D0D16] border-y border-[#1C1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-3">
              SELECTED WORK
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              What we've built.
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="bg-[#13131F] border border-[#1C1C2E] rounded-xl p-8 hover:bg-[#17172A] hover:border-amber-500/30 transition-all duration-250 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 max-w-4xl"
          >
            <div className="w-full">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
                <h3 className="text-2xl font-bold text-white">BharatSaver</h3>
                <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider border border-emerald-500/20">
                  Live
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-[#52526E]">
                  Financial Technology
                </span>
              </div>
              <p className="text-[#8B8BAD] text-base mb-4">
                Consumer financial technology platform for calculating and comparing financial decisions.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6 text-[#8B8BAD] text-xs">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                  Multi-language financial calculators
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                  Financial calculation engine
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0"></span>
                  SEO/content-driven platform
                </li>
              </ul>
              <Link
                href="https://bharatsaver.com/en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-transparent border border-[#1C1C2E] hover:border-amber-500/30 text-white font-medium px-5 py-2.5 rounded-lg text-sm transition-all duration-200"
              >
                View Live Project <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: WHAT HAPPENS AFTER YOU CONTACT US */}
      <section className="py-14 sm:py-20 md:py-24 bg-[#0B0B12] border-t border-[#1C1C2E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-3">
              THE PROCESS
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              What happens after you contact us.
            </h2>
            <p className="text-[#8B8BAD] text-lg max-w-2xl mx-auto">
              You're not entering a sales funnel. You're starting a conversation.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6 lg:gap-8 justify-between relative">
            {/* Connecting Line - desktop only */}
            <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-amber-500/20 z-0"></div>
            
            {[
              { title: "30-min conversation", desc: "We understand the business problem before recommending the technology." },
              { title: "Workflow analysis", desc: "We map the current process from start to finish." },
              { title: "Solution proposal", desc: "We recommend AI, automation, integration or custom software." },
              { title: "Prototype", desc: "We build a focused proof of concept around the highest-value opportunity." },
              { title: "Production", desc: "We integrate the solution into your business." }
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-4 flex-1"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-[#13131F] border-2 border-[#1C1C2E] text-amber-400 font-display font-bold text-xl flex items-center justify-center">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{step.title}</h3>
                  <p className="text-[#8B8BAD] text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-[#0D0D16] overflow-hidden border-t border-[#1C1C2E]">
        {/* Glow behind CTA */}
        <div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at center, rgba(217, 119, 6, 0.18), transparent 70%)"
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Start the Conversation
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#8B8BAD] mb-8 sm:mb-12">
              Tell us about a workflow. We'll tell you if it's automatable.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              {/* NEW NO OBLIGATION MESSAGING */}
              <div className="text-[#8B8BAD] italic text-sm space-y-1 mb-2">
                <p>Not sure what technology you need? That's okay. Start with the problem.</p>
                <p>We don't expect you to arrive with a technical specification.</p>
              </div>
              
              <Link
                href="/discuss"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 text-white font-semibold px-6 sm:px-10 py-4 sm:py-5 rounded-lg text-base sm:text-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 hover:-translate-y-px"
              >
                Discuss a Workflow <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="https://calendar.app.google/MLAfP4WQRKfpMoWv6"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 border border-[#1C1C2E] hover:border-amber-500/30 bg-transparent text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg transition-all duration-200 hover:bg-[#13131F]"
              >
                Book a 30-Minute Call <ArrowRight className="w-4 h-4 text-amber-400" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}