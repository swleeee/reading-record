import { ElementType, ReactNode } from 'react';

import NoDataImage from '@/shared/assets/image/no_data.svg?react';
import * as S from './NoData.styled';

interface NoDataProps {
  className?: string;
  content: string;
  link?: ReactNode;
  image?: ElementType;
}

export const NoData = ({
  className,
  content,
  image: Image = NoDataImage,
  link,
}: NoDataProps) => {
  return (
    <S.NoData className={className}>
      <Image css={S.noDataImage} />
      <S.NoDataDescription>{content}</S.NoDataDescription>
      {link && link}
    </S.NoData>
  );
};
