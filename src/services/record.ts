import { useMutation } from '@tanstack/react-query';

import { updateBookRecordState } from '@/apis';
import type { UpdateBookRecordStateQueryModel } from '@/types';

export const useUpdateBookRecordStatus = () => {
  return useMutation({
    mutationFn: (req: UpdateBookRecordStateQueryModel) =>
      updateBookRecordState(req),
  });
};
