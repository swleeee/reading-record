import { Link } from '@/components';
import { PATH } from '@/constants';
import * as S from './AuthNavigation.styled';

const AuthNavigation = () => {
  return (
    <S.AuthNavigation>
      {/* TODO: 비밀번호 찾기 기능 구현 시 Button -> Link 변경 */}
      <Link sizeType="sm" styleType="tertiaryBrown" to={PATH.RESET_PASSWORD}>
        비밀번호 찾기
      </Link>
    </S.AuthNavigation>
  );
};

export default AuthNavigation;
