import { GENDER_OPTIONS } from '@/constants';
import type { SelectOptionType } from './common';

export interface GetUserInfoQueryModel {
  userId: string;
}

export type GetUserInfoServerModel = {
  age_flag: boolean;
  birth: string;
  created_at: string;
  email: string;
  gender: (typeof GENDER_OPTIONS)[number]['key'];
  id: string;
  nickname: string;
  privacy_flag: boolean;
  profile_url: string | null;
  terms_flag: boolean;
}[];

export interface SettingUserInfoFormType {
  profileFile: File | null;
  profileUrl: string | null;
  email: string;
  nickname: string;
  birth: { year: string; month: string; day: string };
  gender: SelectOptionType;
}

export interface UpdateUserInfoQueryModel {
  userId: string;
  originProfilePath: string | null;
  profileFile: File | null;
  nickname: string;
  gender: (typeof GENDER_OPTIONS)[number]['key'];
  birth: string;
}
