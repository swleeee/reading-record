import tw, { css, styled } from 'twin.macro';

export const InputWrapper = tw.div`relative`;

const inputDefault = tw`m-body-r14 h-[44px] border border-solid border-gray300 rounded-[4px] px-[9px] text-black bg-white placeholder:text-gray300 hover:border-blue100 focus:border-blue300 disabled:(border-gray300 bg-gray50 cursor-not-allowed) tablet:(t-body-r14 py-[9px]) labtop:d-body-r14`;
const inputError = tw`border-red200`;

interface InputProps {
  hasError: boolean;
}

export const Input = styled.input<InputProps>`
  ${({ hasError }) => css`
    ${inputDefault};
    ${hasError && inputError};
  `}
`;
