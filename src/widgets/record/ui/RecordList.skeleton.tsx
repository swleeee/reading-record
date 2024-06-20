import { RecordCardSkeleton } from '@/widgets/recordCard';
import * as S from './RecordList.styled';

export const RecordListSkeleton = () => {
  return (
    <S.Container>
      <S.RecordList>
        {Array.from({ length: 4 }).map((_, i) => (
          <RecordCardSkeleton key={i} />
        ))}
      </S.RecordList>
    </S.Container>
  );
};
