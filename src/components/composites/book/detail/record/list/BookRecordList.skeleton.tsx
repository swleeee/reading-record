import Skeleton from 'react-loading-skeleton';

import BookRecordListItemSkeleton from './item/BookRecordListItem.skeleton';
import * as S from './BookRecordList.styled';

const BookRecordListSkeleton = () => {
  return (
    <S.RecordSection>
      <S.RecordHeader>
        <S.RecordTitle>도서 감상 내용</S.RecordTitle>
        <Skeleton width={110} height={40} />
      </S.RecordHeader>
      {Array.from({ length: 5 }, (_, i) => (
        <BookRecordListItemSkeleton key={i} />
      ))}
    </S.RecordSection>
  );
};

export default BookRecordListSkeleton;
