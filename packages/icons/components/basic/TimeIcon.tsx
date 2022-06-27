// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import Time from '@iconify-icons/carbon/time';
import { Icon as ReactIcon } from '@iconify/react/offline';

import Icon, { IIconProps } from '../Icon';

const TimeIcon: FC<Omit<IIconProps, 'icon'>> = ({ size, className, color }) => {
  return (
    <Icon
      icon={<ReactIcon icon={Time} />}
      size={size}
      className={className}
      color={color}
    />
  );
};

export default TimeIcon;