import { BookSearchCardSkeleton } from '@/entities/book';
import * as S from './BookList.styled';

export const BookListSkeleton = () => {
  return (
    <S.Container>
      {Array.from({ length: 10 }, (_, i) => (
        <BookSearchCardSkeleton key={i} />
      ))}
    </S.Container>
  );
};
