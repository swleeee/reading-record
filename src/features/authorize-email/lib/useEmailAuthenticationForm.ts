import { useForm } from 'react-hook-form';

import {
  useCheckEmailDuplicated,
  useSendEmailForAuthAPI,
} from '@/entities/auth';
import { useToast } from '@/shared/lib';
import { ERROR_MESSAGE, TOAST_MESSAGE } from '@/shared/constants';

interface FormType {
  email: string;
}

const useEmailAuthenticationForm = () => {
  const {
    formState: { errors },
    watch,
    register,
    setError,
    handleSubmit,
  } = useForm<FormType>({
    mode: 'onTouched',
    defaultValues: { email: '' },
  });

  const {
    isPending: isCheckEmailDuplicatedPending,
    mutate: checkEmailDuplicated,
  } = useCheckEmailDuplicated();
  const { addToast } = useToast();
  const { isPending: isSendEmailPending, mutate: sendEmail } =
    useSendEmailForAuthAPI();

  const isPending = isCheckEmailDuplicatedPending || isSendEmailPending;

  const handleLinkSend = handleSubmit(({ email }) => {
    checkEmailDuplicated(
      { email },
      {
        onSuccess: (data) => {
          if (!data) {
            setError('email', {
              type: 'validate',
              message: ERROR_MESSAGE.NOT_EXIST_EMAIL,
            });
            return;
          }
          sendEmail(
            { email },
            {
              onSuccess: () => {
                addToast(TOAST_MESSAGE.SUCCESS.SEND_EMAIL);
              },
              onError: () => {
                addToast(TOAST_MESSAGE.WARNING.DEFAULT);
              },
            },
          );
        },
        onError: () => {
          addToast(TOAST_MESSAGE.WARNING.DEFAULT);
        },
      },
    );
  });

  return { isPending, errors, watch, register, handleLinkSend };
};

export default useEmailAuthenticationForm;
