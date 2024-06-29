import React from 'react';
import { Link as LinkComponent } from 'react-router-dom';

import * as S from './Link.styled';

export type LinkStyleType = 'secondary' | 'tertiaryGray' | 'tertiaryBrown';
export type LinkSizeType = 'sm' | 'md' | 'lg' | 'full';

interface LinkProps {
  className?: string;
  children: React.ReactNode;
  rel?: string;
  sizeType: LinkSizeType;
  styleType: LinkStyleType;
  to: string;
  onClick?: () => void;
}

export const Link = ({
  className,
  children,
  rel,
  sizeType,
  styleType,
  to,
  onClick,
}: LinkProps) => {
  return (
    <LinkComponent
      rel={rel}
      className={className}
      css={S.link(sizeType, styleType)}
      to={to}
      onClick={onClick}
    >
      {children}
    </LinkComponent>
  );
};
