import tw, { css, styled } from 'twin.macro';

export const Article = tw.article`flex flex-col gap-y-[4px] mb-[16px]`;

export const H4 = tw.h4`m-body-sb16 dark:text-white tablet:t-body-sb16 desktop:d-body-sb18`;

export const P = tw.p`m-body-r12 dark:text-dark-grey-700 tablet:t-body-r12 desktop:d-body-r14`;

export const Ol = tw.ol`flex flex-col gap-y-[4px] m-body-r12 tablet:t-body-r12 desktop:d-body-r14`;

export const Ul = tw.ul`flex flex-col gap-y-[4px] m-body-r12 tablet:t-body-r12 desktop:d-body-r14`;

export const Li = styled.li<{ depth?: number }>`
  ${({ depth = 1 }) => css`
    ${tw`m-body-r12 list-none dark:text-dark-grey-600 tablet:t-body-r12 desktop:d-body-r14`}
    padding-left: ${12 + 3 * (depth - 1)}px
  `}
`;

export const Table = tw.table`relative border border-light-grey-400 dark:border-dark-grey-500`;

export const Caption = tw.caption`absolute w-1 h-1 p-0 m-[-1px] overflow-hidden [clip: rect(0,0,0,0)] whitespace-nowrap border-0`;

export const Thead = tw.thead`bg-light-grey-100 dark:bg-dark-grey-300`;

export const Th = tw.th`min-w-[30px] border-r border-r-light-grey-400 p-[4px] m-body-m12 dark:border-r-dark-grey-500 tablet:t-body-m12 desktop:d-body-m14`;

export const Td = tw.td`border border-light-grey-400 p-[4px] m-body-r12 dark:border-dark-grey-500 tablet:t-body-r12 desktop:d-body-r14`;
