'use client';

import React, { useEffect, useState } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, RefreshCcw, LogOut, ChevronRight } from 'lucide-react';

interface Lead {
  id: string;
  submittedAt: string;
  status: 'NEW' | 'CONTACTED' | 'DISCOVERY' | 'WORKFLOW MAPPED' | 'OPPORTUNITY IDENTIFIED' | 'PROPOSAL' | 'PILOT' | 'PAID';
  name: string; email: string; company: string; jobTitle: string; phone: string;
  industry: string; companySize: string; workflowArea: string;
  processDescription: string; frequency: string; monthlyVolume: string;
  employees: string; goals: string[];
  opportunityScores: {
    volume: number; manualEffort: number; aiFeasibility: number;
    frequency: number; repeatability: number; buyerUrgency: number;
  };
  contextFields: {
    estimatedAnnualCost: string; integrationComplexity: number; notes: string;
  };
}

const statusColors: Record<string, string> = {
  'NEW': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'CONTACTED': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'DISCOVERY': 'bg-green-500/10 text-green-400 border-green-500/20',
  'WORKFLOW MAPPED': 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  'OPPORTUNITY IDENTIFIED': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'PROPOSAL': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'PILOT': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  'PAID': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
};

const calcTotalScore = (scores: Lead['opportunityScores']) => {
  if (!scores) return 0;
  return Object.values(scores).reduce((a, b) => a + (b || 0), 0);
};

