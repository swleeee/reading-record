import tw, { css, styled } from 'twin.macro';

export const InputWrapper = tw.div`relative`;

const inputDefault = tw`m-body-r14 h-[44px] border border-solid border-light-grey-500 rounded-[4px] px-[9px] text-black bg-white dark:(border-dark-grey-400 text-white dark-bg-grouped-base) placeholder:(text-light-grey-400 dark:text-dark-grey-450) hover:(border-light-navy-500 dark:border-dark-navy-400) focus:(border-light-navy-600 dark:border-dark-navy-300) disabled:(border-light-grey-400 bg-light-grey-300 cursor-not-allowed dark:(border-dark-grey-600 bg-dark-grey-550)) tablet:(t-body-r14 py-[9px]) labtop:d-body-r14`;
const inputError = tw`border-light-red-500`;

interface InputProps {
  hasError: boolean;
}

export const Input = styled.input<InputProps>`
  ${({ hasError }) => css`
    ${inputDefault};
    ${hasError && inputError};
  `}
`;
