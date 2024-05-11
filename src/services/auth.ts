import { useMutation, useQuery } from '@tanstack/react-query';

import {
  checkNicknameDuplicatedAPI,
  getUserProfileAPI,
  loginAPI,
  logoutAPI,
  signupAPI,
} from '@/apis';
import type {
  CheckNicknameDuplicatedQueryModel,
  LoginQueryModel,
  SignupQueryModel,
} from '@/types';

export const useCheckNicknameDuplicated = () => {
  return useMutation({
    mutationFn: (req: CheckNicknameDuplicatedQueryModel) =>
      checkNicknameDuplicatedAPI(req),
  });
};

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

export const useGetUserProfile = (path: string | null) => {
  return useQuery({
    queryKey: ['profile', path ?? 'default'],
    queryFn: () => (path ? getUserProfileAPI(path) : null),
  });
};
