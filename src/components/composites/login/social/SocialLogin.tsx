import { LoadingSpinner } from '@/components';
import { useSocialLogin } from '@/services';
import KakaoSymbolIcon from '@/assets/icon/ic_kakaoSymbol.svg?react';
import GoogleSymbolIcon from '@/assets/icon/ic_googleSymbol.svg?react';
import type { SocialLoginQueryModel } from '@/types';
import * as S from './SocialLogin.styled';

const SocialLogin = () => {
  const { isPending: isKakaoLoginPending, mutate: loginWithKakao } =
    useSocialLogin('kakao');
  const { isPending: isGoogleLoginPending, mutate: loginWithGoogle } =
    useSocialLogin('google');

  const handleButtonClick = (provider: SocialLoginQueryModel) => () => {
    switch (provider) {
      case 'kakao':
        loginWithKakao();
        break;

      case 'google':
        loginWithGoogle();
        break;
    }
  };

  return (
    <S.SocialLoginWrapper>
      <S.SocialLoginHeader>
        <S.Division />
        <S.SocialLoginDesc>또는 간편 로그인</S.SocialLoginDesc>
        <S.Division />
      </S.SocialLoginHeader>
      <S.KakaoLoginButton type="button" onClick={handleButtonClick('kakao')}>
        <KakaoSymbolIcon css={S.symbol} />
        {isKakaoLoginPending && <LoadingSpinner colorType="black" />}
        카카오 로그인
      </S.KakaoLoginButton>
      <S.GoogleLoginButton type="button" onClick={handleButtonClick('google')}>
        <GoogleSymbolIcon css={S.symbol} />
        {isGoogleLoginPending && <LoadingSpinner colorType="black" />}
        Google 계정으로 로그인
      </S.GoogleLoginButton>
    </S.SocialLoginWrapper>
  );
};

export default SocialLogin;
