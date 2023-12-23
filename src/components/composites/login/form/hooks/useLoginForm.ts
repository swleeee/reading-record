import { useState } from 'react';
import { useForm } from 'react-hook-form';

const loginForm = {
  email: '',
  password: '',
};

const useLoginForm = () => {
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

  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLoginFormSubmit = handleSubmit(() => {
    alert('로그인 성공');
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
