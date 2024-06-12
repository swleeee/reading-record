import { ElementType } from 'react';

import NoDataIcon from '@/assets/icon/ic_error.svg?react';
import * as S from './NoData.styled';

interface NoDataProps {
  className?: string;
  content: string;
  image?: ElementType;
}

const NoData = ({
  className,
  content,
  image: Image = NoDataIcon,
}: NoDataProps) => {
  return (
    <S.NoData className={className}>
      <Image css={S.noDataIcon} />
      <S.NoDataDescription>{content}</S.NoDataDescription>
    </S.NoData>
  );
};

export default NoData;
