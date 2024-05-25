import { useToast } from '@/hooks';
import KakaoSymbolIcon from '@/assets/icon/ic_kakaoSymbol.svg?react';
import NaverSymbolIcon from '@/assets/icon/ic_naverSymbol.svg?react';
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
        <KakaoSymbolIcon />
        카카오 로그인
      </S.KakaoLoginButton>
      <S.NaverLoginButton type="button" onClick={handleSocialLoginButtonClick}>
        <NaverSymbolIcon />
        네이버 로그인
      </S.NaverLoginButton>
    </S.SocialLoginWrapper>
  );
};

export default SocialLogin;
