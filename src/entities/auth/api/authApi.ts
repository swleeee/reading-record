import { supabase } from '@/shared/lib';
import { deleteUploadedFileAPI, uploadFileAPI } from '@/shared/api';
import type {
  CheckNicknameDuplicatedQueryModel,
  LoginQueryModel,
  SignupQueryModel,
  GetUserInfoQueryModel,
  GetUserInfoServerModel,
  UpdateUserInfoQueryModel,
  CheckEmailDuplicatedQueryModel,
  SendEmailForAuthQueryModel,
  UpdateUserPasswordQueryModel,
  SocialLoginQueryModel,
} from '../model/types';

const DB_TABLE_NAME = 'users';

export const checkEmailDuplicatedAPI = async (
  req: CheckEmailDuplicatedQueryModel,
) => {
  const { data, error } = await supabase
    .from(DB_TABLE_NAME)
    .select('email')
    .eq('email', req.email);

  if (error) {
    throw new Error(error.message);
  }

  return !!data?.length;
};

export const checkNicknameDuplicatedAPI = async (
  req: CheckNicknameDuplicatedQueryModel,
) => {
  let query = supabase.from(DB_TABLE_NAME).select('nickname');

  if (req.userId) {
    query = query.not('id', 'eq', req.userId);
  }

  const { data, error } = await query.eq('nickname', req.nickname);

  if (error) {
    throw new Error(error.message);
  }

  return !!data?.length;
};

export const signupAPI = async (req: SignupQueryModel) => {
  const { data, error } = await supabase.auth.signUp(req);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const loginAPI = async (req: LoginQueryModel) => {
  const { data, error } = await supabase.auth.signInWithPassword(req);

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const socialLoginAPI = async (provider: SocialLoginQueryModel) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: { redirectTo: window.location.origin },
  });

  if (error) {
    throw error.message;
  }

  return data;
};

export const logoutAPI = async () => await supabase.auth.signOut();

export const sendEmailForAuthAPI = async (req: SendEmailForAuthQueryModel) => {
  const domain: string = import.meta.env.VITE_DOMAIN;

  const { data, error } = await supabase.auth.resetPasswordForEmail(req.email, {
    redirectTo: `${domain}?email=${req.email}`,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const getUserProfileAPI = async (profilePath: string) => {
  const { data } = await supabase.storage
    .from('image')
    .getPublicUrl(profilePath);

  return data.publicUrl;
};

export const getUserInfoAPI = async (req: GetUserInfoQueryModel) => {
  const { data, error } = await supabase
    .from(DB_TABLE_NAME)
    .select()
    .eq('id', req.userId)
    .returns<GetUserInfoServerModel>();

  if (error) {
    throw error.message;
  }

  return data;
};

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

export const updateUserPasswordAPI = async (
  req: UpdateUserPasswordQueryModel,
) => {
  const { data, error } = await supabase.auth.updateUser({
    password: req.password,
  });

  if (error) {
    throw error;
  }

  return data;
};
