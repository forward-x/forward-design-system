import React, { FC, InputHTMLAttributes } from 'react';

import { SearchIcon } from '@forward-protocol/ui-icons';
import clsx from 'clsx';

import styles from './index.module.scss';

export interface IInputSearchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  className?: string;
  /**
   * L - 40px (desktop) / 48px (mobile)
   *
   * M - 32px (desktop) / 36px (mobile)
   *
   * S - 24px (desktop) / 36px (mobile)
   *
   * @default 'L'
   */
  size?: 'L' | 'M' | 'S';
}

const Search: FC<IInputSearchProps> = ({ className, size = 'L', ...props }) => {
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

export default Search;
