import React from 'react';
import { useLocation } from 'react-router-dom';

interface SidebarAdminProps {
  isSidebarOpen: boolean;
}

const SidebarAdmin: React.FC<SidebarAdminProps> = ({ isSidebarOpen }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <aside
        className={`fixed left-0 top-16 z-40 h-screen w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full overflow-y-auto py-4">
          <nav className="space-y-2 px-4">
            <button
              type="button"
              className={`flex w-full items-center rounded-lg ${isActive('/administrator/dashboard') ? 'bg-[#EA222B] text-white' : 'text-gray-700 hover:bg-gray-100'} px-4 py-3 transition-colors duration-200`}
            >
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z"
                />
              </svg>
              Dashboard
            </button>
            <button
              type="button"
              className={`flex w-full items-center rounded-lg ${isActive('/administrator/event') ? 'bg-[#EA222B] text-white' : 'text-gray-700 hover:bg-gray-100'} px-4 py-3 transition-colors duration-200`}
            >
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Data Event
            </button>
            <button
              type="button"
              className={`flex w-full items-center rounded-lg ${isActive('/administrator/pengurus') ? 'bg-[#EA222B] text-white' : 'text-gray-700 hover:bg-gray-100'} px-4 py-3 transition-colors duration-200`}
            >
              <svg className="mr-3 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
              Data Pengurus
            </button>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default SidebarAdmin;
