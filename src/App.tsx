import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import './App.css';

const Caption = tw.p`
  font-noto font-light text-caption-1 w-full md:font-thin md:text-head-0 md:leading-6 md:whitespace-normal md:text-left md:mt-36
hover:text-orange10
  
`;

const Input = styled.input<{ hasDarkHover: boolean }>([
  tw`p-20`,
  ({ hasDarkHover }) =>
    hasDarkHover
      ? tw`hover:border-black`
      : css`
          &:hover {
            ${tw`border-white`}
          }
        `,
]);

const App = () => {
  const w = '20px';
  const h = '10px';
  return (
    <>
      {/* <input tw="border, hover: border-black" /> */}
      <Input hasDarkHover value="DDDDD" />
      <Caption>ddd</Caption>
      <div css={[tw`bg-yellow-50`, { width: w, height: h }]}>테스트</div>
      <div tw="bg-white rounded-lg shadow-lg p-4">
        <h1 tw="text-2xl font-bold mb-4">
          Hello, Vite + React + TypeScript + Tailwind CSS!
        </h1>
        <p tw="text-gray-600">
          Welcome to your Vite + React + TypeScript + Tailwind CSS project.
        </p>
      </div>
    </>
  );
};

export default App;
