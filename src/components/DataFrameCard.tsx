import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Upload, 
  CheckCircle, 
  AlertCircle, 
  Trash2,
  FileSpreadsheet,
  Clock
} from 'lucide-react';
import { DataFrameFile } from '@/hooks/useDataFrames';

interface DataFrameCardProps {
  dataFrame: DataFrameFile;
  index: number;
  onFileUpload: (index: number, file: File) => void;
  onRemoveFile: (index: number) => void;
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'uploaded':
      return (
        <Badge className="bg-emerald-500 text-white">
          <CheckCircle className="w-3 h-3 mr-1" />
          Uploaded
        </Badge>
      );
    case 'uploading':
      return (
        <Badge className="bg-blue-500 text-white">
          <Clock className="w-3 h-3 mr-1" />
          Processing
        </Badge>
      );
    case 'error':
      return (
        <Badge className="bg-red-500 text-white">
          <AlertCircle className="w-3 h-3 mr-1" />
          Error
        </Badge>
      );
    default:
      return (
        <Badge variant="outline" className="border-slate-600 text-slate-400">
          Pending
        </Badge>
      );
  }
};

export const DataFrameCard = ({ dataFrame, index, onFileUpload, onRemoveFile }: DataFrameCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/40 shadow-xl">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-5 h-5 text-cyan-400" />
            {dataFrame.name}
          </div>
          {getStatusBadge(dataFrame.status)}
        </CardTitle>
        <p className="text-slate-400 text-sm">{dataFrame.description}</p>
      </CardHeader>
      
      <CardContent>
        {dataFrame.status === 'pending' && (
          <div className="border-2 border-dashed border-slate-600 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-colors">
            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <p className="text-slate-300 mb-3">Upload XLSX file</p>
            <Input
              type="file"
              accept=".xlsx"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onFileUpload(index, file);
              }}
              className="hidden"
              id={`file-upload-${index}`}
            />
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 cursor-pointer"
              onClick={() => document.getElementById(`file-upload-${index}`)?.click()}
            >
              Select File
            </Button>
          </div>
        )}

        {dataFrame.status === 'uploading' && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-blue-300">
              <Clock className="w-4 h-4" />
              <span className="text-sm">Processing file...</span>
            </div>
            <Progress value={dataFrame.progress || 0} className="h-2" />
            <p className="text-xs text-slate-400">{Math.round(dataFrame.progress || 0)}% complete</p>
          </div>
        )}

        {dataFrame.status === 'uploaded' && (
          <div className="space-y-4">
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-3">
              <div className="flex items-center gap-2 text-emerald-300 mb-2">
                <CheckCircle className="w-4 h-4" />
                <span className="font-medium">Successfully uploaded</span>
              </div>
              <div className="text-sm text-slate-300 space-y-1">
                <div>Records: <span className="text-emerald-300">{dataFrame.records}</span></div>
                <div>Size: <span className="text-emerald-300">{dataFrame.size}</span></div>
                <div>Uploaded: <span className="text-emerald-300">{dataFrame.uploadedAt}</span></div>
              </div>
            </div>
            
            <Button
              size="sm"
              variant="outline"
              className="w-full border-red-500 text-red-400 hover:bg-red-500/20"
              onClick={() => onRemoveFile(index)}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Remove File
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};