/** eslint-disable tailwindcss/no-custom-classname */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

const SectionHeroV2: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Floating orbs */}
          <div className="absolute -right-20 -top-20 h-72 w-72 animate-pulse rounded-full bg-gradient-to-br from-[#EA222B] to-red-600 opacity-10 blur-xl" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 animate-pulse rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 blur-xl" />
          <div className="absolute right-1/4 top-1/3 h-32 w-32 animate-pulse rounded-full bg-gradient-to-br from-green-400 to-blue-500 opacity-10 blur-xl" />
          <div className="absolute bottom-1/3 left-1/4 h-24 w-24 animate-pulse rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-10 blur-xl" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMWY1ZjkiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
        </div>

        {/* Main content container */}
        <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex w-full flex-col items-center text-center" data-aos="fade-up">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105">
                <span className="mr-2 text-lg">🚀</span>
                KOMUNITAS DEVELOPER BANGKALAN
              </span>
            </div>

            {/* Main heading */}
            <h1 className="mb-6 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Bergabunglah dengan{' '}
              <span className="bg-gradient-to-r from-[#EA222B] to-red-600 bg-clip-text text-transparent">BangkalanDev</span>{' '}
              dan{' '}
              <span className="bg-gradient-to-r from-[#EA222B] to-red-600 bg-clip-text text-transparent">
                Kembangkan Skill IT
              </span>{' '}
              Bersama Kami
            </h1>

            {/* Description */}
            <p className="mb-8 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
              Komunitas teknologi yang berfokus pada pengembangan skill dan kolaborasi di bidang IT. Mari belajar, berkarya,
              dan berinovasi bersama developer lainnya di Bangkalan!
            </p>

            {/* CTA Buttons */}
            <div className="mb-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://t.me/bangkalandeveloper"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#EA222B] to-red-600 px-8 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <span className="relative z-10 flex items-center">
                  <span>Gabung Grup Telegram</span>
                  <svg
                    className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-[#EA222B] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>

              <button
                type="button"
                onClick={() => {
                  const eventSection = document.getElementById('event');
                  if (eventSection) {
                    eventSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/event');
                  }
                }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-[#EA222B] bg-white px-8 py-4 text-base font-bold text-[#EA222B] transition-all duration-300 hover:bg-[#EA222B] hover:text-white hover:shadow-lg"
              >
                <span className="relative z-10">Lihat Event</span>
                <div className="absolute inset-0 bg-[#EA222B] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </div>

            <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-0 lg:grid-cols-4">
              <div
                className="flex items-center justify-center rounded-lg bg-white/50 p-4 shadow-lg backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="text-center">
                  <div className="mb-2 text-2xl">💻</div>
                  <h3 className="text-sm font-bold text-gray-900">Belajar Coding</h3>
                  <p className="text-xs text-gray-600">Tutorial dan workshop coding</p>
                </div>
              </div>

              <div
                className="flex items-center justify-center rounded-lg bg-white/50 p-4 shadow-lg backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="text-center">
                  <div className="mb-2 text-2xl">🤝</div>
                  <h3 className="text-sm font-bold text-gray-900">Networking</h3>
                  <p className="text-xs text-gray-600">Bertemu developer lokal</p>
                </div>
              </div>

              <div
                className="flex items-center justify-center rounded-lg bg-white/50 p-4 shadow-lg backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="text-center">
                  <div className="mb-2 text-2xl">🎯</div>
                  <h3 className="text-sm font-bold text-gray-900">Project Kolaborasi</h3>
                  <p className="text-xs text-gray-600">Buat project bersama</p>
                </div>
              </div>

              <div
                className="flex items-center justify-center rounded-lg bg-white/50 p-4 shadow-lg backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <div className="text-center">
                  <div className="mb-2 text-2xl">📈</div>
                  <h3 className="text-sm font-bold text-gray-900">Karir Growth</h3>
                  <p className="text-xs text-gray-600">Tingkatkan skill karir</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-20 w-full">
            <path d="M1200 120L0 16.48V0h1200v120z" className="fill-white opacity-90" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default SectionHeroV2;
