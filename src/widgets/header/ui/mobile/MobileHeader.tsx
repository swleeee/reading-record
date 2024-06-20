import { Link } from '@/shared/ui';
import { useSidebar } from '@/shared/lib';
import Logo from '@/shared/assets/image/Logo.svg?react';
import HamburgerIcon from '@/shared/assets/icon/ic_hamburger.svg?react';
import { PATH } from '@/shared/constants';
import MobileHeaderSidebar from './sidebar/MobileHeaderSidebar';
import * as S from './MobileHeader.styled';

export const MobileHeader = () => {
  const { sidebar, openSidebar } = useSidebar();

  return (
    <S.MobileHeader>
      <Link
        css={S.logoLink}
        styleType="tertiaryGray"
        sizeType="md"
        to={PATH.ROOT}
      >
        <Logo css={S.logo} aria-label="Reading Record logo" />
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
