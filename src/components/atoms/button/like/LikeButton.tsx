import React from 'react';

import { useUser } from '@/contexts';
import {
  useCreateLikeForRecord,
  useDeleteLikeForRecord,
  useGetTotalLikeForRecord,
} from '@/services';
import LikeIcon from '@/assets/icon/ic_thumb_up.svg?react';
import LikeFilledIcon from '@/assets/icon/ic_thumb_up_filled.svg?react';
import * as S from './LikeButton.styled';

interface LikeButtonProps {
  as?: 'div' | 'button';
  isbn: string;
  recordId: string;
  userId: string;
}

const LikeButton = ({
  as = 'button',
  isbn,
  recordId,
  userId,
}: LikeButtonProps) => {
  const { user } = useUser();
  const currentUserId = user?.id ?? '';

  const req = { isbn, userId: currentUserId, recordId };
  const { data } = useGetTotalLikeForRecord(req);
  const { mutate: createLikeRecord } = useCreateLikeForRecord();
  const { mutate: deleteLikeRecord } = useDeleteLikeForRecord();

  const handleLikeButtonClick =
    (isbn: string, recordId: string, userId: string) =>
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      const req = { recordId, userId, isbn };

      if (!data) return;

      data[0].isliked ? deleteLikeRecord(req) : createLikeRecord(req);
    };

  return (
    <S.LikeButton
      as={as}
      role="button"
      tabIndex={0}
      disabled={currentUserId === userId}
      type="button"
      onClick={
        as === 'button'
          ? handleLikeButtonClick(isbn, recordId, currentUserId)
          : undefined
      }
    >
      {data && (
        <>
          {data?.[0].isliked ? (
            <LikeFilledIcon css={S.likeIcon} />
          ) : (
            <LikeIcon css={S.likeIcon} />
          )}
          <S.Like>{data?.[0].count ?? 0}</S.Like>
        </>
      )}
    </S.LikeButton>
  );
};

export default LikeButton;
