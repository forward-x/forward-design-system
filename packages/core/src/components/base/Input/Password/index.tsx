import React, {
  forwardRef,
  InputHTMLAttributes,
  useRef,
  useState,
} from 'react';

import { LockIcon, ViewIcon, ViewOffIcon } from '@forward-protocol/ui-icons';
import clsx from 'clsx';
import mergeRefs from 'react-merge-refs';

import styles from './index.module.scss';

export interface IInputPasswordProps
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

const Password = forwardRef<HTMLInputElement | null, IInputPasswordProps>(
  ({ className, size = 'L', ...props }, ref) => {
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
          type={isShown ? 'text' : 'password'}
          ref={mergeRefs([inputRef, ref])}
        />
        <button
          type="button"
          className={styles.suffix}
          onClick={() => setShow(!isShown)}
        >
          {isShown ? <ViewIcon /> : <ViewOffIcon />}
        </button>
      </div>
    );
  }
);

Password.displayName = 'Password';

export default Password;
