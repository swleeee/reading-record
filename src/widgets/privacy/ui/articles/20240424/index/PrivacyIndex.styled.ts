import tw from 'twin.macro';

export const Container = tw.ol`block max-w-[1024px] mx-auto mb-[40px] border border-light-grey-400 rounded-[4px] p-[24px] [column-count: 1] dark:(border-dark-grey-500 dark-bg-elevated) tablet:(mb-[60px] py-[28px] [column-count: 2]) desktop:(mb-[80px] py-[32px] [column-count: 3])`;

export const Item = tw.li`m-body-r12 list-none not-last-of-type:mb-[24px] tablet:(t-body-r12 not-last-of-type:mb-[28px]) desktop:(d-body-r14 not-last-of-type:mb-[32px])`;

export const Link = tw.a`m-body-r12 text-light-grey-500 dark:text-dark-grey-500 tablet:t-body-r12 desktop:d-body-r14`;
