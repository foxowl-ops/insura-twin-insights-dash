import { Button } from '@/components/ui/button';
import { Database, Clock } from 'lucide-react';

interface ProcessFilesButtonProps {
  uploadedCount: number;
  isProcessing: boolean;
  onProcess: () => void;
}

export const ProcessFilesButton = ({ uploadedCount, isProcessing, onProcess }: ProcessFilesButtonProps) => {
  if (uploadedCount === 0) return null;

  return (
    <div className="mt-8 text-center">
      <Button
        onClick={onProcess}
        disabled={isProcessing}
        size="lg"
        className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-400 hover:to-green-500 text-white px-8 py-3"
      >
        {isProcessing ? (
          <>
            <Clock className="w-5 h-5 mr-2 animate-spin" />
            Processing Files...
          </>
        ) : (
          <>
            <Database className="w-5 h-5 mr-2" />
            Process Files ({uploadedCount})
          </>
        )}
      </Button>
      <p className="text-slate-400 text-sm mt-2">
        Send uploaded files to FastAPI backend for dataframe processing
      </p>
    </div>
  );
};