export default function LeadsDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin/login');
    }
  }, [status, router]);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/leads');
      if (res.ok) {
        const data = await res.json();
        setLeads(data);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (status === 'authenticated') {
      fetchLeads();
    }
  }, [status]);

  const handleSaveLead = async (updatedLead: Lead) => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/leads', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedLead)
      });
      if (res.ok) {
        setLeads(prev => prev.map(l => l.id === updatedLead.id ? updatedLead : l));
        setSelectedLead(updatedLead);
      }
    } catch (err) {
      console.error(err);
    }
    setIsSaving(false);
  };

  if (status === 'loading' || status === 'unauthenticated') {
    return <div className="min-h-screen bg-[#0B0B12] flex items-center justify-center text-white">Loading...</div>;
  }

  return (
    <div className="flex h-screen overflow-hidden bg-[#0B0B12] text-[#F1F1F8]">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0D0D16] border-r border-[#1C1C2E] flex flex-col">
        <div className="p-6 border-b border-[#1C1C2E]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-700 rounded-lg flex items-center justify-center font-display font-bold text-white text-sm">ND</div>
            <span className="font-display font-bold text-white tracking-wide">Admin</span>
          </div>
          <h2 className="text-[#8B8BAD] text-xs font-bold uppercase tracking-wider mb-2">Overview</h2>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#8B8BAD]">Total Leads</span>
              <span className="text-white font-medium">{leads.length}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#8B8BAD]">New</span>
              <span className="text-white font-medium">{leads.filter(l => l.status === 'NEW').length}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#8B8BAD]">In Progress</span>
              <span className="text-white font-medium">{leads.filter(l => l.status !== 'NEW' && l.status !== 'PAID').length}</span>
            </div>
          </div>
        </div>
        <div className="mt-auto p-4 border-t border-[#1C1C2E]">
          <button onClick={() => signOut()} className="w-full flex items-center gap-2 px-4 py-2 text-sm text-[#8B8BAD] hover:text-white hover:bg-[#13131F] rounded-lg transition-colors">
            <LogOut className="w-4 h-4" /> Sign out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="h-16 border-b border-[#1C1C2E] flex items-center justify-between px-6 bg-[#0B0B12] z-10">
          <h1 className="font-display text-xl font-bold text-white">Lead Dashboard</h1>
          <button onClick={fetchLeads} className="p-2 text-[#8B8BAD] hover:text-white rounded-lg hover:bg-[#13131F] transition-colors">
            <RefreshCcw className={'w-5 h-5' + (loading ? ' animate-spin' : '')} />
          </button>
        </header>

        <div className="flex-1 overflow-auto p-6">
          <div className="bg-[#13131F] border border-[#1C1C2E] rounded-xl overflow-hidden">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-[#0D0D16] border-b border-[#1C1C2E] text-[#8B8BAD] uppercase tracking-wider text-[11px] font-bold">
                <tr>
                  <th className="px-6 py-4">Company</th>
                  <th className="px-6 py-4">Person & Role</th>
                  <th className="px-6 py-4">Workflow Area</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Score</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1C1C2E]">
                {leads.map(lead => (
                  <tr key={lead.id} className="hover:bg-[#17172A] transition-colors cursor-pointer" onClick={() => setSelectedLead(lead)}>
                    <td className="px-6 py-4">
                      <div className="font-medium text-white">{lead.company}</div>
                      <div className="text-[#8B8BAD] text-xs">{lead.industry}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-white">{lead.name}</div>
                      <div className="text-[#8B8BAD] text-xs">{lead.jobTitle}</div>
                    </td>
                    <td className="px-6 py-4 text-[#F1F1F8]">{lead.workflowArea}</td>
                    <td className="px-6 py-4">
                       <span className={'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ' + (statusColors[lead.status] || 'bg-gray-800 text-gray-300 border-gray-700')}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-1.5 bg-[#0B0B12] rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 rounded-full" style={{ width: ((calcTotalScore(lead.opportunityScores) / 60) * 100) + '%' }} />
                        </div>
                        <span className="text-xs font-medium text-[#8B8BAD]">{calcTotalScore(lead.opportunityScores)}/60</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-[#8B8BAD] text-xs">
                      {new Date(lead.submittedAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <ChevronRight className="w-5 h-5 text-[#52526E] inline-block" />
                    </td>
                  </tr>
                ))}
                {leads.length === 0 && !loading && (
                  <tr>
                    <td colSpan={7} className="px-6 py-12 text-center text-[#8B8BAD]">No leads found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Drawer */}
      <AnimatePresence>
        {selectedLead && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40"
              onClick={() => setSelectedLead(null)}
            />
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-[#0D0D16] border-l border-[#1C1C2E] z-50 flex flex-col shadow-2xl"
            >
              <div className="h-16 border-b border-[#1C1C2E] flex items-center justify-between px-6 bg-[#0B0B12]">
                <h2 className="font-display text-lg font-bold text-white">Lead Details</h2>
                <button onClick={() => setSelectedLead(null)} className="p-2 text-[#8B8BAD] hover:text-white rounded-lg hover:bg-[#13131F] transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-auto p-6 space-y-8">
                {/* Header Info */}
                <div className="bg-[#13131F] border border-[#1C1C2E] rounded-xl p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedLead.company}</h3>
                      <p className="text-[#8B8BAD]">{selectedLead.industry} • {selectedLead.companySize} employees</p>
                    </div>
                    <select
                      value={selectedLead.status}
                      onChange={(e) => setSelectedLead({ ...selectedLead, status: e.target.value as any })}
                      className="bg-[#0B0B12] border border-[#1C1C2E] text-white text-sm rounded-lg px-3 py-2 outline-none focus:border-amber-500"
                    >
                      {Object.keys(statusColors).map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div><span className="text-[#52526E] block mb-1">Contact</span><span className="text-white">{selectedLead.name} ({selectedLead.jobTitle})</span></div>
                    <div><span className="text-[#52526E] block mb-1">Email</span><span className="text-white">{selectedLead.email}</span></div>
                    <div><span className="text-[#52526E] block mb-1">Phone</span><span className="text-white">{selectedLead.phone || '-'}</span></div>
                    <div><span className="text-[#52526E] block mb-1">Date</span><span className="text-white">{new Date(selectedLead.submittedAt).toLocaleString()}</span></div>
                  </div>
                </div>

                {/* Workflow Info */}
                <div className="bg-[#13131F] border border-[#1C1C2E] rounded-xl p-6">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-4">Workflow Details</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><span className="text-[#52526E] block mb-1">Area</span><span className="text-white">{selectedLead.workflowArea}</span></div>
                      <div><span className="text-[#52526E] block mb-1">Frequency</span><span className="text-white">{selectedLead.frequency}</span></div>
                      <div><span className="text-[#52526E] block mb-1">Monthly Volume</span><span className="text-white">{selectedLead.monthlyVolume}</span></div>
                      <div><span className="text-[#52526E] block mb-1">Employees Involved</span><span className="text-white">{selectedLead.employees}</span></div>
                    </div>
                    <div>
                      <span className="text-[#52526E] block mb-2 text-sm">Process Description</span>
                      <p className="text-[#F1F1F8] text-sm bg-[#0B0B12] p-4 rounded-lg border border-[#1C1C2E]">{selectedLead.processDescription}</p>
                    </div>
                    <div>
                      <span className="text-[#52526E] block mb-2 text-sm">Goals</span>
                      <div className="flex flex-wrap gap-2">
                        {selectedLead.goals.map(g => (
                          <span key={g} className="px-2.5 py-1 bg-[#0B0B12] border border-[#1C1C2E] rounded-md text-xs text-[#8B8BAD]">{g}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Opportunity Score */}
                <div className="bg-[#13131F] border border-[#1C1C2E] rounded-xl p-6">
                  <div className="flex items-end justify-between mb-6">
                    <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400">Opportunity Score</h4>
                    <div className="text-3xl font-display font-bold text-white">{calcTotalScore(selectedLead.opportunityScores)}<span className="text-[#52526E] text-lg">/60</span></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {['volume', 'manualEffort', 'aiFeasibility', 'frequency', 'repeatability', 'buyerUrgency'].map((factor) => {
                      const val = selectedLead.opportunityScores[factor as keyof typeof selectedLead.opportunityScores] || 0;
                      return (
                        <div key={factor}>
                          <div className="flex justify-between text-xs mb-2">
                            <span className="text-[#8B8BAD] capitalize">{factor.replace(/([A-Z])/g, ' $1').trim()}</span>
                            <span className="text-white font-medium">{val}/10</span>
                          </div>
                          <input
                            type="range" min="0" max="10" value={val}
                            onChange={(e) => setSelectedLead({
                              ...selectedLead,
                              opportunityScores: { ...selectedLead.opportunityScores, [factor]: parseInt(e.target.value) }
                            })}
                            className="w-full accent-indigo-500 h-1.5 bg-[#0B0B12] rounded-lg appearance-none cursor-pointer"
                          />
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Context Fields */}
                <div className="bg-[#13131F] border border-[#1C1C2E] rounded-xl p-6">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-amber-400 mb-4">Context & Notes</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-[#8B8BAD] mb-2">Estimated Annual Cost</label>
                      <input
                        type="text"
                        value={selectedLead.contextFields?.estimatedAnnualCost || ''}
                        onChange={e => setSelectedLead({ ...selectedLead, contextFields: { ...selectedLead.contextFields, estimatedAnnualCost: e.target.value } })}
                        className="w-full bg-[#0B0B12] border border-[#1C1C2E] text-white text-sm rounded-lg px-4 py-2 outline-none focus:border-amber-500"
                        placeholder="$150,000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#8B8BAD] mb-2">
                        Integration Complexity ({selectedLead.contextFields?.integrationComplexity || 0}/10)
                      </label>
                      <input
                        type="range" min="0" max="10"
                        value={selectedLead.contextFields?.integrationComplexity || 0}
                        onChange={e => setSelectedLead({ ...selectedLead, contextFields: { ...selectedLead.contextFields, integrationComplexity: parseInt(e.target.value) } })}
                        className="w-full accent-indigo-500 h-1.5 bg-[#0B0B12] rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-[#8B8BAD] mb-2">Notes</label>
                      <textarea
                        rows={4}
                        value={selectedLead.contextFields?.notes || ''}
                        onChange={e => setSelectedLead({ ...selectedLead, contextFields: { ...selectedLead.contextFields, notes: e.target.value } })}
                        className="w-full bg-[#0B0B12] border border-[#1C1C2E] text-white text-sm rounded-lg px-4 py-3 outline-none focus:border-amber-500 resize-none"
                        placeholder="Internal notes about this lead..."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-[#1C1C2E] bg-[#0B0B12]">
                <button
                  onClick={() => handleSaveLead(selectedLead)}
                  disabled={isSaving}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-500 hover:to-orange-600 text-white font-semibold py-3 rounded-lg transition-all duration-200"
                >
                  {isSaving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
