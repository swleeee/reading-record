import React from 'react';

import { useUser } from '@/contexts';
import { Dropdown, NoData, Profile } from '@/components';
import { useCreateLikeForRecord } from '@/services';
import LikeIcon from '@/assets/icon/ic_thumb_up.svg?react';
import RatingIcon from '@/assets/icon/ic_rating.svg?react';
import { BOOK_REVIEW_DROPDOWN_OPTIONS } from '@/constants';
import type { GetBookUserRecordsServerModel, SelectOptionType } from '@/types';
import * as S from './BookRecordListData.styled';

interface BookRecordListDataProps {
  recordSort: SelectOptionType;
  records: GetBookUserRecordsServerModel['records'];
  onSelect: (option: SelectOptionType) => void;
}

const BookRecordListData = ({
  recordSort,
  records,
  onSelect,
}: BookRecordListDataProps) => {
  const { user } = useUser();

  const { mutate: createLikeRecord } = useCreateLikeForRecord();

  const handleLikeButtonClick = (recordId: string) => () => {
    const req = { recordId, userId: user?.id! };

    createLikeRecord(req);
  };

  return (
    <S.RecordDataSection>
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
          <S.RecordList key={record.id}>
            <S.RecordItemHeader>
              <S.PersonInfo>
                <Profile src={record.users.profile_url} />
                <S.UserName>{record.users.nickname}</S.UserName>
                <S.CreatedDate>{record.created_at.split('T')[0]}</S.CreatedDate>
              </S.PersonInfo>
              <S.RatingInfo>
                {Array.from({ length: 5 }, (_, i) => (
                  <RatingIcon
                    key={i}
                    css={S.ratingIcon(i < (record.rating ?? 0))}
                  />
                ))}
              </S.RatingInfo>
            </S.RecordItemHeader>
            <S.RecordItemContent>{record.record_comment}</S.RecordItemContent>
            <S.RecordItemFooter>
              <S.LikeButton
                type="button"
                onClick={handleLikeButtonClick(record.id)}
              >
                <LikeIcon css={S.likeIcon} />
                <S.Like>{record.like_count}</S.Like>
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
