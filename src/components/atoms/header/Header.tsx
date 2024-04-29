import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useUser } from '@/contexts';
import { Button, Link } from '@/components';
import { useToast } from '@/hooks';
import { useLogout } from '@/services';
import DefaultProfileIcon from '@/assets/icon/ic_default_profile.svg?react';
import { TOAST } from '@/assets';
import * as S from './Header.styled';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { mutate: logout } = useLogout();
  const { user } = useUser();
  const { addToast } = useToast();
  const isLogin = !!user;

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        if (location.pathname !== '/') {
          navigate('/');
        }
        addToast(TOAST.SUCCESS.LOGOUT);
      },
    });
  };

  return (
    <S.Header>
      {/* TODO: 추후 svg 대체 시 확인 필요 */}
      <Link css={S.logo} styleType="tertiaryBrown" sizeType="md" to="/">
        READING-RECORD
      </Link>
      <S.Navbar>
        <ul>
          <li>
            <S.NavLink isSelected={location.pathname === '/book'} href="/book">
              도서 목록
            </S.NavLink>
          </li>
          <li>
            <S.NavLink
              isSelected={location.pathname === '/myLibrary'}
              href="/myLibrary"
            >
              독서 기록
            </S.NavLink>
          </li>
        </ul>
      </S.Navbar>
      {isLogin ? (
        <S.UserInfo>
          <DefaultProfileIcon css={S.defaultProfileIcon} />
          <S.UserName>{user.user_metadata.nickname}님</S.UserName>
          <Button
            styleType="tertiary"
            sizeType="sm"
            label="로그아웃"
            onClick={handleLogout}
          />
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
