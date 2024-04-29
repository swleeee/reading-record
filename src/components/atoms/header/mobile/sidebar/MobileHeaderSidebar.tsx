import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { useUser } from '@/contexts';
import { Button, Link } from '@/components';
import { useOnClickOutside, useSidebar, useToast } from '@/hooks';
import { useLogout } from '@/services';
import { deviceState } from '@/stores';
import { TOAST_MESSAGE } from '@/assets';
import CloseIcon from '@/assets/icon/ic_close.svg?react';
import ArrowForwardIcon from '@/assets/icon/ic_arrow_forward.svg?react';
import * as S from './MobileHeaderSidebar.styled';

const MobileHeaderSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isPending: isLogoutLoading, mutate: logout } = useLogout();
  const { user } = useUser();
  const { addToast } = useToast();
  const device = useRecoilValue(deviceState);
  const { sidebarRef, sidebar, closeSidebar } = useSidebar();
  useOnClickOutside(sidebarRef, closeSidebar);

  const isLogin = !!user;

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        if (location.pathname !== '/') {
          navigate('/');
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

  useEffect(() => {
    if (device === 'mobile' || !sidebar.isShow) return;

    closeSidebar();
  }, [device]);

  return (
    <S.Sidebar ref={sidebarRef} isShow={sidebar.isShow}>
      <S.Header>
        {/* TODO: 추후 svg 대체 시 확인 필요 */}
        <Link
          css={S.logo}
          styleType="tertiaryBrown"
          sizeType="md"
          to="/"
          onClick={handleLogoTouch}
        >
          READING-RECORD
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
            <S.UserName>
              {user.user_metadata.nickname}님, 환영합니다.
            </S.UserName>
            <Button
              isLoading={isLogoutLoading}
              label="로그아웃"
              styleType="tertiary"
              sizeType="md"
              onClick={handleLogout}
            />
          </S.UserInfo>
        ) : (
          <S.LoginLink href="/login">
            회원가입/로그인하기 <ArrowForwardIcon css={S.arrowForwardIcon} />
          </S.LoginLink>
        )}
      </S.ContentWrapper>
      <S.Navbar>
        <ul>
          <li>
            <NavLink css={S.navLink(location.pathname === '/book')} to="/book">
              도서 목록
            </NavLink>
          </li>
          <li>
            <NavLink
              css={S.navLink(location.pathname === '/myLibrary')}
              to="/myLibrary"
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
