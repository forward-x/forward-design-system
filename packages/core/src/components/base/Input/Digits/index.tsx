import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

import clsx from 'clsx';

import Input from '../Input';

import styles from './index.module.scss';

export interface IInputDigitsProps {
  className?: string;
  /**
   * @default 6
   */
  length?: number;
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
  onChange?: (value: string) => void;
}

const Digits: FC<IInputDigitsProps> = ({
  className,
  disabled,
  size = 'L',
  length = 6,
  onChange,
}) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [trigger, triggerUpdate] = useState<boolean>(false);

  useEffect(() => {
    if (onChange)
      onChange(inputRefs.current.map((element) => element?.value).join(''));
  }, [trigger, onChange]);

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
            triggerUpdate(!trigger);
          }}
          // eslint-disable-next-line complexity
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (
              index > 0 &&
              ((e.key === 'Backspace' && !inputRefs.current[index]?.value) ||
                e.key === 'ArrowLeft')
            ) {
              inputRefs.current[index - 1]?.focus();
            } else if (e.key === 'ArrowRight' && index < length - 1) {
              inputRefs.current[index + 1]?.focus();
            }
          }}
        />
      ))}
    </div>
  );
};

export default Digits;
