/** eslint-disable tailwindcss/no-custom-classname */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import { CardEvent } from '@components/Cards';
import dataEvent from '../../data/event.json';

const SectionEvent: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);
  // const dataEvent = [
  //   {
  //     id: 1,
  //     title: 'Mini Bootcamp',
  //     img: imgEvent,
  //     date: '9 Juli 2023',
  //     content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  //   },
  //   {
  //     id: 2,
  //     title: 'Mini Bootcamp',
  //     img: imgEvent,
  //     date: '9 Juli 2023',
  //     content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  //   },
  //   {
  //     id: 3,
  //     title: 'Mini Bootcamp',
  //     img: imgEvent,
  //     date: '9 Juli 2023',
  //     content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
  //   },
  // ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-white via-gray-50 to-white py-20" id="event">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-48 w-48 animate-pulse rounded-full bg-gradient-to-br from-[#EA222B] to-red-600 opacity-10 blur-xl" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 animate-pulse rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 blur-xl" />
          <div className="absolute right-1/4 top-1/4 h-32 w-32 animate-pulse rounded-full bg-gradient-to-br from-green-400 to-blue-500 opacity-10 blur-xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center" data-aos="fade-up">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105">
                <span className="mr-2">🎉</span>
                EVENT TERBARU
              </span>
            </div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              Event{' '}
              <span className="bg-gradient-to-r from-[#EA222B] to-red-600 bg-clip-text text-transparent">BangkalanDev</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Ikuti berbagai event menarik dari komunitas developer Bangkalan. Dari workshop coding hingga networking session
              yang akan meningkatkan skill IT kamu!
            </p>
          </div>

          {/* Events Container */}
          <div className="mt-16">
            <div className="relative" data-aos="fade-up" data-aos-delay="200">
              {/* Background card with gradient */}
              <div className="rounded-3xl bg-gradient-to-r from-[#EA222B] to-red-600 p-1 shadow-2xl">
                <div className="rounded-3xl bg-white p-8">
                  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {dataEvent.map((item, index) => (
                      <div key={item.id} className="group relative" data-aos="fade-up" data-aos-delay={300 + index * 100}>
                        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#EA222B] to-red-600 opacity-0 blur transition-all duration-300 group-hover:opacity-20" />
                        <div className="relative transform transition-all duration-300 group-hover:scale-105">
                          <CardEvent
                            nama_event={item.nama_event}
                            pamflet={item.pamflet}
                            tanggal_posting={item.tanggal_posting}
                            excerp={item.excerp}
                            slug={item.slug}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating decoration elements */}
              <div className="absolute -left-4 -top-4 h-8 w-8 animate-bounce rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 opacity-80" />
              <div className="absolute -right-2 -top-2 h-6 w-6 animate-pulse rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-60" />
              <div className="absolute -bottom-3 left-1/2 h-4 w-4 animate-bounce rounded-full bg-gradient-to-r from-green-400 to-blue-500 opacity-40" />
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3" data-aos="fade-up" data-aos-delay="600">
            <div className="flex flex-col items-center rounded-xl bg-white/50 p-6 shadow-lg backdrop-blur-sm">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 text-white shadow-lg">
                <span className="text-xl">📅</span>
              </div>
              <span className="text-2xl font-bold text-[#EA222B]">{dataEvent.length}+</span>
              <span className="text-sm text-gray-600">Event Tersedia</span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-white/50 p-6 shadow-lg backdrop-blur-sm">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                <span className="text-xl">👥</span>
              </div>
              <span className="text-2xl font-bold text-[#EA222B]">500+</span>
              <span className="text-sm text-gray-600">Peserta Aktif</span>
            </div>

            <div className="flex flex-col items-center rounded-xl bg-white/50 p-6 shadow-lg backdrop-blur-sm">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg">
                <span className="text-xl">⭐</span>
              </div>
              <span className="text-2xl font-bold text-[#EA222B]">4.8</span>
              <span className="text-sm text-gray-600">Rating Event</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="800">
            <button
              type="button"
              onClick={() => navigate('/event')}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[#EA222B] to-red-600 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <span className="relative z-10 flex items-center">
                <span>Lihat Semua Event</span>
                <svg
                  className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-[#EA222B] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>

            <p className="mt-4 text-sm text-gray-500">Bergabunglah dengan komunitas developer terbesar di Bangkalan</p>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-16 w-full">
            <path d="M1200 120L0 16.48V0h1200v120z" className="fill-white opacity-90" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default SectionEvent;
