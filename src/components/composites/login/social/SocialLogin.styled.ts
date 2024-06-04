import tw, { css, styled } from 'twin.macro';

export const SocialLoginWrapper = tw.section`flex flex-col items-center w-full mt-[35px]`;

export const SocialLoginHeader = tw.div`flex items-center w-full mb-[20px]`;

export const Division = tw.span`inline-block w-full h-[1px] bg-gray-700`;

export const SocialLoginDesc = tw.span`mx-[10px] m-body-r14 text-gray-700 whitespace-nowrap tablet:t-body-r14 labtop:d-body-r14`;

const socialLoginButton = css`
  ${tw`relative flex justify-center items-center gap-x-[8px] w-full h-[40px] rounded-[12px] hover:opacity-70`}

  & > svg {
    ${tw`w-[18px] h-[18px]`}
  }
`;

export const defaultFontStyle = css`
  ${tw`m-body-r14 tablet:t-body-r14 desktop:d-body-r14`}
`;

export const googleFontStyle = css`
  ${tw`google-login`}
`;

export const symbol = css`
  ${tw`absolute left-[8px]`}
`;

export const KakaoLoginButton = styled.button`
  ${socialLoginButton};
  ${defaultFontStyle};
  ${tw`mb-[10px] text-black/[.85] bg-kakao`};
`;

export const GoogleLoginButton = styled.button`
  ${socialLoginButton};
  ${googleFontStyle};
  ${tw`mb-[10px] text-black bg-white shadow-light_md`};
`;
