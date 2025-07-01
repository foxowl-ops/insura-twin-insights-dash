
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DateFilters from './DateFilters';
import ProcessFlowCards from './ProcessFlowCards';

const PaymentFlowAnalysis = () => {
  return (
    <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-600/40 shadow-2xl shadow-cyan-500/10">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white text-xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            Payment Flow Analysis
          </CardTitle>
          <div className="flex gap-2">
            <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 text-white font-medium">
              Timeline
            </Button>
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
