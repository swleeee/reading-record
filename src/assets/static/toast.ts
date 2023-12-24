export const TOAST = {
  SUCCESS: {},
  WARNING: {},
  INFO: {
    SERVICE_REPAIRING: {
      type: 'info',
      title: '서비스 준비중입니다.',
      message:
        '서비스 이용에 불편을 드려 죄송합니다.\n더 나은 서비스로 찾아뵙겠습니다.',
    },
  },
} as const;
