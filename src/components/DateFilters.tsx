
import React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronDown } from 'lucide-react';

const DateFilters = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-lg border border-slate-600/50 shadow-lg">
        <label className="text-sm text-cyan-300 mb-2 block font-medium">Individual txn date</label>
        <Button variant="outline" className="w-full justify-between border-cyan-500/50 text-cyan-200 hover:bg-cyan-500/10 hover:border-cyan-400">
          <Calendar className="w-4 h-4 text-cyan-400" />
          Select date range
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-lg border border-slate-600/50 shadow-lg">
        <label className="text-sm text-orange-300 mb-2 block font-medium">Refund date</label>
        <Button variant="outline" className="w-full justify-between border-orange-500/50 text-orange-200 hover:bg-orange-500/10 hover:border-orange-400">
          <Calendar className="w-4 h-4 text-orange-400" />
          Select date range
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-lg border border-slate-600/50 shadow-lg">
        <label className="text-sm text-green-300 mb-2 block font-medium">Claim date</label>
        <Button variant="outline" className="w-full justify-between border-green-500/50 text-green-200 hover:bg-green-500/10 hover:border-green-400">
          <Calendar className="w-4 h-4 text-green-400" />
          Select date range
          <ChevronDown className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default DateFilters;
