import tw, { css, styled } from 'twin.macro';

export const TextareaWrapper = tw.div`relative`;

export const Length = styled.span<{ hasValue: boolean }>`
  ${({ hasValue }) => css`
    ${tw`absolute top-[-12px] right-0 m-body-r13 -translate-y-1/2 tablet:t-body-r13 desktop:d-body-r15`}
    ${hasValue
      ? tw`text-light-grey-600 dark:text-dark-grey-700`
      : tw`text-light-grey-400 dark:text-dark-grey-500`}
  `}
`;

export const Textarea = styled.textarea<{ hasError?: boolean }>`
  ${({ hasError }) => css`
    ${tw`w-full h-full border rounded-[4px] p-[12px] m-body-r12 dark:(text-white dark-bg-grouped-base) disabled:(border-light-grey-400 bg-light-grey-300 cursor-not-allowed dark:(border-dark-grey-600 bg-dark-grey-600)) tablet:t-body-r12 desktop:d-body-r14`}
    ${hasError
      ? tw`border-light-red-500 dark:border-dark-red-500`
      : tw`border-light-grey-500 dark:border-dark-grey-400`}
  `}
`;
