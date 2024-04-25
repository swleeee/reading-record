import tw from 'twin.macro';

export const Container = tw.section``;

export const MainWrapper = tw.ol`block max-w-[1024px] mx-auto mb-[40px] border border-gray300 rounded-[4px] p-[24px] [column-count: 1] tablet:(mb-[60px] py-[28px] [column-count: 2]) desktop:(mb-[80px] py-[32px] [column-count: 3])`;

export const Li = tw.li`m-body-r12 list-none not-last-of-type:mb-[24px] tablet:(t-body-r12 not-last-of-type:mb-[28px]) desktop:(d-body-r14 not-last-of-type:mb-[32px])`;

export const MainTextLink = tw.a`inline-block mb-[6px] m-headline-4 tablet:t-headline-4 desktop:d-headline-4`;

export const SubWrapper = tw.ol`flex flex-col gap-y-[12px] tablet:gap-y-[16px] desktop:gap-y-[20px]`;

export const SubTextLink = tw.a`m-body-r12 text-gray500 tablet:t-body-r12 desktop:d-body-r14`;
