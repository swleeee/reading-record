import { Suspense } from 'react';

import { Layout } from '@/widgets/layout';
import { RecordList, RecordListSkeleton } from '@/widgets/record';
import * as S from './Page.styled';

export const RecordPage = () => {
  return (
    <Layout isAuth>
      <S.Container>
        <Suspense fallback={<RecordListSkeleton />}>
          <RecordList />
        </Suspense>
      </S.Container>
    </Layout>
  );
};
