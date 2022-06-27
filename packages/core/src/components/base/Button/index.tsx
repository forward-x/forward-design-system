import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  /**
   * L - 40px (desktop) / 48px (mobile)
   *
   * M - 32px (desktop)
   *
   * S - 24px (desktop) / 36px (mobile)
   *
   * @default 'L'
   */
  size?: 'S' | 'M' | 'L';
  /**
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'link' | 'icon';
}

const Button: FC<IButtonProps> = ({
  children,
  className,
  disabled,
  startIcon,
  endIcon,
  size = 'L',
  type = 'button',
  variant = 'primary',
  ...props
}) => {
  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        {
          [styles.small]: size === 'S',
          [styles.medium]: size === 'M',
          [styles.primary]: variant === 'primary',
          [styles.secondary]: variant === 'secondary',
          [styles.tertiary]: variant === 'tertiary',
          [styles.danger]: variant === 'danger',
          [styles.link]: variant === 'link',
          [styles.icon]: variant === 'icon',
        },
        className
      )}
      {...props}
      disabled={disabled}
    >
      {variant !== 'icon' && startIcon && (
        <span className={styles.startIcon}>{startIcon}</span>
      )}
      {children}
      {variant !== 'icon' && endIcon && (
        <span className={styles.endIcon}>{endIcon}</span>
      )}
    </button>
  );
};

export default Button;
