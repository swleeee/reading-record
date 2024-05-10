import React, { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';

import { useImageFileUploader } from '@/hooks';
import { useCheckNicknameDuplicated } from '@/services';
import { deviceState } from '@/stores';
import { getBirthDateValid, getBirthErrorMessage } from '@/utils';
import { ERROR_MESSAGE, GENDER_OPTIONS } from '@/constants';
import type { SelectOptionType, SettingUserInfoFormType } from '@/types';
import UserInfoMobile from './UserInfoMobile';
import UserInfoDesktop from './UserInfoDesktop';
import * as S from './UserInfo.styled';

const UserInfo = () => {
  const device = useRecoilValue(deviceState);

  const [isNicknameChecked, setIsNicknameChecked] = useState(false);
  const methods = useForm<SettingUserInfoFormType>({
    mode: 'onTouched',
    defaultValues: {
      profileFile: null,
      profileUrl: null,
      email: '',
      nickname: '',
      birth: { year: '', month: '', day: '' },
      gender: GENDER_OPTIONS[0],
    },
  });

  const {
    isPending: isCheckNicknameDuplicatedLoading,
    mutate: checkNicknameDuplicated,
  } = useCheckNicknameDuplicated();

  const handleProfileImageChange = (file: File | null) => {
    methods.setValue('profileFile', file);
  };

  const {
    fileInputRef,
    previewUrl,
    handleFileChange,
    handlePreviewImageDelete,
    handleImageFileEdit: handleProfileImageEdit,
  } = useImageFileUploader(handleProfileImageChange);

  const checkBirthDateValidate = (
    key: keyof SettingUserInfoFormType['birth'],
    value: string,
  ) => {
    const errorMessage = getBirthErrorMessage(key, value);
    if (errorMessage) return errorMessage;

    if (
      getBirthDateValid(
        methods.watch('birth.year'),
        methods.watch('birth.month'),
        methods.watch('birth.day'),
      )
    ) {
      methods.clearErrors('birth');
    }

    return true;
  };

  const handleBirthChange =
    (key: keyof SettingUserInfoFormType['birth']) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const filteredValue = value.replace(/[^\d]/g, '');

      methods.setValue(`birth.${key}`, filteredValue);
    };

  const handleNicknameChange = () => {
    if (isNicknameChecked) {
      setIsNicknameChecked(false);
    }
  };

  const handleGenderOptionSelect = (option: SelectOptionType) => () => {
    methods.setValue('gender', option);
  };

  const handleNicknameDuplicateCheck = () => {
    if (!methods.watch('nickname')) return;

    const req = { nickname: methods.watch('nickname') };

    checkNicknameDuplicated(req, {
      onSuccess: (isDuplicated) => {
        if (isDuplicated) {
          methods.setError('nickname', {
            type: 'validate',
            message: ERROR_MESSAGE.DUPLICATE_NICKNAME,
          });
        } else {
          if (!isNicknameChecked) {
            setIsNicknameChecked(true);
          }
        }
      },
    });
  };

  // TODO: 추후 작성
  const handleAccountUpdate = methods.handleSubmit(() => {});

  useEffect(() => {
    const initialGender = 'w';

    methods.reset({
      profileUrl: null,
      email: 'test1@naver.com',
      nickname: '구운동구운감자',
      birth: { year: '1997', month: '10', day: '29' },
      gender: GENDER_OPTIONS.find(({ key }) => key === initialGender),
    });
  }, []);

  return (
    <S.Section>
      <S.Title>회원정보 수정</S.Title>
      <FormProvider {...methods}>
        {device === 'mobile' ? (
          <UserInfoMobile
            isNicknameChecked={isNicknameChecked}
            isCheckNicknameDuplicatedLoading={isCheckNicknameDuplicatedLoading}
            fileInputRef={fileInputRef}
            previewUrl={previewUrl}
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
            fileInputRef={fileInputRef}
            previewUrl={previewUrl}
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
