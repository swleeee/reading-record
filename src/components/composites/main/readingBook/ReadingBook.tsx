import React from 'react';
import { useRecoilValue } from 'recoil';

import { deviceState } from '@/stores';
import Book1Img from '@/assets/image/book1.png';
import Book2Img from '@/assets/image/book2.png';
import type { ReadingBookCardType } from '@/types';
import ReadingBookMobile from './mobile/ReadingBookMobile';
import ReadingBookDesktop from './desktop/ReadingBookDesktop';

const ReadingBook = () => {
  const device = useRecoilValue(deviceState);
  const readingBooks: ReadingBookCardType[] = [
    {
      id: '1',
      bookImgSrc: Book1Img,
      title:
        '트렌드코리아 2024 트렌드코리아 2024 트렌드코리아 2024 트렌드코리아 2024 트렌드코리아 2024',
      publisher: '길벗 출판사',
      authors: ['홍길동'],
      readingStartDate: '2024. 02. 17',
    },
    {
      id: '2',
      bookImgSrc: Book2Img,
      title: '트렌드코리아 2024',
      publisher: '길벗 출판사',
      authors: ['홍길동'],
      readingStartDate: '2024. 02. 17',
    },
    {
      id: '3',
      bookImgSrc: Book1Img,
      title: '트렌드코리아 2024',
      publisher: '길벗 출판사',
      authors: ['홍길동', '이준정'],
      readingStartDate: '2024. 02. 17',
    },
    {
      id: '4',
      bookImgSrc: Book1Img,
      title: '트렌드코리아 2024',
      publisher: '길벗 출판사',
      authors: ['홍길동'],
      readingStartDate: '2024. 02. 17',
    },
    {
      id: '5',
      bookImgSrc: Book2Img,
      title: '트렌드코리아 2024',
      publisher: '길벗 출판사',
      authors: ['홍길동'],
      readingStartDate: '2024. 02. 17',
    },
    {
      id: '6',
      bookImgSrc: Book1Img,
      title: '트렌드코리아 2024 트렌드코리아 2024 트렌드코리아 2024',
      publisher: '길벗 출판사',
      authors: ['홍길동'],
      readingStartDate: '2024. 02. 17',
    },
  ];

  return device === 'mobile' ? (
    <ReadingBookMobile books={readingBooks} />
  ) : (
    <ReadingBookDesktop books={readingBooks} />
  );
};

export default ReadingBook;
