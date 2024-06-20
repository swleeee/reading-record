import tw, { css, styled } from 'twin.macro';

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

export const Table = tw.table`relative border border-gray300`;

export const Caption = tw.caption`absolute w-1 h-1 p-0 m-[-1px] overflow-hidden [clip: rect(0,0,0,0)] whitespace-nowrap border-0`;

export const Thead = tw.thead`bg-gray100`;

export const Th = tw.th`min-w-[30px] border-r border-r-gray300 p-[4px] m-body-m12 tablet:t-body-m12 desktop:d-body-m14`;

export const Td = tw.td`border border-gray300 p-[4px] m-body-r12 tablet:t-body-r12 desktop:d-body-r14`;
