import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  InputHTMLAttributes,
  KeyboardEvent,
  useRef,
} from 'react';

import clsx from 'clsx';

import Input from '../Input';

import styles from './index.module.scss';

export interface IInputDigitsProps {
  className?: string;
  length?: number;
  disabled?: boolean;
  size?: 'L' | 'M' | 'S';
}

const Digits: FC<IInputDigitsProps> = ({
  className,
  disabled,
  size = 'L',
  length = 6,
}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

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
      {new Array(length).fill(null).map((_, index) => (
        <Input
          key={index}
          size={size}
          disabled={disabled}
          className={styles.digit}
          maxLength={1}
          ref={(newRef) => (inputRefs.current[index] = newRef)}
          onFocus={(e: FocusEvent<HTMLInputElement>) => {
            e.target.select();
          }}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (/\d/.test(e.target.value)) {
              if (index < length - 1) {
                inputRefs.current[index + 1]?.focus();
              }
            } else {
              e.target.value = e.target.value.replace(/[^\d]/g, '');
            }
          }}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (
              e.key === 'Backspace' &&
              index > 0 &&
              !inputRefs.current[index]?.value
            ) {
              inputRefs.current[index - 1]?.focus();
            }
          }}
        />
      ))}
    </div>
  );
};

export default Digits;
