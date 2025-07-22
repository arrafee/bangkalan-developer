import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs } from 'flowbite-react';
import CardOrg from '@components/Cards/CardOrg';
import dataPengurus from '../../data/pengurus.json';
import imageAbout from '../../assets/images/image-about.png';
import imgActivity1 from '../../assets/images/activity/activity_1.png';
import imgActivity2 from '../../assets/images/activity/activity_2.png';
import imgActivity3 from '../../assets/images/activity/activity_3.png';
import imgActivity4 from '../../assets/images/activity/activity_4.png';
import imgActivity5 from '../../assets/images/activity/activity_5.png';

const AboutPage: React.FC = () => {
  const navigate = useNavigate();

  const activityImages = [
    { src: imgActivity1, alt: 'Activity 1' },
    { src: imgActivity2, alt: 'Activity 2' },
    { src: imgActivity3, alt: 'Activity 3' },
    { src: imgActivity4, alt: 'Activity 4' },
    { src: imgActivity5, alt: 'Activity 5' },
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <section className="relative overflow-hidden bg-gradient-to-r from-[#EA222B] to-red-600 py-20" id="about-us">
        <div className="absolute inset-0">
          <div className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-white opacity-10" />
          <div className="absolute -bottom-1/4 -left-1/4 h-80 w-80 rounded-full bg-black opacity-10" />
          <div className="absolute right-1/3 top-1/2 h-40 w-40 rounded-full bg-white opacity-5" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center text-white">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-white/20 px-6 py-2 text-sm font-semibold backdrop-blur-sm">
                TENTANG KAMI
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              About <span className="text-black">BangkalanDev</span>
            </h1>
            <p className="mx-auto max-w-3xl text-xl text-white/90 md:text-2xl">
              Komunitas teknologi yang menghubungkan developer, desainer, dan profesional IT di Bangkalan
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-16 w-full">
            <path d="M1200 120L0 16.48V0h1200v120z" className="fill-gray-50" />
          </svg>
        </div>
      </section>

      <div className="relative mx-auto -mt-16 max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Apa itu Bangkalan Developer?</h2>
              <div className="h-1 w-20 rounded-full bg-gradient-to-r from-[#EA222B] to-red-600" />
            </div>

            <div className="space-y-6 text-gray-700">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-[#EA222B]" />
                  <p className="text-lg leading-relaxed">
                    <span className="font-semibold text-gray-900">Bangkalan Developer</span> adalah komunitas teknologi yang
                    berfokus pada pengembangan skill, kolaborasi, dan inovasi di bidang IT. Didirikan oleh para penggiat
                    teknologi, komunitas ini hadir untuk menghubungkan developer, desainer, dan profesional IT lainnya dalam
                    sebuah ekosistem yang mendukung pertumbuhan dan berbagi ilmu.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-[#EA222B]" />
                  <p className="text-lg leading-relaxed">
                    Dengan semangat kolaboratif, kami berkomitmen untuk menciptakan lingkungan yang mendukung pembelajaran,
                    eksplorasi, dan pengembangan ide-ide kreatif. Mulai dari pengembangan web, aplikasi mobile, desain UI/UX,
                    hingga proyek open-source, kami membuka pintu bagi siapa saja yang memiliki passion untuk berkontribusi
                    di dunia teknologi.
                  </p>
                </div>
              </div>

              {/* <div className="grid grid-cols-3 gap-4 rounded-xl bg-gray-50 p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#EA222B]">100+</div>
                  <div className="text-sm text-gray-600">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#EA222B]">50+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#EA222B]">25+</div>
                  <div className="text-sm text-gray-600">Events</div>
                </div>
              </div> */}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-[#EA222B] to-red-600 opacity-20 blur-lg" />
            <div className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-2xl">
              <img
                src={imageAbout}
                alt="About BangkalanDev"
                className="h-auto w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="relative py-20" id="our-team">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
                TIM KAMI
              </span>
            </div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Meet Our <span className="text-[#EA222B]">Team</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Tim yang berdedikasi untuk mengembangkan komunitas teknologi di Bangkalan
            </p>
          </div>

          <div className="mt-16">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <Tabs aria-label="Team tabs" className="focus:outline-none">
                {dataPengurus.map((division) => (
                  <Tabs.Item active title={division.divisi} key={division.divisi}>
                    <div className="mt-8">
                      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {division.personil.map((member) => (
                          <div key={`${member.nama}-${member.jabatan}`} className="group relative">
                            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#EA222B] to-red-600 opacity-0 blur transition-all duration-300 group-hover:opacity-20" />
                            <div className="relative">
                              <CardOrg nama={member.nama} jabatan={member.jabatan} asal={member.asal} foto={member.foto} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Tabs.Item>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20" id="activity">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 px-6 py-2 text-sm font-semibold text-white shadow-lg">
                AKTIVITAS KAMI
              </span>
            </div>
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Our <span className="text-[#EA222B]">Activities</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Dokumentasi berbagai kegiatan dan event yang telah kami selenggarakan
            </p>
          </div>

          <div className="mt-16">
            <div className="columns-xs space-y-5 px-10">
              {activityImages.map((image, index) => (
                <div
                  key={image.alt}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="absolute bottom-4 left-4 right-4 translate-y-4 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <h3 className="text-lg font-semibold">Activity {index + 1}</h3>
                      <p className="text-sm text-white/80">Event dokumentasi komunitas</p>
                    </div>
                  </div>

                  <div className="h-1 bg-gradient-to-r from-[#EA222B] to-red-600 opacity-80 transition-all duration-300 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="rounded-3xl bg-gradient-to-r from-[#EA222B] to-red-600 p-1 shadow-2xl">
              <div className="rounded-3xl bg-white p-8">
                <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">Tertarik Bergabung?</h3>
                <p className="mb-8 text-lg text-gray-600">
                  Mari bergabung dengan komunitas developer Bangkalan dan kembangkan skill teknologi Anda bersama kami
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <a
                    href="https://t.me/bangkalandeveloper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#EA222B] to-red-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <span>Gabung Sekarang</span>
                    <svg
                      className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <button
                    type="button"
                    onClick={() => navigate('/event')}
                    className="inline-flex items-center justify-center rounded-full border-2 border-[#EA222B] px-8 py-4 text-lg font-semibold text-[#EA222B] transition-all duration-300 hover:bg-[#EA222B] hover:text-white hover:shadow-lg"
                  >
                    Lihat Event Kami
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
