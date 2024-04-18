import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useToast } from '@/hooks';
import { useLogin } from '@/services';
import { TOAST } from '@/assets';

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

  const { mutate: login } = useLogin();
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
            addToast(TOAST.WARNING.LOGIN_EMAIL_NOT_CONFIRMED);
            break;

          case 'Invalid login credentials':
            addToast(TOAST.WARNING.LOGIN_FAILED);
        }
      },
    });
  });

  return {
    isPasswordVisible,
    errors,
    watch,
    register,
    handlePasswordToggle,
    handleLoginFormSubmit,
  };
};

export default useLoginForm;
