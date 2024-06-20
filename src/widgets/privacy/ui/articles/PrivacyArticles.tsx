import type { SelectOptionType } from '@/shared/model';
import PrivacyArticle20240424 from './20240424/PrivacyArticle20240424';
import * as S from './PrivacyArticles.styled';

interface PrivacyArticlesProps {
  selectedOption: SelectOptionType;
}

const PrivacyArticles = ({ selectedOption }: PrivacyArticlesProps) => {
  const renderContent = () => {
    switch (selectedOption.key) {
      case '20240424':
        return <PrivacyArticle20240424 />;

      default:
        return null;
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.Description>
          리딩레코드는(이하 ‘회사’는)
          <b>
            취급하는 모든 개인정보에 대해 개인정보 보호법 등 관련 법령상의
            개인정보보호규정을 준수하여 이용자의 개인정보 보호 및 권익을
            보호하고 <br />
            개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과
            같은 처리방침을 두고 있습니다.
          </b>
        </S.Description>
      </S.Wrapper>
      {renderContent()}
    </>
  );
};

export default PrivacyArticles;
