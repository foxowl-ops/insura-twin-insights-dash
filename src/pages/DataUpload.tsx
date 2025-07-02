
import React from 'react';
import { DataUploadHeader } from '@/components/DataUploadHeader';
import { ProgressOverview } from '@/components/ProgressOverview';
import { DataFrameCard } from '@/components/DataFrameCard';
import { SystemStatus } from '@/components/SystemStatus';
import { ProcessFilesButton } from '@/components/ProcessFilesButton';
import { useDataFrames } from '@/hooks/useDataFrames';

const DataUpload = () => {
  const {
    dataFrames,
    isProcessing,
    uploadedCount,
    handleFileUpload,
    handleRemoveFile,
    handleProcessFiles
  } = useDataFrames();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white p-6">
      <DataUploadHeader />
      
      <ProgressOverview uploadedCount={uploadedCount} totalCount={7} />

      {/* DataFrames Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        {dataFrames.map((dataFrame, index) => (
          <DataFrameCard
            key={dataFrame.name}
            dataFrame={dataFrame}
            index={index}
            onFileUpload={handleFileUpload}
            onRemoveFile={handleRemoveFile}
          />
        ))}
      </div>

      <SystemStatus uploadedCount={uploadedCount} totalCount={7} />
      
      <ProcessFilesButton
        uploadedCount={uploadedCount}
        isProcessing={isProcessing}
        onProcess={handleProcessFiles}
      />
    </div>
  );
};

export default DataUpload;
