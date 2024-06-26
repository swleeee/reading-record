import {
  Button,
  CheckboxGroup,
  Input,
  LabelContent,
  Link,
  RadioButton,
} from '@/shared/ui';
import {
  ERROR_MESSAGE,
  GENDER_OPTIONS,
  NICKNAME_MIN_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASS_MESSAGE,
} from '@/shared/constants';
import useSignupForm from '../lib/useSignupForm';
import * as S from './SignupForm.styled';

export const SignupForm = () => {
  const {
    isNicknameChecked,
    isCheckNicknameDuplicatedLoading,
    isSignupLoading,
    errors,
    watch,
    register,
    checkBirthDateValidate,
    handleNicknameChange,
    handleNicknameDuplicateCheck,
    handleGenderOptionSelect,
    handleTermAllSelect,
    handleTermItemSelect,
    handleBirthChange,
    handleAccountCreate,
  } = useSignupForm();

  const birthError =
    errors.birth?.message ||
    errors.birth?.year?.message ||
    errors.birth?.month?.message ||
    errors.birth?.day?.message;

  return (
    <S.Form onSubmit={handleAccountCreate}>
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
            required: ERROR_MESSAGE.REQUIRED,
            minLength: {
              value: PASSWORD_MIN_LENGTH,
              message: ERROR_MESSAGE.MIN_LENGTH_PASSWORD,
            },
            pattern: {
              value:
                /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,30}$/,
              message: ERROR_MESSAGE.INVALID_PASSWORD,
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
            required: ERROR_MESSAGE.REQUIRED,
            validate: (value) =>
              value === watch('password')
                ? true
                : ERROR_MESSAGE.PASSWORD_NOT_MATCH,
          })}
        />
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
              validate: (value) => checkBirthDateValidate('year', value),
              onChange: handleBirthChange('year'),
            })}
          />
          <Input
            css={S.birthdayInputWrapper}
            hasError={!!errors.birth?.month?.message}
            id="birth-month"
            maxLength={2}
            placeholder="MM"
            value={watch('birth.month')}
            register={register('birth.month', {
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
              validate: (value) => checkBirthDateValidate('day', value),
              onChange: handleBirthChange('day'),
            })}
          />
        </S.BirthdayContainer>
      </LabelContent>
      <LabelContent css={S.labelContent} id="gender" label="성별">
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
              id="term"
              isChecked={watch('termOfAgreements.term')}
              onItemSelect={handleTermItemSelect}
            >
              <S.AgreementLabelWrapper>
                <span>이용약관 동의</span>
                <S.AgreementRequiredText>(필수)</S.AgreementRequiredText>
              </S.AgreementLabelWrapper>
            </CheckboxGroup.Item>
            <Link sizeType="lg" styleType="tertiaryBrown" to="/terms">
              약관 보기
            </Link>
          </S.AgreementItemWrapper>
          <S.AgreementItemWrapper>
            <CheckboxGroup.Item
              id="policy"
              isChecked={watch('termOfAgreements.policy')}
              onItemSelect={handleTermItemSelect}
            >
              <S.AgreementLabelWrapper>
                <span>개인정보 수집・이용 동의</span>
                <S.AgreementRequiredText>(필수)</S.AgreementRequiredText>
              </S.AgreementLabelWrapper>
            </CheckboxGroup.Item>
            <Link sizeType="lg" styleType="tertiaryBrown" to="/privacy">
              약관 보기
            </Link>
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
        isLoading={isSignupLoading}
        actionType="submit"
        label="회원 가입"
        styleType="primary"
        sizeType="full"
      />
    </S.Form>
  );
};

export default SignupForm;
