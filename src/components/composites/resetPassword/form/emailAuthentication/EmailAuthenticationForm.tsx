import { Button, Input, LabelContent } from '@/components';
import { ERROR_MESSAGE } from '@/constants';
import useEmailAuthenticationForm from './hooks/useEmailAuthenticationForm';
import * as S from './EmailAuthenticationForm.styled';

const EmailAuthenticationForm = () => {
  const { isPending, errors, watch, register, handleLinkSend } =
    useEmailAuthenticationForm();

  return (
    <S.Form onSubmit={handleLinkSend}>
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
      <Button
        isDisabled={!!Object.keys(errors).length}
        isLoading={isPending}
        actionType="submit"
        label="이메일 인증코드 전송"
        styleType="primary"
        sizeType="full"
      />
    </S.Form>
  );
};

export default EmailAuthenticationForm;
