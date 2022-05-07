import React, { FC } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface ICheckboxProps {
  className?: string;
  text?: string;
  id?: string;
  value?: string;
}

const Checkbox: FC<ICheckboxProps> = ({ text, id, value, className }) => {
  return (
    <div className={clsx(styles.container, className)}>
      <input type="checkbox" id={id} value={value} />
      <label htmlFor={id}>
        <div className={styles.checkbox}>
          <div className={styles.hover_bg} />
        </div>
        {text}
      </label>
    </div>
  );
};

export default Checkbox;
