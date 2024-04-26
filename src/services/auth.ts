import { useMutation } from '@tanstack/react-query';

import { loginAPI, signupAPI } from '@/apis';
import type { LoginQueryModel, SignupQueryModel } from '@/types';

export const useSignup = () => {
  return useMutation({
    mutationFn: (req: SignupQueryModel) => signupAPI(req),
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: (req: LoginQueryModel) => loginAPI(req),
  });
};
