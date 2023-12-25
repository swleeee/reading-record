import tw, { css, styled } from 'twin.macro';

export const SocialLoginWrapper = tw.section`flex flex-col items-center w-full mt-[35px]`;

export const SocialLoginHeader = tw.div`flex items-center w-full mb-[20px]`;

export const Division = tw.span`inline-block w-full h-[1px] bg-gray-700`;

export const SocialLoginDesc = tw.span`mx-[10px]  m-body-r14 text-gray-700 whitespace-nowrap tablet:t-body-r14 labtop:d-body-r14`;

const socialLoginButton = css`
  ${tw`flex justify-center items-center gap-x-[8px] w-full h-[44px] rounded-[6px] m-body-r14 hover:opacity-70 tablet:t-body-r14 labtop:d-body-r14`}

  & > svg {
    ${tw`w-[16px] h-[16px]`}
  }
`;

export const KakaoLoginButton = styled.button`
  ${socialLoginButton};
  ${tw`mb-[10px] text-black/[.85] bg-kakao `};
`;

export const NaverLoginButton = styled.button`
  ${socialLoginButton};
  ${tw`text-white bg-naver`}
`;
