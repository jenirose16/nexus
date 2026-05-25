import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LandingPage from './landingpage';
import Login from './Login';
import GrievanceForm from './components/GrievanceForm';
import GrievanceCard from './components/GrievanceCard';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [currentView, setCurrentView] = useState('landing');
  const [tickets, setTickets] = useState([]);
  
  // Track currently authorized dashboard identity
  const [activeSessionUser, setActiveSessionUser] = useState(null);

  const API_URL = 'http://localhost:5000/api/students';

  useEffect(() => {
    fetchLiveDatabaseRecords();
  }, []);

  // 1. READ: Fetch records from the database using clean async state handling
  const fetchLiveDatabaseRecords = async () => {
    try {
      const response = await axios.get(API_URL);
      if (response.data && response.data.success) {
        setTickets(response.data.data);
      }
    } catch (error) {
      console.error("[NEXUS SYNC] Could not bridge network query stream to database targets.");
    }
  };

  // 2. CREATE / REGISTER: Submit clean inputs down to the live MongoDB collection
  const addTicket = async (newTicket) => {
    try {
      const dbRegistrationPayload = {
        email: `nexus_${Date.now().toString().slice(-4)}@kit.edu.in`, // Dynamic fallback validation email string
        password: 'secure_password_hash_2026',
        name: newTicket.title,
        department: newTicket.category || 'CSBS'
      };

      await axios.post(API_URL, dbRegistrationPayload);
      alert("Success: Record successfully written down to Cloud MongoDB Atlas Cluster tables!");
      fetchLiveDatabaseRecords(); // Clear view frames and sync list layout from live cluster database values
    } catch (error) {
      alert("Error: Core database communication route dropped. Ensure backend engine server is active.");
    }
  };

  // 3. SECURE AUTH LOGIN HANDSHAKE: Validate credentials directly against live database collection tables
  const handleDatabaseLogin = async (credentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email: credentials.email,
        password: credentials.password
      });

      if (response.data && response.data.success) {
        setActiveSessionUser(response.data.user);
        setShowLogin(false);
        setCurrentView('dashboard'); // Forward authorized session user directly down to system control loop panels
        alert(`Access Granted: Session signature established for account identity ${response.data.user.email}`);
      }
    } catch (error) {
      alert("Authentication Denied: Target credential parameters mismatch across server records.");
    }
  };

  // 4. DELETE: Remove document target indicators from live collection entries
  const deleteTicket = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      alert("Document purged successfully from MongoDB collections.");
      fetchLiveDatabaseRecords();
    } catch (error) {
      console.error("Purge instruction stack rejected.");
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0F1D] text-slate-100 font-sans">
      
      {currentView === 'landing' ? (
        <LandingPage 
          onOpenLogin={() => setShowLogin(true)} 
          onLaunchDashboard={() => setCurrentView('dashboard')} 
        />
      ) : (
        <div>
          {/* Executive Workspace Dashboard Navigation Layout */}
          <nav className="w-full h-20 border-b border-slate-800/60 bg-[#0A0F1D]/80 backdrop-blur-md px-6 sm:px-12 flex items-center justify-between sticky top-0 z-40">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentView('landing')}>
              <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-600/20">N</div>
              <span className="text-base font-bold tracking-wider text-white">NEXUS<span className="text-blue-500">.</span></span>
            </div>
            
            <div className="flex items-center gap-4">
              {activeSessionUser && (
                <span className="text-xs bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono px-3 py-1.5 rounded-md">
                  Active Session: {activeSessionUser.email}
                </span>
              )}
              <button 
                onClick={() => {
                  setCurrentView('landing');
                  setActiveSessionUser(null);
                }} 
                className="text-xs font-semibold border border-slate-800 text-slate-300 px-4 py-2 rounded-md hover:bg-slate-800 transition-all"
              >
                Logout Account
              </button>
            </div>
          </nav>

          {/* Connected Matrix Content Area */}
          <main className="max-w-7xl mx-auto px-6 sm:px-12 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <GrievanceForm onAddTicket={addTicket} />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-900 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">Active Repositories (Live MongoDB Cloud Database Feed)</h2>
                  <p className="text-xs text-slate-400 mt-0.5">Records actively served by Node.js backend cluster infrastructure loops.</p>
                </div>
                <span className="text-xs bg-blue-500/10 border border-blue-500/20 text-cyan-400 px-3 py-1 rounded-full font-mono font-bold">
                  Total Active Records: {tickets.length}
                </span>
              </div>

              {tickets.length === 0 ? (
                <div className="text-center py-16 border border-dashed border-slate-800 rounded-xl bg-[#0D1527]/30">
                  <p className="text-slate-500 text-sm">No unresolved student grievance collections pulled from database targets.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {tickets.map((ticket) => (
                    <GrievanceCard 
                      key={ticket._id} 
                      ticket={{
                        id: ticket._id,
                        title: ticket.name || "System Registry Account Instance Document",
                        category: ticket.department || "CSBS Track",
                        urgency: 'Medium',
                        location: ticket.email
                      }} 
                      onDeleteTicket={deleteTicket} 
                    />
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      )}

      {/* Auth Portal Overlay Container System */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={() => setShowLogin(false)} />
          <div className="relative z-10 w-full max-w-md">
            <button onClick={() => setShowLogin(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white z-20">✕</button>
            <Login onDatabaseSubmit={handleDatabaseLogin} />
          </div>
        </div>
      )}
    </div>
  );
}