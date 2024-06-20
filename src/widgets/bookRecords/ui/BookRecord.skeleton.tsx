import BookRecordListSkeleton from './list/BookRecordList.skeleton';
import * as S from './BookRecord.styled';

export const BookRecordSkeleton = () => {
  return (
    <S.Container>
      <BookRecordListSkeleton />
    </S.Container>
  );
};
