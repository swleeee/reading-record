import { useGetUserProfile } from '@/services';
import DefaultProfileIcon from '@/assets/icon/ic_default_profile.svg?react';
import * as S from './Profile.styled';

interface ProfileProps {
  className?: string;
  src: string | null;
}

const Profile = ({ className, src }: ProfileProps) => {
  const { data } = useGetUserProfile(src);

  return data ? (
    <img className={className} css={S.profile} src={data} alt="user profile" />
  ) : (
    <DefaultProfileIcon className={className} css={S.profile} />
  );
};

export default Profile;
