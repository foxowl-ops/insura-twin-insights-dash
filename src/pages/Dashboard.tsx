import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  CreditCard, 
  Receipt, 
  Shield, 
  Target, 
  AlertTriangle,
  Database,
  Calendar,
  ChevronDown,
  List
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const metrics = [
    {
      title: 'Payments',
      value: '2,847',
      subtitle: 'Today',
      icon: CreditCard,
      color: 'bg-blue-500',
      alerts: 12
    },
    {
      title: 'Receipts',
      value: '2,789',
      subtitle: 'Generated',
      icon: Receipt,
      color: 'bg-orange-500',
      alerts: 58
    },
    {
      title: 'Policies',
      value: '2,731',
      subtitle: 'Active',
      icon: Shield,
      color: 'bg-purple-500',
      alerts: 5
    },
    {
      title: 'Claims',
      value: '127',
      subtitle: 'Processed',
      icon: Target,
      color: 'bg-green-500',
      alerts: 0
    }
  ];

  const bottomMetrics = [
    { label: 'Flow Completion', value: '97.3%' },
    { label: 'Virgin Receipts', value: '58' },
    { label: 'Avg Processing', value: '3.2m' },
    { label: 'Volume at Risk', value: '₹47.2M' }
  ];

  const processFlowData = [
    {
      title: 'Payment Successful',
      count: '241k',
      totalAmount: '1.51G',
      color: 'bg-teal-600',
      section: 'Policy to payment stages(Online and Opus collection)'
    },
    {
      title: 'Receipt Generated',
      count: '241.2k',
      totalAmount: '1.51G',
      color: 'bg-teal-600',
      section: 'Policy to payment stages(Online and Opus collection)'
    },
    {
      title: 'Policy Created',
      count: '253k',
      totalAmount: '1.24G',
      color: 'bg-teal-400',
      section: 'Policy to payment stages(Online and Opus collection)'
    },
    {
      title: 'Refund Processed',
      count: '4.06k',
      totalAmount: '14.7M',
      color: 'bg-teal-600',
      section: 'Payment to policy'
    },
    {
      title: 'Claim Processed',
      count: '25.71k',
      totalAmount: '3.12G',
      color: 'bg-teal-600',
      section: 'Payment to policy'
    }
  ];

  const criticalAlerts = [
    {
      type: 'Amount mismatch',
      category: 'Amount mismatch table',
      status: 'no issues found',
      priority: 'LOW'
    },
    {
      type: 'Receipt residue',
      category: 'Receipt residue table',
      receiptNo: 'XXXXXXXXXXXXXXX',
      residueAmount: '677',
      priority: 'MEDIUM'
    },
    {
      type: 'Oldest untouched receipt',
      category: 'Untouched ...',
      receiptNo: 'XXXXXXXXXXXXXXX',
      untouchedAmount: '4630',
      priority: 'HIGH'
    },
    {
      type: 'Policies where multiple float...',
      category: 'Policy issues',
      status: 'no issues found',
      priority: 'LOW'
    },
    {
      type: 'Double payment',
      category: 'Payment issues',
      traceNo: 'XXXXXXX',
      referenceId: 'XXXXXXX',
      priority: 'HIGH'
    },
    {
      type: 'Different refund mode',
      category: 'Refund issues',
      receiptNo: 'XXXXXXXXXXXXXXX',
      refundModel: 'Transfer',
      priority: 'MEDIUM'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      {/* Header - keep existing code */}
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Column - Payment Flow Analysis (3/4 width) */}
        <div className="lg:col-span-3 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white text-xl">Payment Flow Analysis</CardTitle>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Timeline</Button>
                  <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">Network</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Date Filters */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-800 p-3 rounded-lg">
                  <label className="text-sm text-slate-400 mb-2 block">Individual txn date</label>
                  <Button variant="outline" className="w-full justify-between border-slate-600 text-slate-300">
                    <Calendar className="w-4 h-4" />
                    Select date range
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg">
                  <label className="text-sm text-slate-400 mb-2 block">Refund date</label>
                  <Button variant="outline" className="w-full justify-between border-slate-600 text-slate-300">
                    <Calendar className="w-4 h-4" />
                    Select date range
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg">
                  <label className="text-sm text-slate-400 mb-2 block">Claim date</label>
                  <Button variant="outline" className="w-full justify-between border-slate-600 text-slate-300">
                    <Calendar className="w-4 h-4" />
                    Select date range
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Section Headers */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-800 p-3 rounded-lg">
                  <h3 className="text-white font-medium">Policy to payment stages(Online and Opus collection)</h3>
                </div>
                <div className="bg-slate-800 p-3 rounded-lg">
                  <h3 className="text-white font-medium">Payment to policy</h3>
                </div>
              </div>

              {/* Process Flow Cards */}
              <div className="grid grid-cols-5 gap-4">
                {processFlowData.map((process, index) => (
                  <div key={index} className="space-y-2">
                    <div className={`${process.color} rounded-lg p-4 text-white relative`}>
                      <h3 className="font-bold text-lg mb-4">{process.title}</h3>
                    </div>
                    <div className="bg-white text-black p-3 rounded-lg space-y-1">
                      <div className="text-xs text-gray-600">Count</div>
                      <div className="font-bold text-lg text-blue-600">{process.count}</div>
                    </div>
                    <div className="bg-white text-black p-3 rounded-lg space-y-1">
                      <div className="text-xs text-gray-600">Total amount</div>
                      <div className="font-bold text-lg text-blue-600">{process.totalAmount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Critical Alerts (1/4 width) */}
        <div className="space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white">Latest Critical alerts</CardTitle>
                <Badge variant="destructive" className="bg-red-600">6 Active</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {criticalAlerts.map((alert, index) => (
                <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-white text-sm">{alert.type}</h3>
                      <div className="text-xs text-slate-400 border-b border-green-500 inline-block">
                        {alert.category}
                      </div>
                    </div>
                    <Badge 
                      variant={alert.priority === 'HIGH' ? 'destructive' : alert.priority === 'MEDIUM' ? 'secondary' : 'outline'}
                      className={
                        alert.priority === 'HIGH' ? 'bg-red-600' : 
                        alert.priority === 'MEDIUM' ? 'bg-yellow-600' : 
                        'bg-green-600'
                      }
                    >
                      {alert.priority}
                    </Badge>
                  </div>
                  
                  {alert.status === 'no issues found' ? (
                    <div className="text-green-400 text-sm">no issues found</div>
                  ) : (
                    <div className="space-y-1 text-sm text-slate-300 mb-3">
                      {alert.receiptNo && (
                        <div>
                          <span className="text-red-400">Receipt no: </span>
                          <span className="text-red-400 bg-red-900/20 px-1 rounded">{alert.receiptNo}</span>
                        </div>
                      )}
                      {alert.residueAmount && (
                        <div>
                          <span className="text-red-400">Residue amount: </span>
                          <span className="text-slate-300">{alert.residueAmount}</span>
                        </div>
                      )}
                      {alert.untouchedAmount && (
                        <div>
                          <span className="text-red-400">Untouched amount: </span>
                          <span className="text-slate-300">{alert.untouchedAmount}</span>
                        </div>
                      )}
                      {alert.traceNo && (
                        <div>
                          <span className="text-red-400">Trace no: </span>
                          <span className="text-red-400 bg-red-900/20 px-1 rounded">{alert.traceNo}</span>
                        </div>
                      )}
                      {alert.referenceId && (
                        <div>
                          <span className="text-red-400">Reference id: </span>
                          <span className="text-red-400 bg-red-900/20 px-1 rounded">{alert.referenceId}</span>
                        </div>
                      )}
                      {alert.refundModel && (
                        <div>
                          <span className="text-red-400">Refund model: </span>
                          <span className="text-slate-300">{alert.refundModel}</span>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs">
                      Investigate
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 text-xs">
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
