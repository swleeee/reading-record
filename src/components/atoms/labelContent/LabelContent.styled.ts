import tw, { css, styled } from 'twin.macro';

export const LabelContent = tw.div`flex flex-col`;

export const LabelWrapper = tw.div`flex gap-x-[4px] mb-[2px]`;

interface LabelProps {
  isRequired?: boolean;
}

export const Label = styled.label<LabelProps>`
  ${({ isRequired }) => css`
    ${tw`relative flex items-center m-body-m13 text-gray800 tablet:t-body-m13 desktop:d-body-m15`}

    &::after {
      ${isRequired && tw`content-["*"]`}
      ${tw`ml-[2px] text-red100`}
    }
  `}
`;

export const message = css`
  ${tw`mt-[4px]`}
`;
