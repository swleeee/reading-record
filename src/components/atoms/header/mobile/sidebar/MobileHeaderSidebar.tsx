import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { Button } from '@/components';
import { useOnClickOutside, useSidebar } from '@/hooks';
import { deviceState } from '@/stores';
import CloseIcon from '@/assets/icon/ic_close.svg?react';
import ArrowForwardIcon from '@/assets/icon/ic_arrow_forward.svg?react';
import * as S from './MobileHeaderSidebar.styled';

const MobileHeaderSidebar = () => {
  const device = useRecoilValue(deviceState);
  const { sidebarRef, sidebar, closeSidebar } = useSidebar();
  useOnClickOutside(sidebarRef, closeSidebar);

  // TODO: 로그인 연동 후 삭제
  const isLogin = false;

  useEffect(() => {
    if (device === 'mobile' || !sidebar.isShow) return;

    closeSidebar();
  }, [device]);

  return (
    <S.Sidebar ref={sidebarRef} isShow={sidebar.isShow}>
      <S.Header>
        <S.Logo>READING-RECORD</S.Logo>
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
            <S.UserName>***님, 환영합니다.</S.UserName>
            <Button
              styleType="tertiary"
              sizeType="md"
              label="로그아웃"
              onClick={closeSidebar}
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
            <S.NavLink href="/">도서 목록</S.NavLink>
          </li>
          <li>
            <S.NavLink href="/">독서 기록</S.NavLink>
          </li>
          <li>
            <S.NavLink href="/">커뮤니티</S.NavLink>
          </li>
        </ul>
      </S.Navbar>
    </S.Sidebar>
  );
};

export default MobileHeaderSidebar;
