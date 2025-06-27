
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface Alert {
  type: string;
  category: string;
  status?: string;
  receiptNo?: string;
  residueAmount?: string;
  untouchedAmount?: string;
  traceNo?: string;
  referenceId?: string;
  refundModel?: string;
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
}

interface AlertCardProps {
  alert: Alert;
}

const AlertCard: React.FC<AlertCardProps> = ({ alert }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-white text-sm">{alert.type}</h3>
          <div className="text-xs text-slate-400 border-b border-green-500 inline-block">
            {alert.category}
          </div>
        </div>
        <Badge 
          variant={alert.priority === 'HIGH' ? 'destructive' : alert.priority === 'MEDIUM' ? 'secondary' : 'outline'}
          className={
            alert.priority === 'HIGH' ? 'bg-red-600' : 
            alert.priority === 'MEDIUM' ? 'bg-yellow-600' : 
            'bg-green-600'
          }
        >
          {alert.priority}
        </Badge>
      </div>
      
      {alert.status === 'no issues found' ? (
        <div className="text-green-400 text-sm">no issues found</div>
      ) : (
        <div className="space-y-1 text-sm text-slate-300 mb-3">
          {alert.receiptNo && (
            <div>
              <span className="text-red-400">Receipt no: </span>
              <span className="text-red-400 bg-red-900/20 px-1 rounded">{alert.receiptNo}</span>
            </div>
          )}
          {alert.residueAmount && (
            <div>
              <span className="text-red-400">Residue amount: </span>
              <span className="text-slate-300">{alert.residueAmount}</span>
            </div>
          )}
          {alert.untouchedAmount && (
            <div>
              <span className="text-red-400">Untouched amount: </span>
              <span className="text-slate-300">{alert.untouchedAmount}</span>
            </div>
          )}
          {alert.traceNo && (
            <div>
              <span className="text-red-400">Trace no: </span>
              <span className="text-red-400 bg-red-900/20 px-1 rounded">{alert.traceNo}</span>
            </div>
          )}
          {alert.referenceId && (
            <div>
              <span className="text-red-400">Reference id: </span>
              <span className="text-red-400 bg-red-900/20 px-1 rounded">{alert.referenceId}</span>
            </div>
          )}
          {alert.refundModel && (
            <div>
              <span className="text-red-400">Refund model: </span>
              <span className="text-slate-300">{alert.refundModel}</span>
            </div>
          )}
        </div>
      )}
      
      <div className="flex gap-2 mt-3">
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs">
          Investigate
        </Button>
        <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 text-xs">
          Review
        </Button>
      </div>
    </div>
  );
};

export default AlertCard;
