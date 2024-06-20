import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const usePagination = (
  maxPageCount: number,
  totalPages: number,
  ref: React.ForwardedRef<HTMLDivElement>,
) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [pageNumbers, setPageNumbers] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(
    searchParams.get('page') ? +searchParams.get('page')! : 1,
  );

  const isPreviousButtonDisabled = currentPage - maxPageCount <= 0;
  const isNextButtonDisabled =
    Math.floor((currentPage + maxPageCount - 1) / maxPageCount) >
    Math.floor(totalPages / maxPageCount);

  const paging = (
    currentPage: number,
    maxPageCount: number,
    totalPages: number,
  ) => {
    const firstIndex =
      Math.floor((currentPage - 1) / maxPageCount) * maxPageCount + 1;
    const lastIndex = Math.min(firstIndex + maxPageCount - 1, totalPages);

    const result = Array.from(
      { length: lastIndex - firstIndex + 1 },
      (_, i) => firstIndex + i,
    );

    return result;
  };

  const getAllQuery = (searchParams: URL['searchParams']) => {
    return Object.keys(Object.fromEntries(searchParams)).reduce(
      (acc, query) => ({
        ...acc,
        [query]: searchParams.getAll(query),
      }),
      {},
    );
  };

  const scrollToTop = () => {
    typeof ref !== 'function' && ref?.current?.scrollIntoView();
  };

  const handlePreviousPageMove = () => {
    if (currentPage === 1) return;
    scrollToTop();

    const prevPageNum = Math.max(
      maxPageCount *
        Math.floor((currentPage - maxPageCount - 1) / maxPageCount) +
        1,
      1,
    );

    setSearchParams({
      ...getAllQuery(searchParams),
      page: `${prevPageNum}`,
    });
  };

  const handleFirstPageMove = () => {
    if (currentPage === 1) return;
    scrollToTop();

    setSearchParams({
      ...getAllQuery(searchParams),
      page: '1',
    });
  };

  const handleNextPageMove = () => {
    if (currentPage === totalPages) return;
    scrollToTop();

    const nextPageNum = Math.min(
      Math.floor((currentPage + maxPageCount - 1) / maxPageCount) *
        maxPageCount +
        1,
      totalPages,
    );

    setSearchParams({
      ...getAllQuery(searchParams),
      page: `${nextPageNum}`,
    });
  };

  const handleLastPageMove = () => {
    if (currentPage === totalPages) return;
    scrollToTop();

    setSearchParams({
      ...getAllQuery(searchParams),
      page: `${totalPages}`,
    });
  };

  const handleNumberClick = (index: number) => () => {
    scrollToTop();

    setSearchParams({
      ...getAllQuery(searchParams),
      page: `${index}`,
    });
  };

  useEffect(() => {
    setCurrentPage(searchParams.get('page') ? +searchParams.get('page')! : 1);
  }, [searchParams]);

  useEffect(() => {
    setPageNumbers(paging(currentPage, maxPageCount, totalPages));
  }, [currentPage, maxPageCount, totalPages]);

  return {
    currentPage,
    pageNumbers,
    isPreviousButtonDisabled,
    isNextButtonDisabled,
    handlePreviousPageMove,
    handleFirstPageMove,
    handleNextPageMove,
    handleLastPageMove,
    handleNumberClick,
  };
};

export default usePagination;
