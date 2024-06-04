import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useUser } from '@/contexts';
import { useToast } from '@/hooks';
import {
  useCheckNicknameDuplicated,
  useGetUserInfo,
  useUpdateUserInfo,
} from '@/services';
import { getBirthDateValid, getBirthErrorMessage } from '@/utils';
import { ERROR_MESSAGE, GENDER_OPTIONS, TOAST_MESSAGE } from '@/constants';
import type { SelectOptionType, SettingUserInfoFormType } from '@/types';

const useUserInfoForm = () => {
  const { user } = useUser();

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
  const { data } = useGetUserInfo({ userId: user?.id! });
  const { isPending: isUpdateUserInfoPending, mutate: updateUserInfo } =
    useUpdateUserInfo();
  const { addToast } = useToast();

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

  const checkBirthDateError = () => {
    let hasError = false;

    if (
      !getBirthDateValid(
        methods.watch('birth.year'),
        methods.watch('birth.month'),
        methods.watch('birth.day'),
      )
    ) {
      methods.setError('birth', {
        type: 'validate',
        message: ERROR_MESSAGE.INVALID_DATE,
      });
      hasError = true;
    }

    return hasError;
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
    if (!methods.watch('nickname') || methods.watch('nickname').length < 2)
      return;

    const req = { nickname: methods.watch('nickname'), userId: user?.id! };

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

  const handleAccountUpdate = methods.handleSubmit(
    (data) => {
      const hasError = checkBirthDateError();

      if (hasError) {
        return;
      }

      const { year, month, day } = data.birth;

      checkNicknameDuplicated(
        { nickname: data.nickname, userId: user?.id! },
        {
          onSuccess: (isDuplicated) => {
            if (isDuplicated) {
              methods.setError('nickname', {
                type: 'validate',
                message: ERROR_MESSAGE.DUPLICATE_NICKNAME,
              });
            } else {
              const req = {
                userId: user?.id!,
                originProfilePath: user?.user_metadata.profile_url,
                profileFile: data.profileFile,
                nickname: data.nickname,
                gender: data.gender
                  .key as (typeof GENDER_OPTIONS)[number]['key'],
                birth: `${year}-${month}-${day}`,
              };

              updateUserInfo(req, {
                onSuccess: () => {
                  addToast(TOAST_MESSAGE.SUCCESS.UPDATE_USER_INFO);
                },
              });
            }
          },
        },
      );
    },
    () => {
      checkBirthDateError();
    },
  );

  const handleProfileImageChange = (file: File | null) => {
    methods.setValue('profileFile', file);
  };

  useEffect(() => {
    if (!data || !data.length) return;

    const [year, month, day] = data[0].birth.split('-');

    methods.reset({
      profileUrl: data[0].profile_url,
      email: data[0].email,
      nickname: data[0].nickname,
      birth: { year, month, day },
      gender: GENDER_OPTIONS.find(({ key }) => key === data[0].gender),
    });
  }, [data, methods]);

  return {
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
  };
};

export default useUserInfoForm;
