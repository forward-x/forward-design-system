import React, { FC, HTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IChipProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  className?: string;
  disabled?: boolean;
  isActive?: boolean;
  size?: 'S' | 'M' | 'L';
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
}

const Chip: FC<IChipProps> = ({
  text,
  startAdornment,
  endAdornment,
  disabled = false,
  className,
  size = 'L',
  isActive,
  ...props
}) => {
  return (
    <div
      className={clsx(
        styles.chip,
        {
          [styles.small]: size === 'S',
          [styles.medium]: size === 'M',
          [styles.large]: size === 'L',
          [styles.disabled]: disabled,
          [styles.active]: isActive,
        },
        className
      )}
      {...props}
    >
      <div className={styles.content}>
        {startAdornment && (
          <div className={styles.prefix}>{startAdornment}</div>
        )}
        {text}
      </div>
      {endAdornment && <div className={styles.suffix}>{endAdornment}</div>}
    </div>
  );
};

export default Chip;
