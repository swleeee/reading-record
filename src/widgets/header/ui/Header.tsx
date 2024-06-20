import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { useGetUserProfile, useLogout } from '@/entities/auth';
import { useUser, useToast } from '@/shared/lib';
import { Button, Link, Profile } from '@/shared/ui';
import Logo from '@/shared/assets/image/Logo.svg?react';
import { PATH, TOAST_MESSAGE } from '@/shared/constants';
import * as S from './Header.styled';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useUser();
  const { isPending: isLogoutLoading, mutate: logout } = useLogout();
  const { data: profileUrl } = useGetUserProfile(
    user?.user_metadata.profile_url,
  );
  const { addToast } = useToast();
  const isLogin = !!user;

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        if (location.pathname !== '/') {
          navigate(PATH.ROOT);
        }
        addToast(TOAST_MESSAGE.SUCCESS.LOGOUT);
      },
    });
  };

  const handleProfileClick = () => {
    navigate(PATH.SETTING);
  };

  return (
    <S.Header>
      <S.Wrapper>
        <Link
          css={S.logoLink}
          styleType="tertiaryBrown"
          sizeType="md"
          to={PATH.ROOT}
        >
          <Logo css={S.logo} aria-label="Reading Record logo" />
        </Link>
        <S.Navbar>
          <ul>
            <li>
              <NavLink
                css={S.navLink(location.pathname.split('/').includes('book'))}
                to={PATH.BOOK}
              >
                도서 목록
              </NavLink>
            </li>
            <li>
              <NavLink
                css={S.navLink(location.pathname.split('/').includes('record'))}
                to={PATH.RECORD}
              >
                독서 기록
              </NavLink>
            </li>
          </ul>
        </S.Navbar>
        {isLogin ? (
          <S.UserInfo>
            <button
              type="button"
              aria-label="user profile"
              onClick={handleProfileClick}
            >
              <Profile src={profileUrl} />
            </button>
            <S.UserName>{user.user_metadata.nickname}님</S.UserName>
            <Button
              isLoading={isLogoutLoading}
              label="로그아웃"
              styleType="tertiaryPrimary"
              sizeType="sm"
              onClick={handleLogout}
            />
          </S.UserInfo>
        ) : (
          <Link styleType="tertiaryBrown" sizeType="md" to={PATH.LOGIN}>
            회원가입/로그인
          </Link>
        )}
      </S.Wrapper>
    </S.Header>
  );
};
