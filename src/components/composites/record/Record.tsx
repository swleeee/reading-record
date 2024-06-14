import { Suspense } from 'react';

import RecordList from './list/RecordList';
import * as S from './Record.styled';

const Record = () => {
  return (
    <S.Container>
      {/* TODO: 스켈레톤 UI 작성 예정 */}
      <Suspense fallback={<></>}>
        <RecordList />
      </Suspense>
    </S.Container>
  );
};

export default Record;
