import { useToast } from '@/hooks';
import KakaoSymbolIcon from '@/assets/icon/ic_kakaoSymbol.svg?react';
import GoogleSymbolIcon from '@/assets/icon/ic_googleSymbol.svg?react';
import { TOAST_MESSAGE } from '@/constants';
import * as S from './SocialLogin.styled';

const SocialLogin = () => {
  const { addToast } = useToast();

  // TODO: 토스트 -> 모달 교체 예정
  const handleSocialLoginButtonClick = () => {
    addToast(TOAST_MESSAGE.INFO.SERVICE_REPAIRING);
  };

  return (
    <S.SocialLoginWrapper>
      <S.SocialLoginHeader>
        <S.Division />
        <S.SocialLoginDesc>또는 간편 로그인</S.SocialLoginDesc>
        <S.Division />
      </S.SocialLoginHeader>
      <S.KakaoLoginButton type="button" onClick={handleSocialLoginButtonClick}>
        <KakaoSymbolIcon css={S.symbol} />
        카카오 로그인
      </S.KakaoLoginButton>
      <S.GoogleLoginButton type="button" onClick={handleSocialLoginButtonClick}>
        <GoogleSymbolIcon css={S.symbol} />
        Google 계정으로 로그인
      </S.GoogleLoginButton>
    </S.SocialLoginWrapper>
  );
};

export default SocialLogin;
