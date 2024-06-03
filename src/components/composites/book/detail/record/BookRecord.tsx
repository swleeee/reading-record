import { useRef } from 'react';
import { useRecoilValue } from 'recoil';

import { Pagination } from '@/components';
import { deviceState } from '@/stores';
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

  const device = useRecoilValue(deviceState);

  return (
    <S.Container ref={ref}>
      <BookRecordList
        recordSort={recordSort}
        records={bookRecordData.records}
        onSelect={onSortSelect}
      />
      <Pagination
        ref={ref}
        totalPages={bookRecordData.pageInfo.totalPages}
        maxPageCount={device === 'mobile' ? 5 : 10}
      />
    </S.Container>
  );
};

export default BookRecord;
