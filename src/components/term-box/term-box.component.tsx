import React from 'react';
import { map } from 'lodash-es';
import { IconDots } from '@tabler/icons-react';

import style from './term-box.module.scss';

interface ITermBoxProps {
  title: string;
  content: string[];
}

const TermBox: React.FC<ITermBoxProps> = ({ title, content }) => {
  return (
    <div className={style.box}>
      <div className="flex items-center justify-between">
        <span className={style.title}>{title}</span>
        <IconDots size={44} />
      </div>
      <div className={style.divider} />
      <ul>
        {map(content, (item, index) => (
          <li className={style.list} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TermBox;
