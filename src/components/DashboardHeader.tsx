
import React from 'react';
import { Button } from '@/components/ui/button';
import { Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Payment System Digital Twin</h1>
          <p className="text-blue-300">Real-time monitoring • Anomaly detection • Business intelligence</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-green-900/20 px-3 py-1 rounded-full border border-green-500/30">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
            <span className="text-sm text-green-300 font-medium">System Healthy</span>
          </div>
          <div className="text-sm text-cyan-300 bg-cyan-900/20 px-3 py-1 rounded-lg border border-cyan-500/30">
            Processing: <span className="font-bold text-cyan-200">847 TPS</span>
          </div>
          <Link to="/upload">
            <Button variant="outline" size="sm" className="border-blue-500 text-blue-300 hover:bg-blue-500/20 hover:text-blue-200 transition-all">
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
