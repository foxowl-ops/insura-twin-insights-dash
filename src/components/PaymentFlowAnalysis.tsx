
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DateFilters from './DateFilters';
import ProcessFlowCards from './ProcessFlowCards';

const PaymentFlowAnalysis = () => {
  return (
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
        <DateFilters />
        <ProcessFlowCards />
      </CardContent>
    </Card>
  );
};

export default PaymentFlowAnalysis;
