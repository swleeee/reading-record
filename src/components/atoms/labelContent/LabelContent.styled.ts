import tw, { css, styled } from 'twin.macro';

export const LabelContent = tw.div`flex flex-col`;

interface LabelProps {
  isRequired?: boolean;
}

export const Label = styled.label<LabelProps>`
  ${({ isRequired }) => css`
    ${tw`relative flex items-center w-max mb-[2px] m-body-m13 text-gray800 tablet:t-body-m13 desktop:d-body-m15`}

    &::after {
      ${isRequired && tw`content-["*"]`}
      ${tw`ml-[2px] text-red100`}
    }
  `}
`;

export const ErrorMessage = tw.span`inline-block mt-[4px] m-body-r12 text-red200 tablet:t-body-r12 desktop:d-body-r14`;
