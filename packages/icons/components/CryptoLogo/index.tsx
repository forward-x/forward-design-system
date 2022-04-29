import React, { FC, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface ICryptoLogoProps {
  className?: string;
  logo: ReactNode;
  size: 'M' | 'L' | 'XL';
}

const CryptoLogo: FC<ICryptoLogoProps> = ({ size, className, logo }) => {
  return (
    <div
      className={clsx(className, styles.logo, {
        [styles.logo_large]: size === 'L',
        [styles.logo_extra_large]: size === 'XL',
      })}
    >
      {logo}
    </div>
  );
};

export default CryptoLogo;
