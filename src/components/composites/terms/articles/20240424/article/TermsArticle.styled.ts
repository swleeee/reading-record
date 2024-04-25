import tw, { css, styled } from 'twin.macro';

export const modal = css`
  & > div > main {
    ${tw`max-h-[600px] overflow-y-auto`}
  }
`;

export const Section = tw.section`flex flex-col gap-y-[4px] mb-[16px]`;

export const H3 = tw.h3`mb-[20px] m-headline-4 tablet:t-headline-4 desktop:d-headline-4`;

export const Article = tw.article`flex flex-col gap-y-[4px] mb-[16px]`;

export const H4 = tw.h4`m-body-sb16 tablet:t-body-sb16 desktop:d-body-sb18`;

export const P = tw.p`m-body-r12 tablet:t-body-r12 desktop:d-body-r14`;

export const Ol = tw.ol`flex flex-col gap-y-[4px] m-body-r12 tablet:t-body-r12 desktop:d-body-r14`;

export const Ul = tw.ul`flex flex-col gap-y-[4px] m-body-r12 tablet:t-body-r12 desktop:d-body-r14`;

export const Li = styled.li<{ depth?: number }>`
  ${({ depth = 1 }) => css`
    ${tw`m-body-r12 list-none tablet:t-body-r12 desktop:d-body-r14`}
    padding-left: ${12 + 3 * (depth - 1)}px
  `}
`;
