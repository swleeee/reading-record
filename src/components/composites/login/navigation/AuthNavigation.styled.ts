import tw, { css } from 'twin.macro';

export const AuthNavigation = tw.div`flex justify-between items-center w-full`;

export const link = css`
  ${tw`text-brown400 m-body-m14 tablet:t-body-m14 labtop:d-body-m14`};
`;

export const Division = tw.span`w-[1px] h-[12px] bg-brown400`;
