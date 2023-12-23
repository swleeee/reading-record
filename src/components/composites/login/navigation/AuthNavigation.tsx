import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './AuthNavigation.styled';

const AuthNavigation = () => {
  return (
    <S.AuthNavigation>
      <Link css={S.link} to="/findId">
        아이디 찾기
      </Link>
      <S.Division />
      <Link css={S.link} to="/findPw">
        비밀번호 찾기
      </Link>
      <S.Division />
      <Link css={S.link} to="/signup">
        회원가입
      </Link>
    </S.AuthNavigation>
  );
};

export default AuthNavigation;
