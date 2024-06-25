import tw, { css } from 'twin.macro';

export const Section = tw.section`flex flex-col px-[28px] py-[24px] tablet:(w-full max-w-[1360px] h-full mx-auto px-[24px] py-[32px])`;

export const Wrapper = tw.div`min-h-[calc(100vh - 300px)] rounded-[4px] px-[16px] py-[24px] bg-light-grey-200 dark:dark-bg-grouped-base`;

export const labelContent = css`
  ${tw`flex-row`}

  & > div {
    ${tw`[flex-basis: 160px]`}
  }
`;
