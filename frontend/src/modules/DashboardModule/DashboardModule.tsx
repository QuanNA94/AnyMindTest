import React from "react";
import { Row, Typography, Spin } from "antd";
import useDashboardData from "./hooks/useDashboardData";
import ErrorPage from "@/components/errors/ErrorPage";
import CryptoSection from "./components/CryptoSection";
import NewsSection from "./components/NewsSection";

const { Title } = Typography;

const DashboardModule: React.FC = () => {
  const { data, loading, error } = useDashboardData();

  if (loading)
    return (
      <div
        style={{
          padding: "24px",
          textAlign: "center",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin size="large" tip="Đang tải dữ liệu..." />
      </div>
    );

  if (error)
    return (
      <ErrorPage errorType={error.type} subTitle={error.message || undefined} />
    );

  return (
    <div style={{ padding: "24px", minHeight: "100vh" }}>
      <Title level={1} style={{ marginBottom: 24 }}>
        Dashboard
      </Title>

      <Row gutter={24}>
        {data?.crypto && <CryptoSection cryptoData={data.crypto} />}
        {data?.latest_news && <NewsSection newsData={data.latest_news} />}
      </Row>

      {data?.created_at && (
        <div
          style={{
            marginTop: 24,
            textAlign: "center",
            color: "#666",
            fontSize: 14,
          }}
        >
          Cập nhật lần cuối: {new Date(data.created_at).toLocaleString("vi-VN")}
        </div>
      )}
    </div>
  );
};

export default DashboardModule;
