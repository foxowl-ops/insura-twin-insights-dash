
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
          <p className="text-slate-400">Real-time monitoring • Anomaly detection • Business intelligence</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm text-slate-300">System Healthy</span>
          </div>
          <div className="text-sm text-slate-400">Processing: 847 TPS</div>
          <Link to="/upload">
            <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-800">
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
