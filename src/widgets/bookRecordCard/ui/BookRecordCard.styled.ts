import tw, { css, styled } from 'twin.macro';

import type { DeviceType } from '@/shared/model';

export const bookRecordCard = css`
  ${tw`relative flex gap-x-[19px] min-w-[208px] w-full h-[148px] rounded-[4px] px-[12px] py-[18px] bg-white shadow-light_md hover:bg-brown50`}
`;

export const BookCoverImg = tw.img`absolute left-[-20px] w-full max-w-[75px] h-full max-h-[116px] object-fill shadow-light_lg`;

export const BookRecordInfo = tw.div`flex flex-col gap-y-[8px] flex-1 w-[calc(100% - 55px)]  ml-[55px]`;

export const Header = tw.div`flex items-center`;

export const UserName = tw.span`flex-1 m-body-r14 text-left text-ellipsis overflow-hidden whitespace-nowrap tablet:t-body-r14 desktop:d-body-r16`;

export const CreatedDate = tw.time`m-body-r12 text-gray600 mr-[4px] tablet:t-body-r12 desktop:d-body-r14`;

export const RecordContent = styled.p<{ device: DeviceType }>`
  ${({ device }) => css`
    ${tw`m-body-r12 text-left text-ellipsis break-all overflow-hidden tablet:t-body-r14 desktop:d-body-r14`}

    display: -webkit-box;
    -webkit-line-clamp: ${device === 'mobile' ? 5 : 4};
    -webkit-box-orient: vertical;
  `}
`;
