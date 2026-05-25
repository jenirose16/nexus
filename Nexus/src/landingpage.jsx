import React from 'react';

export default function LandingPage({ onOpenLogin, onLaunchDashboard }) {
  return (
    <div className="w-full min-h-screen bg-[#0A0F1D] text-slate-100 font-sans relative overflow-hidden">
      
      {/* Decorative Cybernetic Background Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/5 blur-[150px] pointer-events-none" />

      {/* Premium Executive Top Navigation Bar */}
      <nav className="w-full h-20 border-b border-slate-800/60 bg-[#0A0F1D]/80 backdrop-blur-md px-6 sm:px-12 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-600/20">
            N
          </div>
          <span className="text-base font-bold tracking-wider text-white">
            NEXUS<span className="text-blue-500">.</span>
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <button 
            onClick={onLaunchDashboard}
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors invisible sm:visible"
          >
            Public Registry
          </button>
          <button 
            onClick={onOpenLogin} 
            className="text-sm font-semibold bg-white text-[#0A0F1D] px-5 py-2 rounded-md hover:bg-slate-200 active:scale-95 transition-all shadow-md"
          >
            Access Portal
          </button>
        </div>
      </nav>

      {/* Hero Presentation Layer Container */}
      <header className="max-w-5xl mx-auto px-6 pt-24 pb-16 text-center relative z-10">
        
        {/* Innovation Tagline Micro-Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-400">
            Next-Gen AI-Driven Redressal Ecosystem
          </span>
        </div>

        {/* Main Value Proposition Headings */}
        <h1 className="text-4xl sm:text-6xl font-extrabold font-display tracking-tight text-white leading-[1.1] max-w-4xl mx-auto">
          Intelligent Grievance Routing <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-200 to-cyan-400">
            Automated at Scale.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Bypass legacy public infrastructure bottlenecks. Nexus applies semantic processing architectures to categorize, prioritize, and dispatch civilian structural concerns instantly.
        </p>

        {/* Interactive Interactive Call-to-Actions (View State Triggers) */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Core Redirect Button: Hovering and Clicking slides in the Task System */}
          <button 
            onClick={onLaunchDashboard} 
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-500 active:scale-[0.98] transition-all duration-200 shadow-xl shadow-blue-600/20"
          >
            <span>File a Public Grievance</span>
            <svg 
              className="w-4 h-4 ml-2.5 transition-transform duration-200 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>

          {/* Secondary Informational Overview Trigger */}
          <button 
            onClick={onOpenLogin}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 font-semibold text-slate-300 border border-slate-800 rounded-md hover:bg-slate-900 hover:text-white active:scale-[0.98] transition-all"
          >
            Administrative Console
          </button>
        </div>
      </header>

      {/* Feature Highlighting Grid Layout */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <div className="bg-[#0D1527]/50 border border-slate-800/60 p-6 rounded-xl">
          <div className="h-10 w-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-400 font-mono font-bold text-sm mb-4">
            01
          </div>
          <h3 className="text-base font-bold text-white mb-1">Instant Classification</h3>
          <p className="text-xs text-slate-400 leading-relaxed">NLP layers parse raw incident data to allocate reports to appropriate department divisions instantly.</p>
        </div>

        <div className="bg-[#0D1527]/50 border border-slate-800/60 p-6 rounded-xl">
          <div className="h-10 w-10 rounded-lg bg-cyan-600/10 flex items-center justify-center text-cyan-400 font-mono font-bold text-sm mb-4">
            02
          </div>
          <h3 className="text-base font-bold text-white mb-1">Dynamic Escalation</h3>
          <p className="text-xs text-slate-400 leading-relaxed">System parameters actively grade emergency inputs based on density anchors and public safety urgency indices.</p>
        </div>

        <div className="bg-[#0D1527]/50 border border-slate-800/60 p-6 rounded-xl">
          <div className="h-10 w-10 rounded-lg bg-indigo-600/10 flex items-center justify-center text-indigo-400 font-mono font-bold text-sm mb-4">
            03
          </div>
          <h3 className="text-base font-bold text-white mb-1">Transparent Metrics</h3>
          <p className="text-xs text-slate-400 leading-relaxed">Immutable operational loops allow tracking of citizen submissions from ingestion down to final resolution.</p>
        </div>
      </section>

      {/* Minimal Footer Signature */}
      <footer className="w-full text-center py-8 border-t border-slate-900 text-[11px] font-mono tracking-widest text-slate-600 uppercase relative z-10">
        Nexus Infrastructure Security Core Layer • KIT 2026
      </footer>
    </div>
  );
}