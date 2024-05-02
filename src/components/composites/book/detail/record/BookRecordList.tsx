import React from 'react';

import { Pagination } from '@/components';
import type { GetBookUserRecordsServerModel, SelectOptionType } from '@/types';
import BookRecordListData from './data/BookRecordListData';

interface BookRecordListProps {
  bookRecordData: GetBookUserRecordsServerModel;
  recordSort: SelectOptionType;
  onSortSelect: (option: SelectOptionType) => void;
}

const BookRecordList = ({
  bookRecordData,
  recordSort,
  onSortSelect,
}: BookRecordListProps) => {
  return (
    <>
      <BookRecordListData
        recordSort={recordSort}
        records={bookRecordData.records}
        onSelect={onSortSelect}
      />
      <Pagination
        totalPages={bookRecordData.pageInfo.totalPages}
        maxPageCount={10}
      />
    </>
  );
};

export default BookRecordList;
