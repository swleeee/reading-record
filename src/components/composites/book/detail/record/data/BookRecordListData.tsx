import React from 'react';

import { Dropdown, NoData, Profile } from '@/components';
import LikeIcon from '@/assets/icon/ic_thumb_up.svg?react';
import RatingIcon from '@/assets/icon/ic_rating.svg?react';
import { BOOK_REVIEW_DROPDOWN_OPTIONS } from '@/constants';
import type { GetBookRecordsServerModel, SelectOptionType } from '@/types';
import * as S from './BookRecordListData.styled';

interface BookRecordListDataProps {
  selectedFilter: SelectOptionType;
  records: GetBookRecordsServerModel['records'];
  onSelect: (option: SelectOptionType) => void;
}

const BookRecordListData = ({
  selectedFilter,
  records,
  onSelect,
}: BookRecordListDataProps) => {
  return (
    <S.RecordDataSection>
      <S.RecordHeader>
        <S.RecordTitle>도서 감상 내용</S.RecordTitle>
        <Dropdown
          css={S.filterDropdown}
          options={BOOK_REVIEW_DROPDOWN_OPTIONS}
          selectedOption={selectedFilter}
          onSelect={onSelect}
        />
      </S.RecordHeader>
      {records.length ? (
        records.map((record) => (
          <S.RecordList key={record.id}>
            <S.RecordItemHeader>
              <S.PersonInfo>
                <Profile src={record.profileImgSrc} />
                <S.UserName>{record.userName}</S.UserName>
                <S.CreatedDate>
                  {record.createdDate.split('T')[0]}
                </S.CreatedDate>
              </S.PersonInfo>
              <S.RatingInfo>
                {Array.from({ length: 5 }, (_, i) => (
                  <RatingIcon css={S.ratingIcon(i < record.rating)} />
                ))}
              </S.RatingInfo>
            </S.RecordItemHeader>
            <S.RecordItemContent>{record.content}</S.RecordItemContent>
            <S.RecordItemFooter>
              {/* TODO: 클릭 이벤트는 추후 작성 예정 */}
              <S.LikeButton type="button" onClick={() => {}}>
                <LikeIcon css={S.likeIcon} />
                <S.Like>{record.likeCount}</S.Like>
              </S.LikeButton>
            </S.RecordItemFooter>
          </S.RecordList>
        ))
      ) : (
        <NoData
          content={`현재 작성된 감상문이 없습니다.\n책을 읽고 감상문을 작성해주세요 :)`}
        />
      )}
    </S.RecordDataSection>
  );
};

export default BookRecordListData;
