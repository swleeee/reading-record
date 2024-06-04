import { useForm } from 'react-hook-form';

import type { ResetPasswordStep } from '@/types';

interface FormType {
  email: string;
}

const useEmailAuthenticationForm = (
  handleSetStep: (step: ResetPasswordStep) => void,
) => {
  const {
    formState: { errors },
    watch,
    register,
    handleSubmit,
  } = useForm<FormType>({
    mode: 'onTouched',
    defaultValues: { email: '' },
  });

  const handleLinkSend = handleSubmit((data) => {
    console.log(data);
    handleSetStep('resetPassword');
    // TODO: Step1. 이메일 중복 검사
    // TODO: Step2. 이메일에 링크 보내기
  });

  return { errors, watch, register, handleLinkSend };
};

export default useEmailAuthenticationForm;
