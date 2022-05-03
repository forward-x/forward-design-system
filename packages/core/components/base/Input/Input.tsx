import React, { FC, InputHTMLAttributes, ReactNode, useRef } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'type'> {
  className?: string;
  disabled?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  color?: 'dark' | 'light';
}

const Input: FC<IInputProps> = ({
  className,
  disabled,
  prefix,
  suffix,
  color = 'dark',
  ...props
}) => {
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
      {prefix && <div className={styles.prefix}>{prefix}</div>}
      <input {...props} disabled={disabled} type="text" ref={inputRef} />
      {suffix && <div className={styles.suffix}>{suffix}</div>}
    </div>
  );
};

export default Input;
