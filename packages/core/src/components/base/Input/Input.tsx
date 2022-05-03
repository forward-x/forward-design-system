import React, {
  FC,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useRef,
} from 'react';

import clsx from 'clsx';
import mergeRefs from 'react-merge-refs';

import styles from './index.module.scss';

export interface IInputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'prefix' | 'type' | 'size'
  > {
  className?: string;
  disabled?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  size?: 'L' | 'M' | 'S';
  color?: 'dark' | 'light';
}

const Input = forwardRef<HTMLInputElement | null, IInputProps>(
  (
    {
      className,
      disabled,
      prefix,
      suffix,
      size = 'L',
      color = 'dark',
      ...props
    },
    ref
  ) => {
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
            [styles.medium]: size === 'M',
            [styles.small]: size === 'S',
          },
          className
        )}
        onClick={handleClick}
      >
        {prefix && <div className={styles.prefix}>{prefix}</div>}
        <input
          {...props}
          disabled={disabled}
          type="text"
          ref={mergeRefs([inputRef, ref])}
        />
        {suffix && <div className={styles.suffix}>{suffix}</div>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
