import React, {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useId,
} from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

export interface IRadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  className?: string;
  text?: ReactNode;
}

const Radio = forwardRef<HTMLInputElement | null, IRadioProps>(
  ({ text, id, className, ...props }, ref) => {
    const randomId = useId();

    return (
      <div className={clsx(styles.container, className)}>
        <input type="radio" id={id ?? randomId} {...props} ref={ref} />
        <label htmlFor={id ?? randomId}>
          <div className={styles.radio} />
          {text}
        </label>
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
