import React from 'react';

import { useSidebar } from '@/hooks';
import HamburgerIcon from '@/assets/icon/ic_hamburger.svg?react';
import MobileHeaderSidebar from './sidebar/MobileHeaderSidebar';
import * as S from './MobileHeader.styled';

const MobileHeader = () => {
  const { sidebar, openSidebar } = useSidebar();

  return (
    <S.MobileHeader>
      <S.Logo>READING-RECORD</S.Logo>
      <S.SidebarButton
        type="button"
        aria-label="Open sidebar"
        isShow={sidebar.isShow}
        onClick={openSidebar(<MobileHeaderSidebar />)}
      >
        <HamburgerIcon />
      </S.SidebarButton>
    </S.MobileHeader>
  );
};

export default MobileHeader;
