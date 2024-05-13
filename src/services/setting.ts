import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import { getUserInfoAPI, updateUserInfoAPI } from '@/apis';
import type { GetUserInfoQueryModel, UpdateUserInfoQueryModel } from '@/types';
import queryClient from './queryClient';

export const settingKeys = {
  user: (req: GetUserInfoQueryModel) => ['user', req] as const,
};

export const useGetUserInfo = (req: GetUserInfoQueryModel) => {
  return useSuspenseQuery({
    queryKey: settingKeys.user(req),
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
