import { useState, useEffect } from 'react';
import axios from 'axios';
import { AggregatedData } from '../types/interfaces';

type ErrorType = {
  type: '403' | '404' | '500';
  message: string | null;
};

const useDashboardData = () => {
  const [data, setData] = useState<AggregatedData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorType | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('http://localhost:8080/aggregated-data');
      setData(response.data);
    } catch (err) {
      console.error(err);
      
      if (axios.isAxiosError(err) && err.response) {
        const status = err.response.status;
        
        if (status === 403) {
          setError({ type: '403', message: 'Bạn không có quyền truy cập dữ liệu này' });
        } else if (status === 404) {
          setError({ type: '404', message: 'Không tìm thấy dữ liệu yêu cầu' });
        } else {
          setError({ type: '500', message: 'Đã xảy ra lỗi khi tải dữ liệu từ máy chủ' });
        }
      } else {
        setError({ type: '500', message: 'Không thể kết nối đến máy chủ' });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData
  };
};

export default useDashboardData;