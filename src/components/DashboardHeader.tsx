
import React from 'react';
import { Button } from '@/components/ui/button';
import { Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mb-2">
            Payment System Digital Twin
          </h1>
          <p className="text-cyan-300 text-lg">Real-time monitoring • Anomaly detection • Business intelligence</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gradient-to-r from-emerald-900/30 to-green-900/30 px-4 py-2 rounded-full border border-emerald-400/50 shadow-lg shadow-emerald-500/20">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
            <span className="text-emerald-300 font-medium">System Healthy</span>
          </div>
          <Link to="/upload">
            <Button variant="outline" size="sm" className="border-cyan-400 text-cyan-300 hover:bg-cyan-500/20 hover:text-cyan-200 transition-all shadow-lg shadow-cyan-500/20">
              <Database className="w-4 h-4 mr-2" />
              Manage Data
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
