import { Link } from 'react-router-dom';

import AddIcon from '@/shared/assets/icon/ic_add.svg?react';
import { PATH } from '@/shared/constants';
import * as S from './BookAddLink.styled';

export const BookAddLink = () => {
  return (
    <Link css={S.bookAddLink} to={PATH.BOOK}>
      <AddIcon css={S.addIcon} />
      <S.MainDescription>현재 읽고 있는 책이 없습니다.</S.MainDescription>
      <S.SubDescription>책을 검색하여 추가해주세요.</S.SubDescription>
    </Link>
  );
};

export default BookAddLink;
