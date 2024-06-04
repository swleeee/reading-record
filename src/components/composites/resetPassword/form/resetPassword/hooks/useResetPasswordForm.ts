import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useUser } from '@/contexts';
import { useToast } from '@/hooks';
import { useUpdateUserPassword } from '@/services';
import { PATH, TOAST_MESSAGE } from '@/constants';

interface FormType {
  password: string;
  passwordConfirm: string;
}

const useResetPasswordForm = () => {
  const navigate = useNavigate();

  const { isPasswordResetAuthorized, setPasswordResetAuthorized } = useUser();
  const {
    formState: { errors },
    watch,
    register,
    handleSubmit,
  } = useForm<FormType>({
    mode: 'onTouched',
    defaultValues: {
      password: '',
      passwordConfirm: '',
    },
  });

  const { isPending, mutate: resetPassword } = useUpdateUserPassword();
  const { addToast } = useToast();

  const handlePasswordReset = handleSubmit(({ password }) => {
    if (!isPasswordResetAuthorized) {
      addToast(TOAST_MESSAGE.INFO.RESET_PASSWORD_NOT_AUTHORIZED);
      navigate(PATH.RESET_PASSWORD);
      return;
    }

    resetPassword(
      { password },
      {
        onSuccess: () => {
          setPasswordResetAuthorized(false);
          addToast(TOAST_MESSAGE.SUCCESS.RESET_PASSWORD);
          navigate(PATH.ROOT);
        },
        onError: (error) => {
          if (error.message === 'Auth session missing!') {
            addToast(TOAST_MESSAGE.WARNING.RESET_PASSWORD_AUTH_EXPIRED);
            navigate(PATH.RESET_PASSWORD);
            return;
          }
          addToast(TOAST_MESSAGE.WARNING.DEFAULT);
        },
      },
    );
  });

  return { isPending, errors, watch, register, handlePasswordReset };
};

export default useResetPasswordForm;
