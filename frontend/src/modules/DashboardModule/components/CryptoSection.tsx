import { Card, Col } from "antd";
import React, { useState } from "react";
import { CryptoData } from "../types/interfaces";

interface CryptoSectionProps {
  cryptoData: CryptoData;
}

const CryptoSection: React.FC<CryptoSectionProps> = ({ cryptoData }) => {
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: 100000,
  });

  const filteredCryptoData =
    cryptoData &&
    cryptoData.price >= priceRange.min &&
    cryptoData.price <= priceRange.max
      ? cryptoData
      : null;

  return (
    <Col xs={24} md={12} style={{ marginBottom: 24 }}>
      <Card
        title="CRYPTO"
        bordered={false}
        style={{
          height: "100%",
          backgroundColor: "#f8ffed",
        }}
      >
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontWeight: 500, marginBottom: 8 }}>
            FILTER BY PRICE RANGE
          </div>
          <div style={{ gap: "20px", margin: "8px 0" }}>
            <div style={{ flex: 1 }}>
              <div>Min:</div>
              <input
                type="number"
                value={priceRange.min}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, min: Number(e.target.value) })
                }
                style={{
                  width: "100%",
                  padding: "4px",
                  borderRadius: "4px",
                  border: "1px solid #d9d9d9",
                }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <div>Max:</div>
              <input
                type="number"
                value={priceRange.max}
                onChange={(e) =>
                  setPriceRange({ ...priceRange, max: Number(e.target.value) })
                }
                style={{
                  width: "100%",
                  padding: "4px",
                  borderRadius: "4px",
                  border: "1px solid #d9d9d9",
                }}
              />
            </div>
          </div>
        </div>

        {filteredCryptoData ? (
          <div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div style={{ flex: 1, fontWeight: 500 }}>
                {filteredCryptoData.name}
              </div>
              <div style={{ fontWeight: 600 }}>
                {filteredCryptoData.price.toLocaleString()}
              </div>
            </div>
            <div>
              <span>Mã: {filteredCryptoData.symbol}</span>
            </div>
            <div>
              <span>
                Vốn hóa thị trường:{" "}
                {filteredCryptoData.market_cap.toLocaleString()}
              </span>
            </div>
          </div>
        ) : (
          <p>No crypto data matching the filter</p>
        )}
      </Card>
    </Col>
  );
};

export default CryptoSection;
