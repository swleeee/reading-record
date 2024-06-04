import { Button } from '@/components';
import { useToast } from '@/hooks';
import { TOAST_MESSAGE } from '@/constants';
import * as S from './AuthNavigation.styled';

const AuthNavigation = () => {
  const { addToast } = useToast();

  const handleLinkClick = () => {
    addToast(TOAST_MESSAGE.INFO.SERVICE_REPAIRING);
  };

  return (
    <S.AuthNavigation>
      {/* TODO: 아이디 찾기 기능 구현 시 Button -> Link 변경 */}
      <Button
        label="아이디 찾기"
        sizeType="sm"
        styleType="tertiaryPrimary"
        onClick={handleLinkClick}
      />
      <S.Division />
      {/* TODO: 비밀번호 찾기 기능 구현 시 Button -> Link 변경 */}
      <Button
        label="비밀번호 찾기"
        sizeType="sm"
        styleType="tertiaryPrimary"
        onClick={handleLinkClick}
      />
    </S.AuthNavigation>
  );
};

export default AuthNavigation;
