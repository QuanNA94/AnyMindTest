import { Card, Col } from "antd";
import React, { useState } from "react";
import { NewsData } from "../types/interfaces";

interface NewsSectionProps {
  newsData: NewsData;
}

const NewsSection: React.FC<NewsSectionProps> = ({ newsData }) => {
  const [newsKeyword, setNewsKeyword] = useState<string>("");

  const filteredNewsData =
    newsData &&
    (!newsKeyword ||
      newsData.title.toLowerCase().includes(newsKeyword.toLowerCase()))
      ? newsData
      : null;

  return (
    <Col xs={24} md={12} style={{ marginBottom: 24 }}>
      <Card
        title="Tin Tức Mới Nhất"
        bordered={false}
        style={{
          height: "100%",
          backgroundColor: "#f9f9f9",
        }}
      >
        <div style={{ marginBottom: 16 }}>
          <input
            type="text"
            value={newsKeyword}
            onChange={(e) => setNewsKeyword(e.target.value)}
            placeholder="Nhập từ khóa..."
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #d9d9d9",
            }}
          />
        </div>

        {filteredNewsData ? (
          <div>
            <h3 style={{ fontSize: "18px", fontWeight: 500 }}>
              {filteredNewsData.title}
            </h3>
            <p style={{ color: "#666" }}>Nguồn: {filteredNewsData.source}</p>
            <a
              href={filteredNewsData.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1890ff" }}
            >
              Đọc Thêm
            </a>
          </div>
        ) : (
          <p>Không có tin tức phù hợp</p>
        )}
      </Card>
    </Col>
  );
};

export default NewsSection;
