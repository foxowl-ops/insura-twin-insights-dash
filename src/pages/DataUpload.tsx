
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Upload, 
  File, 
  CheckCircle, 
  AlertCircle, 
  Trash2,
  ArrowLeft,
  Database,
  FileSpreadsheet,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

interface DataFrameFile {
  name: string;
  description: string;
  file?: File;
  status: 'pending' | 'uploading' | 'uploaded' | 'error';
  uploadedAt?: string;
  records?: string;
  size?: string;
  progress?: number;
}

const DataUpload = () => {
  const { toast } = useToast();
  
  const [dataFrames, setDataFrames] = useState<DataFrameFile[]>([
    { name: 'payments', description: 'Payment transaction records', status: 'pending' },
    { name: 'receipts', description: 'Receipt generation data', status: 'pending' },
    { name: 'policies', description: 'Active policy information', status: 'pending' },
    { name: 'claims', description: 'Claims processing data', status: 'pending' },
    { name: 'customers', description: 'Customer information', status: 'pending' },
    { name: 'agents', description: 'Agent details and commissions', status: 'pending' },
    { name: 'audit_logs', description: 'System audit and logs', status: 'pending' }
  ]);

  const handleFileUpload = async (index: number, file: File) => {
    if (!file.name.endsWith('.xlsx')) {
      toast({
        title: "Invalid File Type",
        description: "Please upload only XLSX files.",
        variant: "destructive",
      });
      return;
    }

    // Update status to uploading
    setDataFrames(prev => prev.map((df, i) => 
      i === index ? { ...df, file, status: 'uploading', progress: 0 } : df
    ));

    toast({
      title: "Upload Started",
      description: `Processing ${file.name} for ${dataFrames[index].name} dataframe...`,
    });

    // Simulate upload progress
    const simulateProgress = () => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress >= 100) {
          progress = 100;
          clearInterval(interval);
          
          // Complete the upload
          setDataFrames(prev => prev.map((df, i) => 
            i === index ? {
              ...df,
              status: 'uploaded',
              uploadedAt: new Date().toLocaleString(),
              records: Math.floor(Math.random() * 5000 + 1000).toString(),
              size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
              progress: 100
            } : df
          ));

          toast({
            title: "Upload Successful",
            description: `${file.name} has been processed and saved as ${dataFrames[index].name} dataframe.`,
          });
        } else {
          setDataFrames(prev => prev.map((df, i) => 
            i === index ? { ...df, progress } : df
          ));
        }
      }, 200);
    };

    simulateProgress();
  };

  const handleRemoveFile = (index: number) => {
    const dataFrame = dataFrames[index];
    setDataFrames(prev => prev.map((df, i) => 
      i === index ? { 
        name: df.name, 
        description: df.description, 
        status: 'pending' 
      } : df
    ));
    
    toast({
      title: "File Removed",
      description: `${dataFrame.name} dataframe has been cleared.`,
      variant: "destructive",
    });
  };

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

  const uploadedCount = dataFrames.filter(df => df.status === 'uploaded').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white p-6">
      {/* Header */}
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
        
        {/* Progress Overview */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-medium">Upload Progress</span>
            <span className="text-cyan-300">{uploadedCount}/7 DataFrames</span>
          </div>
          <Progress value={(uploadedCount / 7) * 100} className="h-2" />
        </div>
      </div>

      {/* DataFrames Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {dataFrames.map((dataFrame, index) => (
          <Card key={dataFrame.name} className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/40 shadow-xl">
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
                      if (file) handleFileUpload(index, file);
                    }}
                    className="hidden"
                    id={`file-upload-${index}`}
                  />
                  <Label htmlFor={`file-upload-${index}`}>
                    <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 cursor-pointer">
                      Select File
                    </Button>
                  </Label>
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
                    onClick={() => handleRemoveFile(index)}
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Remove File
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Card */}
      <Card className="mt-8 bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-600/40">
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
              <div className="text-2xl font-bold text-yellow-300">{7 - uploadedCount}</div>
              <div className="text-slate-400">Pending Uploads</div>
            </div>
            <div className="text-center p-4 bg-slate-700/50 rounded-lg">
              <div className="text-2xl font-bold text-emerald-300">
                {uploadedCount === 7 ? '100%' : `${Math.round((uploadedCount / 7) * 100)}%`}
              </div>
              <div className="text-slate-400">System Ready</div>
            </div>
          </div>
          
          {uploadedCount === 7 && (
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
    </div>
  );
};

export default DataUpload;
