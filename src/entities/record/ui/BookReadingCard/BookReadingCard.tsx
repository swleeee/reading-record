import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

import type { GetUserRecordServerModel } from '@/entities/record';
import * as S from './BookReadingCard.styled';

interface BookReadingCardProps {
  className?: string;
  id: string;
  book: GetUserRecordServerModel['records'][number]['book'];
  isbn: string;
  reading_start_at: string | null;
  reading_end_at: string | null;
  rating: number | null;
  like_count: number;
  created_at: string;
  updated_at: string;
  user_id: string;
  users: GetUserRecordServerModel['records'][number]['users'];
}

export const BookReadingCard = ({
  className,
  isbn,
  book,
  reading_start_at,
}: BookReadingCardProps) => {
  // const navigate = useNavigate();

  // const handleButtonClick = (isbn: string) => () => {
  //   navigate(`book/${isbn}`);
  // };

  return (
    <Link
      className={className}
      css={S.link}
      to={`book/${isbn}`}
      // onClick={handleButtonClick(isbn)}
    >
      <S.BookTitle>{book.title}</S.BookTitle>
      <S.BookDescriptionWrapper>
        <S.BookThumbnail src={book.thumbnail} alt="book thumbnail" />
        <S.BookContentWrapper>
          <S.Author>{book.authors.join(', ')}</S.Author>
          <S.publisher>{book.publisher}</S.publisher>
          {reading_start_at && (
            <S.Date>{dayjs(reading_start_at).format('YYYY-MM-DD')} ~</S.Date>
          )}
        </S.BookContentWrapper>
      </S.BookDescriptionWrapper>
    </Link>
  );
};

export default BookReadingCard;
