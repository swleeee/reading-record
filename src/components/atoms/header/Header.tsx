import React from 'react';

import { Button } from '@/components';
import DefaultProfileIcon from '@/assets/icon/ic_default_profile.svg?react';
import * as S from './Header.styled';

const Header = () => {
  // TODO: 로그인 연동 후 수정
  const isLogin = true;

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
          <S.UserName>홍길동님</S.UserName>
          <Button styleType="tertiary" sizeType="sm" label="로그아웃" />
        </S.UserInfo>
      ) : (
        <Button styleType="tertiary" sizeType="sm" label="회원가입/로그인" />
      )}
    </S.Header>
  );
};

export default Header;
