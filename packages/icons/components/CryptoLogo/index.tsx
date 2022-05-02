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
      className={clsx(
        styles.logo,
        {
          [styles.large]: size === 'L',
          [styles.extra_large]: size === 'XL',
        },
        className
      )}
    >
      {logo}
    </div>
  );
};

export default CryptoLogo;
