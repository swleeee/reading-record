import { useRef, useState } from 'react';

import { useOnClickOutside } from '@/shared/lib';
import CheckIcon from '@/shared/assets/icon/ic_done.svg?react';
import CollapseIcon from '@/shared/assets/icon/ic_expand_less.svg?react';
import ExpandIcon from '@/shared/assets/icon/ic_expand_more.svg?react';
import type { SelectOptionType } from '@/shared/model/types';
import * as S from './Dropdown.styled';

interface DropdownProps {
  className?: string;
  options: SelectOptionType[];
  placeholder?: string;
  selectedOption: SelectOptionType | null;
  onSelect: (option: SelectOptionType) => void;
}

export const Dropdown = ({
  className,
  options,
  placeholder,
  selectedOption,
  onSelect,
}: DropdownProps) => {
  const dropdownRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenStateChange = (state: boolean) => () => {
    setIsOpen(state);
  };

  const handleOptionClick = (option: SelectOptionType) => () => {
    onSelect(option);
    setIsOpen(false);
  };

  useOnClickOutside(dropdownRef, handleOpenStateChange(false));

  return (
    <S.Dropdown className={className} ref={dropdownRef}>
      <S.DropdownToggleButton
        type="button"
        onClick={handleOpenStateChange(!isOpen)}
      >
        {selectedOption ? (
          <S.Label>{selectedOption.label}</S.Label>
        ) : (
          placeholder && <S.Placeholder>{placeholder}</S.Placeholder>
        )}
        {isOpen ? (
          <CollapseIcon css={S.iconStyle} />
        ) : (
          <ExpandIcon css={S.iconStyle} />
        )}
      </S.DropdownToggleButton>
      {isOpen && (
        <S.DropdownOptionWrapper className="dropdown-menu">
          {options.map((option) => (
            <S.DropdownOption key={option.key}>
              <S.OptionButton
                type="button"
                isSelected={option.key === selectedOption?.key}
                onClick={handleOptionClick(option)}
              >
                <span>{option.label}</span>
                <CheckIcon />
              </S.OptionButton>
            </S.DropdownOption>
          ))}
        </S.DropdownOptionWrapper>
      )}
    </S.Dropdown>
  );
};
