import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { useUser } from '@/contexts';
import {
  useGetBookDetail,
  useGetBookRecord,
  useGetBookUserRecords,
} from '@/services';
import { getFirstIsbnSegment } from '@/utils';
import { BOOK_REVIEW_DROPDOWN_OPTIONS } from '@/constants';
import { SelectOptionType } from '@/types';
import BookInfoContent from './info/BookDetailInfo';
import BookRecord from './record/BookRecord';

const BookDetail = () => {
  const [searchParams] = useSearchParams();
  const { id: isbn } = useParams();

  const query = getFirstIsbnSegment(isbn);
  const [selectedFilter, setSelectedFilter] = useState<SelectOptionType>(
    BOOK_REVIEW_DROPDOWN_OPTIONS[0],
  );

  const { user } = useUser();
  const { data: bookDetailInfo } = useGetBookDetail({ query });
  const { data: bookRecordInfo } = useGetBookRecord({
    userId: user?.id!,
    isbn: isbn!,
  });

  const { data: bookUserRecordInfo } = useGetBookUserRecords({
    isbn: isbn!,
    page: searchParams.get('page') ? +searchParams.get('page')! : 1,
    pageSize: 10,
    sort: selectedFilter.key as 'like' | 'recent',
  });

  const handleRecordSortSelect = (option: SelectOptionType) => {
    setSelectedFilter(option);
  };

  return (
    <>
      <BookInfoContent
        book={bookDetailInfo?.documents[0]}
        records={bookRecordInfo}
        ratingTotal={bookUserRecordInfo.ratingTotal}
        recordTotalCount={bookUserRecordInfo.pageInfo.totalCount}
      />
      <BookRecord
        bookRecordData={bookUserRecordInfo}
        recordSort={selectedFilter}
        onSortSelect={handleRecordSortSelect}
      />
    </>
  );
};

export default BookDetail;
