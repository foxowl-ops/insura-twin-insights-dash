
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  Receipt, 
  Shield, 
  Target, 
  AlertTriangle,
  TrendingUp,
  Clock,
  Database
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

  const alerts = [
    {
      title: 'Amount Mismatch Critical',
      id: 'TXN-2024-847291',
      impact: '₹2.3M',
      payment: '₹2,350,000',
      receipt: '₹2,300,000',
      priority: 'HIGH',
      color: 'border-red-500'
    },
    {
      title: 'Virgin Receipt Batch',
      count: '58 receipts',
      value: '₹12.4M',
      age: '2.5 hours',
      sla: 'Breach in 30m',
      priority: 'MEDIUM',
      color: 'border-yellow-500'
    },
    {
      title: 'Status Synchronization',
      affected: '23 transactions',
      dbStatus: 'Pending',
      realStatus: 'Completed',
      duration: '45 minutes',
      priority: 'HIGH',
      color: 'border-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      {/* Header */}
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Payment Flow Analysis */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white">Payment Flow Analysis</CardTitle>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Timeline</Button>
                  <Button size="sm" variant="outline" className="border-slate-600 text-slate-300">Network</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {metrics.map((metric, index) => (
                  <div key={index} className="relative">
                    <div className={`${metric.color} rounded-2xl p-4 text-white relative overflow-hidden`}>
                      {metric.alerts > 0 && (
                        <div className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                          {metric.alerts}
                        </div>
                      )}
                      <div className="flex items-center justify-between mb-2">
                        <metric.icon className="w-8 h-8" />
                      </div>
                      <div className="mb-1">
                        <div className="text-xl font-bold">{metric.value}</div>
                        <div className="text-sm opacity-80">{metric.subtitle}</div>
                      </div>
                    </div>
                    <div className="text-center mt-2 text-white font-medium">{metric.title}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
                {bottomMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
                    <div className="text-sm text-slate-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Critical Alerts */}
        <div className="space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-white">Critical Alerts</CardTitle>
                <Badge variant="destructive" className="bg-red-600">15 Active</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {alerts.map((alert, index) => (
                <div key={index} className={`border-l-4 ${alert.color} bg-slate-800/50 p-4 rounded-r-lg`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-white">{alert.title}</h3>
                    <Badge 
                      variant={alert.priority === 'HIGH' ? 'destructive' : 'secondary'}
                      className={alert.priority === 'HIGH' ? 'bg-red-600' : 'bg-yellow-600'}
                    >
                      {alert.priority}
                    </Badge>
                  </div>
                  
                  {alert.id && (
                    <div className="space-y-1 text-sm text-slate-300 mb-3">
                      <div>ID: <span className="font-mono">{alert.id}</span></div>
                      <div>Impact: <span className="text-red-400 font-semibold">{alert.impact}</span></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>Payment: {alert.payment}</div>
                        <div>Receipt: {alert.receipt}</div>
                      </div>
                    </div>
                  )}
                  
                  {alert.count && (
                    <div className="space-y-1 text-sm text-slate-300 mb-3">
                      <div>Count: {alert.count}</div>
                      <div>Value: {alert.value}</div>
                      <div>Age: {alert.age}</div>
                      <div>SLA: <span className="text-yellow-400">{alert.sla}</span></div>
                    </div>
                  )}
                  
                  {alert.affected && (
                    <div className="space-y-1 text-sm text-slate-300 mb-3">
                      <div>Affected: {alert.affected}</div>
                      <div>DB Status: {alert.dbStatus}</div>
                      <div>Real Status: {alert.realStatus}</div>
                      <div>Duration: {alert.duration}</div>
                    </div>
                  )}
                  
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs">
                      {alert.id ? 'Investigate' : alert.count ? 'Trigger Policy Gen' : 'Force Sync'}
                    </Button>
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 text-xs">
                      {alert.id ? 'Auto-Reconcile' : alert.count ? 'Escalate' : 'Manual Review'}
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
