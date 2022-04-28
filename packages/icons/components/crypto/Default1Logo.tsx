// Please do not edit this file as it was generated using a script

import React, { FC } from 'react';

import { ReactComponent as Default1 } from '../../assets/logos/crypto/Default1.svg';
import CryptoLogo, { ICryptoLogoProps } from '../CryptoLogo';

const Default1Logo: FC<Omit<ICryptoLogoProps, 'logo'>> = ({
  size,
  className,
}) => {
  return <CryptoLogo logo={<Default1 />} size={size} className={className} />;
};

export default Default1Logo;