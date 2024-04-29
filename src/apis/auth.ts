import { supabase } from '@/lib';
import type {
  CheckNicknameDuplicatedQueryModel,
  LoginQueryModel,
  SignupQueryModel,
} from '@/types';

export const checkNicknameDuplicatedAPI = async (
  req: CheckNicknameDuplicatedQueryModel,
) => {
  const { data, error } = await supabase
    .from('users')
    .select('nickname')
    .eq('nickname', req.nickname);

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

export const logoutAPI = async () => await supabase.auth.signOut();
