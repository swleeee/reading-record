import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BookRecordCard, MainLayout } from '@/components';
import { deviceState } from '@/stores';
import Book1Img from '@/assets/image/book1.png';
import Book2Img from '@/assets/image/book2.png';
import Profile1Img from '@/assets/image/profile1.png';
import Profile2Img from '@/assets/image/profile2.png';
import type { BookCardType } from '@/types';
import * as S from './index.styled';

const root = () => {
  const device = useRecoilValue(deviceState);

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
    <MainLayout>
      {device === 'mobile' && (
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
      )}
    </MainLayout>
  );
};

export default root;
