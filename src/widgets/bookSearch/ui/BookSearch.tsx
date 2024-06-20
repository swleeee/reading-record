import { Dropdown, SearchInput } from '@/shared/ui';
import { BOOK_SEARCH_DROPDOWN_OPTIONS } from '@/shared/constants';
import useBookSearch from '../lib/useBookSearch';
import * as S from './BookSearch.styled';

export const BookSearch = () => {
  const { selectedOption, handleSearchTypeSelect, handleBookSearch } =
    useBookSearch();

  return (
    <S.BookSearchSection>
      <Dropdown
        css={S.filterDropdown}
        options={BOOK_SEARCH_DROPDOWN_OPTIONS}
        selectedOption={selectedOption}
        onSelect={handleSearchTypeSelect}
      />
      <SearchInput
        css={S.bookSearch}
        maxLength={100}
        placeholder="검색어를 입력해주세요."
        onSearch={handleBookSearch}
      />
    </S.BookSearchSection>
  );
};

export default BookSearch;
