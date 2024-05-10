import React from 'react';

import { SideTab } from '@/components';
import UserInfo from './userInfo/UserInfo';
import * as S from './Setting.styled';

const SettingDesktop = () => {
  const tabs = [{ key: 'user', label: '회원 정보', content: <UserInfo /> }];

  return (
    <S.Container>
      <SideTab tabs={tabs} />
    </S.Container>
  );
};

export default SettingDesktop;
