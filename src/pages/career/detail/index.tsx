import React from 'react';

import InternForm from '@components/forms/intern-form/intern-form.component';

import logo from '@assets/images/logo/logo.png';
import style from './style.module.scss';

const DetailCareerPage: React.FC = () => {
  return (
    <div className={style.container}>
      <div className={style.description}>
        <img width="20%" src={logo} alt="logo" />
        <span className="text-2xl font-semibold">Magang UI/UX</span>
        <span className="mb-6 text-base text-[#C0C0C0]">Divisi Developer</span>
        <p className="text-base font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium illum velit sit quam amet! Dolorum maiores,
          vel accusamus hic nostrum a ad, ipsam, corrupti harum deleniti saepe debitis architecto voluptatum!
        </p>
      </div>
      <div className={style.formSection}>
        <InternForm />
      </div>
    </div>
  );
};

export default DetailCareerPage;
