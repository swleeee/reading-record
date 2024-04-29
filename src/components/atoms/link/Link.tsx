import React from 'react';
import { Link as LinkComponent } from 'react-router-dom';

import { LinkSizeType, LinkStyleType } from '@/types';
import * as S from './Link.styled';

interface LinkProps {
  className?: string;
  children: React.ReactNode;
  sizeType: LinkSizeType;
  styleType: LinkStyleType;
  to: string;
  onClick?: () => void;
}

const Link = ({
  className,
  sizeType,
  styleType,
  children,
  to,
  onClick,
}: LinkProps) => {
  return (
    <LinkComponent
      className={className}
      css={S.link(sizeType, styleType)}
      to={to}
      onClick={onClick}
    >
      {children}
    </LinkComponent>
  );
};

export default Link;
