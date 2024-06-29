import tw, { css, styled } from 'twin.macro';

export const Container = styled.div`
  ${tw`flex items-center`}

  &:hover > input[type="checkbox"]:not(:checked) {
    ${tw`border-light-brown-400`}
  }
`;

export const Input = styled.input`
  ${({ type }) => css`
    ${type === 'checkbox' &&
    tw`w-[16px] h-[16px] border border-solid border-light-grey-400 rounded-[4px] cursor-pointer bg-white dark:(border-dark-grey-500 bg-transparent) checked:(border-transparent bg-check bg-[length:100%_100%] bg-[50%] bg-no-repeat bg-light-brown-400 dark:bg-dark-brown-400)`}
  `}
`;

export const Label = tw.label`pl-[8px] m-body-r13 cursor-pointer tablet:t-body-r13 desktop:d-body-r15`;
