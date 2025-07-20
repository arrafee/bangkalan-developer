import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CardService } from '@components/Cards';
import imgService1 from '@assets/images/logo/computer_logo.png';
import imgService2 from '@assets/images/logo/mobile_logo.png';
import imgService3 from '@assets/images/logo/design_logo.png';
import imgService4 from '@assets/images/logo/joki_logo.png';
import imgService5 from '@assets/images/logo/skripsi_logo.png';

const SectionService: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  const dataSercive = [
    {
      id: 1,
      title: 'Web Development',
      img: imgService1,
      content:
        'Kami menyediakan solusi pengembangan web profesional untuk meningkatkan kehadiran online bisnis Anda. Mulai dari situs web statis hingga platform e-commerce dinamis, tim kami siap membantu Anda.',
    },
    {
      id: 2,
      title: 'Mobile Development',
      img: imgService2,
      content:
        'Dengan keahlian di bidang pengembangan aplikasi mobile, kami membantu Anda membawa bisnis lebih dekat ke pelanggan melalui aplikasi Android dan iOS yang intuitif dan mudah digunakan.',
    },
    {
      id: 3,
      title: 'Design',
      img: imgService3,
      content:
        'Desain kreatif adalah kunci dalam membangun brand yang kuat. Kami menawarkan jasa desain UI/UX yang menarik dan mudah dinavigasi, menjamin pengalaman pengguna terbaik.',
    },
    {
      id: 4,
      title: 'Joki Tugas',
      img: imgService4,
      content:
        'Kesulitan dalam menyelesaikan tugas Anda? Kami siap membantu dengan layanan joki tugas yang cepat dan berkualitas, memastikan hasil yang memuaskan.',
    },
    {
      id: 5,
      title: 'Joki Skripsi',
      img: imgService5,
      content:
        'Bimbingan menyeluruh untuk skripsi Anda! Layanan joki skripsi kami menyediakan panduan dan dukungan untuk menyelesaikan tugas akhir dengan tepat waktu.',
    },
  ];

  return (
    <>
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20" id="service">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 top-1/4 h-64 w-64 animate-pulse rounded-full bg-gradient-to-br from-[#EA222B] to-red-600 opacity-10 blur-xl" />
          <div className="absolute -left-32 bottom-1/4 h-48 w-48 animate-pulse rounded-full bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 blur-xl" />
          <div className="absolute right-1/3 top-1/3 h-32 w-32 animate-pulse rounded-full bg-gradient-to-br from-green-400 to-blue-500 opacity-10 blur-xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center" data-aos="fade-up">
            <div className="mb-6">
              <span className="inline-flex items-center rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:scale-105">
                <span className="mr-2">⚡</span>
                LAYANAN PROFESIONAL
              </span>
            </div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
              Layanan <span className="bg-gradient-to-r from-[#EA222B] to-red-600 bg-clip-text text-transparent">Kami</span>
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
              Solusi teknologi terbaik untuk kebutuhan digital Anda. Tim ahli kami siap membantu mewujudkan ide kreatif Anda
              menjadi kenyataan.
            </p>
          </div>

          <div className="mt-20">
            <div className="flex flex-wrap justify-center gap-8">
              {dataSercive.map((item, index) => (
                <div
                  key={item.id}
                  className="group relative w-full flex-shrink-0 sm:w-[340px] md:w-[380px]"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#EA222B] to-red-600 opacity-0 blur-lg transition-all duration-500 group-hover:opacity-20" />
                  <div className="relative h-full transform transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-105">
                    <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 group-hover:shadow-2xl">
                      <div className="flex-1 p-8">
                        <CardService key={item.id} title={item.title} img={item.img} content={item.content} />
                      </div>
                      <div className="h-2 bg-gradient-to-r from-[#EA222B] to-red-600 opacity-80 transition-all duration-300 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center" data-aos="fade-up" data-aos-delay="1000">
            <div className="rounded-3xl bg-gradient-to-r from-[#EA222B] to-red-600 p-1 shadow-2xl">
              <div className="rounded-3xl bg-white p-8">
                <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">Butuh layanan khusus?</h3>
                <p className="mt-4 text-lg text-gray-600">Konsultasikan kebutuhan projek Anda dengan tim ahli kami</p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <button
                    type="button"
                    onClick={() => {
                      window.open('https://t.me/bangkalandeveloper', '_blank');
                    }}
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-[#EA222B] to-red-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <span className="relative z-10 flex items-center">
                      <span>Konsultasi Gratis</span>
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
                  </button>
                  {/* <button
                    type="button"
                    onClick={() => navigate('/services')}
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border-2 border-[#EA222B] bg-white px-8 py-4 text-lg font-bold text-[#EA222B] transition-all duration-300 hover:bg-[#EA222B] hover:text-white hover:shadow-lg"
                  >
                    <span className="relative z-10">Lihat Portfolio</span>
                    <div className="absolute inset-0 bg-[#EA222B] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-16 w-full">
            <path d="M1200 120L0 16.48V0h1200v120z" className="fill-white opacity-90" />
          </svg>
        </div>
      </section>
    </>
  );
};

export default SectionService;
