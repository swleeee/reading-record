import React from 'react';
import { useForm } from 'react-hook-form';

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

  const handleGenderOptionSelect = (option: SelectOptionType) => () => {
    setValue('gender', option);
  };

  const handleTermItemSelect = (
    key: keyof typeof TERM_AGREEMENT,
    isChecked: boolean,
  ) => {
    setValue(`termOfAgreements.${key}`, !isChecked);
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
  };

  // TODO: 이후 작성 예정
  const handleEmailDuplicateCheck = () => {};

  // TODO: 이후 작성 예정
  const handleNicknameDuplicateCheck = () => {};

  const handleAccountCreate = handleSubmit(() => {});

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
          maxLength={100}
          placeholder="비밀번호를 입력해주세요"
          value={watch('password')}
          register={register('password', {
            required: ERROR_MSG.REQUIRED,
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
          register={register('passwordConfirm', {
            required: ERROR_MSG.REQUIRED,
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
            maxLength={100}
            placeholder="영문, 한글, 숫자 (4-20자)"
            value={watch('nickname')}
            register={register('nickname', {
              required: ERROR_MSG.REQUIRED,
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
        error={errors.birth?.message}
        id="birth"
        label="생년월일"
      >
        <S.BirthdayContainer>
          <Input
            css={S.birthdayInputWrapper}
            hasError={!!errors.birth?.message}
            id="birth"
            maxLength={4}
            placeholder="YYYY"
            value={watch('birth.year')}
            register={register('birth.year', {
              required: ERROR_MSG.REQUIRED,
            })}
          />
          <Input
            css={S.birthdayInputWrapper}
            hasError={!!errors.birth?.message}
            id="birth"
            maxLength={2}
            placeholder="MM"
            value={watch('birth.month')}
            register={register('birth.month', {
              required: ERROR_MSG.REQUIRED,
            })}
          />
          <Input
            css={S.birthdayInputWrapper}
            hasError={!!errors.birth?.message}
            id="birth"
            maxLength={2}
            placeholder="DD"
            value={watch('birth.day')}
            register={register('birth.day', {
              required: ERROR_MSG.REQUIRED,
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
      <LabelContent isRequired id="termOfAgreements" label="이용약관동의">
        <CheckboxGroup checkedList={watch('termOfAgreements')}>
          <CheckboxGroup.All
            css={S.checkbox}
            toggleAllChecks={handleTermAllSelect}
          >
            <S.AgreementAllText>전체 동의합니다.</S.AgreementAllText>
          </CheckboxGroup.All>
          <S.AgreementContainer>
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
          </S.AgreementContainer>
          <S.AgreementContainer>
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
          </S.AgreementContainer>
          <CheckboxGroup.Item
            css={S.checkbox}
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
