import React from 'react';
import { Card } from 'flowbite-react';

import codeLine from '@assets/images/logo/code_line.svg';
import mobileLine from '@assets/images/logo/mobile_line.svg';

import classNames from 'classnames';
import style from './offering.module.scss';

const Offering: React.FC = () => {
  return (
    <div className={style.offering}>
      <span className={style.title}>Layanan Yang Kami Tawarkan</span>
      <div className={style.offeringCard}>
        <div className={style.stack}>
          <div className={style.card1}>
            <Card>
              <div className={style.wrapper}>
                <img src={codeLine} alt="code-line" width="40%" />
                <span className={style.title}>Web Development</span>
                <p className={classNames([style.description, 'text-gray-600'])}>lorem</p>
              </div>
            </Card>
          </div>
          <div className={style.card2}>
            <Card>
              <div className={style.wrapper}>
                <img src={mobileLine} alt="mobile-line" width="40%" />
                <span className={style.title}>Mobile Development</span>
                <p className={classNames([style.description, 'text-gray-600'])}>lorem</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offering;
