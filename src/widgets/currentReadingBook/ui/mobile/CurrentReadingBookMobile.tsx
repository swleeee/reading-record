import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import {
  BookAddLink,
  BookReadingCard,
  type GetUserRecordServerModel,
} from '@/entities/record';
import * as S from './CurrentReadingBookMobile.styled';

interface CurrentReadingBookMobileProps {
  books?: GetUserRecordServerModel['records'];
}

const CurrentReadingBookMobile = ({ books }: CurrentReadingBookMobileProps) => {
  return (
    <S.ReadingBookSection>
      <header>
        <S.Title>현재 읽고 있는 책!</S.Title>
      </header>
      {books?.length ? (
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
          {books.map((book) => (
            <SwiperSlide key={book.id}>
              <BookReadingCard {...book} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <BookAddLink />
      )}
    </S.ReadingBookSection>
  );
};

export default CurrentReadingBookMobile;
