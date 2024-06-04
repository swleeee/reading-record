import { useForm } from 'react-hook-form';

interface FormType {
  password: string;
  passwordConfirm: string;
}

const useResetPasswordForm = () => {
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

  const handlePasswordReset = handleSubmit((data) => {
    console.log(data);
  });

  return { errors, watch, register, handlePasswordReset };
};

export default useResetPasswordForm;
