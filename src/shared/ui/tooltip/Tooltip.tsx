import React, { useState } from 'react';

import * as S from './Tooltip.styled';

export type Position = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position: Position;
}

export const Tooltip = ({ content, children, position }: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <S.Container onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {children}
      {isVisible && (
        <S.TooltipBubble position={position}>{content}</S.TooltipBubble>
      )}
    </S.Container>
  );
};
