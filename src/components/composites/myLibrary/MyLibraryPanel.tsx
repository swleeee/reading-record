import React from 'react';

import { useUser } from '@/contexts';
import { BookListCard, NoData, Pagination } from '@/components';
import { useGetMyLibraries } from '@/services';
import { getBookReadingStatus } from '@/utils';
import { BOOK_READING_STATUS_OPTIONS } from '@/constants';

interface MyLibraryPanelProps {
  queryStatus: 'all' | 'ongoing' | 'completed';
}

const MyLibraryPanel = ({ queryStatus }: MyLibraryPanelProps) => {
  const { user } = useUser();

  const req = {
    userId: user?.id!,
    page: 1,
    pageSize: 10,
    filter: queryStatus,
  };

  const { data } = useGetMyLibraries(req);

  if (!data) return null;

  return (
    <div>
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
        <NoData content={`비어 있습니다`} />
      )}
      <Pagination
        totalPages={Math.ceil((data.totalCount ?? 0) / 10)}
        maxPageCount={10}
      />
    </div>
  );
};

export default MyLibraryPanel;
