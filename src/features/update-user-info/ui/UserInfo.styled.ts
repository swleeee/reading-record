import tw from 'twin.macro';

export const Section = tw.section`h-full tablet:(max-w-[800px] mx-auto my-[24px] rounded-[4px] bg-white shadow-light_md overflow-hidden dark:dark-bg-elevated)`;

export const Title = tw.h2`hidden`;

export const TopWrapper = tw.div`flex flex-col items-center gap-y-[32px] px-[28px] py-[64px] bg-light-brown-500 tablet:(h-full bg-white dark:dark-bg-elevated)`;

export const SummaryList = tw.div`flex justify-evenly w-full`;

export const SummaryWrapper = tw.div`flex flex-col items-center gap-y-[4px]`;

export const SummaryContent = tw.span`m-body-m14 text-white tablet:(t-body-m14 text-light-grey-800 dark:text-dark-grey-800) desktop:d-body-m16`;

export const SummaryLabel = tw.label`m-body-r13 text-white tablet:(t-body-r13 text-light-grey-800 dark:text-dark-grey-800) desktop:d-body-r15`;

export const FormWrapper = tw.div`mt-[-32px] mx-[16px] rounded-[16px] px-[28px] py-[32px] bg-white shadow-light_md dark:dark-bg-elevated tablet:shadow-none`;
