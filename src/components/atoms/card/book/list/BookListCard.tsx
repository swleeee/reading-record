import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { Button } from '@/components';
import * as S from './BookListCard.styled';

interface BookListCardProps {
  isbn: string;
  thumbnail: string;
  bookTitle: string;
  authors: string[];
  translators: string[];
  publisher: string;
  datetime: string;
  bookContent: string;
}

const BookListCard = ({
  isbn,
  thumbnail,
  bookTitle,
  authors,
  translators,
  publisher,
  datetime,
  bookContent,
}: BookListCardProps) => {
  const [, setSearchParams] = useSearchParams();

  const handlePublisherClick =
    (publisher: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      setSearchParams({ publisher });
    };

  return (
    <Link css={S.bookDetailLink} key={isbn} to={`/book/${isbn}`}>
      <S.BookThumbnail src={thumbnail} alt="book thumbnail" />
      <S.BookContentWrapper>
        <S.BookTitle>{bookTitle}</S.BookTitle>
        <S.PersonWrapper>
          <span>
            <b>{authors.join(', ')}</b> 저자(글)
          </span>
          &nbsp;・&nbsp;
          <span>
            <b>{translators.join(', ')}</b> 번역
          </span>
        </S.PersonWrapper>
        <S.Publishing>
          <Button
            css={S.publisherLink}
            styleType="tertiary"
            sizeType="sm"
            label={publisher}
            onClick={handlePublisherClick(publisher)}
          />
          &nbsp;・&nbsp;
          <S.Time>{datetime.split('T')[0]}</S.Time>
        </S.Publishing>
        <S.BookContent>{bookContent}</S.BookContent>
      </S.BookContentWrapper>
    </Link>
  );
};

export default BookListCard;
