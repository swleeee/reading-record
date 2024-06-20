import Skeleton from 'react-loading-skeleton';

import * as S from './MyRecordList.styled';

const MyRecordListSkeleton = () => {
  return (
    <S.RecordList>
      {Array.from({ length: 10 }).map((_, i) => (
        <article key={i} css={S.link}>
          <span css={S.bookThumbnail}>
            <Skeleton height="100%" />
          </span>
          <S.BookContentWrapper>
            <S.Title>
              <Skeleton width={120} />
            </S.Title>
            <S.Author>
              <Skeleton width={80} />
            </S.Author>
            <S.DateTime>
              <Skeleton width={150} />
            </S.DateTime>
          </S.BookContentWrapper>
        </article>
      ))}
    </S.RecordList>
  );
};

export default MyRecordListSkeleton;
