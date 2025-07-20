import React from 'react';
import { Card } from 'flowbite-react';

import TermBox from '@components/term-box/term-box.component';

import internship from '@assets/images/illustrations/Internship.svg';
import webDesign from '@assets/images/illustrations/web-design.svg';
import copywriting from '@assets/images/illustrations/copywriting.svg';
import appDev from '@assets/images/illustrations/app-dev.svg';
import img1 from '@assets/images/img1.png';
import img2 from '@assets/images/img2.png';
import img3 from '@assets/images/img3.png';

import style from './style.module.scss';

const CareerPage: React.FC = () => {
  const terms = [
    'Memiliki laptop sendiri.',
    'Minimal masa magang 3 bulan.',
    'Bersedia masuk kantor, senin-jumat (08.30-17.30).',
    'Menguasai basic skill pada posisi yang dipilih.',
    'Memiliki niat dan kemauan belajar yang tinggi.',
  ];

  const benefits = [
    'Pengalaman praktis yang mendalam.',
    'Mentorship oleh profesional berpengalaman',
    'Penerapan langsung keterampilan yang relevan.',
    'Pembuatan website yang memukau.',
    'Peluang jaringan profesional yang luas.',
  ];

  return (
    <div className={style.wrapper}>
      <div className={style.description}>
        <span className={style.title}>Mau Magang? di Bangkalan Developer aja</span>
        <p className={style.sub}>
          Ingin menggali lebih dalam dunia desain website dan mengasah keterampilanmu? Jadilah bagian dari program internship
          desain website kami yang menarik! Apakah kamu seorang mahasiswa bersemangat yang mencari pengalaman praktis atau
          seseorang yang baru memulai karir di dunia desain, internship ini akan memberikanmu kesempatan emas untuk belajar,
          berkembang, dan menciptakan karya-karya yang mengagumkan dalam bidang yang kamu minati.
        </p>
      </div>
      <div className={style.position}>
        <div className={style.illustration}>
          <img src={internship} alt="illustration" />
        </div>
        <div className={style.pos}>
          <div className={style.description}>
            <span className={style.title}>Posisi Magang</span>
            <div className={style.divider} />
            <p className={style.sub}>
              Bergabunglah bersama kami sebagai intern dan ambil bagian dalam proyek-proyek teknologi yang inovatif dan
              menantang! Di Bangkalan Developer, kami menawarkan kesempatan magang bagi para mahasiswa dan fresh graduates
              yang ingin mengembangkan keterampilan di bidang IT, sekaligus memperluas jaringan di industri.
            </p>
            <p className={style.sub}>
              Sebagai intern, Anda akan mendapatkan pengalaman langsung dalam menangani proyek nyata, baik itu pengembangan
              web, mobile apps, maupun desain UI/UX. Di bawah bimbingan para profesional berpengalaman, Anda akan belajar
              bagaimana mengimplementasikan teknologi terbaru, bekerja dalam tim yang dinamis, dan memberikan kontribusi
              nyata untuk klien dan komunitas.
            </p>
            <div className={style.cards}>
              <Card className="h-32 w-48">
                <img src={webDesign} alt="wed-design" width={40} />
                <h6 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">Web Design</h6>
              </Card>
              <Card className="h-32 w-48">
                <img src={copywriting} alt="wed-design" width={40} />
                <h6 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">Copywriting</h6>
              </Card>
              <Card className="h-32 w-48">
                <img src={appDev} alt="wed-design" width={40} />
                <h6 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                  Development Website and App
                </h6>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className={style.term}>
        <span className={style.title}>Persyaratan & Benefit Intern Di Bangkalan Dev</span>
        <div className={style.content}>
          <TermBox title="Syarat" content={terms} />
          <TermBox title="Benefit" content={benefits} />
        </div>
      </div>
      <div className={style.banner}>
        <div className={style.textContainer}>
          <span className="text-[24px] font-bold">Mari Berkembang Bersama Kami!</span>
          <span className="w-[45%] text-base font-thin">Tanya-tanya silahkan hubungi nomor WhatsApp berikut</span>
          <span className="font-bold">0832493842</span>
          <span className="font-thin">Atau kirim proposal magangmu di sini</span>
          <span className="font-bold">bangkalan.dev@gmail.com</span>
        </div>
        <div className={style.imgContainer}>
          <div className={style.imgStack}>
            <img className={style.img1} width={25} src={img1} alt="img1" />
            <img className={style.img2} width={486} src={img2} alt="img2" />
            <img className={style.img3} width={256} src={img3} alt="img3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
