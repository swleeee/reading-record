import tw from 'twin.macro';

export const Footer = tw.footer`border-t border-t-light-grey-100 dark:border-t-dark-grey-800`;

export const Wrapper = tw.div`flex items-center w-full px-[24px] py-[40px] tablet:(max-w-[1360px] mx-auto)`;

export const Contents = tw.div`flex flex-col`;

export const MenuList = tw.ul`block mb-[20px]`;

export const MenuItem = tw.li`inline-block align-top not-last-of-type:(after:(content-[""] inline-block w-[1px] h-[10px] mx-[12px] bg-light-grey-100))`;

export const InfoBox = tw.div`mb-[30px]`;

export const InfoText = tw.span`m-body-r13 text-light-grey-800 dark:text-dark-grey-800 not-last-of-type:(after:(content-[""] inline-block w-[1px] h-[10px] mx-[12px] bg-light-grey-100)) tablet:t-body-r13 desktop:d-body-r15`;

export const CopyLight = tw.span`m-caption-r12 dark:text-white tablet:t-caption-r12 desktop:d-caption-r12`;
