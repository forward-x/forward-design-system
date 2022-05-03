import React, { FC, InputHTMLAttributes, useRef, useState } from 'react';

import { LockIcon, ViewIcon, ViewOffIcon } from '@forward-ui/icons';
import clsx from 'clsx';

import styles from './index.module.scss';

export interface IInputPasswordProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'type'> {
  className?: string;
  disabled?: boolean;
  color?: 'dark' | 'light';
}

const Password: FC<IInputPasswordProps> = ({
  className,
  disabled,
  color = 'dark',
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
          [styles.light]: color === 'light',
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
      <div
        className={styles.suffix}
        onClick={() => setShow(!isShown)}
        style={{ cursor: 'pointer' }}
      >
        {isShown ? <ViewIcon /> : <ViewOffIcon />}
      </div>
    </div>
  );
};

export default Password;
