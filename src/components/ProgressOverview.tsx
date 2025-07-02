import { Progress } from '@/components/ui/progress';

interface ProgressOverviewProps {
  uploadedCount: number;
  totalCount: number;
}

export const ProgressOverview = ({ uploadedCount, totalCount }: ProgressOverviewProps) => {
  return (
    <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-white font-medium">Upload Progress</span>
        <span className="text-cyan-300">{uploadedCount}/{totalCount} DataFrames</span>
      </div>
      <Progress value={(uploadedCount / totalCount) * 100} className="h-2" />
    </div>
  );
};