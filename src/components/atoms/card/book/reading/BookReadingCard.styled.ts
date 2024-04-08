import tw, { styled } from 'twin.macro';

export const CardButton = tw.button`flex flex-col rounded-[4px] p-[16px] w-[186px] h-[207px] bg-white shadow-light_md hover:bg-brown50`;

export const BookTitle = styled.span`
  ${tw`h-[55px] m-body-m14 text-ellipsis break-all overflow-hidden`}

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const BookDescriptionWrapper = tw.div`relative flex-1 mt-[4px] w-full`;

export const BookThumbnail = tw.img`absolute left-[-32px] w-full max-w-[75px] h-full max-h-[116px] object-fill shadow-light_lg`;

export const BookContentWrapper = tw.div`flex flex-col items-start gap-y-[4px] ml-[51px]`;

export const Author = tw.span`m-body-r13`;

export const publisher = tw.span`m-body-r13 text-gray800`;

export const Date = tw.time`m-body-r12 text-gray600`;