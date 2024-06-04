import { Link, ResetPassword } from '@/components';
import Logo from '@/assets/image/Logo.svg?react';
import * as S from './index.styled';

const Page = () => {
  return (
    <S.Layout>
      <Link css={S.logoLink} styleType="tertiaryBrown" sizeType="md" to="/">
        <Logo css={S.logo} />
      </Link>
      <ResetPassword />
    </S.Layout>
  );
};

export default Page;
