import React, { FC, InputHTMLAttributes, ReactNode, useId } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  text?: ReactNode;
}

const Radio: FC<IRadioProps> = ({ text, id, className, ...props }) => {
  const randomId = useId();

  return (
    <div className={clsx(styles.container, className)}>
      <input type="radio" id={id ?? randomId} {...props} />
      <label htmlFor={id ?? randomId}>
        <div className={styles.radio} />
        {text}
      </label>
    </div>
  );
};

export default Radio;
