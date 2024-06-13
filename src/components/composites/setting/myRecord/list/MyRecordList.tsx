import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

import { useUser } from '@/contexts';
import { useGetMyLibraries } from '@/services';
import { PATH } from '@/constants';
import * as S from './MyRecordList.styled';

interface MyRecordListProps {
  queryStatus: 'ongoing' | 'completed';
}

const MyRecordList = ({ queryStatus }: MyRecordListProps) => {
  const { user } = useUser();
  const req = { userId: user?.id!, filter: queryStatus };
  const { data } = useGetMyLibraries(req);

  const getDateTime = (
    status: 'ongoing' | 'completed',
    startDateTime: string | null,
    endDateTime: string | null,
  ) => {
    const formattedStartDateTime = dayjs(startDateTime).format('YYYY-MM-DD');

    if (status === 'completed') {
      return `${formattedStartDateTime} ~ ${dayjs(endDateTime).format(
        'YYYY-MM-DD',
      )}`;
    }

    return `${formattedStartDateTime} ~ `;
  };

  if (!data) return null;

  return (
    <S.RecordList>
      {data.records.map((record) => (
        <Link
          key={record.id}
          css={S.link}
          to={`${PATH.BOOK}/${record.book.isbn}`}
        >
          <img
            css={S.bookThumbnail}
            src={record.book.thumbnail}
            alt="book thumbnail"
          />
          <S.BookContentWrapper>
            <S.Title>{record.book.title}</S.Title>
            <S.Author>{record.book.authors.join(', ')}</S.Author>
            <S.DateTime>
              {getDateTime(
                queryStatus,
                record.reading_start_at,
                record.reading_end_at,
              )}
            </S.DateTime>
          </S.BookContentWrapper>
        </Link>
      ))}
    </S.RecordList>
  );
};

export default MyRecordList;
