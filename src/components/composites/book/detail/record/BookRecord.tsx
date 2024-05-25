import React, { useRef } from 'react';

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
  const ref = useRef<HTMLDivElement>(null);

  return (
    <S.Container ref={ref}>
      <BookRecordList
        recordSort={recordSort}
        records={bookRecordData.records}
        onSelect={onSortSelect}
      />
      <Pagination ref={ref} totalPages={2} maxPageCount={10} />
    </S.Container>
  );
};

export default BookRecord;
