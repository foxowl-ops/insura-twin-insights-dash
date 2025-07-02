import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const DataUploadHeader = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-4 mb-4">
        <Link to="/">
          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300 hover:bg-slate-800">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </Link>
        <div className="h-6 border-l border-slate-600"></div>
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
            DataFrames Management
          </h1>
          <p className="text-slate-400">Upload XLSX files to create dataframes for the payment system digital twin</p>
        </div>
      </div>
    </div>
  );
};