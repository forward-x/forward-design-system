import React, { FC } from 'react';
import Switch from 'react-switch';

import styles from './index.module.scss';

interface IToggleSwitch {
  onChange: (value: boolean) => void;
  checked: boolean;
}

const ToggleSwitch: FC<IToggleSwitch> = ({ onChange, checked }) => {
  return (
    <Switch
      onChange={onChange}
      checked={checked}
      checkedIcon={false}
      uncheckedIcon={false}
      activeBoxShadow="0px 4px 8px rgba(0, 0, 0, 0.1)"
      width={52}
      handleDiameter={16}
      height={24}
      className={styles.switch}
      borderRadius={62}
    />
  );
};

export default ToggleSwitch;