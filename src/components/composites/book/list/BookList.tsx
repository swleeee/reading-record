import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { Pagination } from '@/components';
import { useGetBooks } from '@/services';
import { BOOK_SEARCH_DROPDOWN_OPTIONS } from '@/constants';
import type { GetBooksQueryModel } from '@/types';
import BookListData from './data/BookListData';

const BookList = () => {
  const [searchParams] = useSearchParams();

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

  /* 
  TODO: 카카오 도서 검색 API 상으로 전체 검색은 불가능하여 하기와 같이 검색하지 않았을 경우에 대한 스크린 제작 필요
*/
  if (!data) return <div>검색창을 이용해주세요. :)</div>;

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
