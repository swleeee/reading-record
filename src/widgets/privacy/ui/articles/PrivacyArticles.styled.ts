import tw, { styled } from 'twin.macro';

export const Wrapper = tw.div`max-w-[1024px] mx-auto mb-[8px] border border-light-grey-400 rounded-[4px] p-[12px] bg-light-grey-50 dark:(border-dark-grey-500 dark-bg-elevated)`;

export const Description = styled.p`
  ${tw`inline-block m-body-r14 dark:text-dark-grey-600 tablet:t-body-r14 desktop:d-body-r16`}

  & > b {
    ${tw`dark:text-white`}
  }
`;
