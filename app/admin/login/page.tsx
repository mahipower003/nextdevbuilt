'use client';

import React, { Suspense } from 'react';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

function LoginContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div className="min-h-screen bg-[#0B0B12] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-[#13131F] border border-[#1C1C2E] rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center"
      >
        <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-700 rounded-xl flex items-center justify-center font-display font-bold text-white text-xl mb-6 shadow-lg">
          ND
        </div>
        
        <h1 className="font-display text-2xl font-bold text-white mb-2">NextDevBuild Admin</h1>
        <p className="text-[#8B8BAD] text-sm mb-8">
          Sign in with your Google account to access the lead dashboard. Access is restricted.
        </p>

        {error && (
          <div className="mb-6 w-full p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            Access denied. Only authorised accounts may access this dashboard.
          </div>
        )}

        <button
          onClick={() => signIn('google', { callbackUrl: '/admin/leads' })}
          className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-black font-semibold px-6 py-3 rounded-lg transition-all duration-200"
        >
          <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          Continue with Google
        </button>

        <div className="mt-8 pt-6 border-t border-[#1C1C2E] w-full">
          <p className="text-[11px] font-medium text-[#52526E] uppercase tracking-wider">
            NextDevBuild · Internal use only
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function AdminLogin() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0B0B12] flex items-center justify-center text-white">Loading...</div>}>
      <LoginContent />
    </Suspense>
  );
}
