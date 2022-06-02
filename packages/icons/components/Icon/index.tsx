import React, { cloneElement, FC, ReactElement } from 'react';

import { IconProps } from '@iconify/react';
import clsx from 'clsx';

import styles from './index.module.scss';

export interface IIconProps {
  className?: string;
  icon: ReactElement<IconProps>;
  /**
   * M - 24px
   *
   * S - 20px
   *
   * XS - 16px
   *
   * @default 'M'
   */
  size?: 'XS' | 'S' | 'M';
  /**
   * @default 'dark'
   */
  color?: 'dark' | 'light';
}

const Icon: FC<IIconProps> = ({
  size = 'M',
  className,
  icon,
  color = 'dark',
}) => {
  const iconSize = {
    XS: 16,
    S: 20,
    M: 24,
  };

  return cloneElement(icon, {
    width: iconSize[size],
    height: iconSize[size],
    className: clsx(
      styles.icon,
      { [styles.light]: color === 'light' },
      className
    ),
  });
};

export default Icon;
