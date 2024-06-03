import { MainLayout, Privacy } from '@/components';
import * as S from './index.styled';

const index = () => {
  return (
    <MainLayout css={S.mainLayout}>
      <Privacy />
    </MainLayout>
  );
};

export default index;
