import { useMutation } from '@tanstack/react-query';

import { loginAPI, logoutAPI, signupAPI } from '@/apis';
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

export const useLogout = () => {
  return useMutation({
    mutationFn: () => logoutAPI(),
  });
};
