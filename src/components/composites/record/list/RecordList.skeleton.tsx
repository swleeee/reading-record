import RecordCardSkeleton from './card/RecordCard.skeleton';
import * as S from './RecordList.styled';

const RecordListSkeleton = () => {
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

export default RecordListSkeleton;
