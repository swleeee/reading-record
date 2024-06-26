import { useParams } from 'react-router-dom';

import { BookReadingStatusChangeModal } from '@/features/change-reading-status';
import type { GetBookDetailServerModel } from '@/entities/book';
import type { GetBookRecordServerModel } from '@/entities/record';
import { Button } from '@/shared/ui';
import { formatNumber, getBookReadingStatus, useModal } from '@/shared/lib';
import { BOOK_READING_STATUS_OPTIONS } from '@/shared/constants';
import * as S from './BookDescription.styled';

interface BookDescriptionProps {
  book?: GetBookDetailServerModel['documents'][number];
  records: GetBookRecordServerModel;
  ratingTotal: number | null;
  recordTotalCount: number;
}

export const BookDescription = ({
  book,
  records,
  ratingTotal,
  recordTotalCount,
}: BookDescriptionProps) => {
  const { id } = useParams();

  const { modalRef, openModal } = useModal();

  if (!book) return null;

  const currentReadingStatus = records.length
    ? getBookReadingStatus(
        records[0].reading_start_at,
        records[0].reading_end_at,
      ) ?? BOOK_READING_STATUS_OPTIONS[0]
    : BOOK_READING_STATUS_OPTIONS[0];

  return (
    <S.BookDescriptionSection>
      <S.BookThumbnailSection src={book.thumbnail}>
        <S.BookThumbnail src={book.thumbnail} alt="book thumbnail" />
      </S.BookThumbnailSection>
      <S.BookInfoWrapper>
        <S.BookSubInfoList>
          <S.BookSubInfoWrapper>
            <S.BookSubInfoTitle>평점</S.BookSubInfoTitle>
            <S.BookSubInfoDescription>
              {ratingTotal ? Math.floor(ratingTotal / recordTotalCount) : '-'} /
              5
            </S.BookSubInfoDescription>
          </S.BookSubInfoWrapper>
          <S.BookSubInfoWrapper>
            <S.BookSubInfoTitle>읽기 완료 수</S.BookSubInfoTitle>
            <S.BookSubInfoDescription>
              {formatNumber(recordTotalCount)}
            </S.BookSubInfoDescription>
          </S.BookSubInfoWrapper>
          <S.BookSubInfoWrapper>
            <S.BookSubInfoTitle>읽기 상태</S.BookSubInfoTitle>
            <S.BookSubInfoDescription>
              <span>{currentReadingStatus.label}</span>
              {/* TODO: 추후 위치 적절한지 고려한 후 수정 필요 */}
              <Button
                styleType="primary"
                sizeType="sm"
                label="변경"
                onClick={openModal(
                  <BookReadingStatusChangeModal
                    ref={modalRef}
                    id={id}
                    recordId={records.length ? records[0].id : null}
                    readingStatus={currentReadingStatus}
                    readingStartDateTime={
                      records.length ? records[0].reading_start_at : null
                    }
                    readingEndDateTime={
                      records.length ? records[0].reading_end_at : null
                    }
                    rating={records.length ? records[0].rating : null}
                    recordContent={
                      records.length ? records[0].record_comment : null
                    }
                  />,
                )}
              />
            </S.BookSubInfoDescription>
          </S.BookSubInfoWrapper>
        </S.BookSubInfoList>
        <S.BookInfoList>
          <S.BookInfoTitle>책 제목</S.BookInfoTitle>
          <S.BookInfoDescription>{book.title}</S.BookInfoDescription>
          <S.BookInfoTitle>출간날짜</S.BookInfoTitle>
          <S.BookInfoDescription>
            {book.datetime.split('T')[0]}
          </S.BookInfoDescription>
          <S.BookInfoTitle>ISBN</S.BookInfoTitle>
          <S.BookInfoDescription>{book.isbn}</S.BookInfoDescription>
          <S.BookInfoTitle>저자</S.BookInfoTitle>
          <S.BookInfoDescription>
            {book.authors.join(', ')}
          </S.BookInfoDescription>
          <S.BookInfoTitle>번역자</S.BookInfoTitle>
          <S.BookInfoDescription>
            {book.translators.join(', ') || '-'}
          </S.BookInfoDescription>
          <S.BookInfoTitle>출판사</S.BookInfoTitle>
          <S.BookInfoDescription>{book.publisher}</S.BookInfoDescription>
          <S.BookInfoTitle>상세 내용</S.BookInfoTitle>
          <S.BookInfoDescription>{book.contents}</S.BookInfoDescription>
        </S.BookInfoList>
      </S.BookInfoWrapper>
    </S.BookDescriptionSection>
  );
};
