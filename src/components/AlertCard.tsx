
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
  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case 'HIGH':
        return {
          badge: 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/25',
          border: 'border-red-500/50',
          glow: 'shadow-red-500/20'
        };
      case 'MEDIUM':
        return {
          badge: 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/25',
          border: 'border-yellow-500/50',
          glow: 'shadow-yellow-500/20'
        };
      default:
        return {
          badge: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25',
          border: 'border-green-500/50',
          glow: 'shadow-green-500/20'
        };
    }
  };

  const styles = getPriorityStyles(alert.priority);

  return (
    <div className={`bg-slate-800/60 border ${styles.border} rounded-lg p-4 shadow-lg ${styles.glow} backdrop-blur-sm`}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-semibold text-white text-sm">{alert.type}</h3>
          <div className="text-xs text-cyan-300 border-b border-cyan-400 inline-block">
            {alert.category}
          </div>
        </div>
        <Badge className={styles.badge}>
          {alert.priority}
        </Badge>
      </div>
      
      {alert.status === 'no issues found' ? (
        <div className="text-emerald-300 text-sm font-medium bg-emerald-900/20 px-2 py-1 rounded">✓ no issues found</div>
      ) : (
        <div className="space-y-2 text-sm text-slate-300 mb-3">
          {alert.receiptNo && (
            <div>
              <span className="text-red-300">Receipt no: </span>
              <span className="text-red-200 bg-red-900/30 px-2 py-1 rounded font-mono text-xs">{alert.receiptNo}</span>
            </div>
          )}
          {alert.residueAmount && (
            <div>
              <span className="text-orange-300">Residue amount: </span>
              <span className="text-orange-200 font-semibold">${alert.residueAmount}</span>
            </div>
          )}
          {alert.untouchedAmount && (
            <div>
              <span className="text-yellow-300">Untouched amount: </span>
              <span className="text-yellow-200 font-semibold">${alert.untouchedAmount}</span>
            </div>
          )}
          {alert.traceNo && (
            <div>
              <span className="text-red-300">Trace no: </span>
              <span className="text-red-200 bg-red-900/30 px-2 py-1 rounded font-mono text-xs">{alert.traceNo}</span>
            </div>
          )}
          {alert.referenceId && (
            <div>
              <span className="text-red-300">Reference id: </span>
              <span className="text-red-200 bg-red-900/30 px-2 py-1 rounded font-mono text-xs">{alert.referenceId}</span>
            </div>
          )}
          {alert.refundModel && (
            <div>
              <span className="text-purple-300">Refund model: </span>
              <span className="text-purple-200 bg-purple-900/30 px-2 py-1 rounded">{alert.refundModel}</span>
            </div>
          )}
        </div>
      )}
      
      <div className="flex gap-2 mt-4">
        <Button size="sm" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-xs shadow-lg shadow-blue-500/25">
          Investigate
        </Button>
        <Button size="sm" variant="outline" className="border-slate-500 text-slate-300 hover:bg-slate-700/50 text-xs">
          Review
        </Button>
      </div>
    </div>
  );
};

export default AlertCard;
