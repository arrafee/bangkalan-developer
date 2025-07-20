import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const statsData = {
    totalEvents: 25,
    totalPengurus: 12,
    totalMembers: 500,
    activeEvents: 3,
  };

  const recentEvents = [
    { id: 1, title: 'Workshop React Native', date: '2024-01-15', status: 'active' },
    { id: 2, title: 'Meetup Developer', date: '2024-01-10', status: 'completed' },
    { id: 3, title: 'Bootcamp Web Development', date: '2024-01-05', status: 'completed' },
  ];

  const pengurusData = [
    { id: 1, name: 'Ahmad Fauzi', role: 'Ketua', avatar: '👨‍💼' },
    { id: 2, name: 'Siti Nurhaliza', role: 'Wakil Ketua', avatar: '👩‍💼' },
    { id: 3, name: 'Budi Santoso', role: 'Sekretaris', avatar: '👨‍💻' },
  ];

  return (
    <div className="p-4 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Admin</h1>
        <p className="text-gray-600">Selamat datang di panel admin BangkalanDev</p>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Event</p>
              <p className="text-2xl font-bold text-gray-900">{statsData.totalEvents}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Pengurus</p>
              <p className="text-2xl font-bold text-gray-900">{statsData.totalPengurus}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
              <svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Member</p>
              <p className="text-2xl font-bold text-gray-900">{statsData.totalMembers}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="flex items-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
              <svg className="h-6 w-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Event Aktif</p>
              <p className="text-2xl font-bold text-gray-900">{statsData.activeEvents}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Recent Events */}
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Event Terbaru</h3>
            <a href="#" className="text-sm text-[#EA222B] hover:text-red-700">
              Lihat Semua
            </a>
          </div>
          <div className="space-y-4">
            {recentEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                <div>
                  <h4 className="font-medium text-gray-900">{event.title}</h4>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
                <span
                  className={`rounded-full px-2 py-1 text-xs font-medium ${
                    event.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {event.status === 'active' ? 'Aktif' : 'Selesai'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pengurus List */}
        <div className="rounded-xl bg-white p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Pengurus Komunitas</h3>
            <a href="#" className="text-sm text-[#EA222B] hover:text-red-700">
              Lihat Semua
            </a>
          </div>
          <div className="space-y-4">
            {pengurusData.map((pengurus) => (
              <div key={pengurus.id} className="flex items-center rounded-lg border border-gray-200 p-4">
                <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 text-white">
                  <span className="text-lg">{pengurus.avatar}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{pengurus.name}</h4>
                  <p className="text-sm text-gray-600">{pengurus.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Info */}
      <div className="mt-8 rounded-xl bg-gradient-to-r from-[#EA222B] to-red-600 p-8 text-white">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xl font-bold">Tentang BangkalanDev</h3>
            <p className="text-white/90">
              Komunitas developer terbesar di Kabupaten Bangkalan yang berfokus pada pengembangan skill IT dan kolaborasi
              antar developer lokal.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Visi</h4>
            <p className="text-white/90">
              Menjadi komunitas teknologi terdepan yang melahirkan developer berkualitas dan berkontribusi pada kemajuan
              teknologi di Bangkalan.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-semibold">Misi</h4>
            <p className="text-white/90">
              Mengembangkan ekosistem teknologi yang inklusif, mendorong kolaborasi, dan memberikan dampak positif bagi
              masyarakat Bangkalan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
