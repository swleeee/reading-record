import tw, { css, styled } from 'twin.macro';

export const defaultCard = css`
  ${tw`flex flex-col rounded-[4px] p-[16px] w-[186px] h-[207px] bg-white shadow-light_md dark:dark-bg-grouped-base`}
`;

export const SkeletonCard = styled.div`
  ${defaultCard}
`;

export const link = css`
  ${defaultCard}
  ${tw`hover:(bg-light-brown-50 dark:bg-dark-grey-250)`}
`;

export const BookTitle = styled.span`
  ${tw`h-[55px] m-body-m14 text-ellipsis break-all overflow-hidden dark:text-white`}

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const bookTitleSkeleton = css`
  ${tw`mb-[23px]`}
`;

export const BookDescriptionWrapper = tw.div`relative flex-1 mt-[4px] w-full`;

export const bookThumbnailSkeleton = css`
  ${tw`absolute left-[-32px] w-full max-w-[75px] h-full max-h-[116px] object-fill shadow-light_lg`}
`;

export const BookThumbnail = styled.img`
  ${bookThumbnailSkeleton};
`;

export const BookContentWrapper = tw.div`flex flex-col items-start gap-y-[4px] ml-[51px]`;

export const Author = tw.span`m-body-r13 dark:text-white`;

export const publisher = tw.span`m-body-r13 text-light-grey-800 dark:text-dark-grey-600`;

export const Date = tw.time`m-body-r12 text-light-grey-600 dark:text-dark-grey-500`;
