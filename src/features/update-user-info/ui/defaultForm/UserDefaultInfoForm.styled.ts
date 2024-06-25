import tw, { css, styled } from 'twin.macro';

export const labelContent = css`
  ${tw`mb-[36px]`}
`;

export const ContentWrapper = tw.div`flex gap-x-[8px]`;

export const Text = tw.span`m-body-r13 tablet:t-body-r13 desktop:d-body-r15`;

export const inputWrapper = css`
  ${tw`flex-1`}

  & > input {
    ${tw`w-full`}
  }
`;

export const BirthdayContainer = styled.div<{ hasError: boolean }>`
  ${({ hasError }) => css`
    ${tw`flex items-center border border-light-grey-500 rounded-[4px] bg-white dark:(border-dark-grey-500 dark-bg-grouped-base)`}
    ${hasError && tw`border-light-red-500 dark:border-dark-red-500`}
  `}
`;

export const birthdayInputWrapper = css`
  ${inputWrapper};

  &:not(:last-of-type) {
    ${tw`relative after:(content-[""] absolute top-1/2 right-0 w-[1px] h-[50%] bg-light-grey-500 -translate-y-1/2 dark:bg-dark-grey-500)`}
  }

  & > input {
    ${tw`border-0`}
  }
`;
