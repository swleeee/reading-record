import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';

import { Profile } from '@/components';
import { deviceState } from '@/stores';
import LikeFillIcon from '@/assets/icon/ic_like_fill.svg?react';
import type { GetBestRecordsServerModel } from '@/types';
import * as S from './BookRecordCard.styled';

type BookRecordCardProps = {
  linkToBaseUrl: string;
} & GetBestRecordsServerModel[number];

const BookRecordCard = ({
  linkToBaseUrl,
  created_at,
  isbn,
  record_comment,
  like_count,
  thumbnail,
  nickname,
  profile_url,
}: BookRecordCardProps) => {
  const device = useRecoilValue(deviceState);

  return (
    // TODO: Link가 아니라 버튼 형태로 해서 모달 열어서 해당 감상문 기록을 자세히 볼 수 있도록 화면 수정 필요
    <Link css={S.bookRecordCard} to={`${linkToBaseUrl}/${isbn}`}>
      <S.BookCoverImg src={thumbnail} />
      <S.BookRecordInfo>
        <S.Header>
          <Profile src={profile_url} />
          <S.UserName>{nickname}</S.UserName>
          <S.CreatedDate>
            {dayjs(created_at).format('YYYY-MM-DD')}
          </S.CreatedDate>
          <S.LikeWrapper>
            <LikeFillIcon css={S.likeIcon} />
            <S.LikeCount>{like_count}</S.LikeCount>
          </S.LikeWrapper>
        </S.Header>
        <S.RecordContent device={device}>{record_comment}</S.RecordContent>
      </S.BookRecordInfo>
    </Link>
  );
};

export default BookRecordCard;
