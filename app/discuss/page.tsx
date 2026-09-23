'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check, CheckCircle2, Calendar } from 'lucide-react';
import Link from 'next/link';

const TOTAL_STEPS = 6;

export default function DiscussPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    industry: '',
    companySize: '',
    workflowArea: '',
    processDescription: '',
    frequency: '',
    monthlyVolume: '',
    employees: '',
    goals: [] as string[],
  });

  const updateForm = (field: string, value: any) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleGoalToggle = (goal: string) => {
    setFormData((prev) => {
      const current = prev.goals;
      return {
        ...prev,
        goals: current.includes(goal)
          ? current.filter((g) => g !== goal)
          : [...current, goal],
      };
    });
  };

  const nextStep = () => {
    setDirection(1);
    setStep((prev) => Math.min(TOTAL_STEPS, prev + 1));
  };

  const prevStep = () => {
    setDirection(-1);
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setIsSuccess(true);
    } catch (err) {
      console.error('Submission failed', err);
    }
    setIsSubmitting(false);
  };

  const slideVariants = {
    initial: (d: number) => ({ x: d > 0 ? '40%' : '-40%', opacity: 0 }),
    active: { x: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 280, damping: 28 } },
    exit: (d: number) => ({
      x: d < 0 ? '40%' : '-40%',
      opacity: 0,
      transition: { ease: 'easeInOut' as const, duration: 0.18 },
    }),
  };

  const pillBtn = (active: boolean) =>
    `px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-xs sm:text-sm transition-all duration-200 ${
      active
        ? 'bg-amber-500/10 border-amber-500 text-amber-300'
        : 'bg-[#0B0B12] border-[#1C1C2E] text-[#8B8BAD] hover:border-amber-500/30 hover:text-white'
    }`;

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#0B0B12] pt-[120px] pb-24 flex items-center justify-center px-4">
        <div className="max-w-xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#13131F] border border-[#1C1C2E] rounded-2xl p-6 sm:p-10 text-center"
          >
            <div className="w-16 h-16 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-amber-500/10">
              <CheckCircle2 className="w-8 h-8 text-amber-400" />
            </div>
            <h2 className="font-display text-3xl font-bold text-white mb-3">
              We received your workflow.
            </h2>
            <p className="text-[#8B8BAD] mb-8 max-w-sm mx-auto">
              We'll review the information and get back to you to understand the process in more
              detail.
            </p>

            {/* Calendar CTA — prominent */}
            <a
              href="https://calendar.app.google/MLAfP4WQRKfpMoWv6"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 text-white p-5 sm:p-7 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/30 hover:-translate-y-px mb-5 text-left relative overflow-hidden group"
            >
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
                <Calendar className="w-28 h-28" />
              </div>
              <p className="text-amber-200 text-xs font-bold uppercase tracking-[0.12em] mb-2 relative z-10">
                Recommended next step
              </p>
              <p className="text-xl sm:text-2xl font-bold mb-1.5 relative z-10">
                Book a 30-minute conversation
              </p>
              <div className="flex items-center gap-2 text-amber-100 text-sm relative z-10">
                Pick a time that works for you <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#1C1C2E] rounded-lg text-[#8B8BAD] hover:text-white hover:border-amber-500/30 transition-all duration-200 text-sm"
            >
              Back to home
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B12] pt-[100px] pb-24">
      {/* Hero */}
      <section className="py-14 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-3">
            Workflow Assessment
          </p>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            What is your team doing manually
            <br className="hidden md:block" /> that it shouldn&apos;t be?
          </h1>
          <p className="text-[#8B8BAD] text-lg max-w-2xl mx-auto mb-3">
            Tell us about a process. We&apos;ll help you understand whether it can be automated.
          </p>
          <p className="text-[#52526E] italic text-sm">
            No sales pitch. No technical jargon. Just tell us what your team does manually.
          </p>

          {/* Two Paths Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8 text-left">
            <a
              href="https://calendar.app.google/MLAfP4WQRKfpMoWv6"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#13131F] border border-amber-500/30 hover:border-amber-500 p-5 rounded-xl transition-all duration-200 group flex flex-col justify-between hover:shadow-lg hover:shadow-amber-500/10"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Option A — Low Friction
                </span>
                <h3 className="text-white font-bold text-base mb-1 group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                  Book a 30-Minute Call <ArrowRight className="w-4 h-4 text-amber-400" />
                </h3>
                <p className="text-[#8B8BAD] text-xs leading-relaxed">
                  30-Minute Business Workflow Discovery call via Google Calendar.
                </p>
              </div>
            </a>

            <div className="bg-[#13131F] border border-[#1C1C2E] p-5 rounded-xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B8BAD] block mb-1">
                  Option B — Detailed
                </span>
                <h3 className="text-white font-bold text-base mb-1">
                  Describe Your Workflow
                </h3>
                <p className="text-[#8B8BAD] text-xs leading-relaxed">
                  Complete the 6-step assessment below for an async evaluation.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-4">
        {/* Step indicators */}
        <div className="flex items-center justify-between mb-8 relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#1C1C2E]" />
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-amber-600 to-orange-600 transition-all duration-400"
            style={{ width: `${((step - 1) / (TOTAL_STEPS - 1)) * 100}%` }}
          />
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                i < step
                  ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30'
                  : i === step
                  ? 'bg-amber-600 text-white ring-4 ring-amber-500/20'
                  : 'bg-[#13131F] border border-[#1C1C2E] text-[#52526E]'
              }`}
            >
              {i < step ? <Check className="w-3.5 h-3.5" /> : i}
            </div>
          ))}
        </div>

        <div className="bg-[#13131F] border border-[#1C1C2E] rounded-2xl p-5 sm:p-8 md:p-10 min-h-[420px] flex flex-col overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={step}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="active"
              exit="exit"
              className="flex-1"
            >
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-5">
                  <h3 className="font-display text-2xl font-bold text-white mb-6">
                    Your Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: 'Name *', field: 'name', type: 'text' },
                      { label: 'Work Email *', field: 'email', type: 'email' },
                      { label: 'Company *', field: 'company', type: 'text' },
                      { label: 'Job Title *', field: 'jobTitle', type: 'text' },
                    ].map(({ label, field, type }) => (
                      <div key={field}>
                        <label className="block text-sm font-medium text-[#8B8BAD] mb-2">
                          {label}
                        </label>
                        <input
                          type={type}
                          className="w-full bg-[#0B0B12] border border-[#1C1C2E] focus:border-amber-500/50 rounded-lg p-3 text-white outline-none placeholder-[#52526E] transition-colors"
                          value={(formData as any)[field]}
                          onChange={(e) => updateForm(field, e.target.value)}
                        />
                      </div>
                    ))}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-[#8B8BAD] mb-2">
                        Phone (optional)
                      </label>
                      <input
                        type="tel"
                        className="w-full bg-[#0B0B12] border border-[#1C1C2E] focus:border-amber-500/50 rounded-lg p-3 text-white outline-none placeholder-[#52526E] transition-colors"
                        value={formData.phone}
                        onChange={(e) => updateForm('phone', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-6">
                    About Your Company
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-[#8B8BAD] mb-2">
                      Industry
                    </label>
                    <select
                      className="w-full bg-[#0B0B12] border border-[#1C1C2E] focus:border-amber-500/50 rounded-lg p-3 text-white outline-none"
                      value={formData.industry}
                      onChange={(e) => updateForm('industry', e.target.value)}
                    >
                      <option value="">Select industry...</option>
                      {[
                        'Financial Services',
                        'Insurance',
                        'Manufacturing',
                        'Retail',
                        'Healthcare',
                        'Technology',
                        'Professional Services',
                        'Other',
                      ].map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#8B8BAD] mb-3">
                      Company Size
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {['<50', '50–200', '200–500', '500–1,000', '1,000+'].map((size) => (
                        <button
                          key={size}
                          onClick={() => updateForm('companySize', size)}
                          className={pillBtn(formData.companySize === size)}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    The Workflow Area
                  </h3>
                  <p className="text-[#8B8BAD] text-sm mb-4">
                    Which department owns this manual process?
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {[
                      'Finance',
                      'Operations',
                      'Sales',
                      'Customer Service',
                      'Compliance',
                      'HR',
                      'Risk',
                      'Other',
                    ].map((area) => (
                      <button
                        key={area}
                        onClick={() => updateForm('workflowArea', area)}
                        className={pillBtn(formData.workflowArea === area) + ' text-left'}
                      >
                        {area}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4 */}
              {step === 4 && (
                <div className="space-y-4">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Describe the Process
                  </h3>
                  <p className="text-[#8B8BAD] text-sm">
                    Don&apos;t worry about the solution. Just describe what your team does today,
                    step by step.
                  </p>
                  <textarea
                    rows={7}
                    className="w-full bg-[#0B0B12] border border-[#1C1C2E] focus:border-amber-500/50 rounded-lg p-4 text-white outline-none resize-none placeholder-[#52526E] transition-colors"
                    placeholder="Example: Every month our finance team downloads bank statements, matches transactions against our ERP and manually prepares a reconciliation report. It takes 3 people about 2 days."
                    value={formData.processDescription}
                    onChange={(e) => updateForm('processDescription', e.target.value)}
                  />
                </div>
              )}

              {/* STEP 5 */}
              {step === 5 && (
                <div className="space-y-7">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Volume &amp; Frequency
                  </h3>
                  <div>
                    <label className="block text-sm font-medium text-[#8B8BAD] mb-3">
                      How often does this happen?
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {['Daily', 'Weekly', 'Monthly', 'Continuously'].map((freq) => (
                        <button
                          key={freq}
                          onClick={() => updateForm('frequency', freq)}
                          className={pillBtn(formData.frequency === freq)}
                        >
                          {freq}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#8B8BAD] mb-3">
                      Approximate monthly volume
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {['<100', '100–1,000', '1,000–10,000', '10,000+'].map((vol) => (
                        <button
                          key={vol}
                          onClick={() => updateForm('monthlyVolume', vol)}
                          className={pillBtn(formData.monthlyVolume === vol)}
                        >
                          {vol}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#8B8BAD] mb-3">
                      How many employees are involved?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['1–5', '5–20', '20–50', '50+'].map((emp) => (
                        <button
                          key={emp}
                          onClick={() => updateForm('employees', emp)}
                          className={pillBtn(formData.employees === emp)}
                        >
                          {emp}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 6 */}
              {step === 6 && (
                <div className="space-y-5">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    What would you like to achieve?
                  </h3>
                  <p className="text-[#8B8BAD] text-sm mb-2">Select all that apply.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Reduce manual work',
                      'Reduce processing time',
                      'Reduce errors',
                      'Increase team capacity',
                      'Improve reporting',
                      'Automate a workflow',
                      "I'm not sure yet",
                    ].map((goal) => {
                      const selected = formData.goals.includes(goal);
                      return (
                        <button
                          key={goal}
                          onClick={() => handleGoalToggle(goal)}
                          className={
                            pillBtn(selected) +
                            ' flex items-center justify-between gap-2'
                          }
                        >
                          <span>{goal}</span>
                          {selected && <Check className="w-4 h-4 text-amber-400 shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Nav */}
          <div className="mt-8 pt-6 border-t border-[#1C1C2E] flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
            {step > 1 ? (
              <button
                onClick={prevStep}
                className="inline-flex items-center gap-2 text-[#8B8BAD] hover:text-white transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" /> Back
              </button>
            ) : (
              <div />
            )}

            {step < TOTAL_STEPS ? (
              <button
                onClick={nextStep}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20"
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <div className="flex flex-col items-end gap-3">
                <p className="text-[#52526E] text-xs italic text-right">
                  Not sure what technology you need? That&apos;s okay. Start with the problem.
                  <br />
                  We don&apos;t expect you to arrive with a technical specification.
                </p>
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/20 disabled:opacity-60 w-full sm:w-auto justify-center"
                >
                  {isSubmitting ? 'Submitting…' : 'Start the Conversation'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Step label */}
        <p className="text-center text-[#52526E] text-xs mt-4">
          Step {step} of {TOTAL_STEPS}
        </p>
      </div>
    </div>
  );
}
