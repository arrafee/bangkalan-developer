import React from 'react';
import { Icon } from '@iconify/react';

import Offering from '@components/offering/offering.component';
import ServiceBanner from '@components/service-banner/service-banner.component';

import phone from '@assets/images/mobile.png';

import { Card } from 'flowbite-react';
import { map } from 'lodash-es';
import style from './style.module.scss';

const ServicePage: React.FC = () => {
  const reasons = [
    {
      icon: 'mdi:head-idea-outline',
      label: 'Inovatif',
    },
    {
      icon: 'iconamoon:shield-yes',
      label: 'Bergaransi',
    },
    {
      icon: 'tabler:ux-circle',
      label: 'User Experience Testing',
    },
    {
      icon: 'fluent-mdl2:date-time-12',
      label: 'Tepat Waktu',
    },
  ];

  return (
    <div className={style.container}>
      <ServiceBanner />
      <Offering />
      <div className={style.whyUs}>
        <img src={phone} alt="mobile" />
        <div className={style.description}>
          <span className={style.title}>Mengapa Bangkalan Dev?</span>
          <div className={style.cardContainer}>
            {map(reasons, (item, index) => (
              <div key={index} className={style.wrapper}>
                <Card className="bg-white">
                  <Icon icon={item.icon} color="#EA222B" width={34} />
                </Card>
                <span className={style.label}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
