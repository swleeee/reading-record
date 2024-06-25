import React from 'react';

import LikeIcon from '@/shared/assets/icon/ic_thumb_up.svg?react';
import LikeFilledIcon from '@/shared/assets/icon/ic_thumb_up_filled.svg?react';
import * as S from './RecordLikeButton.styled';

interface RecordLikeButtonProps {
  as?: 'div' | 'button';
  isLiked?: boolean;
  likeCount?: number;
  isbn: string;
  recordId: string;
  userId: string;
  currentUserId: string;
  onClick: (
    isbn: string,
    recordId: string,
    userId: string,
  ) => (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const RecordLikeButton = ({
  as = 'button',
  isLiked,
  likeCount,
  isbn,
  recordId,
  userId,
  currentUserId,
  onClick,
}: RecordLikeButtonProps) => {
  return (
    <S.RecordLikeButton
      as={as}
      aria-label="like button"
      role="button"
      tabIndex={0}
      disabled={currentUserId === userId}
      type="button"
      onClick={
        as === 'button' ? onClick(isbn, recordId, currentUserId) : undefined
      }
    >
      {isLiked ? (
        <LikeFilledIcon css={S.likeFilledIcon} />
      ) : (
        <LikeIcon css={S.likeIcon} />
      )}
      <S.LikeText isLiked={!!isLiked}>좋아요 {likeCount ?? 0}</S.LikeText>
    </S.RecordLikeButton>
  );
};

export default RecordLikeButton;
