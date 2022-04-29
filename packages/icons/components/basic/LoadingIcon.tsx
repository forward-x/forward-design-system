// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import { ReactComponent as Add } from '../../assets/icons/basic/Loading.svg';
import Icon, { IIconProps } from '../Icon';

const LoadingIcon: FC<Omit<IIconProps, 'icon'>> = ({
  size,
  className,
  color,
}) => {
  return (
    <Icon icon={<Add />} size={size} className={className} color={color} />
  );
};

export default LoadingIcon;
