import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MdDateRange, MdArrowBack } from 'react-icons/md';
import { IoLocation } from 'react-icons/io5';
import dataEvent from '../../../data/event.json';

const DetailEventPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const event = dataEvent.find((item) => item.slug === slug);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Event tidak ditemukan</h1>
          <button
            onClick={() => navigate('/event')}
            className="mt-4 rounded-lg bg-[#EA222B] px-6 py-3 text-white transition-all duration-300 hover:bg-red-700"
          >
            Kembali ke Event
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="relative overflow-hidden bg-gradient-to-r from-[#EA222B] to-red-600 py-20">
        <div className="absolute inset-0">
          <div className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-white opacity-10" />
          <div className="absolute -bottom-1/4 -left-1/4 h-80 w-80 rounded-full bg-black opacity-10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <button
            onClick={() => navigate('/event')}
            className="group mb-8 inline-flex items-center rounded-full bg-white/20 px-6 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
          >
            <MdArrowBack className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-semibold">Kembali ke Event</span>
          </button>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="text-white">
              <div className="mb-4">
                <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                  EVENT DETAIL
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{event.nama_event}</h1>
              <p className="text-xl text-white/90 md:text-2xl">{event.excerp}</p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-2xl bg-white/20 blur-lg" />
              <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">
                <img
                  src={event.pamflet}
                  alt={event.nama_event}
                  className="h-auto w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto -mt-16 max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="mb-4 flex items-center">
                  <div className="mr-3 rounded-lg bg-[#EA222B] p-2">
                    <MdDateRange className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Waktu & Tanggal</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="font-medium">
                    📅 {event.tanggal_selesai ? `${event.tanggal} - ${event.tanggal_selesai}` : event.tanggal}
                  </p>
                  <p className="font-medium">
                    🕐 {event.waktu_selesai ? `${event.waktu} - ${event.waktu_selesai} WIB` : `${event.waktu} - Selesai`}
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="mb-4 flex items-center">
                  <div className="mr-3 rounded-lg bg-[#EA222B] p-2">
                    <IoLocation className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Lokasi</h3>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p className="font-medium">📍 {event.lokasi}</p>
                  {event.lokasi_tambahan && <p className="text-sm">{event.lokasi_tambahan}</p>}
                  {event.google_map && (
                    <a
                      href={event.google_map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center rounded-lg bg-blue-50 px-4 py-2 text-blue-600 transition-all duration-300 hover:bg-blue-100"
                    >
                      <span className="font-medium">Lihat di Google Maps</span>
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-[#EA222B] to-red-600 p-6 text-white">
                <h3 className="mb-2 text-lg font-semibold">Dipublikasikan</h3>
                <p className="text-white/90">{event.tanggal_posting}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-8 shadow-lg">
              <div className="mb-8">
                <h2 className="mb-4 text-2xl font-bold text-gray-900">Deskripsi Event</h2>
                <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#EA222B] to-red-600" />
              </div>

              <div
                className="prose prose-lg prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#EA222B] prose-strong:text-gray-900 max-w-none"
                dangerouslySetInnerHTML={{ __html: event.body as string }}
              />

              <div className="mt-12 flex flex-col gap-4 border-t border-gray-200 pt-8 sm:flex-row">
                <button
                  onClick={() => navigate('/event')}
                  className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <span>Lihat Event Lainnya</span>
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <a
                  href="https://t.me/bangkalandeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#EA222B] px-8 py-4 text-lg font-semibold text-[#EA222B] transition-all duration-300 hover:bg-[#EA222B] hover:text-white hover:shadow-lg"
                >
                  Gabung Komunitas
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="h-16" />
    </div>
  );
};

export default DetailEventPage;
