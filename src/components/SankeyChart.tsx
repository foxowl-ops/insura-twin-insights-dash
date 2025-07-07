import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sankey, ResponsiveContainer, Tooltip } from 'recharts';

const SankeyChart = () => {
  // Sample data that would come from dataframes
  const data = {
    nodes: [
      { nodeId: 0, name: 'PG_TRACE_NO' },
      { nodeId: 1, name: 'RECEIPT_NUMBER' },
      { nodeId: 2, name: 'POLICY_NUMBER' },
      { nodeId: 3, name: 'STATUS' },
    ],
    links: [
      { source: 0, target: 1, value: 8500 },
      { source: 1, target: 2, value: 8200 },
      { source: 2, target: 3, value: 8000 },
    ]
  };

  const nodeColors = ['#0891b2', '#f59e0b', '#06b6d4', '#7c3aed'];

  return (
    <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-600/40 shadow-2xl shadow-cyan-500/10">
      <CardHeader>
        <CardTitle className="text-white text-xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
          Receipt to Policy Flow
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <Sankey
              data={data}
              nodeWidth={10}
              nodePadding={60}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '1px solid rgba(148, 163, 184, 0.3)',
                  borderRadius: '8px',
                  color: 'white'
                }}
              />
            </Sankey>
          </ResponsiveContainer>
        </div>
        
        {/* Column Headers */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-3 py-2 rounded-lg text-sm font-medium">
              PG_TRACE_NO
            </div>
            <div className="text-cyan-300 text-xs mt-2">8.5K records</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-2 rounded-lg text-sm font-medium">
              RECEIPT_NUMBER
            </div>
            <div className="text-orange-300 text-xs mt-2">8.2K records</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-3 py-2 rounded-lg text-sm font-medium">
              POLICY_NUMBER
            </div>
            <div className="text-teal-300 text-xs mt-2">8.0K records</div>
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-2 rounded-lg text-sm font-medium">
              STATUS
            </div>
            <div className="text-purple-300 text-xs mt-2">
              <span className="block">active</span>
              <span className="text-lg font-bold">10.62M</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SankeyChart;