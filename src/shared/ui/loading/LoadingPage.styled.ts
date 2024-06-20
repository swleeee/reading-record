import tw, { css } from 'twin.macro';

export const Container = tw.div`flex justify-center items-center w-screen h-screen`;

export const imgStyle = css`
  ${tw`w-[128px] h-[128px] tablet:(w-[256px] h-[256px])`}
`;
