import React from 'react';

import BookAddLink from './link/BookAddLink';
import * as S from './CurrentBookMobile.styled';

const CurrentBookMobile = () => {
  const isCurrentReadingBook = false; // TODO: 서버 데이터 받아오기

  return (
    <S.CurrentBookSection>
      <header>
        <S.Title>현재 읽고 있는 책!</S.Title>
      </header>
      {isCurrentReadingBook ? <div>읽고 있는 책 리스트 </div> : <BookAddLink />}
    </S.CurrentBookSection>
  );
};

export default CurrentBookMobile;
