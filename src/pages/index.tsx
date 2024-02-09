import React from 'react';

import { BookRecordCard, MainLayout } from '@/components';
import Book1Img from '@/assets/image/book1.png';
import Book2Img from '@/assets/image/book2.png';
import Profile1Img from '@/assets/image/profile1.png';
import Profile2Img from '@/assets/image/profile2.png';
import type { BookCardType } from '@/types';

const root = () => {
  // TODO: 더미용 데이터로 삭제 예정
  const books: BookCardType[] = [
    {
      id: '1',
      bookImgSrc: Book1Img,
      profileImgSrc: null,
      userName: '홍길동',
      likeCount: 14,
      content:
        'dsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjflj',
    },
    {
      id: '2',
      bookImgSrc: Book2Img,
      profileImgSrc: Profile1Img,
      userName: '김명석',
      likeCount: 8,
      content: 'dsfkldsjfldsj',
    },
    {
      id: '3',
      bookImgSrc: Book1Img,
      profileImgSrc: Profile2Img,
      userName: '박주영',
      likeCount: 5,
      content: 'dsfk 아ㅣㄴㅇ러ㅣㄴ아  ㅇㄴㅇㄹ안ㄹ ㅇㄴ리ㅏㅇ너',
    },
  ];

  return (
    <MainLayout>
      {books.map((book) => (
        <BookRecordCard key={book.id} linkToBaseUrl="book" {...book} />
      ))}
    </MainLayout>
  );
};

export default root;
