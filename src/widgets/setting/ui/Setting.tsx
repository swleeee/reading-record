import { useContext } from 'react';

import { ThemeContext } from '@/shared/context';
import { LabelContent, ToggleButton } from '@/shared/ui';
import * as S from './Setting.styled';

export const Setting = () => {
  const { themeMode, toggleThemeMode } = useContext(ThemeContext);

  const handleChange = () => {
    toggleThemeMode();
  };

  return (
    <S.Section>
      <S.Wrapper>
        <LabelContent css={S.labelContent} id="themeMode" label="다크 모드">
          <ToggleButton
            isToggled={themeMode === 'dark'}
            onChange={handleChange}
          />
        </LabelContent>
      </S.Wrapper>
    </S.Section>
  );
};
