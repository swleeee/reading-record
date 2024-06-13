import tw from 'twin.macro';

export const NoData = tw.section`flex flex-col justify-center items-center gap-y-[16px]`;

export const noDataImage = tw`w-[196px] h-[196px] animate-shakingUpAndDown tablet:(w-[296px] h-[296px])`;

export const NoDataDescription = tw.p`m-body-r12 text-gray-600 text-center whitespace-pre-line tablet:t-body-r12 desktop:d-body-r14`;
