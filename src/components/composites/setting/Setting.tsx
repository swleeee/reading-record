import React from 'react';
import { useRecoilValue } from 'recoil';

import { deviceState } from '@/stores';
import SettingDesktop from './SettingDesktop';
import SettingMobile from './SettingMobile';

const Setting = () => {
  const device = useRecoilValue(deviceState);

  return device === 'mobile' ? <SettingMobile /> : <SettingDesktop />;
};

export default Setting;
