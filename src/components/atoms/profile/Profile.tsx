import React from 'react';

import DefaultPropfileIcon from '@/assets/icon/ic_default_profile.svg?react';
import * as S from './Profile.styled';

interface ProfileProps {
  className?: string;
  src: string | null;
}

const Profile = ({ className, src }: ProfileProps) => {
  return src ? (
    <img className={className} css={S.profile} src={src} alt="user profile" />
  ) : (
    <DefaultPropfileIcon className={className} css={S.profile} />
  );
};

export default Profile;
