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
