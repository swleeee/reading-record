import { supabase } from '@/lib';
import type { UpdateUserInfoQueryModel } from '@/types';
import { deleteUploadedFileAPI, uploadFileAPI } from './file';

const updateUserProfileImage = async (
  newFile: File | null,
  originFilePath: string | null,
) => {
  // NOTE: 기존 프로필 X, 신규 프로필 O
  if (newFile && !originFilePath) {
    return uploadFileAPI('profile', newFile);
  }

  // NOTE: 기존 프로필 O, 신규 프로필 X
  if (!newFile && originFilePath) {
    return deleteUploadedFileAPI(originFilePath);
  }

  // NOTE: 기존 프로필 O, 신규 프로필 O
  if (newFile && originFilePath) {
    await deleteUploadedFileAPI(originFilePath);

    return uploadFileAPI('profile', newFile);

    /* TODO: 추후 업로드 파일 업데이트 관련 브라우저 캐싱 이슈 조사 필요
    const { data } = await supabase.storage
      .from('image')
      .update(originFilePath, newFile, {
        cacheControl: '300',
        upsert: false,
      });


    return data;
    */
  }

  // NOTE: 기존 프로필 X, 신규 프로필 X
  return null;
};

export const updateUserInfoAPI = async (req: UpdateUserInfoQueryModel) => {
  const profileFile = await updateUserProfileImage(
    req.profileFile,
    req.originProfilePath,
  );

  const body = {
    profile_url: profileFile?.path ?? null,
    nickname: req.nickname,
    gender: req.gender,
    birth: req.birth,
  };

  await supabase.auth.updateUser({ data: body });
};
