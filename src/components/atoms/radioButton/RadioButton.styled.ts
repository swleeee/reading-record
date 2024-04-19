import tw, { css, styled } from 'twin.macro';

export const RadioButtonGroup = tw.div`flex gap-x-[24px]`;

export const Container = styled.span`
  ${tw`flex items-center cursor-pointer`}

  &:hover > input[type="radio"]:not(:checked) {
    ${tw`border-brown400`}
  }
`;

export const Label = tw.label`pl-[8px] m-body-r13 cursor-pointer tablet:t-body-r13 desktop:d-body-r15`;

export const Input = styled.input`
  ${({ type }) => css`
    ${type === 'radio' &&
    tw`w-[16px] h-[16px] border border-solid border-gray300 rounded-full cursor-pointer checked:(border-[2px] border-white bg-brown400 shadow-radioButton) desktop:(w-[24px] h-[24px] checked:border-[3px])`}
  `}
`;
