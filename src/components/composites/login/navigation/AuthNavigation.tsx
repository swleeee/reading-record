import { Link } from '@/components';
import { PATH } from '@/constants';
import * as S from './AuthNavigation.styled';

const AuthNavigation = () => {
  return (
    <S.AuthNavigation>
      <Link sizeType="sm" styleType="tertiaryBrown" to={PATH.RESET_PASSWORD}>
        비밀번호 찾기
      </Link>
    </S.AuthNavigation>
  );
};

export default AuthNavigation;
