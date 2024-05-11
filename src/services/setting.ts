import { useMutation } from '@tanstack/react-query';

import { updateUserInfoAPI } from '@/apis';
import type { UpdateUserInfoQueryModel } from '@/types';
import queryClient from './queryClient';

export const useUpdateUserInfo = () => {
  return useMutation({
    mutationFn: (req: UpdateUserInfoQueryModel) => updateUserInfoAPI(req),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};
