import React from 'react';
import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

import {
  Button,
  CheckboxGroup,
  Input,
  LabelContent,
  RadioButton,
} from '@/components';
import { ERROR_MSG, GENDER_OPTIONS } from '@/assets';
import type { CheckboxGroupType, SelectOptionType } from '@/types';
import * as S from './SignupForm.styled';

const TERM_AGREEMENT = { term: false, policy: false, age: false };
const PASSWORD_MIN_LENGTH = 4;
const NICKNAME_MIN_LENGTH = 2;

interface FormType {
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  birth: { year: string; month: string; day: string };
  gender: SelectOptionType;
  termOfAgreements: CheckboxGroupType<keyof typeof TERM_AGREEMENT>;
}

const SignupForm = () => {
  const {
    formState: { errors },
    watch,
    register,
    clearErrors,
    setError,
    setValue,
    handleSubmit,
  } = useForm<FormType>({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      nickname: '',
      birth: {
        year: '',
        month: '',
        day: '',
      },
      gender: GENDER_OPTIONS[0],
      termOfAgreements: TERM_AGREEMENT,
    },
  });
  const birthError =
    errors.birth?.message ||
    errors.birth?.year?.message ||
    errors.birth?.month?.message ||
    errors.birth?.day?.message;

  const handleGenderOptionSelect = (option: SelectOptionType) => () => {
    setValue('gender', option);
  };

  const handleTermItemSelect = (
    key: keyof typeof TERM_AGREEMENT,
    isChecked: boolean,
  ) => {
    setValue(`termOfAgreements.${key}`, !isChecked);

    if (
      Object.values(watch('termOfAgreements')).every((isChecked) => isChecked)
    ) {
      clearErrors('termOfAgreements');
    }
  };

  const handleTermAllSelect = (isChecked: boolean) => {
    const entries = Object.entries(watch('termOfAgreements')) as [
      keyof typeof TERM_AGREEMENT,
      boolean,
    ][];

    const termOfAgreements = entries.reduce((acc, [key]) => {
      acc[key] = isChecked;

      return acc;
    }, {} as CheckboxGroupType<keyof typeof TERM_AGREEMENT>);

    setValue(`termOfAgreements`, termOfAgreements);

    if (isChecked) {
      clearErrors('termOfAgreements');
    }
  };

  const getBirthDateValid = () => {
    const date = `${watch('birth.year')}-${watch('birth.month')}-${watch(
      'birth.day',
    )}`;
    const formattedDate = dayjs(date, 'YYYY-MM-DD', true);

    return formattedDate.isValid();
  };

  const checkBirthDateValidate = (
    key: keyof FormType['birth'],
    value: string,
  ) => {
    switch (key) {
      case 'year': {
        if (+value < 1900 || +value > new Date().getFullYear()) {
          return ERROR_MSG.INVALID_YEAR;
        }
        break;
      }
      case 'month':
        {
          if (+value < 1 || +value > 12) {
            return ERROR_MSG.INVALID_MONTH;
          }
        }
        break;
      case 'day':
        {
          if (+value < 1 || +value > 31) {
            return ERROR_MSG.INVALID_DAY;
          }
        }
        break;
    }

    if (getBirthDateValid()) {
      clearErrors('birth');
    }

    return true;
  };

  const checkBirthDateError = () => {
    let hasError = false;

    if (!getBirthDateValid()) {
      setError('birth', {
        type: 'validate',
        message: ERROR_MSG.INVALID_DATE,
      });
      hasError = true;
    }

    return hasError;
  };

  const checkAgreementRequiredError = () => {
    let hasError = false;

    if (
      !watch('termOfAgreements.age') ||
      !watch('termOfAgreements.policy') ||
      !watch('termOfAgreements.term')
    ) {
      setError('termOfAgreements', {
        type: 'required',
        message: ERROR_MSG.REQUIRED,
      });
      hasError = true;
    }

    return hasError;
  };

  // TODO: 추후 data 이용 예정
  const handleAccountCreate = handleSubmit(
    (data) => {
      const hasError = checkAgreementRequiredError() || checkBirthDateError();

      if (hasError) {
        return;
      }
    },
    () => {
      checkAgreementRequiredError();
      checkBirthDateError();
    },
  );

  const handleBirthChange =
    (key: keyof FormType['birth']) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const filteredValue = value.replace(/[^\d]/g, '');

      setValue(`birth.${key}`, filteredValue);
    };

  // TODO: 이후 작성 예정
  const handleEmailDuplicateCheck = () => {};

  // TODO: 이후 작성 예정
  const handleNicknameDuplicateCheck = () => {};

  return (
    <S.Form onSubmit={handleAccountCreate}>
      <LabelContent
        css={S.labelContent}
        isRequired
        error={errors.email?.message}
        id="email"
        label="아이디"
      >
        <S.ContentWrapper>
          <Input
            css={S.inputWrapper}
            hasError={!!errors.email?.message}
            id="email"
            maxLength={100}
            placeholder="이메일을 입력해주세요"
            value={watch('email')}
            register={register('email', {
              required: ERROR_MSG.REQUIRED,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: ERROR_MSG.INVALID_EMAIL,
              },
            })}
          />
          <Button
            styleType="secondary"
            sizeType="lg"
            label="중복 확인"
            onClick={handleEmailDuplicateCheck}
          />
        </S.ContentWrapper>
      </LabelContent>
      <LabelContent
        css={S.labelContent}
        isRequired
        error={errors.password?.message}
        id="password"
        label="비밀번호"
      >
        <Input
          css={S.inputWrapper}
          hasError={!!errors.password?.message}
          id="password"
          maxLength={30}
          placeholder="비밀번호를 입력해주세요"
          value={watch('password')}
          type="password"
          register={register('password', {
            required: ERROR_MSG.REQUIRED,
            minLength: {
              value: PASSWORD_MIN_LENGTH,
              message: `비밀번호는 ${PASSWORD_MIN_LENGTH}자 이상이어야 합니다`,
            },
            pattern: {
              value:
                /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,30}$/,
              message: ERROR_MSG.INVALID_PASSWORD,
            },
            deps: ['passwordConfirm'],
          })}
        />
      </LabelContent>
      <LabelContent
        css={S.labelContent}
        isRequired
        error={errors.passwordConfirm?.message}
        id="passwordConfirm"
        label="비밀번호 확인"
      >
        <Input
          css={S.inputWrapper}
          hasError={!!errors.passwordConfirm?.message}
          id="passwordConfirm"
          maxLength={100}
          placeholder="비밀번호를 한번 더 입력해주세요"
          value={watch('passwordConfirm')}
          type="password"
          register={register('passwordConfirm', {
            required: ERROR_MSG.REQUIRED,
            validate: (value) =>
              value === watch('password') ? true : ERROR_MSG.PASSWORD_NOT_MATCH,
          })}
        />
      </LabelContent>
      <LabelContent
        css={S.labelContent}
        isRequired
        error={errors.nickname?.message}
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
              required: ERROR_MSG.REQUIRED,
              minLength: {
                value: NICKNAME_MIN_LENGTH,
                message: `${NICKNAME_MIN_LENGTH}글자 이상 입력해주세요.`,
              },
              pattern: {
                value: /^[A-za-z0-9가-힣]{2,20}$/,
                message: ERROR_MSG.INVALID_NICKNAME,
              },
            })}
          />
          <Button
            styleType="secondary"
            sizeType="lg"
            label="중복 확인"
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
              required: ERROR_MSG.REQUIRED,
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
              required: ERROR_MSG.REQUIRED,
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
              required: ERROR_MSG.REQUIRED,
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
      <LabelContent
        isRequired
        error={errors.termOfAgreements?.message}
        id="termOfAgreements"
        label="이용약관동의"
      >
        <CheckboxGroup
          css={S.checkboxGroup(!!errors.termOfAgreements?.message)}
          checkedList={watch('termOfAgreements')}
        >
          <CheckboxGroup.All
            css={S.checkbox}
            toggleAllChecks={handleTermAllSelect}
          >
            <S.AgreementAllText>전체 동의합니다.</S.AgreementAllText>
          </CheckboxGroup.All>
          <S.AgreementItemWrapper>
            <CheckboxGroup.Item
              css={S.checkbox}
              id="term"
              isChecked={watch('termOfAgreements.term')}
              onItemSelect={handleTermItemSelect}
            >
              <S.AgreementLabelWrapper>
                <span>이용약관 동의</span>
                <S.AgreementRequiredText>(필수)</S.AgreementRequiredText>
              </S.AgreementLabelWrapper>
            </CheckboxGroup.Item>
            <Button
              styleType="tertiary"
              sizeType="md"
              label="약관 보기"
              onClick={() => {}} // TODO: 작성 예정
            />
          </S.AgreementItemWrapper>
          <S.AgreementItemWrapper>
            <CheckboxGroup.Item
              css={S.checkbox}
              id="policy"
              isChecked={watch('termOfAgreements.policy')}
              onItemSelect={handleTermItemSelect}
            >
              <S.AgreementLabelWrapper>
                <span>개인정보 수집・이용 동의</span>
                <S.AgreementRequiredText>(필수)</S.AgreementRequiredText>
              </S.AgreementLabelWrapper>
            </CheckboxGroup.Item>
            <Button
              styleType="tertiary"
              sizeType="md"
              label="약관 보기"
              onClick={() => {}} // TODO: 작성 예정
            />
          </S.AgreementItemWrapper>
          <CheckboxGroup.Item
            id="age"
            isChecked={watch('termOfAgreements.age')}
            onItemSelect={handleTermItemSelect}
          >
            <S.AgreementLabelWrapper>
              <span>본인은 만 14세 이상입니다.</span>
              <S.AgreementRequiredText>(필수)</S.AgreementRequiredText>
            </S.AgreementLabelWrapper>
          </CheckboxGroup.Item>
        </CheckboxGroup>
      </LabelContent>
      <Button
        css={S.signupButton}
        isDisabled={!!Object.keys(errors).length}
        styleType="primary"
        sizeType="full"
        label="회원 가입"
        actionType="submit"
      />
    </S.Form>
  );
};

export default SignupForm;
