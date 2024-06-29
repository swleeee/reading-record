import tw, { css, styled } from 'twin.macro';

export const RadioButtonGroup = tw.div`flex gap-x-[24px]`;

export const Container = styled.span`
  ${tw`flex items-center cursor-pointer`}

  &:hover > input[type="radio"]:not(:checked):not(:disabled) {
    ${tw`border-light-brown-400`}
  }
`;

export const Label = styled.label<{ disabled?: boolean }>`
  ${({ disabled }) => css`
    ${tw`pl-[8px] m-body-r13 cursor-pointer dark:text-white disabled:cursor-not-allowed tablet:t-body-r13 desktop:d-body-r15`}
    ${disabled && tw`text-light-grey-400 cursor-not-allowed`}
  `}
`;

export const Input = styled.input`
  ${({ disabled, type }) => css`
    ${type === 'radio' &&
    tw`w-[16px] h-[16px] border border-solid border-light-grey-400 rounded-full bg-white cursor-pointer dark:bg-transparent desktop:(w-[20px] h-[20px] checked:border-[2px])`}
    ${disabled
      ? tw`border-light-grey-400 cursor-not-allowed  dark:border-dark-grey-300 checked:(border-[3px] border-white bg-light-grey-400 shadow-radioButtonDisabled dark:(bg-dark-grey-600 shadow-radioButtonDarkDisabled))`
      : tw`checked:(border-[3px] border-white bg-light-brown-400 shadow-radioButton dark:(shadow-radioDarkButton border-dark-grey-100))`};
  `}
`;
