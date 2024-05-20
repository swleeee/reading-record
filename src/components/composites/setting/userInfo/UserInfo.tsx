import React from 'react';
import { FormProvider } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

import { useUser } from '@/contexts';
import { useImageFileUploader } from '@/hooks';
import { useGetMyTotalLikeCount } from '@/services';
import { deviceState } from '@/stores';
import UserInfoMobile from './UserInfoMobile';
import UserInfoDesktop from './UserInfoDesktop';
import useUserInfoForm from './hooks/useUserInfoForm';
import * as S from './UserInfo.styled';

const UserInfo = () => {
  const device = useRecoilValue(deviceState);

  const { user } = useUser();
  const { data: myTotalLikeCount } = useGetMyTotalLikeCount({
    userId: user?.id!,
  });

  const {
    isCheckNicknameDuplicatedLoading,
    isNicknameChecked,
    isUpdateUserInfoPending,
    data,
    methods,
    checkBirthDateValidate,
    handleBirthChange,
    handleNicknameChange,
    handleGenderOptionSelect,
    handleNicknameDuplicateCheck,
    handleProfileImageChange,
    handleAccountUpdate,
  } = useUserInfoForm();

  const {
    fileInputRef,
    previewUrl,
    handleFileChange,
    handlePreviewImageDelete,
    handleImageFileEdit: handleProfileImageEdit,
  } = useImageFileUploader(data[0].profile_url, handleProfileImageChange);

  return (
    <S.Section>
      <S.Title>회원정보 수정</S.Title>
      <FormProvider {...methods}>
        {device === 'mobile' ? (
          <UserInfoMobile
            isNicknameChecked={isNicknameChecked}
            isCheckNicknameDuplicatedLoading={isCheckNicknameDuplicatedLoading}
            isUpdateUserInfoPending={isUpdateUserInfoPending}
            fileInputRef={fileInputRef}
            myTotalLikeCount={myTotalLikeCount}
            previewUrl={previewUrl}
            userInfo={data}
            checkBirthDateValidate={checkBirthDateValidate}
            handleFileChange={handleFileChange}
            handleProfileImageEdit={handleProfileImageEdit}
            handlePreviewImageDelete={handlePreviewImageDelete}
            handleBirthChange={handleBirthChange}
            handleNicknameChange={handleNicknameChange}
            handleNicknameDuplicateCheck={handleNicknameDuplicateCheck}
            handleGenderOptionSelect={handleGenderOptionSelect}
            handleAccountUpdate={handleAccountUpdate}
          />
        ) : (
          <UserInfoDesktop
            isNicknameChecked={isNicknameChecked}
            isCheckNicknameDuplicatedLoading={isCheckNicknameDuplicatedLoading}
            isUpdateUserInfoPending={isUpdateUserInfoPending}
            fileInputRef={fileInputRef}
            myTotalLikeCount={myTotalLikeCount}
            previewUrl={previewUrl}
            userInfo={data}
            checkBirthDateValidate={checkBirthDateValidate}
            handleFileChange={handleFileChange}
            handleProfileImageEdit={handleProfileImageEdit}
            handlePreviewImageDelete={handlePreviewImageDelete}
            handleBirthChange={handleBirthChange}
            handleNicknameChange={handleNicknameChange}
            handleNicknameDuplicateCheck={handleNicknameDuplicateCheck}
            handleGenderOptionSelect={handleGenderOptionSelect}
            handleAccountUpdate={handleAccountUpdate}
          />
        )}
      </FormProvider>
    </S.Section>
  );
};

export default UserInfo;
