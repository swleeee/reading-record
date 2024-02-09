import tw, { css, styled } from 'twin.macro';

import type { DeviceType } from '@/types';

export const bookRecordCard = css`
  ${tw` relative flex gap-x-[19px] w-[300px] h-[148px] rounded-[4px] px-[12px] py-[18px] shadow-light_md hover:bg-brown50`}
`;

// TODO: 스타일 컴포넌트명 적절한 것으로 수정
export const Line = tw.div`absolute top-0 left-0 w-[6px] h-full rounded-l-[4px] bg-brown500`;

export const BookCoverImg = tw.img`w-full max-w-[85px] h-full border border-brown300 bg-white object-contain`;

export const BookRecordInfo = tw.div`flex flex-col gap-y-[8px] flex-1`;

export const Header = tw.div`flex items-center`;

export const profile = css`
  ${tw`w-[28px] h-[28px] rounded-full mr-[6px]`}
`;

export const Profile = styled.img`
  ${profile};
`;

export const UserName = tw.span`flex-1 m-body-r14 text-left tablet:t-body-r14 desktop:d-body-r16`;

export const LikeWrapper = tw.div`flex items-center gap-x-[2px]`;

export const likeIcon = css`
  ${tw`w-[16px] h-[16px]`}

  & > g > path {
    ${tw`fill-red200`}
  }
`;

export const LikeCount = tw.span`m-caption-r12 tablet:t-caption-r12 desktop:d-caption-r12`;

export const RecordContent = styled.p<{ device: DeviceType }>`
  ${({ device }) => css`
    ${tw`m-body-r12 text-left text-ellipsis break-all overflow-hidden tablet:t-body-r14 desktop:d-body-r14`}

    display: -webkit-box;
    -webkit-line-clamp: ${device === 'mobile' ? 5 : 4};
    -webkit-box-orient: vertical;
  `}
`;
