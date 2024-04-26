export const TOAST = {
  SUCCESS: {
    SIGNUP: {
      type: 'success',
      message: '회원가입이 완료되었습니다.',
    },
    UPDATE_READING_PENDING_STATUS: {
      type: 'success',
      message: `'읽기 전' 상태 변경 완료!`,
    },
    UPDATE_READING_ONGOING_STATUS: {
      type: 'success',
      message: `'읽기 중' 상태 변경 완료!`,
    },
    UPDATE_READING_COMPLETED_STATUS: {
      type: 'success',
      message: `'읽기 완료' 상태 변경 완료!`,
    },
  },
  WARNING: {
    AUTH_ALREADY_REGISTERED: {
      type: 'warning',
      message: '이미 등록된 계정입니다.',
    },
    LOGIN_EMAIL_NOT_CONFIRMED: {
      type: 'warning',
      title: '로그인을 실패하였습니다.',
      message:
        '가입 확인이 안 된 상태입니다. \n이메일을 열고 확인 링크를 눌러주세요. :)',
    },
    LOGIN_FAILED: {
      type: 'warning',
      title: '로그인을 실패하였습니다.',
      message: '아이디와 비밀번호를 확인해주세요. :)',
    },
    UPDATE_READING_STATUS: {
      type: 'warning',
      message: '상태를 변경할 수 없습니다 :(',
    },
  },
  INFO: {
    SERVICE_REPAIRING: {
      type: 'info',
      title: '서비스 준비중입니다.',
      message:
        '서비스 이용에 불편을 드려 죄송합니다.\n더 나은 서비스로 찾아뵙겠습니다.',
    },
  },
} as const;
