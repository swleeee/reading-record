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
}

const Link = ({ className, sizeType, styleType, children, to }: LinkProps) => {
  return (
    <LinkComponent
      className={className}
      css={S.link(sizeType, styleType)}
      to={to}
    >
      {children}
    </LinkComponent>
  );
};

export default Link;
