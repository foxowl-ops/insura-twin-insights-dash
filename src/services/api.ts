
// Mock API service for CSV file uploads and dataframe management
export interface UploadedFile {
  name: string;
  size: string;
  records: string;
  status: 'uploading' | 'uploaded' | 'error';
  uploadedAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message: string;
}

class ApiService {
  private baseUrl = '/api'; // This would be your actual API endpoint
  
  // Mock file upload - in real implementation, this would send to your backend
  async uploadCsv(file: File): Promise<ApiResponse<UploadedFile>> {
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock response - in real app, this would process the CSV and return actual data
      const mockResponse: UploadedFile = {
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
        records: Math.floor(Math.random() * 5000).toString(),
        status: 'uploaded',
        uploadedAt: new Date().toISOString()
      };

      return {
        success: true,
        data: mockResponse,
        message: 'File uploaded and processed successfully'
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to upload file'
      };
    }
  }

  // Get uploaded files
  async getUploadedFiles(): Promise<ApiResponse<UploadedFile[]>> {
    try {
      // Mock data - in real app, this would fetch from your backend
      const mockFiles: UploadedFile[] = [
        {
          name: 'payments.csv',
          size: '2.4 MB',
          records: '2,847',
          status: 'uploaded',
          uploadedAt: '2024-01-15T10:30:00Z'
        },
        {
          name: 'receipts.csv',
          size: '1.8 MB',
          records: '2,789',
          status: 'uploaded',
          uploadedAt: '2024-01-15T10:28:00Z'
        }
      ];

      return {
        success: true,
        data: mockFiles,
        message: 'Files retrieved successfully'
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to retrieve files'
      };
    }
  }

  // Delete uploaded file
  async deleteFile(fileName: string): Promise<ApiResponse<null>> {
    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return {
        success: true,
        message: `File ${fileName} deleted successfully`
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to delete file'
      };
    }
  }

  // Get dashboard analytics data
  async getDashboardData(): Promise<ApiResponse<any>> {
    try {
      // Mock dashboard data - in real app, this would calculate from dataframes
      const mockData = {
        metrics: {
          payments: { value: 2847, change: '+12%' },
          receipts: { value: 2789, change: '+8%' },
          policies: { value: 2731, change: '+5%' },
          claims: { value: 127, change: '-3%' }
        },
        alerts: [
          {
            id: 'TXN-2024-847291',
            type: 'amount_mismatch',
            severity: 'high',
            impact: 2300000,
            details: {
              payment: 2350000,
              receipt: 2300000
            }
          }
        ],
        systemHealth: {
          status: 'healthy',
          tps: 847,
          uptime: '99.9%'
        }
      };

      return {
        success: true,
        data: mockData,
        message: 'Dashboard data retrieved successfully'
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to retrieve dashboard data'
      };
    }
  }
}

export const apiService = new ApiService();
