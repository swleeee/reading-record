import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Button, ProfileUploader } from '@/components';
import { formatNumber } from '@/utils';
import type {
  GetUserInfoServerModel,
  SelectOptionType,
  SettingUserInfoFormType,
} from '@/types';
import UserDefaultInfoForm from './defaultForm/UserDefaultInfoForm';
import * as S from './UserInfo.styled';

interface UserInfoMobileProps {
  isNicknameChecked: boolean;
  isCheckNicknameDuplicatedLoading: boolean;
  isUpdateUserInfoPending: boolean;
  fileInputRef: React.RefObject<HTMLInputElement>;
  myTotalLikeCount?: number;
  previewUrl: string | null;
  userInfo: GetUserInfoServerModel;
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
  isUpdateUserInfoPending,
  fileInputRef,
  myTotalLikeCount,
  previewUrl,
  userInfo,
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
  const {
    formState: { errors },
  } = useFormContext<SettingUserInfoFormType>();

  return (
    <>
      <S.TopWrapper>
        <ProfileUploader
          fileInputRef={fileInputRef}
          previewUrl={previewUrl}
          handleFileChange={handleFileChange}
          handleProfileImageEdit={handleProfileImageEdit}
          handlePreviewImageDelete={handlePreviewImageDelete}
        />
        <S.SummaryList>
          <S.SummaryWrapper>
            <S.SummaryContent>
              {myTotalLikeCount ? formatNumber(myTotalLikeCount) : '-'}
            </S.SummaryContent>
            <S.SummaryLabel>좋아요 수</S.SummaryLabel>
          </S.SummaryWrapper>
          <S.SummaryWrapper>
            <S.SummaryContent>
              {formatNumber(userInfo[0].book_score)}
            </S.SummaryContent>
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
          isDisabled={!!Object.keys(errors).length}
          isLoading={isUpdateUserInfoPending}
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
