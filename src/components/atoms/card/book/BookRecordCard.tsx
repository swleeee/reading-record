import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { deviceState } from '@/stores';
import DefaultPropfileIcon from '@/assets/icon/ic_default_profile.svg?react';
import LikeFillIcon from '@/assets/icon/ic_like_fill.svg?react';
import type { BookCardType } from '@/types';
import * as S from './BookRecordCard.styled';

interface BookRecordCardProps extends BookCardType {
  linkToBaseUrl: string;
}

const BookRecordCard = ({
  linkToBaseUrl,
  id,
  bookImgSrc,
  profileImgSrc,
  userName,
  likeCount,
  content,
}: BookRecordCardProps) => {
  const device = useRecoilValue(deviceState);

  return (
    <Link css={S.bookRecordCard} to={`${linkToBaseUrl}/${id}`}>
      <S.Line />
      <S.BookCoverImg src={bookImgSrc} />
      <S.BookRecordInfo>
        <S.Header>
          {profileImgSrc ? (
            <S.Profile src={profileImgSrc} />
          ) : (
            <DefaultPropfileIcon css={S.profile} />
          )}
          <S.UserName>{userName}</S.UserName>
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
