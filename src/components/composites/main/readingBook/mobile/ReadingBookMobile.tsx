import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BookReadingCard } from '@/components';
import Book1Img from '@/assets/image/book1.png';
import Book2Img from '@/assets/image/book2.png';
import type { ReadingBookCardType } from '@/types';
import BookAddLink from './link/BookAddLink';
import * as S from './ReadingBookMobile.styled';

const ReadingBookMobile = () => {
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

  return (
    <S.ReadingBookSection>
      <header>
        <S.Title>현재 읽고 있는 책!</S.Title>
      </header>
      {readingBooks.length ? (
        <Swiper
          css={S.swiper}
          breakpoints={{
            375: {
              width: 375,
              slidesPerView: 1.8,
            },
            476: {
              width: 476,
              slidesPerView: 2.2,
            },
            576: {
              width: 576,
              slidesPerView: 2.8,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1.5}
          slidesOffsetBefore={24}
          slidesOffsetAfter={24}
          spaceBetween={2}
        >
          {readingBooks.map((readingBook) => (
            <SwiperSlide key={readingBook.id}>
              <BookReadingCard {...readingBook} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <BookAddLink />
      )}
    </S.ReadingBookSection>
  );
};

export default ReadingBookMobile;
