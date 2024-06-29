import tw, { css, styled } from 'twin.macro';

export const Form = tw.form`max-w-[640px] mx-auto`;

export const labelContent = css`
  ${tw`mb-[36px]`}
`;

export const ContentWrapper = tw.div`flex gap-x-[8px]`;

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

export const checkboxGroup = (hasError: boolean) => css`
  ${tw`border border-light-grey-400 rounded-[4px] px-[12px] py-[20px] bg-white dark:(border-dark-grey-500 dark-bg-grouped-base)`}
  ${hasError && tw`border-light-red-500 dark:border-dark-red-500`}
`;

export const checkbox = css`
  ${tw`mb-[20px]`}
`;

export const AgreementAllText = tw.span`m-body-m15 dark:text-dark-grey-800 tablet:t-body-m15 desktop:d-body-m17`;

export const AgreementItemWrapper = tw.div`flex justify-between items-center mb-[20px]`;

export const AgreementLabelWrapper = tw.div`m-body-r14 dark:text-dark-grey-700 tablet:t-body-r14 desktop:d-body-r16`;

export const AgreementRequiredText = tw.span`ml-[4px] text-light-grey-500 dark:text-dark-grey-500`;

export const signupButton = css`
  ${tw`mt-[40px]`}
`;
