import React, { useState } from 'react';

export default function Login({ onDatabaseSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Core Field Validation Metrics (Assignment 5 Rubric Requirement)
    if (!email.trim() || !password.trim()) {
      alert("Validation Intercept: Credentials cannot be left blank.");
      return;
    }

    // Pass validated entries up to the central connection engine container
    if (onDatabaseSubmit) {
      onDatabaseSubmit({ email, password });
    }
  };

  return (
    <div className="bg-[#0D1527] border border-slate-800 p-8 rounded-xl shadow-2xl w-full">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-extrabold text-white tracking-tight">Administrative Access</h2>
        <p className="text-xs text-slate-400 mt-1">Authenticate session keys directly against the MongoDB Atlas cluster grid.</p>
      </div>

      <form onSubmit={handleFormSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Enterprise Mail</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@kit.edu.in"
            className="mt-1.5 w-full bg-[#141E33] border border-slate-800 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Security Passphrase</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="mt-1.5 w-full bg-[#141E33] border border-slate-800 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>

        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm py-3 rounded-md transition-all mt-4 shadow-lg shadow-blue-500/10"
        >
          Initialize Handshake
        </button>
      </form>
    </div>
  );
}