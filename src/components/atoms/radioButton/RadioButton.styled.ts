import tw, { css, styled } from 'twin.macro';

export const RadioButtonGroup = tw.div`flex gap-x-[24px]`;

export const Container = styled.span`
  ${tw`flex items-center cursor-pointer`}

  &:hover > input[type="radio"]:not(:checked):not(:disabled) {
    ${tw`border-brown400`}
  }
`;

export const Label = styled.label<{ disabled?: boolean }>`
  ${({ disabled }) => css`
    ${tw`pl-[8px] m-body-r13 cursor-pointer disabled:cursor-not-allowed tablet:t-body-r13 desktop:d-body-r15`}
    ${disabled && tw`text-gray300 cursor-not-allowed`}
  `}
`;

export const Input = styled.input`
  ${({ disabled, type }) => css`
    ${type === 'radio' &&
    tw`w-[16px] h-[16px] border border-solid border-gray300 rounded-full cursor-pointer desktop:(w-[20px] h-[20px] checked:border-[3px])`}
    ${disabled
      ? tw`border-gray50 cursor-not-allowed checked:(border-[2px] border-white bg-gray100 shadow-radioButtonDisabled)`
      : tw`checked:(border-[2px] border-white bg-brown400 shadow-radioButton)`};
  `}
`;
