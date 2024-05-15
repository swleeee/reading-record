import React from 'react';

import NoDataIcon from '@/assets/icon/ic_error.svg?react';
import * as S from './NoData.styled';

interface NoDataProps {
  className?: string;
  content: string;
}

const NoData = ({ className, content }: NoDataProps) => {
  return (
    <S.NoData className={className}>
      <NoDataIcon css={S.noDataIcon} />
      <S.NoDataDescription>{content}</S.NoDataDescription>
    </S.NoData>
  );
};

export default NoData;
