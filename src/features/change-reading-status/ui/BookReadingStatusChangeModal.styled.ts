import tw, { css, styled } from 'twin.macro';

export const EmptyDataWrapper = styled.article`
  ${tw`flex justify-center items-center w-full h-full rounded-[4px] bg-gray50 opacity-50`}

  & > p {
    ${tw`m-body-m15 text-gray-900 tablet:t-body-m15 desktop:d-body-m17`}
  }
`;

export const labelContent = (marginBottom?: string) => css`
  margin-bottom: ${marginBottom && marginBottom};
`;

export const DatePickerWrapper = styled.div`
  ${tw`flex flex-wrap gap-x-[16px] gap-y-[4px]`}

  & > dialog:first-of-type {
    ${tw`relative after:(content-["~"] absolute top-1/2 right-[-12px] -translate-y-1/2)`}
  }
`;

export const readingStatusButtonGroup = css`
  ${tw`mb-[12px]`}
`;

export const RatingInfo = tw.div`flex gap-x-[8px] w-fit cursor-pointer`;

export const ratingIcon = (isFilled: boolean) => css`
  ${tw`w-[20px] h-[20px]`}

  & > g > path {
    ${tw`fill-brown400 duration-300`}
    ${!isFilled && tw`opacity-30`}
  }
`;

export const infoIcon = css`
  ${tw`w-[16px] h-[16px]`}

  & > g > path {
    ${tw`fill-gray600`}
  }
`;

export const InfoContent = tw.p`m-body-r13 tablet:t-body-r13 desktop:d-body-r15`;

export const recordContent = css`
  ${tw`h-[120px] tablet:h-[200px] desktop:h-[240px]`}
`;
