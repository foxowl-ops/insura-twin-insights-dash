
import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import PaymentFlowAnalysis from '../components/PaymentFlowAnalysis';
import CriticalAlerts from '../components/CriticalAlerts';
import SankeyChart from '../components/SankeyChart';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <DashboardHeader />

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column - Payment Flow Analysis (3/4 width) */}
        <div className="lg:col-span-3 space-y-6">
          <PaymentFlowAnalysis />
          <SankeyChart />
        </div>

        {/* Right Column - Critical Alerts (1/4 width) */}
        <div className="space-y-6">
          <CriticalAlerts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
