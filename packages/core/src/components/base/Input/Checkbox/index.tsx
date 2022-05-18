import React, { FC, InputHTMLAttributes, ReactNode } from 'react';

import { CheckmarkIcon } from '@forward-protocol/ui-icons';
import clsx from 'clsx';

import styles from './index.module.scss';

export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  text?: ReactNode;
}

const Checkbox: FC<ICheckboxProps> = ({
  text,
  id = 'default',
  className,
  ...props
}) => {
  return (
    <div className={clsx(styles.container, className)}>
      <input type="checkbox" id={id} {...props} />
      <label htmlFor={id}>
        <div className={styles.checkbox}>
          <CheckmarkIcon className={styles.check} />
        </div>
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
