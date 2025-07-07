
import React from 'react';

interface ProcessFlow {
  title: string;
  count: string;
  totalAmount: string;
  color: string;
  textColor: string;
  section: string;
}

const ProcessFlowCards = () => {
  const processFlowData: ProcessFlow[] = [
    {
      title: 'Payment Successful',
      count: '241k',
      totalAmount: '1.51G',
      color: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
      textColor: 'text-white',
      section: 'Policy to payment stages(Online and Opus collection)'
    },
    {
      title: 'Receipt Generated',
      count: '241.2k',
      totalAmount: '1.51G',
      color: 'bg-gradient-to-br from-teal-500 to-teal-600',
      textColor: 'text-white',
      section: 'Policy to payment stages(Online and Opus collection)'
    },
    {
      title: 'Policy Created',
      count: '253k',
      totalAmount: '1.24G',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      textColor: 'text-white',
      section: 'Policy to payment stages(Online and Opus collection)'
    },
    {
      title: 'Refund Processed',
      count: '4.06k',
      totalAmount: '14.7M',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      textColor: 'text-white',
      section: 'Payment to policy'
    },
    {
      title: 'Claim Processed',
      count: '25.71k',
      totalAmount: '3.12G',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      textColor: 'text-white',
      section: 'Payment to policy'
    }
  ];

  return (
    <>
      {/* Section Headers */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gradient-to-r from-indigo-700 to-blue-700 p-4 rounded-lg border border-indigo-400/30 shadow-lg shadow-indigo-500/20">
          <h3 className="text-indigo-100 font-semibold">Policy to payment stages(Online and Opus collection)</h3>
        </div>
        <div className="bg-gradient-to-r from-violet-700 to-purple-700 p-4 rounded-lg border border-violet-400/30 shadow-lg shadow-violet-500/20">
          <h3 className="text-violet-100 font-semibold">Payment to policy</h3>
        </div>
      </div>

      {/* Process Flow Cards */}
      <div className="grid grid-cols-5 gap-4">
        {processFlowData.map((process, index) => (
          <div key={index} className="space-y-3">
            <div className={`${process.color} ${process.textColor} rounded-xl p-4 relative shadow-xl ring-1 ring-white/20 h-20 flex items-center`}>
              <h3 className="font-bold text-lg">{process.title}</h3>
              <div className="absolute top-2 right-2 w-3 h-3 bg-white/30 rounded-full"></div>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-50 text-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 h-16 flex flex-col justify-center">
              <div className="text-xs text-gray-500 font-medium">Count</div>
              <div className="font-bold text-xl text-indigo-600">{process.count}</div>
            </div>
            <div className="bg-gradient-to-br from-white to-gray-50 text-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 h-16 flex flex-col justify-center">
              <div className="text-xs text-gray-500 font-medium">Total amount</div>
              <div className="font-bold text-xl text-emerald-600">{process.totalAmount}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProcessFlowCards;
