import React, { useState } from 'react';

import { Dropdown } from '@/components';
import { PRIVACY_DATE_OPTIONS } from '@/constants';
import type { SelectOptionType } from '@/types';
import PrivacyArticles from './articles/PrivacyArticles';
import * as S from './Privacy.styled';

const Privacy = () => {
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
