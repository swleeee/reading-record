import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Profile } from '@/components';
import { deviceState } from '@/stores';
import LikeFillIcon from '@/assets/icon/ic_like_fill.svg?react';
import type { BookRecordCardType } from '@/types';
import * as S from './BookRecordCard.styled';

interface BookRecordCardProps extends BookRecordCardType {
  linkToBaseUrl: string;
}

const BookRecordCard = ({
  linkToBaseUrl,
  id,
  bookImgSrc,
  profileImgSrc,
  userName,
  likeCount,
  createdDate,
  content,
}: BookRecordCardProps) => {
  const device = useRecoilValue(deviceState);

  return (
    <Link css={S.bookRecordCard} to={`${linkToBaseUrl}/${id}`}>
      <S.BookCoverImg src={bookImgSrc} />
      <S.BookRecordInfo>
        <S.Header>
          <Profile src={profileImgSrc} />
          <S.UserName>{userName}</S.UserName>
          <S.CreatedDate>{createdDate}</S.CreatedDate>
          <S.LikeWrapper>
            <LikeFillIcon css={S.likeIcon} />
            <S.LikeCount>{likeCount}</S.LikeCount>
          </S.LikeWrapper>
        </S.Header>
        <S.RecordContent device={device}>{content}</S.RecordContent>
      </S.BookRecordInfo>
    </Link>
  );
};

export default BookRecordCard;
