import { BookRecordCard } from '@/components';
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
      <S.BestCommentaryCardWrapper>
        {books?.map((book) => (
          <BookRecordCard key={book.id} bookRecord={book} />
        ))}
      </S.BestCommentaryCardWrapper>
    </S.BestCommentarySection>
  );
};

export default BestCommentaryDesktop;
