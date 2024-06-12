import { ElementType } from 'react';

import NoDataImage from '@/assets/image/no_data.svg?react';
import * as S from './NoData.styled';

interface NoDataProps {
  className?: string;
  content: string;
  image?: ElementType;
}

const NoData = ({
  className,
  content,
  image: Image = NoDataImage,
}: NoDataProps) => {
  return (
    <S.NoData className={className}>
      <Image css={S.noDataImage} />
      <S.NoDataDescription>{content}</S.NoDataDescription>
    </S.NoData>
  );
};

export default NoData;
