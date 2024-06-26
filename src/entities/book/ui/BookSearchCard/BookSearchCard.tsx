import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { Button } from '@/shared/ui';
import RatingIcon from '@/shared/assets/icon/ic_rating.svg?react';
import { PATH } from '@/shared/constants';
import type { SelectOptionType } from '@/shared/model';
import * as S from './BookSearchCard.styled';

interface BookSearchCardProps {
  readingStatus?: SelectOptionType;
  rating?: number | null;
  isbn: string;
  thumbnail: string;
  bookTitle: string;
  authors: string[];
  translators: string[];
  publisher: string;
  datetime: string;
  bookContent: string;
}

export const BookSearchCard = ({
  isbn,
  readingStatus,
  rating,
  thumbnail,
  bookTitle,
  authors,
  translators,
  publisher,
  datetime,
  bookContent,
}: BookSearchCardProps) => {
  const [, setSearchParams] = useSearchParams();

  const handlePublisherClick =
    (publisher: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      setSearchParams({ publisher });
    };

  return (
    <Link css={S.bookDetailLink} key={isbn} to={`${PATH.BOOK}/${isbn}`}>
      <S.Header>
        {readingStatus && (
          <S.ReadingStatus>{readingStatus.label}</S.ReadingStatus>
        )}
        {rating !== undefined && (
          <S.RatingWrapper>
            <RatingIcon css={S.ratingIcon} />
            <S.Rating>{rating ?? '-'} / 5</S.Rating>
          </S.RatingWrapper>
        )}
      </S.Header>
      <S.Main>
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
              styleType="tertiaryPrimary"
              sizeType="sm"
              label={publisher}
              onClick={handlePublisherClick(publisher)}
            />
            &nbsp;・&nbsp;
            <S.Time>{datetime.split('T')[0]}</S.Time>
          </S.Publishing>
          <S.BookContent>{bookContent}</S.BookContent>
        </S.BookContentWrapper>
      </S.Main>
    </Link>
  );
};

export default BookSearchCard;
