import React, { FC, InputHTMLAttributes } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  text?: string;
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
