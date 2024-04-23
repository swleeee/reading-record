import tw, { css, styled } from 'twin.macro';

export const Container = styled.div`
  ${tw`flex items-center`}

  &:hover > input[type="checkbox"]:not(:checked) {
    ${tw`border-brown400`}
  }
`;

export const Input = styled.input`
  ${({ type }) => css`
    ${type === 'checkbox' &&
    tw`w-[16px] h-[16px] border border-solid border-gray300 rounded-[4px] cursor-pointer checked:(border-transparent bg-check bg-[length:100%_100%] bg-[50%] bg-no-repeat bg-brown400)`}
  `}
`;

export const Label = tw.label`pl-[8px] m-body-r13 cursor-pointer tablet:t-body-r13 desktop:d-body-r15`;
