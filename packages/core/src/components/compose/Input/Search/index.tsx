import React, { forwardRef, InputHTMLAttributes } from 'react';

import { SearchIcon } from '@forward-protocol/ui-icons';
import clsx from 'clsx';

import { Input } from '../../../base';

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

const Search = forwardRef<HTMLInputElement | null, IInputSearchProps>(
  ({ className, size = 'L', ...props }, ref) => {
    return (
      <Input
        {...props}
        className={clsx(styles.input, className)}
        ref={ref}
        size={size}
        endAdornment={
          <button
            className={clsx(styles.suffix, {
              [styles.small]: size === 'S',
              [styles.medium]: size === 'M',
            })}
            type="submit"
          >
            <SearchIcon />
          </button>
        }
      />
    );
  }
);

Search.displayName = 'Search';

export default Search;
