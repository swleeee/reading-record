import Skeleton from 'react-loading-skeleton';

import * as S from './BookRecordListItem.styled';

const BookRecordListItemSkeleton = () => {
  return (
    <S.RecordItemContainer>
      <S.RecordItemHeader>
        <S.PersonInfo>
          <Skeleton width={28} height={28} circle />
          <Skeleton width={36} />
          <Skeleton width={28} />
        </S.PersonInfo>
        <S.RatingInfo>
          <Skeleton width={96} />
        </S.RatingInfo>
      </S.RecordItemHeader>
      <S.RecordItemContent>
        <Skeleton width="100%" height={48} />
      </S.RecordItemContent>
      <S.RecordItemFooter>
        <Skeleton width={30} height={17} />
      </S.RecordItemFooter>
    </S.RecordItemContainer>
  );
};

export default BookRecordListItemSkeleton;
