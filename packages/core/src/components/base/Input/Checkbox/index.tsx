import React, {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useId,
} from 'react';

import { CheckmarkIcon } from '@forward-protocol/ui-icons';
import clsx from 'clsx';

import styles from './index.module.scss';

export interface ICheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  className?: string;
  text?: ReactNode;
  /**
   * M - 24px
   *
   * S - 20px
   *
   * @default 'M'
   */
  size?: 'M' | 'S';
}

const Checkbox = forwardRef<HTMLInputElement | null, ICheckboxProps>(
  ({ size = 'M', text, id, className, ...props }, ref) => {
    const randomId = useId();

    return (
      <div
        className={clsx(
          styles.container,
          { [styles.small]: size === 'S' },
          className
        )}
      >
        <input type="checkbox" id={id ?? randomId} {...props} ref={ref} />
        <label htmlFor={id ?? randomId}>
          <div className={styles.checkbox}>
            <CheckmarkIcon className={styles.check} />
          </div>
          {text}
        </label>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
