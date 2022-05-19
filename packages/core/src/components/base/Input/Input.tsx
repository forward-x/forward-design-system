import React, {
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
  prefix?: ReactNode;
  suffix?: ReactNode;
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

const Input = forwardRef<HTMLInputElement | null, IInputProps>(
  ({ className, prefix, suffix, size = 'L', ...props }, ref) => {
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
        {prefix && <div className={styles.prefix}>{prefix}</div>}
        <input {...props} type="text" ref={mergeRefs([inputRef, ref])} />
        {suffix && <div className={styles.suffix}>{suffix}</div>}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
