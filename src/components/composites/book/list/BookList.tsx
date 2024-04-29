import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Pagination } from '@/components';
import { useGetBooks } from '@/services';
import SearchIcon from '@/assets/icon/ic_search.svg?react';
import { BOOK_SEARCH_DROPDOWN_OPTIONS } from '@/constants';
import type { GetBooksQueryModel } from '@/types';
import BookListData from './data/BookListData';
import * as S from './BookList.styled';

const BookList = () => {
  const [searchParams] = useSearchParams();

  const noSearchRef = useRef<HTMLDivElement | null>(null);

  const [noSearchClientTop, setNoSearchClientTop] = useState(0);

  const target = BOOK_SEARCH_DROPDOWN_OPTIONS.find(({ key }) =>
    searchParams.get(key),
  );

  const req = {
    query: searchParams.get(target ? target.key : 'title') ?? '',
    sort: 'accuracy' as GetBooksQueryModel['sort'],
    page: searchParams.get('page') ? +searchParams.get('page')! : 1,
    size: 10,
    target: (target ? target.key : 'title') as GetBooksQueryModel['target'],
  };

  const { data } = useGetBooks(req);
  // TODO: 'readingStatus', 'rating' 관련 조회 API 추가 필요

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
        <SearchIcon css={S.searchIcon} />
        <S.NoSearchText>검색창을 이용해주세요 :)</S.NoSearchText>
      </S.NoSearchContainer>
    );

  return (
    <>
      <BookListData books={data.documents} />
      <Pagination
        totalPages={Math.ceil(data.meta.total_count / 10)}
        maxPageCount={10}
      />
    </>
  );
};

export default BookList;
