import React, { FC, Fragment, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IBreadcrumbsProps {
  variant?: 'default' | 'truncate';
  color: 'dark' | 'light';
  children: ReactNode[];
  className?: string;
}

const Breadcrumbs: FC<IBreadcrumbsProps> = ({
  className,
  children,
  variant = 'dafault',
  color = 'dark',
}) => {
  const components: ReactNode[] = [...children];
  if (variant === 'truncate') components.splice(1, children.length - 3, '...');

  return (
    <ul
      className={clsx(
        styles.breadcrumbs,
        {
          [styles.light]: color === 'light',
        },
        className
      )}
    >
      {components.map((child, index) => (
        <Fragment key={index}>
          <li
            className={clsx(styles.item, {
              [styles.active]: index === components.length - 1,
            })}
          >
            {child}
          </li>
          {index !== components.length - 1 && <li>/</li>}
        </Fragment>
      ))}
    </ul>
  );
};

export default Breadcrumbs;
