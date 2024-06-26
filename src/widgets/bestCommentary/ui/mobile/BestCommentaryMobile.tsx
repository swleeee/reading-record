import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BookRecordCard } from '@/widgets/bookRecordCard';
import type { GetBestRecordsServerModel } from '@/entities/record';
import { NoData } from '@/shared/ui';
import NoRecordImg from '@/shared/assets/image/no_record.svg?react';
import * as S from './BestCommentaryMobile.styled';

interface BestCommentaryMobileProps {
  books: GetBestRecordsServerModel | null;
}

const BestCommentaryMobile = ({ books }: BestCommentaryMobileProps) => {
  return (
    <>
      <header>
        {/* FIXME: 뷰포트 너비에 따라서 Swiper의 좌우 여백이 달라져 Title의 좌우 
        여백과 달라지는 이슈 수정 필요! */}
        <S.Title>주간 기록 베스트 10!</S.Title>
      </header>
      {books?.length ? (
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
              <BookRecordCard bookRecord={book} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <NoData
          css={S.noRecordData}
          image={NoRecordImg}
          content="저번 주 독서기록이 없습니다."
        />
      )}
    </>
  );
};

export default BestCommentaryMobile;
