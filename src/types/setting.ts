import type { SelectOptionType } from './common';

export interface SettingUserInfoFormType {
  profileFile: File | null;
  profileUrl: string | null;
  email: string;
  nickname: string;
  birth: { year: string; month: string; day: string };
  gender: SelectOptionType;
}
