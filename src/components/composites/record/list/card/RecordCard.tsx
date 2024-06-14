import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import dayjs from 'dayjs';

import { Button, LikeButton, Profile } from '@/components';
import { deviceState } from '@/stores';
import * as S from './RecordCard.styled';

interface RecordCardProps {
  bookThumbnail: string;
  isbn: string;
  recordId: string;
  userId: string;
  created: string;
  updated: string;
  recordComment: string;
  userNickname: string;
  userProfile: string | null;
}

const RecordCard = ({
  bookThumbnail,
  isbn,
  recordId,
  userId,
  created,
  updated,
  recordComment,
  userNickname,
  userProfile,
}: RecordCardProps) => {
  const device = useRecoilValue(deviceState);

  const [isExpanded, setIsExpanded] = useState(false);

  const LINE_LIMIT = device === 'mobile' ? 3 : device === 'tablet' ? 6 : 4;
  const lines = recordComment.split('\n');

  const displayedLinesCount =
    lines.length > LINE_LIMIT ? LINE_LIMIT : lines.length;
  const hasMoreContent = displayedLinesCount !== lines.length;
  const shortenedContent = lines.slice(0, displayedLinesCount);

  const handleExpandClick = (state: boolean) => () => {
    setIsExpanded(state);
  };

  return (
    <S.Card>
      <S.WriterWrapper>
        <Profile src={userProfile} />
        <S.Nickname>{userNickname}</S.Nickname>
        <S.CreatedDate>{dayjs(created).format('YYYY-MM-DD')}</S.CreatedDate>
        {created !== updated && (
          <>
            &nbsp;<S.Badge>수정됨</S.Badge>
          </>
        )}
      </S.WriterWrapper>
      <S.RecordWrapper>
        <img css={S.bookThumbnail} src={bookThumbnail} alt="book thumbnail" />
        <div>
          <S.RecordComment>
            {!isExpanded && hasMoreContent ? (
              <>
                `${shortenedContent.join('\n')}`
                <S.AbbreviationSymbol>...</S.AbbreviationSymbol>
              </>
            ) : (
              recordComment
            )}
          </S.RecordComment>
          {hasMoreContent && (
            <Button
              label={isExpanded ? '접기' : '더보기'}
              sizeType="md"
              styleType="tertiaryGray"
              onClick={handleExpandClick(isExpanded ? false : true)}
            />
          )}
        </div>
      </S.RecordWrapper>
      <S.ControlWrapper>
        <LikeButton isbn={isbn} recordId={recordId} userId={userId} />
      </S.ControlWrapper>
    </S.Card>
  );
};

export default RecordCard;
