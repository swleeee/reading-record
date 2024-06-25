import { LabelContent, ToggleButton } from '@/shared/ui';
import { useThemeMode } from '@/shared/lib';
import * as S from './Setting.styled';

export const Setting = () => {
  const { themeMode, toggleThemeMode } = useThemeMode();

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
