import React, { FC } from 'react';

import clsx from 'clsx';

import { ReactComponent as LoadingIcon } from '../../../assets/icons/LoadingIcon.svg';
import { ReactComponent as LoadingLogo } from '../../../assets/icons/LoadingLogo.svg';

import styles from './index.module.scss';

export interface ILoadingProps {
  className?: string;
  variant?: 'circular' | 'linear';
  percentage?: number;
}

const Loading: FC<ILoadingProps> = ({
  className,
  variant = 'circular',
  percentage = 0,
}) => {
  let newPercentage = percentage > 100 ? 100 : percentage;
  newPercentage = newPercentage < 0 ? 0 : newPercentage;
  return (
    <div className={clsx(styles.loading, className)}>
      {variant === 'circular' ? (
        <LoadingIcon className={styles.icon} />
      ) : (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <LoadingLogo className={styles.logo} />
          <div className={styles.progressContainer}>
            <div
              className={styles.progress}
              style={{ width: `${newPercentage}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
