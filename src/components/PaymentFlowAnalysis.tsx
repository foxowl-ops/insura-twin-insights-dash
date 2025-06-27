
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import DateFilters from './DateFilters';
import ProcessFlowCards from './ProcessFlowCards';

const PaymentFlowAnalysis = () => {
  return (
    <Card className="bg-slate-900/80 border-slate-700/50 shadow-xl">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white text-xl">Payment Flow Analysis</CardTitle>
          <div className="flex gap-2">
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-lg shadow-blue-500/25">
              Timeline
            </Button>
            <Button size="sm" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500/20 hover:text-purple-200">
              Network
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
