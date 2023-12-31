// src/styles/GlobalStyles.tsx
import React from 'react';
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
    border: 0;
    outline: 0;
  }
  #root {
    // FIXME: 모바일에서 주소 영역에 의해서 스크롤이 생기는 이슈
    ${tw`h-[100dvh]`}
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);
export default GlobalStyles;
