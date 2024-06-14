import tw, { css, styled } from 'twin.macro';

export const LikeButton = styled.button`
  ${tw`flex items-center gap-[4px]`}

  &:not(:disabled):hover {
    & > span {
      ${tw`text-brown300`}
    }

    & > svg > g > path {
      ${tw`fill-brown300`};
    }
  }
`;

export const likeIcon = css`
  ${tw`w-[16px] h-[16px]`}
`;

export const likeFilledIcon = css`
  ${likeIcon}

  & > g > path {
    ${tw`fill-brown500`}
  }
`;

export const Like = styled.span<{ isLiked: boolean }>`
  ${({ isLiked }) => css`
    ${tw`m-body-m13 tablet:t-body-m13 desktop:d-body-m15`}
    ${isLiked ? tw`text-brown500` : tw`text-gray900`}
  `}
`;
