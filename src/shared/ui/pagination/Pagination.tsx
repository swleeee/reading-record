import React from 'react';

import ArrowLeftIcon from '@/shared/assets/icon/ic_arrow_left.svg?react';
import ArrowRightIcon from '@/shared/assets/icon/ic_arrow_right.svg?react';
import ArrowDoubleLeftIcon from '@/shared/assets/icon/ic_double_arrow_left.svg?react';
import ArrowDoubleRightIcon from '@/shared/assets/icon/ic_double_arrow_right.svg?react';
import usePagination from '../../lib/hooks/usePagination';
import * as S from './Pagination.styled';

interface PaginationProps {
  className?: string;
  totalPages?: number;
  maxPageCount?: number;
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({ className, totalPages = 0, maxPageCount = 10 }, ref) => {
    const {
      currentPage,
      pageNumbers,
      isPreviousButtonDisabled,
      isNextButtonDisabled,
      handlePreviousPageMove,
      handleFirstPageMove,
      handleNextPageMove,
      handleLastPageMove,
      handleNumberClick,
    } = usePagination(maxPageCount, totalPages, ref);

    return (
      <S.Pagination className={className}>
        <S.Wrapper>
          <S.ArrowButton
            type="button"
            aria-label="move first page"
            disabled={isPreviousButtonDisabled}
            onClick={handleFirstPageMove}
          >
            <ArrowDoubleLeftIcon css={S.arrowIcon} />
          </S.ArrowButton>
          <S.ArrowButton
            type="button"
            aria-label="move previous page"
            disabled={isPreviousButtonDisabled}
            onClick={handlePreviousPageMove}
          >
            <ArrowLeftIcon css={S.arrowIcon} />
          </S.ArrowButton>
          <S.NumberWrapper>
            {pageNumbers.length ? (
              pageNumbers.map((number) => (
                <S.NumberButton
                  key={number}
                  type="button"
                  isCurrentPage={currentPage === number}
                  onClick={handleNumberClick(number)}
                >
                  {number}
                </S.NumberButton>
              ))
            ) : (
              <S.NumberButton type="button" isCurrentPage disabled>
                1
              </S.NumberButton>
            )}
          </S.NumberWrapper>
          <S.ArrowButton
            type="button"
            aria-label="move next page"
            disabled={isNextButtonDisabled}
            onClick={handleNextPageMove}
          >
            <ArrowRightIcon css={S.arrowIcon} />
          </S.ArrowButton>
          <S.ArrowButton
            type="button"
            aria-label="move last page"
            disabled={isNextButtonDisabled}
            onClick={handleLastPageMove}
          >
            <ArrowDoubleRightIcon css={S.arrowIcon} />
          </S.ArrowButton>
        </S.Wrapper>
      </S.Pagination>
    );
  },
);

Pagination.displayName = 'Pagination';
