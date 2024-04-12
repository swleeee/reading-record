export const TOAST = {
  SUCCESS: {
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
