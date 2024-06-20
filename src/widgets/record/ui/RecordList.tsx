import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { RecordCard } from '@/widgets/recordCard';
import { useGetUserRecords } from '@/entities/record';
import { NoData, Pagination } from '@/shared/ui';
import { useUser } from '@/shared/lib';
import { deviceState } from '@/shared/stores';
import * as S from './RecordList.styled';

export const RecordList = () => {
  const [searchParams] = useSearchParams();

  const ref = useRef<HTMLDivElement>(null);

  const device = useRecoilValue(deviceState);
  const [topPosition, setTopPosition] = useState(0);

  const { user } = useUser();
  const req = {
    userId: user?.id!,
    page: searchParams.get('page') ? +searchParams.get('page')! : 1,
    pageSize: 10,
    filter: 'completed' as const,
    target: 'all' as const,
  };
  const { data } = useGetUserRecords(req);

  useEffect(() => {
    if (!ref.current) return;

    setTopPosition(ref.current.getBoundingClientRect().top);
  }, [ref]);

  if (!data) return null;

  return (
    <S.Container ref={ref}>
      {data.records.length ? (
        <S.RecordList>
          {data.records.map((record) => (
            <RecordCard
              key={record.id}
              bookThumbnail={record.book.thumbnail}
              isbn={record.book.isbn}
              recordId={record.id}
              userId={record.user_id}
              created={record.created_at}
              updated={record.updated_at}
              recordComment={record.record_comment as string}
              userNickname={record.users.nickname}
              userProfile={record.users.profile_url}
            />
          ))}
        </S.RecordList>
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
