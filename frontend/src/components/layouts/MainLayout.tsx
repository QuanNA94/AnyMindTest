import { useEffect } from "react";

interface MainLayoutProps {
    children: React.ReactNode;
    title: string;
    description?: string;
  }
  
  const MainLayout: React.FC<MainLayoutProps> = ({ children, title, description }) => {
    useEffect(() => {
      document.title = title;
      
      if (description) {
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute('content', description);
        }
      }
    }, [title, description]);
  
    return (
      <div className="main-layout">
        {children}
      </div>
    );
  };
  
  export default MainLayout;