import React from 'react';

import { Button, LoadingSpinner } from '@/components';
import { useGetUserProfile } from '@/services';
import DefaultProfileIcon from '@/assets/icon/ic_default_profile.svg?react';
import PersonEditIcon from '@/assets/icon/ic_person_edit.svg?react';
import * as S from './ProfileUploader.styled';

interface ProfileUploaderProps {
  fileInputRef: React.RefObject<HTMLInputElement>;
  isUploadLoading: boolean;
  previewUrl: string | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleProfileImageEdit: () => void;
  handlePreviewImageDelete: () => void;
}

const ProfileUploader = ({
  fileInputRef,
  previewUrl,
  isUploadLoading,
  handleFileChange,
  handleProfileImageEdit,
  handlePreviewImageDelete,
}: ProfileUploaderProps) => {
  const { data: userProfileImageUrl } = useGetUserProfile(previewUrl);

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
        disabled={isUploadLoading}
        onClick={handleProfileImageEdit}
      >
        {isUploadLoading ? (
          <S.LoadingWrapper>
            <LoadingSpinner colorType="black" />
          </S.LoadingWrapper>
        ) : userProfileImageUrl ? (
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
