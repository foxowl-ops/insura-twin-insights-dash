
import React from 'react';

interface ProcessFlow {
  title: string;
  count: string;
  totalAmount: string;
  color: string;
  section: string;
}

const ProcessFlowCards = () => {
  const processFlowData: ProcessFlow[] = [
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

  return (
    <>
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
    </>
  );
};

export default ProcessFlowCards;
