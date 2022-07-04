/* eslint-disable complexity */
import React, { FC, useState } from 'react';

import clsx from 'clsx';
import ReactSwitch, { ReactSwitchProps } from 'react-switch';

import styles from './index.module.scss';

export interface ISwitchProps extends ReactSwitchProps {
  className?: string;
}

const Switch: FC<ISwitchProps> = (
  {
    onChange,
    className,
    checked = false,
    checkedIcon = false,
    uncheckedIcon = false,
    activeBoxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  ...props
) => {
  const [isChecked, setChecked] = useState<boolean>(checked);

  return (
    <ReactSwitch
      onChange={(checked, event, id) => {
        if (onChange) onChange(checked, event, id);
        setChecked(!isChecked);
      }}
      checked={isChecked}
      checkedIcon={checkedIcon}
      uncheckedIcon={uncheckedIcon}
      activeBoxShadow={activeBoxShadow}
      className={clsx(
        styles.switch,
        { [styles.checked]: isChecked },
        className
      )}
      {...props}
    />
  );
};

export default Switch;
