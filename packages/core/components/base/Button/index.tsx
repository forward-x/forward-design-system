import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  color?: 'dark' | 'light';
  size?: 'S' | 'M' | 'L';
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'link' | 'icon';
}

const Button: FC<IButtonProps> = ({
  children,
  className,
  disabled,
  startIcon,
  endIcon,
  size = 'L',
  color = 'light',
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
          [styles.light]: color === 'light',
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
      {variant !== 'icon' && startIcon}
      {children}
      {variant !== 'icon' && endIcon}
    </button>
  );
};

export default Button;
