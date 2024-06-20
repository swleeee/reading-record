import { Layout } from '@/widgets/layout';
import { Terms } from '@/widgets/terms';
import * as S from './Page.styled';

const TermsPage = () => {
  return (
    <Layout css={S.layoutStyle}>
      <Terms />
    </Layout>
  );
};

export default TermsPage;
