import React, {
  FC,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IChipProps {
  text: string;
  className?: string;
  disabled?: boolean;
  size?: 'S' | 'M' | 'L';
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onChange?: (isSelected: boolean) => void;
}

const Chip: FC<IChipProps> = ({
  text,
  startAdornment,
  endAdornment,
  onChange,
  disabled = false,
  className,
  size = 'L',
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
          [styles.small]: size === 'S',
          [styles.medium]: size === 'M',
          [styles.large]: size === 'L',
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

export default Chip;
