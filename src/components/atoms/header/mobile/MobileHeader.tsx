import React from 'react';

import { Link } from '@/components';
import { useSidebar } from '@/hooks';
import HamburgerIcon from '@/assets/icon/ic_hamburger.svg?react';
import MobileHeaderSidebar from './sidebar/MobileHeaderSidebar';
import * as S from './MobileHeader.styled';

const MobileHeader = () => {
  const { sidebar, openSidebar } = useSidebar();

  return (
    <S.MobileHeader>
      {/* TODO: 추후 svg 대체 시 확인 필요 */}
      <Link css={S.logo} styleType="tertiaryGray" sizeType="md" to="/">
        READING-RECORD
      </Link>
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
