import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Core Field Validation Metrics (Assignment 5 Rubric Requirement)
    if (!email.trim() || !password.trim()) {
      alert("Validation Intercept: Credentials cannot be left blank.");
      return;
    }

    setLoading(true);

    try {
      // =========================================================================
      // FULL-STACK API ROUTING ENGINE CONFIGURATION (Assignment 6 Metric)
      // Connect directly to your live Vercel backend deployment link.
      // Replace 'your-backend-api' with your exact backend url if different.
      // =========================================================================
      const backendUrl = "https://nexus-backend-api.vercel.app/api/students/login";
      
      const response = await axios.post(backendUrl, {
        email: email.trim(),
        password: password
      });

      if (response.data.success) {
        // Extract token and user details from the backend's response payload
        const { token, user } = response.data;

        // 🔐 Save the cryptographic token in localStorage for session state persistence
        localStorage.setItem('nexus_token', token);
        localStorage.setItem('nexus_user', JSON.stringify(user));

        alert("Handshake Cleared! Access Granted.");

        // Fire success callback to update main dashboard application state 
        if (onLoginSuccess) {
          onLoginSuccess(user);
        }
      }
    } catch (error) {
      console.error("Authentication Matrix Fail:", error);
      
      // Extract custom error string from our express centralized error layer
      const fallbackErrorMessage = error.response?.data?.error || "Network pipeline streaming timeout drop.";
      alert(`Authentication Denied: ${fallbackErrorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0D1527] border border-slate-800 p-8 rounded-xl shadow-2xl w-full max-w-md mx-auto">
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
            disabled={loading}
            placeholder="admin@kit.edu.in"
            className="mt-1.5 w-full bg-[#141E33] border border-slate-800 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all disabled:opacity-50"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wide">Security Passphrase</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
            placeholder="••••••••"
            className="mt-1.5 w-full bg-[#141E33] border border-slate-800 rounded-md px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition-all disabled:opacity-50"
          />
        </div>

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm py-3 rounded-md transition-all mt-4 shadow-lg shadow-blue-500/10 disabled:opacity-50 flex justify-center items-center"
        >
          {loading ? "Processing Encryption Matrix..." : "Initialize Handshake"}
        </button>
      </form>
    </div>
  );
}