import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { useUser } from '@/contexts';
import { Pagination } from '@/components';
import { useGetBooks } from '@/services';
import { deviceState } from '@/stores';
import SearchIcon from '@/assets/icon/ic_search.svg?react';
import { BOOK_SEARCH_DROPDOWN_OPTIONS } from '@/constants';
import type { GetBooksQueryModel } from '@/types';
import BookListData from './data/BookListData';
import * as S from './BookList.styled';

const BookList = () => {
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
        <SearchIcon css={S.searchIcon} />
        <S.NoSearchText>검색창을 이용해주세요 :)</S.NoSearchText>
      </S.NoSearchContainer>
    );

  return (
    <S.Container ref={ref}>
      <BookListData books={data.documents} />
      <Pagination
        ref={ref}
        totalPages={Math.ceil(data.meta.total_count / 10)}
        maxPageCount={device === 'mobile' ? 5 : 10}
      />
    </S.Container>
  );
};

export default BookList;
