import React, { FC, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IIconProps {
  className?: string;
  icon: ReactNode;
  size: 'M' | 'S' | 'XS';
  color: 'dark' | 'light';
}

const Icon: FC<IIconProps> = ({ size, color, className, icon }) => {
  return (
    <div
      className={clsx(className, styles.icon, {
        [styles.icon_light]: color === 'light',
        [styles.icon_small]: size === 'S',
        [styles.icon_extra_small]: size === 'XS',
      })}
    >
      {icon}
    </div>
  );
};

export default Icon;
