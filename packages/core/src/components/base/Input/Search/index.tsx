import React, { FC, InputHTMLAttributes } from 'react';

import { SearchIcon } from '@forward-ui/icons';
import clsx from 'clsx';

import styles from './index.module.scss';

export interface IInputPasswordProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  className?: string;
  size?: 'L' | 'M' | 'S';
  color?: 'dark' | 'light';
}

const Password: FC<IInputPasswordProps> = ({
  className,
  size = 'L',
  color = 'dark',
  ...props
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        {
          [styles.light]: color === 'light',
          [styles.medium]: size === 'M',
          [styles.small]: size === 'S',
        },
        className
      )}
    >
      <input {...props} type="text" />
      <button className={styles.suffix} type="submit">
        <SearchIcon />
      </button>
    </div>
  );
};

export default Password;
