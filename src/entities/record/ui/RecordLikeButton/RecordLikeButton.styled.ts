import tw, { css, styled } from 'twin.macro';

export const RecordLikeButton = styled.button`
  ${tw`flex items-center gap-[4px]`}

  &:not(:disabled):hover {
    & > span {
      ${tw`text-light-brown-300 dark:text-dark-brown-700`}
    }

    & > svg > g > path {
      ${tw`fill-light-brown-300 dark:fill-dark-brown-700`};
    }
  }
`;

export const likeIcon = css`
  ${tw`w-[16px] h-[16px]`}

  & > g > path {
    ${tw`dark:fill-dark-grey-700`}
  }
`;

export const likeFilledIcon = css`
  ${likeIcon}

  & > g > path {
    ${tw`fill-light-brown-500 dark:fill-dark-brown-500`}
  }
`;

export const LikeText = styled.span<{ isLiked: boolean }>`
  ${({ isLiked }) => css`
    ${tw`m-body-m13 tablet:t-body-m13 desktop:d-body-m15`}
    ${isLiked
      ? tw`text-light-brown-500 dark:text-dark-brown-500`
      : tw`text-light-grey-700 dark:text-dark-grey-700`}
  `}
`;
