import { BookListCard, NoData } from '@/components';
// import { getBookReadingStatus } from '@/utils';
// import { BOOK_READING_STATUS_OPTIONS } from '@/constants';
import type { GetBooksServerModel } from '@/types';

interface BookListDataProps {
  books: GetBooksServerModel['documents'];
}

const BookListData = ({ books }: BookListDataProps) => {
  return books.length ? (
    books.map((book) => (
      <BookListCard
        key={book.isbn}
        // readingStatus={
        //   getBookReadingStatus(
        //     book.myRecord.reading_start_at,
        //     book.myRecord.reading_end_at,
        //   ) ?? BOOK_READING_STATUS_OPTIONS[0]
        // }
        rating={
          book.record.ratingTotal
            ? Math.floor(book.record.ratingTotal / book.record.count)
            : null
        }
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
