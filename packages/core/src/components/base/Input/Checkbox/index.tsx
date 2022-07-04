import React, { FC, InputHTMLAttributes, ReactNode } from 'react';

import { CheckmarkIcon } from '@forward-protocol/ui-icons';
import clsx from 'clsx';

import styles from './index.module.scss';

export interface ICheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  className?: string;
  text?: ReactNode;
  /**
   * M - 24px
   *
   * S - 20px
   *
   * @default 'M'
   */
  size?: 'M' | 'S';
}

const Checkbox: FC<ICheckboxProps> = ({
  size = 'M',
  text,
  id = 'default',
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(
        styles.container,
        { [styles.small]: size === 'S' },
        className
      )}
    >
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
