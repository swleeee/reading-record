import type { GetBookUserRecordsServerModel } from '@/entities/record';
import { Dropdown, NoData } from '@/shared/ui';
import { BOOK_REVIEW_DROPDOWN_OPTIONS } from '@/shared/constants';
import type { SelectOptionType } from '@/shared/model';
import BookRecordListItem from './item/BookRecordListItem';
import * as S from './BookRecordList.styled';

interface BookRecordListProps {
  recordSort: SelectOptionType;
  records: GetBookUserRecordsServerModel['records'];
  onSelect: (option: SelectOptionType) => void;
}

const BookRecordList = ({
  recordSort,
  records,
  onSelect,
}: BookRecordListProps) => {
  return (
    <S.RecordSection>
      <S.RecordHeader>
        <S.RecordTitle>도서 감상 내용</S.RecordTitle>
        <Dropdown
          css={S.filterDropdown}
          options={BOOK_REVIEW_DROPDOWN_OPTIONS}
          selectedOption={recordSort}
          onSelect={onSelect}
        />
      </S.RecordHeader>
      {records.length ? (
        records.map((record) => (
          <BookRecordListItem key={record.id} record={record} />
        ))
      ) : (
        <NoData
          css={S.noDataContainer}
          content={`현재 작성된 감상문이 없습니다.\n책을 읽고 감상문을 작성해주세요 :)`}
        />
      )}
    </S.RecordSection>
  );
};

export default BookRecordList;
