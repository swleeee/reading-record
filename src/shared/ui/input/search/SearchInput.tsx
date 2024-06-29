import React, { useState } from 'react';

import SearchIcon from '@/shared/assets/icon/ic_search.svg?react';
import { Input } from '../Input';
import * as S from './SearchInput.styled';

interface SearchInputProps {
  className?: string;
  maxLength?: number;
  placeholder?: string;
  onSearch: (value: string) => (e: React.FormEvent) => void;
}

export const SearchInput = ({
  className,
  maxLength,
  placeholder,
  onSearch,
}: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <S.Form className={className} onSubmit={onSearch(searchValue)}>
      <Input
        css={S.searchInput}
        maxLength={maxLength}
        placeholder={placeholder}
        value={searchValue}
        onChange={handleSearchValueChange}
      >
        <S.SearchButton aria-label="search">
          <SearchIcon css={S.iconStyle} />
        </S.SearchButton>
      </Input>
    </S.Form>
  );
};
