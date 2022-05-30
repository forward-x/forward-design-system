/* eslint-disable complexity */
import React, { FC, useState } from 'react';

import clsx from 'clsx';
import ReactSwitch, { ReactSwitchProps } from 'react-switch';

import { useMediaQuery } from '../../../../hooks';

import styles from './index.module.scss';

export interface ISwitchProps extends ReactSwitchProps {
  className?: string;
}

const Switch: FC<ISwitchProps> = (
  {
    onChange,
    className,
    checked = false,
    width,
    height,
    handleDiameter,
    borderRadius = 62,
    onHandleColor = '#fb3a70',
    offHandleColor = '#333454',
    checkedIcon = false,
    uncheckedIcon = false,
    activeBoxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  ...props
) => {
  const [isChecked, setChecked] = useState<boolean>(checked);
  const isMobile = useMediaQuery('(max-width: 500px)');

  const defaultWidth = isMobile ? 80 : 60;
  const defaultHeight = isMobile ? 32 : 24;
  const defaultHandleDiameter = isMobile ? 24 : 16;

  return (
    <ReactSwitch
      onChange={(checked, event, id) => {
        setChecked(!isChecked);
        onChange(checked, event, id);
      }}
      checked={isChecked}
      checkedIcon={checkedIcon}
      uncheckedIcon={uncheckedIcon}
      activeBoxShadow={activeBoxShadow}
      width={width || defaultWidth}
      handleDiameter={handleDiameter || defaultHandleDiameter}
      height={height || defaultHeight}
      onHandleColor={onHandleColor}
      offHandleColor={offHandleColor}
      className={clsx(styles.switch, className)}
      borderRadius={borderRadius}
      {...props}
    />
  );
};

export default Switch;
