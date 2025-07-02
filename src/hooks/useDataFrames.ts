import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export interface DataFrameFile {
  name: string;
  description: string;
  file?: File;
  status: 'pending' | 'uploading' | 'uploaded' | 'error';
  uploadedAt?: string;
  records?: string;
  size?: string;
  progress?: number;
}

export const useDataFrames = () => {
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

  const [isProcessing, setIsProcessing] = useState(false);

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

  const handleProcessFiles = async () => {
    const uploadedCount = dataFrames.filter(df => df.status === 'uploaded').length;
    
    if (uploadedCount === 0) {
      toast({
        title: "No Files to Process",
        description: "Please upload at least one file before processing.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      // Get all uploaded files
      const uploadedFiles = dataFrames.filter(df => df.status === 'uploaded' && df.file);
      
      // Call FastAPI backend to process files
      const formData = new FormData();
      uploadedFiles.forEach((df) => {
        if (df.file) {
          formData.append('files', df.file);
          formData.append('dataframe_names', df.name);
        }
      });

      // Replace with your actual FastAPI backend URL
      const response = await fetch('http://localhost:8000/process-dataframes', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      toast({
        title: "Processing Complete",
        description: `Successfully processed ${uploadedFiles.length} dataframes into the system.`,
      });

      console.log('Processing result:', result);
      
    } catch (error) {
      console.error('Error processing files:', error);
      toast({
        title: "Processing Failed",
        description: "Failed to process files. Make sure your FastAPI backend is running.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const uploadedCount = dataFrames.filter(df => df.status === 'uploaded').length;

  return {
    dataFrames,
    isProcessing,
    uploadedCount,
    handleFileUpload,
    handleRemoveFile,
    handleProcessFiles
  };
};