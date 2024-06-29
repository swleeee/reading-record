import { useState } from 'react';

import { Dropdown } from '@/shared/ui';
import type { SelectOptionType } from '@/shared/model';
import PrivacyArticles from './articles/PrivacyArticles';
import * as S from './Privacy.styled';

export const Privacy = () => {
  const PRIVACY_DATE_OPTIONS = [{ key: '20240424', label: '2024.04.24' }];
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(
    PRIVACY_DATE_OPTIONS[0],
  );

  const handlePrivacyDateSelect = (option: SelectOptionType) => {
    setSelectedOption(option);
  };

  return (
    <section>
      <S.Header>
        <S.Title>개인정보처리방침</S.Title>
        <Dropdown
          options={PRIVACY_DATE_OPTIONS}
          selectedOption={selectedOption}
          onSelect={handlePrivacyDateSelect}
        />
      </S.Header>
      <main>
        <PrivacyArticles selectedOption={selectedOption} />
      </main>
    </section>
  );
};

export default Privacy;
