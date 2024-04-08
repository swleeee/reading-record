import React from 'react';

import DoneIcon from '@/assets/icon/ic_done.svg?react';
import type { SelectOptionType } from '@/types';
import * as S from './SegmentedButton.styled';

interface SegmentedButtonProps {
  className?: string;
  options: SelectOptionType[]; // TODO: options 배열의 길이가 2 이상만 허용되도록 Type 설정
  selectedOption: SelectOptionType;
  onClick: (option: SelectOptionType) => () => void;
}

const SegmentedButton = ({
  className,
  options,
  selectedOption,
  onClick,
}: SegmentedButtonProps) => {
  const getIndexType = (totalLength: number, currentIndex: number) => {
    if (currentIndex === 0) return 'first';
    if (currentIndex === totalLength) return 'last';

    return 'remainder';
  };

  return (
    <S.SegmentButtonGroup className={className}>
      {options.map((option, i) => {
        const isSelected = option.key === selectedOption.key;

        return (
          <S.SegmentButton
            key={option.key}
            type="button"
            isSelected={isSelected}
            indexType={getIndexType(options.length - 1, i)}
            onClick={onClick(option)}
          >
            <S.SegmentButtonLabel>{option.label}</S.SegmentButtonLabel>
            <DoneIcon css={S.checkIcon(isSelected)} />
          </S.SegmentButton>
        );
      })}
    </S.SegmentButtonGroup>
  );
};

export default SegmentedButton;
