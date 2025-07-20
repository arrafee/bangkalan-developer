import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionCollab: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EA222B] to-red-600 py-20">
        <div className="absolute inset-0">
          <div className="absolute -right-1/4 -top-1/4 h-96 w-96 animate-pulse rounded-full bg-white opacity-5 blur-xl" />
          <div className="absolute -bottom-1/4 -left-1/4 h-80 w-80 animate-pulse rounded-full bg-black opacity-10 blur-xl" />
          <div className="absolute right-1/3 top-1/2 h-40 w-40 animate-pulse rounded-full bg-white opacity-5 blur-xl" />
          <div className="absolute bottom-1/3 left-1/4 h-32 w-32 animate-pulse rounded-full bg-white opacity-5 blur-xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-white" data-aos="fade-right">
              <div className="space-y-8">
                <div className="space-y-6">
                  <span className="inline-flex items-center rounded-full bg-white bg-opacity-20 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105">
                    <span className="mr-2">🤝</span>
                    MARI BERGABUNG
                  </span>
                  <h2 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                    Mari{' '}
                    <span className="bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                      Berkolaborasi
                    </span>
                  </h2>
                  <p className="text-xl leading-relaxed text-white/90 md:text-2xl">
                    Bergabunglah dengan komunitas developer Bangkalan dan wujudkan proyek teknologi impian Anda bersama kami.
                  </p>
                </div>

                <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-white/90">Networking dengan developer berpengalaman</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-white/90">Akses ke proyek dan event eksklusif</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110">
                      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-white/90">Belajar teknologi terbaru bersama</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 pt-6 sm:flex-row" data-aos="fade-up" data-aos-delay="400">
                  <button
                    type="button"
                    onClick={() => {
                      window.open('https://t.me/bangkalandeveloper', '_blank');
                    }}
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl bg-white px-8 py-4 text-lg font-bold text-[#EA222B] shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center">
                      <span>Mulai Kolaborasi</span>
                      <svg
                        className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/about')}
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl border-2 border-white bg-transparent px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#EA222B] hover:shadow-lg"
                  >
                    <span className="relative z-10">Pelajari Lebih Lanjut</span>
                    <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end" data-aos="fade-left" data-aos-delay="300">
              <div className="relative">
                <div className="absolute -inset-8 rounded-full bg-white opacity-10 blur-2xl" />
                <div className="relative">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="h-16 w-16 animate-pulse rounded-2xl bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110" />
                      <div className="h-24 w-24 animate-pulse rounded-2xl bg-white/30 backdrop-blur-sm transition-all duration-300 hover:scale-110" />
                      <div className="h-12 w-12 animate-pulse rounded-2xl bg-white/15 backdrop-blur-sm transition-all duration-300 hover:scale-110" />
                    </div>
                    <div className="mt-8 space-y-6">
                      <div className="h-20 w-20 animate-pulse rounded-2xl bg-white/25 backdrop-blur-sm transition-all duration-300 hover:scale-110" />
                      <div className="h-14 w-14 animate-pulse rounded-2xl bg-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110" />
                      <div className="h-18 w-18 animate-pulse rounded-2xl bg-black/20 backdrop-blur-sm transition-all duration-300 hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-16 w-full">
            <path d="M1200 120L0 16.48V0h1200v120z" className="fill-white" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default SectionCollab;
