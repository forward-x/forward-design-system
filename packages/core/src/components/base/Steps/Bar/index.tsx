import React, { FC } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IStepsBarProps {
  /**
   * @default 0
   */
  index?: number;
  /**
   * @default 4
   */
  length?: number;
  className?: string;
}

const Bar: FC<IStepsBarProps> = ({ index = 0, length = 4, className }) => {
  return (
    <div className={clsx(styles.steps, className)}>
      <progress max={length} value={index} />
      <span>
        step {index} / {length}
      </span>
    </div>
  );
};

export default Bar;
