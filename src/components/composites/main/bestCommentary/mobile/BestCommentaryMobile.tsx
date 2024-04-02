import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BookRecordCard } from '@/components';
import Book1Img from '@/assets/image/book1.png';
import Book2Img from '@/assets/image/book2.png';
import Profile1Img from '@/assets/image/profile1.png';
import Profile2Img from '@/assets/image/profile2.png';
import type { BookCardType } from '@/types';
import * as S from './BestCommentaryMobile.styled';

const BestCommentaryMobile = () => {
  // TODO: 더미용 데이터로 삭제 예정
  const books: BookCardType[] = [
    {
      id: '1',
      bookImgSrc: Book1Img,
      profileImgSrc: null,
      userName: '홍길동',
      likeCount: 14,
      createdDate: '2024. 04. 01',
      content:
        'dsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjflj',
    },
    {
      id: '2',
      bookImgSrc: Book2Img,
      profileImgSrc: Profile1Img,
      userName: '김명석',
      likeCount: 8,
      createdDate: '2024. 03. 28',
      content: 'dsfkldsjfldsj',
    },
    {
      id: '3',
      bookImgSrc: Book1Img,
      profileImgSrc: Profile2Img,
      userName: '박주영',
      likeCount: 5,
      createdDate: '2024. 03. 26',
      content: 'dsfk 아ㅣㄴㅇ러ㅣㄴ아  ㅇㄴㅇㄹ안ㄹ ㅇㄴ리ㅏㅇ너',
    },
    {
      id: '4',
      bookImgSrc: Book1Img,
      profileImgSrc: null,
      userName: '홍길동',
      likeCount: 14,
      createdDate: '2024. 03. 30',
      content:
        'dsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjflj',
    },
    {
      id: '5',
      bookImgSrc: Book2Img,
      profileImgSrc: Profile1Img,
      userName: '김명석',
      likeCount: 8,
      createdDate: '2024. 04. 01',
      content: 'dsfkldsjfldsj',
    },
    {
      id: '6',
      bookImgSrc: Book1Img,
      profileImgSrc: Profile2Img,
      userName: '박주영',
      likeCount: 5,
      createdDate: '2024. 03. 31',
      content: 'dsfk 아ㅣㄴㅇ러ㅣㄴ아  ㅇㄴㅇㄹ안ㄹ ㅇㄴ리ㅏㅇ너',
    },
  ];

  return (
    <>
      <header>
        {/* FIXME: 뷰포트 너비에 따라서 Swiper의 좌우 여백이 달라져 Title의 좌우 
        여백과 달라지는 이슈 수정 필요! */}
        <S.Title>주간 기록 베스트 10!</S.Title>
      </header>

      <Swiper
        css={S.swiper}
        centeredSlides
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        rewind
        slidesPerView={1.2}
        spaceBetween={28}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <BookRecordCard linkToBaseUrl="book" {...book} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BestCommentaryMobile;
