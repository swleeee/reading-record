import React from 'react';

import { Tab } from '@/components';
import UserInfo from './userInfo/UserInfo';

const SettingMobile = () => {
  const tabs = [{ key: 'user', label: '회원 정보', content: <UserInfo /> }];

  return <Tab tabs={tabs} />;
};

export default SettingMobile;
