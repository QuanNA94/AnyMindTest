import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

type ErrorType = '403' | '404' | '500';

interface ErrorPageProps {
  errorType: ErrorType;
  title?: string;
  subTitle?: string;
}

const errorMessages = {
  '403': 'Xin lỗi, bạn không có quyền truy cập trang này.',
  '404': 'Xin lỗi, trang bạn đang tìm kiếm không tồn tại.',
  '500': 'Xin lỗi, đã xảy ra lỗi máy chủ.'
};

const ErrorPage: React.FC<ErrorPageProps> = ({ 
  errorType, 
  title, 
  subTitle = errorMessages[errorType]
}) => {
  const navigate = useNavigate();

  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Result
        status={errorType}
        title={title || errorType}
        subTitle={subTitle}
        extra={
          <Button type="primary" onClick={() => navigate('/')}>
            Quay lại trang chủ
          </Button>
        }
      />
    </div>
  );
};

export default ErrorPage;