import React from 'react';
import { Button } from 'flowbite-react';

import style from './service-banner.module.scss';

const ServiceBanner: React.FC = () => {
  return (
    <div className={style.banner}>
      <span className={style.title}>Lakukan Digitalisasi Pada Bisnis Anda !</span>
      <p className={style.description}>
        Jangan biarkan bisnis Anda tertinggal dalam persaingan yang sengit. Jadilah pemimpin dalam industri Anda dengan
        solusi pengembangan web dan mobile kami yang inovatif. Hubungi kami sekarang untuk konsultasi gratis dan temukan
        bagaimana, Kami dapat membantu Anda mencapai tujuan bisnis Anda!
      </p>
      <Button pill className="bg-[#EA222B] enabled:hover:bg-[#EA111B] enabled:focus:bg-[#EA111B]">
        Selengkapnya
      </Button>
    </div>
  );
};

export default ServiceBanner;
