import React, { FC } from 'react';

import clsx from 'clsx';

import { ReactComponent as ForwardMan } from '../../../assets/icons/ForwardMan.svg';
import { ReactComponent as UserIcon } from '../../../assets/icons/UserIcon.svg';

import styles from './index.module.scss';

export interface IAvatarProps {
  /**
   * @default 'default'
   */
  variant?: 'default' | 'name' | 'forward';
  /**
   * XL - 64px
   *
   * L - 40px
   *
   * M - 32px
   *
   * S - 24px
   *
   * @default 'M'
   */
  size?: 'XL' | 'L' | 'M' | 'S';
  name?: string;
  className?: string;
}

const Avatar: FC<IAvatarProps> = ({
  name,
  variant = 'default',
  size = 'M',
  className,
  ...props
}) => {
  let content;
  switch (variant) {
    case 'name':
      content = name;
      break;
    case 'forward':
      content = <ForwardMan className={styles.icon} />;
      break;
    default:
      content = <UserIcon className={styles.user_icon} />;
      break;
  }

  return (
    <div
      className={clsx(
        styles.avatar,
        {
          [styles.small]: size === 'S',
          [styles.large]: size === 'L',
          [styles.extra_large]: size === 'XL',
          [styles.forward_man]: variant === 'forward',
        },
        className
      )}
      {...props}
    >
      {content}
    </div>
  );
};

export default Avatar;
