
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';

const DateFilters = () => {
  return (
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
  );
};

export default DateFilters;
