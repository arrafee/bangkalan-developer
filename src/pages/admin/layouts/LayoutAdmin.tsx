import NavbarAdmin from '@components/NavbarAdmin';
import SidebarAdmin from '@components/SidebarAdmin';
import React, { useState } from 'react';

interface LayoutAdminProps {
  component: React.ReactNode;
}

const LayoutAdmin: React.FC<LayoutAdminProps> = ({ component }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarAdmin isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

      <SidebarAdmin isSidebarOpen={isSidebarOpen} />

      <main className={`pt-16 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : ''}`}>{component}</main>
    </div>
  );
};

export default LayoutAdmin;
