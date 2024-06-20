import { useRef } from 'react';
import { useRecoilValue } from 'recoil';

import type { GetBookUserRecordsServerModel } from '@/entities/record';
import { Pagination } from '@/shared/ui';
import { deviceState } from '@/shared/stores';
import type { SelectOptionType } from '@/shared/model';
import BookRecordList from './list/BookRecordList';
import * as S from './BookRecord.styled';

interface BookRecordProps {
  bookRecordData: GetBookUserRecordsServerModel;
  recordSort: SelectOptionType;
  onSortSelect: (option: SelectOptionType) => void;
}

export const BookRecord = ({
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
