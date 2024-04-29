import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useToast } from '@/hooks';
import { useLogin } from '@/services';
import { TOAST_MESSAGE } from '@/assets';

const loginForm = {
  email: '',
  password: '',
};

const useLoginForm = () => {
  const navigate = useNavigate();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    formState: { errors },
    watch,
    register,
    handleSubmit,
  } = useForm<typeof loginForm>({
    mode: 'onTouched',
    defaultValues: loginForm,
  });

  const { isPending: isLoginLoading, mutate: login } = useLogin();
  const { addToast } = useToast();

  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLoginFormSubmit = handleSubmit((req) => {
    login(req, {
      onSuccess: () => {
        navigate('/');
      },
      onError: (error) => {
        switch (error.message) {
          case 'Email not confirmed':
            addToast(TOAST_MESSAGE.WARNING.LOGIN_EMAIL_NOT_CONFIRMED);
            break;

          case 'Invalid login credentials':
            addToast(TOAST_MESSAGE.WARNING.LOGIN_FAILED);
        }
      },
    });
  });

  return {
    isPasswordVisible,
    isLoginLoading,
    errors,
    watch,
    register,
    handlePasswordToggle,
    handleLoginFormSubmit,
  };
};

export default useLoginForm;
