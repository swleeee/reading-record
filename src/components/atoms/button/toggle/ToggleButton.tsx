import React from 'react';

import * as S from './ToggleButton.styled';

interface ToggleButtonProps {
  isToggled: boolean;
  onChange: () => void;
}

const ToggleButton = ({ isToggled, onChange }: ToggleButtonProps) => {
  return (
    <S.Container>
      <S.Input
        type="checkbox"
        aria-checked={isToggled}
        checked={isToggled}
        onChange={onChange}
      />
      <S.Span />
    </S.Container>
  );
};

export default ToggleButton;
