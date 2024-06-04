export const TOAST_MESSAGE = {
  SUCCESS: {
    SIGNUP: {
      type: 'success',
      message: '회원가입이 완료되었습니다.',
    },
    LOGOUT: {
      type: 'success',
      message: '로그아웃 처리 완료되었습니다.',
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
    UPDATE_RECORD_CONTENT: {
      type: 'success',
      message: '독서 기록 내용이 변경 되었습니다!',
    },
    UPDATE_USER_INFO: {
      type: 'success',
      message: '회원 정보 수정이 완료되었습니다!',
    },
    SEND_EMAIL: {
      type: 'success',
      message:
        '비밀번호 재설정 링크가 전송되었습니다. \n이메일을 확인해주세요! :)',
    },
    RESET_PASSWORD: {
      type: 'success',
      message: '비밀번호 변경 완료되었습니다! :)',
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
      message: `'읽기 완료' 상태에서 다른 상태로 변경할 수 없습니다 :(`,
    },
    END_DATE_BEFORE_THAN_START_DATE: {
      type: 'warning',
      message: `'종료 날짜'가 '시작 날짜'보다 이후여야 합니다.`,
    },
    RESET_PASSWORD_AUTH_EXPIRED: {
      type: 'warning',
      message:
        '이메일 인증 유효시간이 만료되었습니다. \n다시 인증을 시도해주세요.',
    },
    DEFAULT: {
      type: 'warning',
      message: '오류가 발생했습니다. 다시 시도해주세요.',
    },
  },
  INFO: {
    CHECK_NICKNAME: {
      type: 'info',
      message: '닉네임 중복 확인을 완료해주세요 :)',
    },
    LOGIN: {
      type: 'info',
      message: '해당 서비스를 이용하기 위하여 로그인을 진행해주세요 :)',
    },
    SERVICE_REPAIRING: {
      type: 'info',
      title: '서비스 준비중입니다.',
      message:
        '서비스 이용에 불편을 드려 죄송합니다.\n더 나은 서비스로 찾아뵙겠습니다.',
    },
    RESET_PASSWORD_NOT_AUTHORIZED: {
      type: 'info',
      message: '이메일 인증을 먼저 진행해주세요 :)',
    },
  },
} as const;
