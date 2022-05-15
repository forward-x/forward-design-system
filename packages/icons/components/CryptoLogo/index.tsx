import React, { cloneElement, FC, ReactElement } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface ICryptoLogoProps {
  className?: string;
  logo: ReactElement;
  size: 'M' | 'L' | 'XL';
}

const CryptoLogo: FC<ICryptoLogoProps> = ({ size, className, logo }) => {
  return cloneElement(logo, {
    className: clsx(
      styles.logo,
      {
        [styles.large]: size === 'L',
        [styles.extra_large]: size === 'XL',
      },
      className
    ),
  });
};

export default CryptoLogo;
