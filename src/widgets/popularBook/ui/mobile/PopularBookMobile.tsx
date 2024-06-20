import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import type { PopularBookCardType } from '@/entities/book';
import { SegmentedButton } from '@/shared/ui';
import { POPULAR_BOOK_DATE_FILTER_OPTIONS } from '@/shared/constants';
import type { SelectOptionType } from '@/shared/model';
import * as S from './PopularBookMobile.styled';

interface PopularBookMobileProps {
  books: PopularBookCardType[];
}

const PopularBookMobile = ({ books }: PopularBookMobileProps) => {
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(
    POPULAR_BOOK_DATE_FILTER_OPTIONS[0],
  );

  const handleOptionSelect = (option: SelectOptionType) => () => {
    setSelectedOption(option);
  };

  return (
    <S.PopularBookSection>
      <header>
        <S.Title>가장 인기있는 도서는?</S.Title>
        <SegmentedButton
          css={S.dateSegmentedButton}
          options={POPULAR_BOOK_DATE_FILTER_OPTIONS}
          selectedOption={selectedOption}
          onClick={handleOptionSelect}
        />
      </header>
      <Swiper
        css={S.swiper}
        breakpoints={{
          375: {
            width: 375,
            slidesPerView: 2.6,
          },
          476: {
            width: 476,
            slidesPerView: 3,
          },
          576: {
            width: 576,
            slidesPerView: 3.6,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={2.4}
        slidesOffsetBefore={24}
        slidesOffsetAfter={24}
        spaceBetween={2}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            <Link css={S.bookDetailLink} to={`book/${book.id}`}>
              <S.BookThumbnail src={book.bookImgSrc} alt="book thumbnail" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.PopularBookSection>
  );
};

export default PopularBookMobile;
