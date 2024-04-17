import React from 'react';

import { BookListCard, NoData } from '@/components';
import type { GetBooksServerModel } from '@/types';

interface BookListDataProps {
  books: GetBooksServerModel['documents'];
}

const BookListData = ({ books }: BookListDataProps) => {
  return books.length ? (
    books.map((book) => (
      <BookListCard
        key={book.isbn}
        isbn={book.isbn}
        thumbnail={book.thumbnail}
        bookTitle={book.title}
        authors={book.authors}
        translators={book.translators}
        publisher={book.publisher}
        datetime={book.datetime}
        bookContent={book.contents}
      />
    ))
  ) : (
    <NoData
      content={`검색어의 철자가 정확한지 다시 한 번 확인해주세요.\n검색어의 단어 수를 줄이거나, 두 단어 이상의 검색어인 경우, 띄어쓰기를 해주세요.`}
    />
  );
};

export default BookListData;
