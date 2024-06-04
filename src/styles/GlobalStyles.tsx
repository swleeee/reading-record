import { Global } from '@emotion/react';
import tw, { css, GlobalStyles as BaseStyles } from 'twin.macro';

import './font.css';

const customStyles = css`
  *,
  *::before,
  *::after {
    ${tw`m-0 p-0 box-border`}
  }
  html {
    ${tw`overflow-x-hidden`}
    font-size: 62.5%;
  }
  body {
    ${tw`min-h-screen overflow-x-hidden`}
  }
  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    outline: 0;
  }
  #root {
    // FIXME: 모바일에서 주소 영역에 의해서 스크롤이 생기는 이슈
    ${tw`flex flex-col tablet:bg-mobile`}

    & > main {
      ${tw`min-h-[100dvh]`};
    }
  }

  input,
  textarea,
  div,
  button,
  select,
  a {
    -webkit-tap-highlight-color: transparent;
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;

    &:disabled {
      cursor: not-allowed;
    }
  }

  textarea {
    resize: none;
    outline: 0;

    // NOTE: 스크롤 바 전체에 대한 스타일 지정
    ::-webkit-scrollbar {
      ${tw`w-[4px] h-[4px] tablet:(w-[8px] h-[8px])`}
    }

    // NOTE: 스크롤 바의 색상 지정 */
    ::-webkit-scrollbar-thumb {
      ${tw`rounded-full bg-brown300`}

      &:hover {
        ${tw`bg-brown500`}
      }
    }
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);
export default GlobalStyles;
