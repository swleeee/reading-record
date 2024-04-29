import React from 'react';

import { useUser } from '@/contexts';
import { Button, Link } from '@/components';
import DefaultProfileIcon from '@/assets/icon/ic_default_profile.svg?react';
import * as S from './Header.styled';

const Header = () => {
  const { user } = useUser();
  const isLogin = !!user;

  return (
    <S.Header>
      <S.Logo>READING-RECORD</S.Logo>
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
      {isLogin ? (
        <S.UserInfo>
          <DefaultProfileIcon css={S.defaultProfileIcon} />
          <S.UserName>{user.user_metadata.nickname}님</S.UserName>
          <Button styleType="tertiary" sizeType="sm" label="로그아웃" />
        </S.UserInfo>
      ) : (
        <Link styleType="tertiaryBrown" sizeType="md" to="/login">
          회원가입/로그인
        </Link>
      )}
    </S.Header>
  );
};

export default Header;
