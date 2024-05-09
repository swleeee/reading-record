import tw, { css, styled } from 'twin.macro';

export const LikeButton = styled.button`
  ${tw`flex items-center gap-[4px]`}
`;

export const likeIcon = css`
  ${tw`w-[16px] h-[16px]`}

  & > g > path {
    ${tw`fill-blue200`}
  }
`;

export const Like = tw.span`m-body-m13 tablet:t-body-m13 desktop:d-body-m15`;
