import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

const Caption = tw.p`
  font-noto font-light d-caption-r12 w-full tablet:font-thin tablet:t-headline-3 tablet:leading-6 tablet:whitespace-normal tablet:text-left tablet:mt-36
hover:text-gray-100
  
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

const root = () => {
  const w = '20px';
  const h = '10px';

  return (
    <div>
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
    </div>
  );
};

export default root;
