import type { SelectOptionType } from '@/shared/model';
import * as S from './RadioButton.styled';

interface RadioButtonProps {
  disabled?: boolean;
  options: SelectOptionType[];
  selectedOption: SelectOptionType;
  onSelect: (option: SelectOptionType) => () => void;
}

export const RadioButton = ({
  disabled,
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
            disabled={disabled}
            id={option.key || 'none'}
            value={option.key}
            checked={selectedOption.key === option.key}
            onChange={onSelect(option)}
          />
          <S.Label htmlFor={option.key || 'none'} disabled={disabled}>
            {option.label}
          </S.Label>
        </S.Container>
      ))}
    </S.RadioButtonGroup>
  );
};
