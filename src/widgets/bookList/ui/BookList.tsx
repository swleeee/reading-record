import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import {
  BookSearchCard,
  useGetBooks,
  type GetBooksQueryModel,
} from '@/entities/book';
import { NoData, Pagination } from '@/shared/ui';
import { useUser } from '@/shared/lib';
import { deviceState } from '@/shared/stores';
import SearchImage from '@/shared/assets/image/search.svg?react';
import { BOOK_SEARCH_DROPDOWN_OPTIONS } from '@/shared/constants';
import * as S from './BookList.styled';

export const BookList = () => {
  const [searchParams] = useSearchParams();

  const noSearchRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const device = useRecoilValue(deviceState);
  const [noSearchClientTop, setNoSearchClientTop] = useState(0);

  const target = BOOK_SEARCH_DROPDOWN_OPTIONS.find(({ key }) =>
    searchParams.get(key),
  );

  const { user } = useUser();

  const req = {
    query: searchParams.get(target ? target.key : 'title') ?? '',
    sort: 'accuracy' as GetBooksQueryModel['sort'],
    page: searchParams.get('page') ? +searchParams.get('page')! : 1,
    size: 10,
    target: (target ? target.key : 'title') as GetBooksQueryModel['target'],
    userId: user?.id!,
  };

  const { data } = useGetBooks(req);

  useEffect(() => {
    if (noSearchRef) {
      setNoSearchClientTop(
        noSearchRef.current?.getBoundingClientRect().top ?? 0,
      );
    }
  }, [noSearchRef]);

  if (!data)
    return (
      <S.NoSearchContainer
        ref={noSearchRef}
        boundingClientTop={noSearchClientTop}
      >
        <SearchImage css={S.searchIcon} />
        <S.NoSearchText>검색창을 이용해주세요 :)</S.NoSearchText>
      </S.NoSearchContainer>
    );

  return (
    <S.Container ref={ref}>
      {/* <BookListData books={data.documents} /> */}
      {data.documents.length ? (
        data.documents.map((book) => (
          <BookSearchCard
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
      )}
      <Pagination
        ref={ref}
        totalPages={Math.ceil(data.meta.total_count / 10)}
        maxPageCount={device === 'mobile' ? 5 : 10}
      />
    </S.Container>
  );
};
