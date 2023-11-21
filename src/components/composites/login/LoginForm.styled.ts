import tw, { styled, css } from 'twin.macro';

export const input = css`
  & > input {
    ${tw`w-200`}
  }
`;

export const loginInput = css`
  ${input};
  ${tw`mb-10`};
`;

export const passwordInput = css`
  ${input};

  & > input {
    ${tw`pr-32`}
  }
`;

export const VisibleButton = styled.button`
  ${tw`absolute top-2/4 right-10 -translate-y-2/4`};

  & > svg {
    ${tw`w-16 h-16`};
  }
`;
