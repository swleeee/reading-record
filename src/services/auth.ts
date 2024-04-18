import { useMutation } from '@tanstack/react-query';

import { loginAPI } from '@/apis';
import type { LoginQueryModel } from '@/types';

export const useLogin = () => {
  return useMutation({
    mutationFn: (req: LoginQueryModel) => loginAPI(req),
  });
};
