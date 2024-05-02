import React from 'react';

import { Pagination } from '@/components';
import type { GetBookUserRecordsServerModel, SelectOptionType } from '@/types';
import { BookRecordList } from './list';

interface BookRecordProps {
  bookRecordData: GetBookUserRecordsServerModel;
  recordSort: SelectOptionType;
  onSortSelect: (option: SelectOptionType) => void;
}

const BookRecord = ({
  bookRecordData,
  recordSort,
  onSortSelect,
}: BookRecordProps) => {
  return (
    <>
      <BookRecordList
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

export default BookRecord;
