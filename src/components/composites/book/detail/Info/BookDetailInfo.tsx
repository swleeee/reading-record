import React from 'react';

import { Button } from '@/components';
import { useModal } from '@/hooks';
import type { GetBooksServerModel } from '@/types';
import BookReadingStatusChangeModal from './readingStatusChangeModal/BookReadingStatusChangeModal';
import * as S from './BookDetailInfo.styled';

interface BookInfoContentProps {
  book: GetBooksServerModel['documents'][number];
}

const BookDetailInfo = ({ book }: BookInfoContentProps) => {
  const { modalRef, openModal } = useModal();

  return (
    <S.BookDetailSection>
      <S.BookThumbnailSection src={book.thumbnail}>
        <S.BookThumbnail src={book.thumbnail} alt="book thumbnail" />
      </S.BookThumbnailSection>
      <S.BookInfoWrapper>
        <S.BookSubInfoList>
          <S.BookSubInfoWrapper>
            <S.BookSubInfoTitle>평점</S.BookSubInfoTitle>
            <S.BookSubInfoDescription>4.5 / 5</S.BookSubInfoDescription>
          </S.BookSubInfoWrapper>
          <S.BookSubInfoWrapper>
            <S.BookSubInfoTitle>읽기 완료 수</S.BookSubInfoTitle>
            <S.BookSubInfoDescription>123k</S.BookSubInfoDescription>
          </S.BookSubInfoWrapper>
          <S.BookSubInfoWrapper>
            <S.BookSubInfoTitle>읽기 상태</S.BookSubInfoTitle>
            <S.BookSubInfoDescription>
              <span>읽지 않음</span>
              {/* TODO: 추후 위치 적절한지 고려한 후 수정 필요 */}
              <Button
                styleType="tertiary"
                sizeType="sm"
                label="변경"
                onClick={openModal(
                  <BookReadingStatusChangeModal
                    ref={modalRef}
                    readingStatus="completed"
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
            {book.translators.join(', ')}
          </S.BookInfoDescription>
          <S.BookInfoTitle>출판사</S.BookInfoTitle>
          <S.BookInfoDescription>{book.publisher}</S.BookInfoDescription>
          <S.BookInfoTitle>상세 내용</S.BookInfoTitle>
          <S.BookInfoDescription>{book.contents}</S.BookInfoDescription>
        </S.BookInfoList>
      </S.BookInfoWrapper>
    </S.BookDetailSection>
  );
};

export default BookDetailInfo;
