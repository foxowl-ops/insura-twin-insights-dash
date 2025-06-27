
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AlertCard from './AlertCard';

const CriticalAlerts = () => {
  const criticalAlerts = [
    {
      type: 'Amount mismatch',
      category: 'Amount mismatch table',
      status: 'no issues found',
      priority: 'LOW' as const
    },
    {
      type: 'Receipt residue',
      category: 'Receipt residue table',
      receiptNo: 'XXXXXXXXXXXXXXX',
      residueAmount: '677',
      priority: 'MEDIUM' as const
    },
    {
      type: 'Oldest untouched receipt',
      category: 'Untouched ...',
      receiptNo: 'XXXXXXXXXXXXXXX',
      untouchedAmount: '4630',
      priority: 'HIGH' as const
    },
    {
      type: 'Policies where multiple float...',
      category: 'Policy issues',
      status: 'no issues found',
      priority: 'LOW' as const
    },
    {
      type: 'Double payment',
      category: 'Payment issues',
      traceNo: 'XXXXXXX',
      referenceId: 'XXXXXXX',
      priority: 'HIGH' as const
    },
    {
      type: 'Different refund mode',
      category: 'Refund issues',
      receiptNo: 'XXXXXXXXXXXXXXX',
      refundModel: 'Transfer',
      priority: 'MEDIUM' as const
    }
  ];

  return (
    <Card className="bg-slate-900 border-slate-800">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">Latest Critical alerts</CardTitle>
          <Badge variant="destructive" className="bg-red-600">6 Active</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {criticalAlerts.map((alert, index) => (
          <AlertCard key={index} alert={alert} />
        ))}
      </CardContent>
    </Card>
  );
};

export default CriticalAlerts;
