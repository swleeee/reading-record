import React from 'react';
import { useFormContext } from 'react-hook-form';

import { Button, Input, LabelContent, RadioButton } from '@/components';
import type { SelectOptionType, SettingUserInfoFormType } from '@/types';
import * as S from './UserDefaultInfoForm.styled';
import {
  ERROR_MESSAGE,
  GENDER_OPTIONS,
  NICKNAME_MIN_LENGTH,
  PASS_MESSAGE,
} from '@/constants';

interface UserDefaultInfoFormProps {
  isNicknameChecked: boolean;
  isCheckNicknameDuplicatedLoading: boolean;
  checkBirthDateValidate: (
    key: keyof SettingUserInfoFormType['birth'],
    value: string,
  ) => string | true;
  handleBirthChange: (
    key: keyof SettingUserInfoFormType['birth'],
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNicknameChange: () => void;
  handleNicknameDuplicateCheck: () => void;
  handleGenderOptionSelect: (option: SelectOptionType) => () => void;
}

const UserDefaultInfoForm = ({
  isNicknameChecked,
  isCheckNicknameDuplicatedLoading,
  checkBirthDateValidate,
  handleBirthChange,
  handleNicknameChange,
  handleNicknameDuplicateCheck,
  handleGenderOptionSelect,
}: UserDefaultInfoFormProps) => {
  const {
    formState: { errors },
    watch,
    register,
  } = useFormContext<SettingUserInfoFormType>();

  const birthError =
    errors.birth?.message ||
    errors.birth?.year?.message ||
    errors.birth?.month?.message ||
    errors.birth?.day?.message;

  return (
    <>
      <LabelContent
        css={S.labelContent}
        isRequired
        error={errors.email?.message}
        id="email"
        label="아이디(이메일)"
      >
        <S.ContentWrapper>
          <Input
            css={S.inputWrapper}
            isDisabled
            hasError={!!errors.email?.message}
            id="email"
            maxLength={100}
            placeholder="이메일을 입력해주세요"
            value={watch('email')}
            register={register('email', {
              required: ERROR_MESSAGE.REQUIRED,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: ERROR_MESSAGE.INVALID_EMAIL,
              },
            })}
          />
        </S.ContentWrapper>
      </LabelContent>
      <LabelContent
        css={S.labelContent}
        isRequired
        error={errors.nickname?.message}
        pass={isNicknameChecked ? PASS_MESSAGE.NICKNAME : ''}
        id="nickname"
        label="닉네임"
      >
        <S.ContentWrapper>
          <Input
            css={S.inputWrapper}
            hasError={!!errors.nickname?.message}
            id="nickname"
            maxLength={20}
            placeholder="영문, 한글, 숫자 (2-20자)"
            value={watch('nickname')}
            register={register('nickname', {
              required: ERROR_MESSAGE.REQUIRED,
              minLength: {
                value: NICKNAME_MIN_LENGTH,
                message: ERROR_MESSAGE.MIN_LENGTH_NICKNAME,
              },
              pattern: {
                value: /^[A-za-z0-9가-힣]{2,20}$/,
                message: ERROR_MESSAGE.INVALID_NICKNAME,
              },
              onChange: handleNicknameChange,
            })}
          />
          <Button
            isDisabled={isNicknameChecked}
            isLoading={isCheckNicknameDuplicatedLoading}
            label="중복 확인"
            styleType="secondary"
            sizeType="lg"
            onClick={handleNicknameDuplicateCheck}
          />
        </S.ContentWrapper>
      </LabelContent>
      <LabelContent
        css={S.labelContent}
        isRequired
        error={birthError}
        id="birth-year"
        label="생년월일"
      >
        <S.BirthdayContainer hasError={!!birthError}>
          <Input
            css={S.birthdayInputWrapper}
            hasError={!!errors.birth?.year?.message}
            id="birth-year"
            maxLength={4}
            placeholder="YYYY"
            value={watch('birth.year')}
            register={register('birth.year', {
              required: ERROR_MESSAGE.REQUIRED,
              validate: (value) => checkBirthDateValidate('year', value),
              onChange: handleBirthChange('year'),
            })}
          />
          <Input
            css={S.birthdayInputWrapper}
            hasError={!!errors.birth?.month?.message}
            id="birth=month"
            maxLength={2}
            placeholder="MM"
            value={watch('birth.month')}
            register={register('birth.month', {
              required: ERROR_MESSAGE.REQUIRED,
              validate: (value) => checkBirthDateValidate('month', value),
              onChange: handleBirthChange('month'),
            })}
          />
          <Input
            css={S.birthdayInputWrapper}
            hasError={!!errors.birth?.day?.message}
            id="birth-day"
            maxLength={2}
            placeholder="DD"
            value={watch('birth.day')}
            register={register('birth.day', {
              required: ERROR_MESSAGE.REQUIRED,
              validate: (value) => checkBirthDateValidate('day', value),
              onChange: handleBirthChange('day'),
            })}
          />
        </S.BirthdayContainer>
      </LabelContent>
      <LabelContent css={S.labelContent} isRequired id="gender" label="성별">
        <RadioButton
          options={GENDER_OPTIONS}
          selectedOption={watch('gender')}
          onSelect={handleGenderOptionSelect}
        />
      </LabelContent>
    </>
  );
};

export default UserDefaultInfoForm;
