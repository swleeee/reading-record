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
  } = useForm<typeof loginForm>({
    mode: 'onTouched',
    defaultValues: loginForm,
  });

  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return {
    isPasswordVisible,
    errors,
    watch,
    register,
    handlePasswordToggle,
  };
};

export default useLoginForm;
