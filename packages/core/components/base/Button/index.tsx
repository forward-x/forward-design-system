import React, { FC, HTMLProps, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export enum ButtonStyle {
  None = '',
  Default = 'default',
  Secondary = 'Secondary',
  Tertiary = 'tertiary',
  Danger = 'danger',
  Icon = 'icon',
}

export interface IButton extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  buttonStyle?: ButtonStyle;
  className?: string;
  disabled?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  buttonSize?: 'small' | 'medium' | 'standard';
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<IButton> = ({
  children,
  buttonStyle = ButtonStyle.Default,
  className,
  disabled,
  startIcon,
  endIcon,
  buttonSize = 'standard',
  type = 'button',
  ...props
}) => {
  const classes = clsx(
    className,
    {
      [styles.small]: buttonSize === 'small',
      [styles.medium]: buttonSize === 'medium',
      [styles.standard]: buttonSize === 'standard',
      [styles.default]: buttonStyle === ButtonStyle.Default,
      [styles.secondary]: buttonStyle === ButtonStyle.Secondary,
      [styles.tertiary]: buttonStyle === ButtonStyle.Tertiary,
      [styles.danger]: buttonStyle === ButtonStyle.Danger,
      [styles.icon]:
        buttonStyle === ButtonStyle.Icon ||
        startIcon !== undefined ||
        endIcon !== undefined,
      [styles.disabled]: disabled,
    },
    styles.container
  );

  return (
    <button type={type} className={classes} {...props}>
      {startIcon && <div className={styles.startIcon}>{startIcon}</div>}
      {children}
      {endIcon && <div className={styles.endIcon}>{endIcon}</div>}
    </button>
  );
};

export default Button;
