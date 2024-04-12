import tw, { css, styled } from 'twin.macro';

export const Item = styled.article<{ marginBottom?: string }>`
  ${({ marginBottom }) => css`
    ${tw`flex flex-col gap-y-[4px]`}

    margin-bottom: ${marginBottom && marginBottom}
  `}
`;

export const Label = styled.label<{ isRequired?: boolean }>`
  ${({ isRequired }) => css`
    ${tw`relative m-body-r13 after:(ml-[2px] text-red200) tablet:t-body-r13 desktop:d-body-r15`}

    &::after {
      content: ${isRequired ? `"*"` : null};
    }
  `}
`;

export const readingStatusButtonGroup = css`
  ${tw`mb-[12px]`}
`;
