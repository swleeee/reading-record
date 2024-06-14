import { Suspense } from 'react';

import RecordList from './list/RecordList';
import RecordListSkeleton from './list/RecordList.skeleton';
import * as S from './Record.styled';

const Record = () => {
  return (
    <S.Container>
      <Suspense fallback={<RecordListSkeleton />}>
        <RecordList />
      </Suspense>
    </S.Container>
  );
};

export default Record;
