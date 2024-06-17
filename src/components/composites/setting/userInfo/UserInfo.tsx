import { FormProvider } from 'react-hook-form';

import { useUser } from '@/contexts';
import { Button, ProfileUploader } from '@/components';
import { useImageFileUploader } from '@/hooks';
import { useGetMyTotalLikeCount } from '@/services';
import { formatNumber } from '@/utils';
import UserDefaultInfoForm from './defaultForm/UserDefaultInfoForm';
import useUserInfoForm from './hooks/useUserInfoForm';
import * as S from './UserInfo.styled';

const UserInfo = () => {
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
    isUploadLoading,
    previewUrl,
    handleFileChange,
    handlePreviewImageDelete,
    handleImageFileEdit: handleProfileImageEdit,
  } = useImageFileUploader(data[0].profile_url, handleProfileImageChange);

  return (
    <S.Section>
      <S.Title>회원정보 수정</S.Title>
      <FormProvider {...methods}>
        <S.TopWrapper>
          <ProfileUploader
            fileInputRef={fileInputRef}
            isUploadLoading={isUploadLoading}
            previewUrl={previewUrl}
            handleFileChange={handleFileChange}
            handleProfileImageEdit={handleProfileImageEdit}
            handlePreviewImageDelete={handlePreviewImageDelete}
          />
          <S.SummaryList>
            <S.SummaryWrapper>
              <S.SummaryContent>
                {myTotalLikeCount ? formatNumber(myTotalLikeCount) : 0}
              </S.SummaryContent>
              <S.SummaryLabel>좋아요 수</S.SummaryLabel>
            </S.SummaryWrapper>
            <S.SummaryWrapper>
              <S.SummaryContent>
                {formatNumber(data[0].book_score)}
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
            isDisabled={!!Object.keys(methods.formState.errors).length}
            isLoading={isUpdateUserInfoPending}
            label="저장"
            sizeType="full"
            styleType="primary"
            onClick={handleAccountUpdate}
          />
        </S.FormWrapper>
      </FormProvider>
    </S.Section>
  );
};

export default UserInfo;
