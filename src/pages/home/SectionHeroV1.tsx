/** eslint-disable tailwindcss/no-custom-classname */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
import heroImg from '../../assets/images/hero.png';

const SectionHeroV1: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* <section
        className="fade-down mx-5 mt-20 flex flex-col-reverse items-center justify-center md:container md:mx-auto md:flex-row"
        id="hero"
      >
        <div
          className="flex w-full flex-col justify-center pl-0 md:w-5/12 md:pl-10"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay={500}
        >
          <div>
            <p className="text-main text-3xl font-bold">Komunitas IT Kabupaten Bangkalan</p>
            <p className="mb-4 text-justify text-lg font-semibold md:text-left">
              Bergabunglah dengan Komunitas IT Kabupaten Bangkalan, tempat para developer, desainer, dan penggiat IT bertemu,
              berbagi ilmu, dan berkolaborasi. Kami percaya bahwa kolaborasi adalah kunci untuk menciptakan solusi inovatif
              yang bermanfaat bagi masyarakat.
            </p>
            <a
              href="https://t.me/bangkalandeveloper"
              className="text-small rounded-[10px] bg-[#EA222B] px-3 py-2 text-white"
            >
              Gabung Grup Telegram
            </a>
          </div>
        </div>
        <div
          className="mb-7 mt-10 flex w-full justify-center md:mt-0 md:w-5/12 md:justify-end"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-delay={750}
        >
          <img src={heroImg} alt="Hero" className="h-auto max-w-full" />
        </div>
      </section> */}
      <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-white">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-[#EA222B] to-red-600 opacity-10" />
          <div className="absolute -bottom-1/4 -left-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-[#EA222B] to-red-600 opacity-5" />
          <div className="absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-gradient-to-br from-[#EA222B] to-red-600 opacity-5" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12 lg:px-8">
          <div className="flex w-full flex-col items-center gap-12 md:flex-row md:items-center">
            <div className="flex w-full flex-col items-center text-center md:w-7/12 md:items-start md:text-left">
              <div className="mb-6">
                <span className="inline-block rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
                  KOMUNITAS DEVELOPER BANGKALAN
                </span>
              </div>

              <h1 className="mb-6 text-2xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-4xl">
                Bergabunglah dengan <span className="text-[#EA222B]">BangkalanDev</span> dan{' '}
                <span className="text-[#EA222B]">Kembangkan Skill IT</span> Bersama Kami
              </h1>

              <p className="mb-8 text-sm text-gray-600 md:text-base lg:text-lg">
                {/* Bergabunglah dengan Komunitas IT Kabupaten Bangkalan, tempat para developer, desainer, dan penggiat IT
                  bertemu, berbagi ilmu, dan berkolaborasi. Kami percaya bahwa kolaborasi adalah kunci untuk menciptakan
                  solusi inovatif yang bermanfaat bagi masyarakat. */}
                Komunitas teknologi yang berfokus pada pengembangan skill dan kolaborasi di bidang IT. Mari belajar,
                berkarya, dan berinovasi bersama developer lainnya di Bangkalan!
              </p>

              <div className="flex w-full flex-col items-center gap-4 md:items-start">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <a
                    href="https://t.me/bangkalandeveloper"
                    className="group inline-flex items-center justify-center rounded-lg bg-[#EA222B] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-red-700 hover:shadow-xl md:text-base"
                  >
                    <span>Gabung Grup Telegram</span>
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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
                    className="inline-flex items-center justify-center rounded-lg border-2 border-[#EA222B] px-6 py-3 text-sm font-semibold text-[#EA222B] transition-all duration-300 hover:bg-[#EA222B] hover:text-white hover:shadow-lg md:text-base"
                  >
                    Lihat Event
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-8 flex w-full justify-center md:mb-0 md:w-5/12 md:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-[#EA222B] to-red-600 opacity-20 blur-lg" />
                <div className="relative overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">
                  <img
                    src={heroImg}
                    alt="Hero"
                    className="h-auto max-w-full rounded-xl transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom wave decoration */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-16 w-full">
              <path d="M1200 120L0 16.48V0h1200v120z" className="fill-white opacity-80" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionHeroV1;
