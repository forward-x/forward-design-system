import React, { FC, HTMLProps } from 'react';

import { UserIcon } from '@forward-ui/icons';
import clsx from 'clsx';

import { ReactComponent as ForwardMan } from '../../../assets/icons/ForwardMan.svg';

import styles from './index.module.scss';

export interface IAvatarProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  variant?: 'default' | 'name' | 'forward';
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
  const avatarSize = {
    XL: 'L',
    L: 'S',
    M: 'XS',
    S: 'XXS',
  } as const;

  let content;
  switch (variant) {
    case 'name':
      content = name;
      break;
    case 'forward':
      content = <ForwardMan className={styles.icon} />;
      break;
    default:
      content = (
        <UserIcon className={styles.user_icon} size={avatarSize[size]} />
      );
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
