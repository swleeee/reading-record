import tw from 'twin.macro';

export const Container = tw.div`flex gap-x-[12px] tablet:gap-x-[16px] desktop:gap-x-[24px]`;

export const BookContentWrapper = tw.div`self-center flex flex-col gap-y-[4px]`;

export const BookCoverImg = tw.img`max-w-[75px] h-full max-h-[116px] object-fill tablet:(max-w-[100px] max-h-[155px]) desktop:(max-w-[125px] max-h-[193px])`;

export const UserInfoWrapper = tw.div`flex items-center`;

export const UserName = tw.span`flex-1 m-body-r14 text-left text-ellipsis overflow-hidden tablet:t-body-r14 desktop:d-body-r16`;

export const CreatedDate = tw.time`m-body-r12 text-gray600 mr-[4px] tablet:t-body-r12 desktop:d-body-r14`;

export const ContentWrapper = tw.div`flex flex-col gap-y-[4px]`;

export const RecordContent = tw.p`m-body-r12 text-left text-ellipsis break-all overflow-hidden tablet:t-body-r14 desktop:d-body-r14`;

export const BottomWrapper = tw.div`flex justify-between gap-x-[4px] w-full`;
