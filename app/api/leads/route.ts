import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
const leadsFile = path.join(dataDir, 'leads.json');

function ensureFile() {
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(leadsFile)) fs.writeFileSync(leadsFile, '[]');
}

function readLeads(): any[] {
  ensureFile();
  try {
    return JSON.parse(fs.readFileSync(leadsFile, 'utf-8'));
  } catch {
    return [];
  }
}

function writeLeads(leads: any[]) {
  ensureFile();
  fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));
}

// GET — read all leads (auth required)
export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json(readLeads());
}

// POST — create a new lead (public — from /discuss form)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const leads = readLeads();

    const lead = {
      id: `lead_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
      submittedAt: new Date().toISOString(),
      status: 'NEW',
      // Scores (0-10 each, admin fills these in; total /60)
      opportunityScores: {
        volume: 0,
        manualEffort: 0,
        aiFeasibility: 0,
        frequency: 0,
        repeatability: 0,
        buyerUrgency: 0,
      },
      // Context fields — shown but not scored
      contextFields: {
        estimatedAnnualCost: '',
        integrationComplexity: 5, // 1-10
        notes: '',
      },
      // From form
      name: body.name || '',
      email: body.email || '',
      company: body.company || '',
      jobTitle: body.jobTitle || '',
      phone: body.phone || '',
      industry: body.industry || '',
      companySize: body.companySize || '',
      workflowArea: body.workflowArea || '',
      processDescription: body.processDescription || '',
      frequency: body.frequency || '',
      monthlyVolume: body.monthlyVolume || '',
      employees: body.employees || '',
      goals: body.goals || [],
    };

    leads.unshift(lead);
    writeLeads(leads);
    return NextResponse.json({ success: true, id: lead.id });
  } catch (err) {
    console.error('Lead POST error:', err);
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
  }
}

// PATCH — update a lead (auth required)
export async function PATCH(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  try {
    const { id, updates } = await req.json();
    const leads = readLeads();
    const idx = leads.findIndex((l: any) => l.id === id);
    if (idx === -1) return NextResponse.json({ error: 'Lead not found' }, { status: 404 });

    leads[idx] = { ...leads[idx], ...updates };
    writeLeads(leads);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Lead PATCH error:', err);
    return NextResponse.json({ error: 'Failed to update lead' }, { status: 500 });
  }
}
