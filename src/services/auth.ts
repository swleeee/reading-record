import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';

import {
  checkNicknameDuplicatedAPI,
  getUserInfoAPI,
  getUserProfileAPI,
  loginAPI,
  logoutAPI,
  signupAPI,
  updateUserInfoAPI,
} from '@/apis';
import type {
  CheckNicknameDuplicatedQueryModel,
  GetUserInfoQueryModel,
  LoginQueryModel,
  SignupQueryModel,
  UpdateUserInfoQueryModel,
} from '@/types';
import queryClient from './queryClient';

export const authKeys = {
  user: (req: GetUserInfoQueryModel) => ['user', req] as const,
};

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

const isDataURI = (value: string) => {
  const dataURIPattern =
    /^data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+)?(;charset=[a-zA-Z0-9-]+)?(;base64)?,([^\r\n]*)$/;
  return dataURIPattern.test(value);
};

export const useGetUserProfile = (path: string | null) => {
  return useQuery({
    queryKey: ['profile', path ?? 'default'],
    queryFn: () =>
      path ? (isDataURI(path) ? path : getUserProfileAPI(path)) : null,
  });
};

export const useGetUserInfo = (req: GetUserInfoQueryModel) => {
  return useSuspenseQuery({
    queryKey: authKeys.user(req),
    queryFn: () => getUserInfoAPI(req),
  });
};

export const useUpdateUserInfo = () => {
  return useMutation({
    mutationFn: (req: UpdateUserInfoQueryModel) => updateUserInfoAPI(req),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};
