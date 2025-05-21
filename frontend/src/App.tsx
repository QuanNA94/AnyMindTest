import { ConfigProvider } from "antd";
import { BrowserRouter as Router } from 'react-router-dom';
import DashboardPage from "@pages/Dashboard";

const App: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: "#00b96b",
        borderRadius: 2,

        // Alias Token
        colorBgContainer: "#f6ffed",
      },
    }}
  >
    <Router>
      <DashboardPage />
    </Router>
  </ConfigProvider>
);

export default App;
