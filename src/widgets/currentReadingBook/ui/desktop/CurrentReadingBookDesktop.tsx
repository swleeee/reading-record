import {
  BookAddLink,
  BookReadingCard,
  type GetUserRecordServerModel,
} from '@/entities/record';
import * as S from './CurrentReadingBookDesktop.styled';

interface CurrentReadingBookDesktopProps {
  books?: GetUserRecordServerModel['records'];
}

const CurrentReadingBookDesktop = ({
  books,
}: CurrentReadingBookDesktopProps) => {
  return (
    <S.ReadingBookSection>
      <header>
        <S.Title>현재 읽고 있는 책!</S.Title>
      </header>
      {books?.length ? (
        <S.BookReadingCardWrapper>
          {books.map((book) => (
            <BookReadingCard css={S.card} key={book.id} {...book} />
          ))}
        </S.BookReadingCardWrapper>
      ) : (
        <BookAddLink />
      )}
    </S.ReadingBookSection>
  );
};

export default CurrentReadingBookDesktop;
