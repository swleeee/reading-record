import { useState } from 'react';

import { Dropdown } from '@/components';
import { TERMS_DATE_OPTIONS } from '@/constants';
import type { SelectOptionType } from '@/types';
import TermsArticles from './articles/TermsArticles';
import * as S from './Terms.styled';

const Terms = () => {
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(
    TERMS_DATE_OPTIONS[0],
  );

  const handleTermsDateSelect = (option: SelectOptionType) => {
    setSelectedOption(option);
  };

  return (
    <section>
      <S.Header>
        <S.Title>서비스 이용 약관</S.Title>
        <Dropdown
          options={TERMS_DATE_OPTIONS}
          selectedOption={selectedOption}
          onSelect={handleTermsDateSelect}
        />
      </S.Header>
      <main>
        <TermsArticles selectedOption={selectedOption} />
      </main>
    </section>
  );
};

export default Terms;
