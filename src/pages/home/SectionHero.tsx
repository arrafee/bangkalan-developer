/** eslint-disable tailwindcss/no-custom-classname */
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroImg from '../../assets/images/hero.png';

const SectionHero: React.FC = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section
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
      </section>
    </>
  );
};

export default SectionHero;
