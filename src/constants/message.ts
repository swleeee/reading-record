import { NICKNAME_MIN_LENGTH, PASSWORD_MIN_LENGTH } from './common';

export const ERROR_MESSAGE = {
  DUPLICATE_NICKNAME: '닉네임이 중복되었습니다.',
  INVALID_YEAR: '연도를 정확하게 입력해주세요 (YYYY).',
  INVALID_MONTH: '월을 정확하게 입력해주세요 (MM).',
  INVALID_DAY: '일을 정확하게 입력해주세요 (DD).',
  INVALID_DATE: '날짜를 정확하게 입력해주세요 (YYYY-MM-DD).',
  INVALID_EMAIL: '잘못된 이메일 형식입니다.',
  INVALID_PASSWORD: '영문, 숫자, 특수문자 포함하여 4~30자로 입력해주세요.',
  INVALID_NICKNAME: '영문 대소문자, 한글, 숫자만 입력 가능합니다.',
  NOT_EXIST_EMAIL: '가입된 이메일이 없습니다. 다시 확인해주세요.',
  MIN_LENGTH_PASSWORD: `비밀번호는 ${PASSWORD_MIN_LENGTH}자 이상이어야 합니다.`,
  MIN_LENGTH_NICKNAME: `닉네임은 ${NICKNAME_MIN_LENGTH}자 이상이어야 합니다.`,
  PASSWORD_NOT_MATCH: '비밀번호가 일치하지 않습니다.',
  REQUIRED: '필수 값입니다.',
  START_DATE_BEFORE_THAN_END_DATE: `'시작 날짜' 이후로 선택해주세요.`,
};

export const PASS_MESSAGE = {
  NICKNAME: '사용 가능한 닉네임입니다.',
};
