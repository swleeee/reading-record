import React from 'react';

import * as S from './BookReadingCard.styled';

interface BookReadingCardProps {
  className?: string;
  id: string;
  bookImgSrc: string;
  title: string;
  publisher: string;
  authors: string[];
  readingStartDate: string;
}

const BookReadingCard = ({
  className,
  id, // TODO: id 추후 활용
  bookImgSrc,
  title,
  publisher,
  authors,
  readingStartDate,
}: BookReadingCardProps) => {
  return (
    // TODO: 클릭 이벤트 추가 예정
    <S.CardButton className={className} type="button" onClick={() => {}}>
      <S.BookTitle>{title}</S.BookTitle>
      <S.BookDescriptionWrapper>
        <S.BookThumbnail src={bookImgSrc} alt="book thumbnail" />
        <S.BookContentWrapper>
          <S.Author>{authors.join(', ')}</S.Author>
          <S.publisher>{publisher}</S.publisher>
          <S.Date>{readingStartDate}</S.Date>
        </S.BookContentWrapper>
      </S.BookDescriptionWrapper>
    </S.CardButton>
  );
};

export default BookReadingCard;
