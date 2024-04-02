import React from 'react';
import { useRecoilValue } from 'recoil';

import { sidebarState } from '@/stores';
import Portal from '../Portal';
import * as S from './SidebarPortal.styled';

const SidebarPortal = () => {
  const sidebar = useRecoilValue(sidebarState);

  return (
    <Portal isMounted={!!sidebar.component} container="#sidebar">
      <S.Dim>{sidebar.component}</S.Dim>
    </Portal>
  );
};

export default SidebarPortal;
