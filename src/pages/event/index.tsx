import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDateRange, MdSearch } from 'react-icons/md';
import { IoLocation } from 'react-icons/io5';
import { IoMdPaper } from 'react-icons/io';
import dataEvent from '../../data/event.json';

const EventPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(dataEvent);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filtered = dataEvent.filter((event) => event.nama_event.toLowerCase().includes(searchTerm.toLowerCase()));

    setFilteredEvents(filtered);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSearchTerm(value);

    const filtered = dataEvent.filter((event) => event.nama_event.toLowerCase().includes(value.toLowerCase()));

    setFilteredEvents(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="relative overflow-hidden bg-gradient-to-r from-[#EA222B] to-red-600 py-20">
        <div className="absolute inset-0">
          <div className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-white opacity-10" />
          <div className="absolute -bottom-1/4 -left-1/4 h-80 w-80 rounded-full bg-black opacity-10" />
          <div className="absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-white opacity-5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-white/20 px-6 py-2 text-sm font-semibold backdrop-blur-sm">
                EVENT TERBARU
              </span>
            </div>
            <h1 className="mb-6 flex items-center justify-center space-x-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              <IoMdPaper className="text-white" />
              <span>Event</span>
              <span className="text-black">BangkalanDev</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-white/90 md:text-2xl">
              Jelajahi berbagai event menarik dari komunitas developer Bangkalan
            </p>

            <div className="mx-auto mt-12 max-w-2xl">
              <form onSubmit={handleSearch} className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                  <MdSearch className="h-6 w-6 text-gray-400" />
                </div>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={handleInputChange}
                  className="w-full rounded-full border-0 bg-white/95 py-4 pl-14 pr-6 text-lg text-gray-900 placeholder-gray-500 shadow-xl backdrop-blur-sm transition-all duration-300 focus:bg-white focus:outline-none focus:ring-4 focus:ring-white/30"
                  placeholder="Cari event yang menarik..."
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 px-8 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-16 w-full">
            <path d="M1200 120L0 16.48V0h1200v120z" className="fill-gray-50" />
          </svg>
        </div>
      </div>

      <div className="relative mx-auto -mt-16 max-w-7xl px-6 lg:px-8">
        {searchTerm && (
          <div className="mb-8 rounded-2xl bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold text-gray-900">
                  {filteredEvents.length > 0
                    ? `Ditemukan ${filteredEvents.length} event untuk "${searchTerm}"`
                    : `Tidak ada event yang ditemukan untuk "${searchTerm}"`}
                </p>
                <p className="text-gray-600">
                  {filteredEvents.length > 0
                    ? 'Berikut adalah event yang sesuai dengan pencarian Anda'
                    : 'Coba gunakan kata kunci yang berbeda'}
                </p>
              </div>
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setFilteredEvents(dataEvent);
                  }}
                  className="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-200"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}

        <div className="grid gap-8 pb-16 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((item) => (
              <div key={item.id} className="group relative">
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#EA222B] to-red-600 opacity-0 blur transition-all duration-500 group-hover:opacity-20" />

                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.pamflet}
                      alt={item.nama_event}
                      className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="absolute right-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {item.tanggal_posting}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-3 line-clamp-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-[#EA222B]">
                      {item.nama_event}
                    </h3>

                    <p className="mb-4 line-clamp-2 text-sm text-gray-600">{item.excerp}</p>

                    <div className="space-y-3">
                      <div className="flex items-center text-sm text-gray-500">
                        <MdDateRange className="mr-2 h-4 w-4 text-[#EA222B]" />
                        <div>
                          <p className="font-medium">
                            {item.tanggal_selesai ? `${item.tanggal} - ${item.tanggal_selesai}` : item.tanggal}
                          </p>
                          <p className="text-xs">
                            {item.waktu_selesai ? `${item.waktu} - ${item.waktu_selesai} WIB` : `${item.waktu} - Selesai`}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start text-sm text-gray-500">
                        <IoLocation className="mr-2 mt-0.5 h-4 w-4 text-[#EA222B]" />
                        <div className="flex-1">
                          <p className="line-clamp-1 font-medium">{item.lokasi}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={() => navigate(`/event/${item.slug}`)}
                        className="group/btn inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#EA222B] to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        <span>Selengkapnya</span>
                        <svg
                          className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="h-1 bg-gradient-to-r from-[#EA222B] to-red-600 opacity-80 transition-all duration-300 group-hover:opacity-100" />
                </div>

                <div className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-[#EA222B] opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
              </div>
            ))
          ) : (
            <div className="col-span-1 text-center md:col-span-2 lg:col-span-3">
              <div className="rounded-2xl bg-white p-12 shadow-lg">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                  <MdSearch className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">&ldquo;{searchTerm}&rdquo;</h3>
                <p className="mb-6 text-lg text-gray-600">Event tidak ditemukan</p>
                <p className="text-gray-500">Coba gunakan kata kunci yang berbeda atau lihat semua event yang tersedia</p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm('');
                    setFilteredEvents(dataEvent);
                  }}
                  className="mt-6 inline-flex items-center rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  Lihat Semua Event
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
