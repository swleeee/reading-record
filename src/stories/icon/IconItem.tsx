import { ReactNode } from 'react';

import * as S from './IconItem.styled';

interface IconItemProps {
  name?: string;
  children: ReactNode;
}

const IconItem = ({ name, children }: IconItemProps) => {
  return (
    <S.Item>
      <S.IconWrapper>{children}</S.IconWrapper>
      {name && <S.Label>{name}</S.Label>}
    </S.Item>
  );
};

export default IconItem;
