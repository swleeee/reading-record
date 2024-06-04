import { Link } from '@/components';
import { useSidebar } from '@/hooks';
import Logo from '@/assets/image/Logo.svg?react';
import HamburgerIcon from '@/assets/icon/ic_hamburger.svg?react';
import { PATH } from '@/constants';
import MobileHeaderSidebar from './sidebar/MobileHeaderSidebar';
import * as S from './MobileHeader.styled';

const MobileHeader = () => {
  const { sidebar, openSidebar } = useSidebar();

  return (
    <S.MobileHeader>
      <Link
        css={S.logoLink}
        styleType="tertiaryGray"
        sizeType="md"
        to={PATH.ROOT}
      >
        <Logo css={S.logo} />
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
