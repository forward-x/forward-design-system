import React, { FC } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IStepsRadialProps {
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

const Radial: FC<IStepsRadialProps> = ({
  index = 0,
  length = 4,
  className,
}) => {
  const progressBarDegree = (360 / length) * index;

  return (
    <div className={clsx(styles.steps, className)}>
      <div
        className={styles.progress}
        style={{
          background: `conic-gradient(#fb3a70 ${progressBarDegree}deg, #333454 ${progressBarDegree}deg)`,
        }}
      />
      <div>
        step
        <br />
        {index} / {length}
      </div>
    </div>
  );
};

export default Radial;
