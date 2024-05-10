import React from 'react';
import { useRecoilValue } from 'recoil';

import { SideTab, Tab } from '@/components';
import { deviceState } from '@/stores';
import UserInfo from './userInfo/UserInfo';
import * as S from './Setting.styled';

const Setting = () => {
  const device = useRecoilValue(deviceState);
  const tabs = [{ key: 'user', label: '회원 정보', content: <UserInfo /> }];

  return device === 'mobile' ? (
    <Tab tabs={tabs} />
  ) : (
    <S.Container>
      <SideTab tabs={tabs} />
    </S.Container>
  );
};

export default Setting;
