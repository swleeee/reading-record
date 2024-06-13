import { BookRecordCard, NoData } from '@/components';
import NoRecordImg from '@/assets/image/no_record.svg?react';
import type { GetBestRecordsServerModel } from '@/types';
import * as S from './BestCommentaryDesktop.styled';

interface BestCommentaryDesktopProps {
  books: GetBestRecordsServerModel | null;
}

const BestCommentaryDesktop = ({ books }: BestCommentaryDesktopProps) => {
  return (
    <S.BestCommentarySection>
      <header>
        <S.Title>주간 기록 베스트 10!</S.Title>
      </header>
      {books?.length ? (
        <S.BestCommentaryCardWrapper>
          {books.map((book) => (
            <BookRecordCard key={book.id} bookRecord={book} />
          ))}
        </S.BestCommentaryCardWrapper>
      ) : (
        <NoData
          css={S.noRecordData}
          image={NoRecordImg}
          content="저번 주 독서기록이 없습니다."
        />
      )}
    </S.BestCommentarySection>
  );
};

export default BestCommentaryDesktop;
