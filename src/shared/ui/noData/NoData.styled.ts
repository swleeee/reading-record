import tw from 'twin.macro';

export const NoData = tw.section`flex flex-col justify-center items-center gap-y-[16px]`;

export const noDataImage = tw`w-[196px] h-[196px] animate-shakingUpAndDown tablet:(w-[296px] h-[296px])`;

export const NoDataDescription = tw.p`m-body-r12 text-light-grey-600 text-center whitespace-pre-line dark:text-dark-grey-600 tablet:t-body-r12 desktop:d-body-r14`;
