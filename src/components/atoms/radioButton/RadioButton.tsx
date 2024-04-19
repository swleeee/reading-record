import React from 'react';

import type { SelectOptionType } from '@/types';
import * as S from './RadioButton.styled';

interface RadioButtonProps {
  options: SelectOptionType[];
  selectedOption: SelectOptionType;
  onSelect: (option: SelectOptionType) => () => void;
}

const RadioButton = ({
  options,
  selectedOption,
  onSelect,
}: RadioButtonProps) => {
  return (
    <S.RadioButtonGroup>
      {options.map((option) => (
        <S.Container key={option.key}>
          <S.Input
            type="radio"
            id={option.key}
            value={option.key}
            checked={selectedOption.key === option.key}
            onChange={onSelect(option)}
          />
          <S.Label htmlFor={option.key}>{option.label}</S.Label>
        </S.Container>
      ))}
    </S.RadioButtonGroup>
  );
};

export default RadioButton;
