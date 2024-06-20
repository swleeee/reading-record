import Skeleton from 'react-loading-skeleton';

import * as S from './BookDescription.styled';

export const BookDescriptionSkeleton = () => {
  return (
    <S.BookDescriptionSection>
      <S.BookThumbnailSection src="">
        <Skeleton css={S.bookThumbnail} />
      </S.BookThumbnailSection>
      <S.BookInfoWrapper>
        <S.BookSubInfoList>
          <S.BookSubInfoWrapper>
            <S.BookSubInfoTitle>평점</S.BookSubInfoTitle>
            <S.BookSubInfoDescription>
              <Skeleton width={50} />
            </S.BookSubInfoDescription>
          </S.BookSubInfoWrapper>
          <S.BookSubInfoWrapper>
            <S.BookSubInfoTitle>읽기 완료 수</S.BookSubInfoTitle>
            <S.BookSubInfoDescription>
              <Skeleton width={50} />
            </S.BookSubInfoDescription>
          </S.BookSubInfoWrapper>
          <S.BookSubInfoWrapper>
            <S.BookSubInfoTitle>읽기 상태</S.BookSubInfoTitle>
            <S.BookSubInfoDescription>
              <Skeleton width={50} />
            </S.BookSubInfoDescription>
          </S.BookSubInfoWrapper>
        </S.BookSubInfoList>
        <S.BookInfoList>
          <S.BookInfoTitle>책 제목</S.BookInfoTitle>
          <S.BookInfoDescription>
            <Skeleton width={100} />
          </S.BookInfoDescription>
          <S.BookInfoTitle>출간날짜</S.BookInfoTitle>
          <S.BookInfoDescription>
            <Skeleton width={100} />
          </S.BookInfoDescription>
          <S.BookInfoTitle>ISBN</S.BookInfoTitle>
          <S.BookInfoDescription>
            <Skeleton width={100} />
          </S.BookInfoDescription>
          <S.BookInfoTitle>저자</S.BookInfoTitle>
          <S.BookInfoDescription>
            <Skeleton width={100} />
          </S.BookInfoDescription>
          <S.BookInfoTitle>번역자</S.BookInfoTitle>
          <S.BookInfoDescription>
            <Skeleton width={100} />
          </S.BookInfoDescription>
          <S.BookInfoTitle>출판사</S.BookInfoTitle>
          <S.BookInfoDescription>
            <Skeleton width={100} />
          </S.BookInfoDescription>
          <S.BookInfoTitle>상세 내용</S.BookInfoTitle>
          <S.BookInfoDescription>
            <Skeleton width="100%" height={62.36} />
          </S.BookInfoDescription>
        </S.BookInfoList>
      </S.BookInfoWrapper>
    </S.BookDescriptionSection>
  );
};
