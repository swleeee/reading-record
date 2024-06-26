import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { BOOK_SEARCH_DROPDOWN_OPTIONS } from '@/shared/constants';
import type { SelectOptionType } from '@/shared/model';

const useBookSearch = () => {
  // TODO: SearchParams 추후 활용
  const [, setSearchParams] = useSearchParams();

  const [, setSearchValue] = useState('');
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(
    BOOK_SEARCH_DROPDOWN_OPTIONS[0],
  );

  const handleSearchTypeSelect = (option: SelectOptionType) => {
    setSelectedOption(option);
  };

  const handleBookSearch = (value: string) => (e: React.FormEvent) => {
    e.preventDefault();

    setSearchValue(value);
    setSearchParams({ [selectedOption.key]: value });
  };

  return { selectedOption, handleSearchTypeSelect, handleBookSearch };
};

export default useBookSearch;
