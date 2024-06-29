import tw, { css, styled } from 'twin.macro';

import type { Position } from './Tooltip';

export const Container = tw.div`relative inline-block cursor-pointer`;

const tooltipTopPosition = css`
  ${tw`mb-[10px] bottom-full after:(top-full border-transparent border-t-light-grey-700 dark:border-t-dark-grey-400)`}
`;

const tooltipBottomPosition = css`
  ${tw`mt-[10px] top-full after:(bottom-full border-transparent border-b-light-grey-700 dark:border-b-dark-grey-400)`}
`;

const tooltipLeftPosition = css`
  ${tw`left-[-30px] after:left-[33px]`}
`;

const tooltipRightPosition = css`
  ${tw`right-[-30px] after:right-[33px]`}
`;

const getTooltipStyleWithVertical = (position: Position) => {
  switch (position) {
    case 'topLeft':
    case 'topRight':
      return tooltipTopPosition;

    case 'bottomLeft':
    case 'bottomRight':
      return tooltipBottomPosition;
  }
};

const getTooltipStyleWithHorizontal = (position: Position) => {
  switch (position) {
    case 'topLeft':
    case 'bottomLeft':
      return tooltipLeftPosition;

    case 'topRight':
    case 'bottomRight':
      return tooltipRightPosition;
  }
};

export const TooltipBubble = styled.div<{ position: Position }>`
  ${({ position }) => css`
    ${tw`absolute rounded-[4px] px-[16px] py-[12px] m-body-r14 text-white bg-light-grey-700 whitespace-nowrap z-[10] dark:bg-dark-grey-400 after:(content-[''] absolute border-[5px] border-solid)`}
    ${getTooltipStyleWithVertical(position)};
    ${getTooltipStyleWithHorizontal(position)}
  `}
`;
