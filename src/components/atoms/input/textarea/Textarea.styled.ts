import tw, { css, styled } from 'twin.macro';

export const TextareaWrapper = tw.div`relative`;

export const Length = styled.span<{ hasValue: boolean }>`
  ${({ hasValue }) => css`
    ${tw`absolute top-[-12px] right-0 m-body-r13 -translate-y-1/2 tablet:t-body-r13 desktop:d-body-r15`}
    ${hasValue ? tw`text-brown300` : tw`text-brown100`}
  `}
`;

export const Textarea = styled.textarea<{ hasError?: boolean }>`
  ${({ hasError }) => css`
    ${tw`w-full h-full border rounded-[4px] p-[12px] m-body-r12 bg-brown50 tablet:t-body-r12 desktop:d-body-r14`}
    ${hasError ? tw`border-red200` : tw`border-brown300 `}
  `}
`;
