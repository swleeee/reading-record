import React from 'react';

import { Pagination } from '@/components';
import type { GetBookUserRecordsServerModel, SelectOptionType } from '@/types';
import { BookRecordList } from './list';
import * as S from './BookRecord.styled';

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
    <S.Container>
      <BookRecordList
        recordSort={recordSort}
        records={bookRecordData.records}
        onSelect={onSortSelect}
      />
      <Pagination
        totalPages={bookRecordData.pageInfo.totalPages}
        maxPageCount={10}
      />
    </S.Container>
  );
};

export default BookRecord;
