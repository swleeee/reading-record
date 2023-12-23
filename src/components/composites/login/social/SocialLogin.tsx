import React from 'react';

import KakaoSymbolIcon from '@/assets/icon/ic_kakaoSymbol.svg?react';
import NaverSymbolIcon from '@/assets/icon/ic_naverSymbol.svg?react';
import * as S from './SocialLogin.styled';

const SocialLogin = () => {
  return (
    <S.SocialLoginWrapper>
      <S.SocialLoginHeader>
        <S.Division />
        <S.SocialLoginDesc>또는 간편 로그인</S.SocialLoginDesc>
        <S.Division />
      </S.SocialLoginHeader>
      <S.KakaoLoginButton>
        <KakaoSymbolIcon />
        카카오 로그인
      </S.KakaoLoginButton>
      <S.NaverLoginButton>
        <NaverSymbolIcon />
        네이버 로그인
      </S.NaverLoginButton>
    </S.SocialLoginWrapper>
  );
};

export default SocialLogin;
