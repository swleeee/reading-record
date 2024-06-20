import { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { useGetUserProfile, useLogout } from '@/entities/auth';
import { Button, Link, Profile } from '@/shared/ui';
import { useUser, useOnClickOutside, useSidebar, useToast } from '@/shared/lib';
import { deviceState } from '@/shared/stores';
import Logo from '@/shared/assets/image/Logo.svg?react';
import CloseIcon from '@/shared/assets/icon/ic_close.svg?react';
import ArrowForwardIcon from '@/shared/assets/icon/ic_arrow_forward.svg?react';
import { PATH, TOAST_MESSAGE } from '@/shared/constants';
import * as S from './MobileHeaderSidebar.styled';

const MobileHeaderSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isPending: isLogoutLoading, mutate: logout } = useLogout();
  const { user } = useUser();
  const { data: profileUrl } = useGetUserProfile(
    user?.user_metadata.profile_url,
  );
  const { addToast } = useToast();
  const device = useRecoilValue(deviceState);
  const { sidebarRef, sidebar, closeSidebar } = useSidebar();
  useOnClickOutside(sidebarRef, closeSidebar);

  const isLogin = !!user;

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        if (location.pathname !== '/') {
          navigate(PATH.ROOT);
        }
        addToast(TOAST_MESSAGE.SUCCESS.LOGOUT);
        closeSidebar();
      },
    });
  };

  const handleLogoTouch = () => {
    if (location.pathname !== '/') {
      closeSidebar();
    }
  };

  const handleProfileTouch = () => {
    navigate(PATH.SETTING);
    closeSidebar();
  };

  const handleLinkTouch = () => {
    closeSidebar();
  };

  useEffect(() => {
    if (device === 'mobile' || !sidebar.isShow) return;

    closeSidebar();
  }, [device, sidebar.isShow, closeSidebar]);

  return (
    <S.Sidebar ref={sidebarRef} isShow={sidebar.isShow}>
      <S.Header>
        <Link
          css={S.logoLink}
          styleType="tertiaryBrown"
          sizeType="md"
          to={PATH.ROOT}
          onClick={handleLogoTouch}
        >
          <Logo css={S.logo} aria-label="Reading Record logo" />
        </Link>
        <S.CloseButton
          type="button"
          aria-label="Close sidebar"
          onClick={closeSidebar}
        >
          <CloseIcon />
        </S.CloseButton>
      </S.Header>
      <S.ContentWrapper>
        {isLogin ? (
          <S.UserInfo>
            <button
              type="button"
              aria-label="user profile"
              onClick={handleProfileTouch}
            >
              <Profile css={S.UserProfile} src={profileUrl} />
            </button>
            <S.UserName>
              {user.user_metadata.nickname}님, 환영합니다.
            </S.UserName>
            <Button
              isLoading={isLogoutLoading}
              label="로그아웃"
              styleType="tertiaryPrimary"
              sizeType="md"
              onClick={handleLogout}
            />
          </S.UserInfo>
        ) : (
          <S.LoginLink href={PATH.LOGIN}>
            회원가입/로그인하기 <ArrowForwardIcon css={S.arrowForwardIcon} />
          </S.LoginLink>
        )}
      </S.ContentWrapper>
      <S.Navbar>
        <ul>
          <li>
            <NavLink
              css={S.navLink(location.pathname.split('/').includes('book'))}
              to={PATH.BOOK}
              onClick={handleLinkTouch}
            >
              도서 목록
            </NavLink>
          </li>
          <li>
            <NavLink
              css={S.navLink(location.pathname.split('/').includes('record'))}
              to={PATH.RECORD}
              onClick={handleLinkTouch}
            >
              독서 기록
            </NavLink>
          </li>
        </ul>
      </S.Navbar>
    </S.Sidebar>
  );
};

export default MobileHeaderSidebar;
