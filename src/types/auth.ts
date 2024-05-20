import { GENDER_OPTIONS } from '@/constants';
import type { SelectOptionType } from './common';

export interface CheckNicknameDuplicatedQueryModel {
  nickname: string;
  userId?: string;
}

export interface SignupQueryModel {
  email: string;
  password: string;
  options: {
    data: {
      nickname: string;
      gender: 'm' | 'f';
      birth: string;
      termsFlag: boolean;
      privacyFlag: boolean;
      ageFlag: boolean;
    };
  };
}

export interface LoginQueryModel {
  email: string;
  password: string;
}

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
  book_score: number;
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
