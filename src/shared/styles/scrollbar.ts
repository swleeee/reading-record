import tw, { css } from 'twin.macro';

export const scrollbar = css`
  // NOTE: 스크롤 바 전체에 대한 스타일 지정
  ::-webkit-scrollbar {
    ${tw`w-[4px] h-[4px] tablet:(w-[8px] h-[8px])`}
  }

  // NOTE: 스크롤 바의 색상 지정 */
  ::-webkit-scrollbar-thumb {
    ${tw`rounded-full bg-light-brown-300 dark:bg-dark-brown-700`}

    &:hover {
      ${tw`bg-light-brown-500 dark:bg-dark-brown-500`}
    }
  }
`;
