import React, { FC, ReactNode, useEffect, useState } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IAlertProps {
  text: string;
  className?: string;
  disabled?: boolean;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onChange?: (isSelected: boolean) => void;
}

const Alert: FC<IAlertProps> = ({
  text,
  startAdornment,
  endAdornment,
  onChange,
  disabled = false,
  className,
}) => {
  const [isActive, setIsActive] = useState<boolean>(disabled);

  useEffect(() => {
    if (onChange) onChange(!isActive);
  }, [isActive, onChange]);

  return (
    <div
      className={clsx(
        styles.chip,
        {
          [styles.disabled]: disabled,
          [styles.active]: isActive,
        },
        className
      )}
      onClick={() => {
        setIsActive(!isActive);
      }}
    >
      <div className={styles.content}>
        {startAdornment && (
          <div className={styles.prefix}>{startAdornment}</div>
        )}
        {text}
      </div>
      {endAdornment && <div className={styles.suffix}>{endAdornment}</div>}
    </div>
  );
};

export default Alert;
