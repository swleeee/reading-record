import { Button, Input, LabelContent } from '@/shared/ui';
import { ERROR_MESSAGE, PASSWORD_MIN_LENGTH } from '@/shared/constants';
import useResetPasswordForm from '../lib/useResetPasswordForm';
import * as S from './ResetPasswordForm.styled';

export const ResetPasswordForm = () => {
  const { isPending, errors, watch, register, handlePasswordReset } =
    useResetPasswordForm();

  return (
    <S.Form onSubmit={handlePasswordReset}>
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
      <Button
        isDisabled={!!Object.keys(errors).length}
        isLoading={isPending}
        actionType="submit"
        label="비밀번호 재설정"
        styleType="primary"
        sizeType="full"
      />
    </S.Form>
  );
};

export default ResetPasswordForm;
