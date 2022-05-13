import React, { FC, InputHTMLAttributes, useRef, useState } from 'react';

import { LockIcon, ViewIcon, ViewOffIcon } from '@forward-ui/icons';
import clsx from 'clsx';

import styles from './index.module.scss';

export interface IInputPasswordProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'prefix' | 'type' | 'size'
  > {
  className?: string;
  disabled?: boolean;
  /**
   * L - 40px (desktop) / 48px (mobile)
   *
   * M - 32px (desktop)
   *
   * S - 24px (desktop) / 36px (mobile)
   *
   * @default 'L'
   */
  size?: 'L' | 'M' | 'S';
}

const Password: FC<IInputPasswordProps> = ({
  className,
  disabled,
  size = 'L',
  ...props
}) => {
  const [isShown, setShow] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    inputRef.current?.focus();
  };

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
      onClick={handleClick}
    >
      <div className={styles.prefix}>
        <LockIcon />
      </div>
      <input
        {...props}
        disabled={disabled}
        type={isShown ? 'text' : 'password'}
        ref={inputRef}
      />
      <button
        className={styles.suffix}
        onClick={() => setShow(!isShown)}
        tabIndex={0}
      >
        {isShown ? <ViewIcon /> : <ViewOffIcon />}
      </button>
    </div>
  );
};

export default Password;
