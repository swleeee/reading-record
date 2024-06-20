import DefaultProfileIcon from '@/shared/assets/icon/ic_default_profile.svg?react';
import * as S from './Profile.styled';

interface ProfileProps {
  className?: string;
  src?: string | null;
}

export const Profile = ({ className, src }: ProfileProps) => {
  return src ? (
    <img className={className} css={S.profile} src={src} alt="user profile" />
  ) : (
    <DefaultProfileIcon className={className} css={S.profile} />
  );
};
