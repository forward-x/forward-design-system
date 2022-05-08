import React, { FC } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

interface IChip {
  text: string;
  className?: string;
}

const Chip: FC<IChip> = ({ text, className }) => {
  return <div className={clsx(styles.chip, className)}>{text}</div>;
};

export default Chip;
