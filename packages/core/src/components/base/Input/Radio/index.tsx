import React, { FC, InputHTMLAttributes, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  text?: ReactNode;
  color?: 'dark' | 'light';
}

const Radio: FC<IRadioProps> = ({
  text,
  id = 'default',
  color = 'dark',
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        { [styles.light]: color === 'light' },
        className
      )}
    >
      <input type="radio" id={id} {...props} />
      <label htmlFor={id}>
        <div className={styles.radio} />
        {text}
      </label>
    </div>
  );
};

export default Radio;
