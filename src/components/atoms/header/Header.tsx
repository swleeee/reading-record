import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { useUser } from '@/contexts';
import { Button, Link } from '@/components';
import { useToast } from '@/hooks';
import { useLogout } from '@/services';
import DefaultProfileIcon from '@/assets/icon/ic_default_profile.svg?react';
import { TOAST_MESSAGE } from '@/constants';
import * as S from './Header.styled';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isPending: isLogoutLoading, mutate: logout } = useLogout();
  const { user } = useUser();
  const { addToast } = useToast();
  const isLogin = !!user;

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        if (location.pathname !== '/') {
          navigate('/');
        }
        addToast(TOAST_MESSAGE.SUCCESS.LOGOUT);
      },
    });
  };

  return (
    <S.Header>
      <S.Wrapper>
        {/* TODO: 추후 svg 대체 시 확인 필요 */}
        <Link css={S.logo} styleType="tertiaryBrown" sizeType="md" to="/">
          READING-RECORD
        </Link>
        <S.Navbar>
          <ul>
            <li>
              <NavLink
                css={S.navLink(location.pathname === '/book')}
                to="/book"
              >
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
        {isLogin ? (
          <S.UserInfo>
            <DefaultProfileIcon css={S.defaultProfileIcon} />
            <S.UserName>{user.user_metadata.nickname}님</S.UserName>
            <Button
              isLoading={isLogoutLoading}
              label="로그아웃"
              styleType="tertiary"
              sizeType="sm"
              onClick={handleLogout}
            />
          </S.UserInfo>
        ) : (
          <Link styleType="tertiaryBrown" sizeType="md" to="/login">
            회원가입/로그인
          </Link>
        )}
      </S.Wrapper>
    </S.Header>
  );
};

export default Header;
