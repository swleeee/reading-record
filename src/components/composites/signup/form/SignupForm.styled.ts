import tw, { css } from 'twin.macro';

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

export const BirthdayContainer = tw.div`flex items-center border border-gray300 rounded-[4px] bg-white`;

export const birthdayInputWrapper = css`
  ${inputWrapper};

  &:not(:last-of-type) {
    ${tw`relative after:(content-[""] absolute top-1/2 right-0 w-[1px] h-[50%] bg-gray300 -translate-y-1/2)`}
  }

  & > input {
    ${tw`border-0`}
  }
`;

export const checkbox = css`
  ${tw`mb-[20px]`}
`;

export const AgreementAllText = tw.span`m-body-m15 tablet:t-body-m15 desktop:d-body-m17`;

export const AgreementContainer = tw.div`flex justify-between items-center`;

export const AgreementLabelWrapper = tw.div`m-body-r14 tablet:t-body-r14 desktop:d-body-r16`;

export const AgreementRequiredText = tw.span`ml-[4px] text-gray400`;

export const signupButton = css`
  ${tw`my-[40px]`}
`;
