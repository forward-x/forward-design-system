import React, { FC, ReactNode, useState } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IChipProps {
  text: string;
  className?: string;
  disabled?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  variant?: 'default' | 'toggle';
  onChange?: (isSelected: boolean) => void;
}

const Chip: FC<IChipProps> = ({
  text,
  prefix,
  suffix,
  onChange,
  variant = 'default',
  disabled = false,
  className,
}) => {
  const [isActive, setIsActive] = useState<boolean>(disabled);

  return (
    <div
      className={clsx(
        styles.chip,
        {
          [styles.disabled]: variant === 'toggle' ? isActive : disabled,
          [styles.toggle]: variant === 'toggle',
        },
        className
      )}
      onClick={() => {
        if (variant === 'toggle') {
          if (onChange) onChange(!isActive);
          setIsActive(!isActive);
        }
      }}
    >
      <div className={styles.content}>
        {prefix && <div className={styles.prefix}>{prefix}</div>}
        {text}
      </div>
      {suffix && <div className={styles.suffix}>{suffix}</div>}
    </div>
  );
};

export default Chip;
