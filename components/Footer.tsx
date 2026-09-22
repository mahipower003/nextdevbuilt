'use client';

import Link from 'next/link';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const solutions = [
  { name: 'What We Solve', href: '/what-we-solve' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Industries', href: '/industries' },
  { name: 'Insights', href: '/insights' },
  { name: 'Selected Work', href: '/work' },
];

const company = [
  { name: 'About', href: '/about' },
  { name: 'Discuss Your Business', href: '/discuss' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B0B12] border-t border-[#1C1C2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-amber-500 to-orange-700 flex items-center justify-center">
                <span className="text-white font-black text-[11px]">N</span>
              </div>
              <span className="font-display font-bold text-[15px] text-white">NextDevBuild</span>
            </Link>
            <p className="text-[#52526E] text-sm leading-relaxed mb-6">
              AI-powered business automation for companies that have outgrown manual processes.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/mahi003/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#13131F] border border-[#1C1C2E] flex items-center justify-center text-[#52526E] hover:text-white hover:border-amber-500/40 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:maheshchaube333@gmail.com"
                className="w-9 h-9 rounded-lg bg-[#13131F] border border-[#1C1C2E] flex items-center justify-center text-[#52526E] hover:text-white hover:border-amber-500/40 transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#52526E] mb-5">
              Solutions
            </h3>
            <ul className="space-y-3">
              {solutions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8B8BAD] hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#52526E] mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#8B8BAD] hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#52526E] mb-5">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-[#8B8BAD]">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+91 7666705885</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#8B8BAD]">
                <Mail className="w-4 h-4 shrink-0" />
                <a
                  href="mailto:maheshchaube333@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  maheshchaube333@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#8B8BAD]">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#1C1C2E] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#52526E] text-xs">
            © {new Date().getFullYear()} NextDevBuild. All rights reserved.
          </p>
          <p className="text-[#52526E] text-xs">AI Workflow Engineering · Mumbai, India</p>
        </div>
      </div>
    </footer>
  );
}