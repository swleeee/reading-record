import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Button, ProfileUploader } from '@/components';
import { formatNumber } from '@/utils';
import type { SelectOptionType, SettingUserInfoFormType } from '@/types';
import UserDefaultInfoForm from './defaultForm/UserDefaultInfoForm';
import * as S from './UserInfo.styled';

interface UserInfoMobileProps {
  isNicknameChecked: boolean;
  isCheckNicknameDuplicatedLoading: boolean;
  fileInputRef: React.RefObject<HTMLInputElement>;
  previewUrl: string | null;
  checkBirthDateValidate: (
    key: keyof SettingUserInfoFormType['birth'],
    value: string,
  ) => string | true;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleProfileImageEdit: () => void;
  handlePreviewImageDelete: () => void;
  handleBirthChange: (
    key: keyof SettingUserInfoFormType['birth'],
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNicknameChange: () => void;
  handleNicknameDuplicateCheck: () => void;
  handleGenderOptionSelect: (option: SelectOptionType) => () => void;
  handleAccountUpdate: () => void;
}

const UserInfoMobile = ({
  isNicknameChecked,
  isCheckNicknameDuplicatedLoading,
  fileInputRef,
  previewUrl,
  checkBirthDateValidate,
  handleFileChange,
  handleProfileImageEdit,
  handlePreviewImageDelete,
  handleBirthChange,
  handleNicknameChange,
  handleNicknameDuplicateCheck,
  handleGenderOptionSelect,
  handleAccountUpdate,
}: UserInfoMobileProps) => {
  const { watch } = useFormContext<SettingUserInfoFormType>();

  return (
    <>
      <S.TopWrapper>
        <ProfileUploader
          fileInputRef={fileInputRef}
          previewUrl={previewUrl}
          profileUrl={watch('profileUrl')}
          handleFileChange={handleFileChange}
          handleProfileImageEdit={handleProfileImageEdit}
          handlePreviewImageDelete={handlePreviewImageDelete}
        />
        <S.SummaryList>
          <S.SummaryWrapper>
            <S.SummaryContent>{formatNumber(150)}</S.SummaryContent>
            <S.SummaryLabel>좋아요 수</S.SummaryLabel>
          </S.SummaryWrapper>
          <S.SummaryWrapper>
            <S.SummaryContent>{formatNumber(1500)}</S.SummaryContent>
            <S.SummaryLabel>독서 점수</S.SummaryLabel>
          </S.SummaryWrapper>
        </S.SummaryList>
      </S.TopWrapper>
      <S.FormWrapper>
        <UserDefaultInfoForm
          isNicknameChecked={isNicknameChecked}
          isCheckNicknameDuplicatedLoading={isCheckNicknameDuplicatedLoading}
          checkBirthDateValidate={checkBirthDateValidate}
          handleBirthChange={handleBirthChange}
          handleNicknameChange={handleNicknameChange}
          handleNicknameDuplicateCheck={handleNicknameDuplicateCheck}
          handleGenderOptionSelect={handleGenderOptionSelect}
        />
        <Button
          label="저장"
          sizeType="full"
          styleType="primary"
          onClick={handleAccountUpdate}
        />
      </S.FormWrapper>
    </>
  );
};

export default UserInfoMobile;