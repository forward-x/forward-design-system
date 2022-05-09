import React, { FC, InputHTMLAttributes } from 'react';

import { SearchIcon } from '@forward-ui/icons';
import clsx from 'clsx';

import styles from './index.module.scss';

export interface IInputPasswordProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  className?: string;
  size?: 'L' | 'M' | 'S';
}

const Password: FC<IInputPasswordProps> = ({
  className,
  size = 'L',
  ...props
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        {
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
