import React from 'react';

import { Button } from '@/components';
import { useGetUserProfile } from '@/services';
import DefaultProfileIcon from '@/assets/icon/ic_default_profile.svg?react';
import PersonEditIcon from '@/assets/icon/ic_person_edit.svg?react';
import * as S from './ProfileUploader.styled';

const isDataURI = (value: string) => {
  const dataURIPattern =
    /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+)?(;charset=[a-zA-Z0-9-]+)?(;base64)?,([^\r\n]*)$/;
  return dataURIPattern.test(value);
};

const getUserProfileImageUrl = (previewUrl: string | null) => {
  if (!previewUrl) return null;

  if (isDataURI(previewUrl)) {
    return previewUrl;
  }

  const { data } = useGetUserProfile(previewUrl);

  return data?.publicUrl;
};

interface ProfileUploaderProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
  previewUrl: string | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleProfileImageEdit: () => void;
  handlePreviewImageDelete: () => void;
}

const ProfileUploader = ({
  fileInputRef,
  previewUrl,
  handleFileChange,
  handleProfileImageEdit,
  handlePreviewImageDelete,
}: ProfileUploaderProps) => {
  const userProfileImageUrl = getUserProfileImageUrl(previewUrl);

  return (
    <S.ProfileWrapper>
      <S.ProfileEditInput
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <S.ProfileEditButton
        type="button"
        aria-label="edit profile image"
        onClick={handleProfileImageEdit}
      >
        {userProfileImageUrl ? (
          <S.ProfileImage src={userProfileImageUrl} />
        ) : (
          <S.DefaultProfile>
            <DefaultProfileIcon css={S.defaultProfileIcon} />
          </S.DefaultProfile>
        )}
        <PersonEditIcon css={S.profileEditIcon} />
      </S.ProfileEditButton>
      <Button
        label="이미지 삭제"
        sizeType="lg"
        styleType="tertiaryGray"
        onClick={handlePreviewImageDelete}
      />
    </S.ProfileWrapper>
  );
};

export default ProfileUploader;
