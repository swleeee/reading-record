import { Layout } from '@/widgets/layout';
import { Privacy } from '@/widgets/privacy';
import * as S from './Page.styled';

const PrivacyPage = () => {
  return (
    <Layout css={S.layoutStyle}>
      <Privacy />
    </Layout>
  );
};

export default PrivacyPage;
