import React from 'react';

import NoDataIcon from '@/assets/icon/ic_error.svg?react';
import * as S from './NoData.styled';

interface NoDataProps {
  content: string;
}

const NoData = ({ content }: NoDataProps) => {
  return (
    <S.NoData>
      <NoDataIcon css={S.noDataIcon} />
      <S.NoDataDescription>{content}</S.NoDataDescription>
    </S.NoData>
  );
};

export default NoData;
