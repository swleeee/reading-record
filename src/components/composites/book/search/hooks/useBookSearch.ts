import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { BOOK_SEARCH_DROPDOWN_OPTIONS } from '@/constants';
import type { SelectOptionType } from '@/types';

const useBookSearch = () => {
  // TODO: SearchParams 추후 활용
  const [searchParams, setSearchParams] = useSearchParams();

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
