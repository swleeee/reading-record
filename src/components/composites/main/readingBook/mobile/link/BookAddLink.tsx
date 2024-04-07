import React from 'react';
import { Link } from 'react-router-dom';

import AddIcon from '@/assets/icon/ic_add.svg?react';
import * as S from './BookAddLink.styled';

const BookAddLink = () => {
  return (
    // TODO: 하이퍼 링크 고민 후 수정 예정
    <Link css={S.bookAddLink} to="/addBook">
      <AddIcon css={S.addIcon} />
      <S.MainDescription>현재 읽고 있는 책이 없습니다.</S.MainDescription>
      <S.SubDescription>책을 추가하시겠습니까?</S.SubDescription>
    </Link>
  );
};

export default BookAddLink;
