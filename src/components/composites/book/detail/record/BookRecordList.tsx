import React, { useState } from 'react';

import { Pagination } from '@/components';
import { BOOK_REVIEW_DROPDOWN_OPTIONS } from '@/constants';
import type { GetBookRecordsServerModel, SelectOptionType } from '@/types';
import BookRecordListData from './data/BookRecordListData';

interface BookRecordListProps {
  bookRecordData: GetBookRecordsServerModel;
}

const BookRecordList = ({ bookRecordData }: BookRecordListProps) => {
  const [selectedFilter, setSelectedFilter] = useState<SelectOptionType>(
    BOOK_REVIEW_DROPDOWN_OPTIONS[0],
  );

  const handleReviewFilterSelect = (option: SelectOptionType) => {
    setSelectedFilter(option);
  };

  return (
    <>
      <BookRecordListData
        selectedFilter={selectedFilter}
        records={bookRecordData.records}
        onSelect={handleReviewFilterSelect}
      />
      <Pagination
        totalPages={bookRecordData.pageInfo.totalPages}
        maxPageCount={10}
      />
    </>
  );
};

export default BookRecordList;
