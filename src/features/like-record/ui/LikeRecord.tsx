import React from 'react';

import {
  RecordLikeButton,
  useCreateLikeForRecord,
  useDeleteLikeForRecord,
  useGetTotalLikeForRecord,
} from '@/entities/record';
import { useUser } from '@/shared/lib';

interface LikeRecordProps {
  as?: 'div' | 'button';
  isbn: string;
  recordId: string;
  userId: string;
}

export const LikeRecord = ({
  as = 'button',
  isbn,
  recordId,
  userId,
}: LikeRecordProps) => {
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
    <RecordLikeButton
      as={as}
      isLiked={data?.[0].isliked}
      likeCount={data?.[0].count}
      isbn={isbn}
      recordId={recordId}
      userId={userId}
      currentUserId={currentUserId}
      onClick={handleLikeButtonClick}
    />
  );
};
