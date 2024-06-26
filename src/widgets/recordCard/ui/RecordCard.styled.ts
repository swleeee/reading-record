import tw, { css, styled } from 'twin.macro';

export const Card = tw.article`relative flex flex-col gap-y-[8px] w-full min-h-[192px] rounded-[4px] px-[12px] py-[8px] bg-white shadow-light_md dark:dark-bg-grouped-base`;

export const WriterWrapper = tw.div`flex items-center`;

export const Nickname = tw.span`flex-1 m-body-r14 dark:text-white tablet:t-body-r14 desktop:d-body-r16`;

export const CreatedDate = tw.time`m-body-r12 text-light-grey-700 dark:text-dark-grey-500 tablet:t-body-r12 desktop:d-body-r14`;

export const Badge = tw.span`rounded-[4px] px-[4px] py-[2px] text-light-grey-600 bg-light-grey-50 dark:(text-dark-grey-400 bg-dark-grey-800)`;

export const RecordWrapper = styled.div`
  ${tw`flex h-full ml-[60px]`}

  & > div {
    ${tw`flex-1`}
  }
`;

export const bookThumbnail = css`
  ${tw`absolute left-[-12px] w-[72px] rounded-[8px] object-contain shadow-light_xl overflow-hidden`}
`;

export const RecordComment = tw.p`m-body-r12 [white-space: break-spaces] dark:text-white tablet:t-body-r12 desktop:d-body-r14`;

export const AbbreviationSymbol = tw.span`text-light-grey-400 dark:text-dark-grey-600`;

export const ControlWrapper = tw.div`flex`;
