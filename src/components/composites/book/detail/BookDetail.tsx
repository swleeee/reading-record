import React from 'react';
import { useParams } from 'react-router-dom';

import { useUser } from '@/contexts';
import { useGetBookDetail, useGetBookRecord } from '@/services';
import type { GetBookRecordsServerModel } from '@/types';
import BookInfoContent from './Info/BookDetailInfo';
import BookRecordList from './record/BookRecordList';

const BookDetail = () => {
  const { id: isbn } = useParams();

  const query = isbn ? isbn.split(' ').filter((item) => item)[0] : '';
  const { user } = useUser();
  const { data: bookDetailInfo } = useGetBookDetail({ query });
  const { data: bookRecordInfo } = useGetBookRecord({
    userId: user?.id!,
    isbn: query,
  });

  const bookRecordServerData: GetBookRecordsServerModel = {
    pageInfo: {
      totalCount: 37,
      totalPages: 4,
    },
    records: [
      {
        id: '1',
        userName: '홍**',
        createdDate: '2024-04-11T00:00:00.000+09:00',
        profileImgSrc: null,
        likeCount: 0,
        content:
          '이 책은 누구에게나 열려 있는 책이다. 모두에게 추천 될 만한 책이며, 남녀노소 편안하게 읽을 수 있다.',
        rating: 5,
      },
      {
        id: '2',
        userName: '김**',
        createdDate: '2024-04-10T00:00:00.000+09:00',
        profileImgSrc: null,
        likeCount: 25,
        content: `많은 분들이 추천하여 기대를 가지고 읽어보았지만, 돈이 너무나 아까웠다. 다시는 읽지 않을 책이다.\n
          많은 분들이 추천하여 기대를 가지고 읽어보았지만, 돈이 너무나 아까웠다. 다시는 읽지 않을 책이다.\n 많은 분들이 추천하여 기대를 가지고 읽어보았지만, 돈이 너무나 아까웠다. 다시는 읽지 않을 책이다.\n 많은 분들이 추천하여 기대를 가지고 읽어보았지만, 돈이 너무나 아까웠다. 다시는 읽지 않을 책이다.\n 많은 분들이 추천하여 기대를 가지고 읽어보았지만, 돈이 너무나 아까웠다. 다시는 읽지 않을 책이다.\n`,
        rating: 2,
      },
      {
        id: '3',
        userName: '홍**',
        createdDate: '2024-04-11T00:00:00.000+09:00',
        profileImgSrc: null,
        likeCount: 0,
        content:
          '이 책은 누구에게나 열려 있는 책이다. 모두에게 추천 될 만한 책이며, 남녀노소 편안하게 읽을 수 있다.',
        rating: 5,
      },
      {
        id: '4',
        userName: '김**',
        createdDate: '2024-04-10T00:00:00.000+09:00',
        profileImgSrc: null,
        likeCount: 25,
        content: `많은 분들이 추천하여 기대를 가지고 읽어보았지만, 돈이 너무나 아까웠다. 다시는 읽지 않을 책이다.\n
          많은 분들이 추천하여 기대를 가지고 읽어보았지만, 돈이 너무나 아까웠다. 다시는 읽지 않을 책이다.\n 많은 분들이 추천하여 기대를 가지고 읽어보았지만, 돈이 너무나 아까웠다. 다시는 읽지 않을 책이다.\n 많은 분들이 추천하여 기대를 가지고 읽어보았지만, 돈이 너무나 아까웠다. 다시는 읽지 않을 책이다.\n 많은 분들이 추천하여 기대를 가지고 읽어보았지만, 돈이 너무나 아까웠다. 다시는 읽지 않을 책이다.\n`,
        rating: 2,
      },
      {
        id: '5',
        userName: '홍**',
        createdDate: '2024-04-11T00:00:00.000+09:00',
        profileImgSrc: null,
        likeCount: 0,
        content:
          '이 책은 누구에게나 열려 있는 책이다. 모두에게 추천 될 만한 책이며, 남녀노소 편안하게 읽을 수 있다.',
        rating: 5,
      },
      {
        id: '6',
        userName: '김**',
        createdDate: '2024-04-10T00:00:00.000+09:00',
        profileImgSrc: null,
        likeCount: 25,
        content: `많은 분들이 추천하여 기대를 가지고 읽어보았지만, 돈이 너무나 아까웠다. 다시는 읽지 않을 책이다.\n
          많은 분들이 추천하여 기대를 가지고 읽어보았지만, 돈이 너무나 아까웠다. 다시는 읽지 않을 책이다.\n 많은 분들이 추천하여 기대를 가지고 읽어보았지만, 돈이 너무나 아까웠다. 다시는 읽지 않을 책이다.\n 많은 분들이 추천하여 기대를 가지고 읽어보았지만, 돈이 너무나 아까웠다. 다시는 읽지 않을 책이다.\n 많은 분들이 추천하여 기대를 가지고 읽어보았지만, 돈이 너무나 아까웠다. 다시는 읽지 않을 책이다.\n`,
        rating: 2,
      },
    ],
  };

  if (!bookDetailInfo) return null;
  if (!bookRecordInfo) return null;

  return (
    <>
      <BookInfoContent
        book={bookDetailInfo.documents[0]}
        records={bookRecordInfo}
      />
      <BookRecordList bookRecordData={bookRecordServerData} />
    </>
  );
};

export default BookDetail;
