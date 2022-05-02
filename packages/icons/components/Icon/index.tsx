import React, { FC, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IIconProps {
  className?: string;
  icon: ReactNode;
  size?: 'XXS' | 'XS' | 'S' | 'M' | 'L';
  color?: 'dark' | 'light';
}

const Icon: FC<IIconProps> = ({
  size = 'M',
  color = 'dark',
  className,
  icon,
}) => {
  return (
    <div
      className={clsx(
        styles.icon,
        {
          [styles.light]: color === 'light',
          [styles.large]: size === 'L',
          [styles.small]: size === 'S',
          [styles.extra_small]: size === 'XS',
          [styles.extra_extra_small]: size === 'XXS',
        },
        className
      )}
    >
      {icon}
    </div>
  );
};

export default Icon;
