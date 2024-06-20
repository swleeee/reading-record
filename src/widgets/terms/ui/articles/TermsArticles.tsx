import type { SelectOptionType } from '@/shared/model';
import TermsArticle20240424 from './20240424/TermsArticle20240424';

interface TermsArticlesProps {
  selectedOption: SelectOptionType;
}

const TermsArticles = ({ selectedOption }: TermsArticlesProps) => {
  switch (selectedOption.key) {
    case '20240424':
      return <TermsArticle20240424 />;

    default:
      return null;
  }
};

export default TermsArticles;
