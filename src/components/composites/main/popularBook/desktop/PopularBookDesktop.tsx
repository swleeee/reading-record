import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { SegmentedButton } from '@/components';
import { DATE_FILTER_OPTIONS } from '@/assets';
import type { PopularBookCardType, SelectOptionType } from '@/types';
import * as S from './PopularBookDesktop.styled';

interface PopularBookDesktopProps {
  books: PopularBookCardType[];
}

const PopularBookDesktop = ({ books }: PopularBookDesktopProps) => {
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(
    DATE_FILTER_OPTIONS[0],
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
          options={DATE_FILTER_OPTIONS}
          selectedOption={selectedOption}
          onClick={handleOptionSelect}
        />
      </header>
      <S.PopularBookCardWrapper>
        {books.map((book) => (
          <Link css={S.bookDetailLink} to={`book/${book.id}`}>
            <S.BookThumbnail src={book.bookImgSrc} alt="book thumbnail" />
          </Link>
        ))}
      </S.PopularBookCardWrapper>
    </S.PopularBookSection>
  );
};

export default PopularBookDesktop;
