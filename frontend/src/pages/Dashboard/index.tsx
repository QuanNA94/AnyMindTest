import MainLayout from "@/components/layouts/MainLayout";
import DashboardModule from "@/modules/DashboardModule/DashboardModule";

export default function DashboardPage() {
  return (
    <MainLayout
      title="Dashboard"
      description="Dashboard hiển thị dữ liệu crypto và tin tức mới nhất"
    >
      <DashboardModule />
    </MainLayout>
  );
}
