import tw, { css, styled } from 'twin.macro';

export const InputWrapper = tw.div`relative`;

interface InputProps {
  hasError: boolean;
}

export const Input = styled.input<InputProps>`
  ${({ hasError }) => css`
    ${tw`input-default m-body-r14`}

    ${hasError && tw`input-error`}
  `}
`;
