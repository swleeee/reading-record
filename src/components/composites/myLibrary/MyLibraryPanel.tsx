import { useEffect, useRef, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { useUser } from '@/contexts';
import { BookListCard, NoData, Pagination } from '@/components';
import { useGetMyLibraries } from '@/services';
import { deviceState } from '@/stores';
import { getBookReadingStatus } from '@/utils';
import { BOOK_READING_STATUS_OPTIONS } from '@/constants';
import * as S from './MyLibraryPanel.styled';

interface MyLibraryPanelProps {
  queryStatus: 'all' | 'ongoing' | 'completed';
}

const MyLibraryPanel = ({ queryStatus }: MyLibraryPanelProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const device = useRecoilValue(deviceState);
  const [topPosition, setTopPosition] = useState(0);

  const { user } = useUser();
  const req = {
    userId: user?.id!,
    page: 1,
    pageSize: 10,
    filter: queryStatus,
  };
  const { data } = useGetMyLibraries(req);

  useEffect(() => {
    if (!ref.current) return;

    setTopPosition(ref.current.getBoundingClientRect().top);
  }, [ref]);

  if (!data) return null;

  return (
    <S.Container ref={ref}>
      {data.records.length ? (
        data.records.map((record) => (
          <BookListCard
            key={record.book.isbn}
            readingStatus={
              getBookReadingStatus(
                record.reading_start_at,
                record.reading_end_at,
              ) ?? BOOK_READING_STATUS_OPTIONS[0]
            }
            isbn={record.book.isbn}
            thumbnail={record.book.thumbnail}
            bookTitle={record.book.title}
            authors={record.book.authors}
            translators={record.book.translators}
            publisher={record.book.publisher}
            datetime={record.book.datetime}
            bookContent={record.book.contents}
          />
        ))
      ) : (
        <NoData css={S.noData(topPosition)} content={`비어 있습니다`} />
      )}
      <Pagination
        ref={ref}
        totalPages={Math.ceil((data.totalCount ?? 0) / 10)}
        maxPageCount={device === 'mobile' ? 5 : 10}
      />
    </S.Container>
  );
};

export default MyLibraryPanel;
