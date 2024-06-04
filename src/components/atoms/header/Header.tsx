import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { useUser } from '@/contexts';
import { Button, Link, Profile } from '@/components';
import { useToast } from '@/hooks';
import { useLogout } from '@/services';
import Logo from '@/assets/image/Logo.svg?react';
import { PATH, TOAST_MESSAGE } from '@/constants';
import * as S from './Header.styled';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useUser();
  const { isPending: isLogoutLoading, mutate: logout } = useLogout();
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
          <Logo css={S.logo} />
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
                css={S.navLink(
                  location.pathname.split('/').includes('myLibrary'),
                )}
                to={PATH.MY_LIBRARY}
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
              <Profile src={user?.user_metadata.profile_url} />
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

export default Header;
