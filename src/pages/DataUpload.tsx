
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Upload, 
  File, 
  CheckCircle, 
  AlertCircle, 
  Trash2,
  ArrowLeft,
  Database,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const DataUpload = () => {
  const { toast } = useToast();
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      name: 'payments.csv',
      size: '2.4 MB',
      records: '2,847',
      status: 'uploaded',
      uploadedAt: '2024-01-15 10:30:00'
    },
    {
      name: 'receipts.csv',
      size: '1.8 MB',
      records: '2,789',
      status: 'uploaded',
      uploadedAt: '2024-01-15 10:28:00'
    }
  ]);

  const expectedFiles = [
    { name: 'payments.csv', description: 'Payment transaction records' },
    { name: 'receipts.csv', description: 'Receipt generation data' },
    { name: 'policies.csv', description: 'Active policy information' },
    { name: 'claims.csv', description: 'Claims processing data' },
    { name: 'customers.csv', description: 'Customer information' },
    { name: 'agents.csv', description: 'Agent details and commissions' },
    { name: 'audit_logs.csv', description: 'System audit and logs' }
  ];

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      
      // Simulate file upload and processing
      toast({
        title: "File Upload Started",
        description: `Processing ${file.name}...`,
      });

      // Simulate API call delay
      setTimeout(() => {
        const newFile = {
          name: file.name,
          size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
          records: Math.floor(Math.random() * 5000).toString(),
          status: 'uploaded',
          uploadedAt: new Date().toLocaleString()
        };

        setUploadedFiles(prev => [...prev, newFile]);
        
        toast({
          title: "File Uploaded Successfully",
          description: `${file.name} has been processed and stored as dataframe.`,
        });
      }, 2000);
    }
  };

  const handleDeleteFile = (fileName: string) => {
    setUploadedFiles(prev => prev.filter(file => file.name !== fileName));
    toast({
      title: "File Deleted",
      description: `${fileName} has been removed from the system.`,
      variant: "destructive",
    });
  };

  const getFileStatus = (fileName: string) => {
    return uploadedFiles.find(file => file.name === fileName);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
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
            <h1 className="text-3xl font-bold text-white">Data Management</h1>
            <p className="text-slate-400">Upload and manage CSV files for the payment system digital twin</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Section */}
        <div className="space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Upload className="w-5 h-5" />
                Upload CSV Files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-slate-700 rounded-lg p-8 text-center hover:border-slate-600 transition-colors">
                <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Drop CSV files here</h3>
                <p className="text-slate-400 mb-4">or click to browse and select files</p>
                <Input
                  type="file"
                  multiple
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                />
                <Label htmlFor="file-upload">
                  <Button className="bg-blue-600 hover:bg-blue-700 cursor-pointer">
                    Select Files
                  </Button>
                </Label>
              </div>
              
              <div className="mt-4 text-sm text-slate-400">
                <p>• Supported format: CSV files only</p>
                <p>• Maximum file size: 50MB per file</p>
                <p>• Files will be automatically processed into dataframes</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Expected Files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {expectedFiles.map((file, index) => {
                  const uploadedFile = getFileStatus(file.name);
                  return (
                    <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <File className="w-4 h-4 text-slate-400" />
                        <div>
                          <div className="font-medium text-white">{file.name}</div>
                          <div className="text-sm text-slate-400">{file.description}</div>
                        </div>
                      </div>
                      <div>
                        {uploadedFile ? (
                          <Badge className="bg-green-600">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Uploaded
                          </Badge>
                        ) : (
                          <Badge variant="outline" className="border-slate-600 text-slate-400">
                            Pending
                          </Badge>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Uploaded Files Section */}
        <div className="space-y-6">
          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Database className="w-5 h-5" />
                Uploaded Files ({uploadedFiles.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {uploadedFiles.length === 0 ? (
                <div className="text-center py-8">
                  <Database className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-400">No files uploaded yet</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-600/20 rounded-lg">
                          <File className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white">{file.name}</div>
                          <div className="text-sm text-slate-400">
                            {file.size} • {file.records} records • {file.uploadedAt}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-600">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Active
                        </Badge>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-red-600 text-red-400 hover:bg-red-600/20"
                          onClick={() => handleDeleteFile(file.name)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-slate-800">
            <CardHeader>
              <CardTitle className="text-white">API Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-white">Data Upload API</span>
                  <Badge className="bg-green-600">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-white">DataFrame Processing</span>
                  <Badge className="bg-green-600">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    Active
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                  <span className="text-white">Analytics Engine</span>
                  <Badge className="bg-yellow-600">
                    <AlertCircle className="w-3 h-3 mr-1" />
                    Pending
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DataUpload;
