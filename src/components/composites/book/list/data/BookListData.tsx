import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { Button, NoData } from '@/components';
import type { GetBooksServerModel } from '@/types';
import * as S from './BookListData.styled';

interface BookListDataProps {
  books: GetBooksServerModel['documents'];
}

const BookListData = ({ books }: BookListDataProps) => {
  const [, setSearchParams] = useSearchParams();

  const handlePublisherClick =
    (publisher: string) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      setSearchParams({ publisher });
    };

  return books.length ? (
    books.map((book) => (
      <Link css={S.bookDetailLink} key={book.isbn} to={`/${book.isbn}`}>
        <S.BookThumbnail src={book.thumbnail} alt="book thumbnail" />
        <S.BookContentWrapper>
          <S.BookTitle>{book.title}</S.BookTitle>
          <S.PersonWrapper>
            <span>
              <b>{book.authors.join(', ')}</b> 저자(글)
            </span>
            &nbsp;・&nbsp;
            <span>
              <b>{book.translators.join(', ')}</b> 번역
            </span>
          </S.PersonWrapper>
          <S.Publishing>
            <Button
              css={S.publisherLink}
              styleType="tertiary"
              sizeType="sm"
              label={book.publisher}
              onClick={handlePublisherClick(book.publisher)}
            />
            &nbsp;・&nbsp;
            <S.Time>{book.datetime.split('T')[0]}</S.Time>
          </S.Publishing>
          <S.BookContent>{book.contents}</S.BookContent>
        </S.BookContentWrapper>
      </Link>
    ))
  ) : (
    <NoData
      content={`검색어의 철자가 정확한지 다시 한 번 확인해주세요.\n검색어의 단어 수를 줄이거나, 두 단어 이상의 검색어인 경우, 띄어쓰기를 해주세요.`}
    />
  );
};

export default BookListData;
