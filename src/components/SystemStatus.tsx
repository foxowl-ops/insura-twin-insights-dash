import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, CheckCircle } from 'lucide-react';

interface SystemStatusProps {
  uploadedCount: number;
  totalCount: number;
}

export const SystemStatus = ({ uploadedCount, totalCount }: SystemStatusProps) => {
  return (
    <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/40">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Database className="w-5 h-5" />
          System Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-slate-700/50 rounded-lg">
            <div className="text-2xl font-bold text-cyan-300">{uploadedCount}</div>
            <div className="text-slate-400">DataFrames Ready</div>
          </div>
          <div className="text-center p-4 bg-slate-700/50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-300">{totalCount - uploadedCount}</div>
            <div className="text-slate-400">Pending Uploads</div>
          </div>
          <div className="text-center p-4 bg-slate-700/50 rounded-lg">
            <div className="text-2xl font-bold text-emerald-300">
              {uploadedCount === totalCount ? '100%' : `${Math.round((uploadedCount / totalCount) * 100)}%`}
            </div>
            <div className="text-slate-400">System Ready</div>
          </div>
        </div>
        
        {uploadedCount === totalCount && (
          <div className="mt-4 p-4 bg-gradient-to-r from-emerald-900/30 to-green-900/30 border border-emerald-400/50 rounded-lg">
            <div className="flex items-center gap-2 text-emerald-300">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">All DataFrames Ready!</span>
            </div>
            <p className="text-emerald-200 text-sm mt-1">
              Your payment system digital twin is now fully operational with all required data sources.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};