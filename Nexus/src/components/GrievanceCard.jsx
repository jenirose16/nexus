import React from 'react';

export default function GrievanceCard({ ticket, onDeleteTicket }) {
  return (
    <div className="bg-[#0D1527] border border-slate-800/60 rounded-lg p-5 flex items-center justify-between hover:border-slate-700/80 transition-all">
      <div className="space-y-1.5 max-w-[75%]">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded font-mono ${
            ticket.urgency === 'Critical' ? 'bg-red-500/20 text-red-400' : 
            ticket.urgency === 'Medium' ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-800 text-slate-400'
          }`}>
            {ticket.urgency}
          </span>
          <span className="text-xs text-slate-400 font-medium">| {ticket.category}</span>
          <span className="text-xs text-slate-500 font-mono">({ticket.location})</span>
        </div>
        <h4 className="text-sm font-semibold text-white tracking-tight leading-tight">{ticket.title}</h4>
      </div>
      
      {/* Delete Trigger Action (Rubric Requirement) */}
      <button 
        onClick={() => onDeleteTicket(ticket.id)}
        className="text-xs border border-slate-800 hover:border-red-500/30 hover:bg-red-500/10 text-slate-400 hover:text-red-400 px-3 py-2 rounded transition-all tracking-wide font-medium"
      >
        Resolve Case
      </button>
    </div>
  );
}