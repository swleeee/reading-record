import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { BookDescription } from '@/widgets/bookDescription';
import { BookRecord } from '@/widgets/bookRecords';
import { useGetBookDetail } from '@/entities/book';
import { useGetBookRecord, useGetBookUserRecords } from '@/entities/record';
import { getFirstIsbnSegment, useUser } from '@/shared/lib';
import { BOOK_REVIEW_DROPDOWN_OPTIONS } from '@/shared/constants';
import type { SelectOptionType } from '@/shared/model';

export const BookDetail = () => {
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
      <BookDescription
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
