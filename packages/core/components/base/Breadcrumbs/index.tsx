import React, { FC, ReactNode } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IBreadcrumbsProps {
  variant: 'Default' | 'Truncate';
  children: ReactNode[];
  className?: string;
}

const Breadcrumbs: FC<IBreadcrumbsProps> = ({
  className,
  children,
  variant,
}) => {
  const components: ReactNode[] = [...children];
  if (variant === 'Truncate') components.splice(1, children.length - 3, '...');

  return (
    <li className={clsx(styles.breadcrumbs, className)}>
      {components.map((child, index) => (
        <>
          <ul
            key={index}
            className={clsx(styles.item, {
              [styles.active]: index === components.length - 1,
            })}
          >
            {child}
          </ul>
          {index !== components.length - 1 && <ul>/</ul>}
        </>
      ))}
    </li>
  );
};

export default Breadcrumbs;
