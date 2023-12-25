import { Meta, StoryObj } from '@storybook/react';

import { Toast, ToastItem } from '@/components';
import { ToastType } from '@/types';

const meta = {
  title: 'Design System/Components/Toast',
  component: Toast,
  argTypes: {
    type: {
      control: 'radio',
      options: ['success', 'warning', 'info'],
      name: 'Toast type',
      description: '토스트 유형',
      type: {
        required: true,
      },
    },
    title: {
      name: 'Toast title',
      description: '토스트 제목',
    },
    message: {
      name: 'Toast message',
      description: '토스트 메시지',
      type: {
        required: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    duration: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SuccessToast: Story = (args: ToastType) => {
  return <ToastItem {...args} />;
};

SuccessToast.args = {
  id: '',
  type: 'success',
  title: '서비스 준비중입니다.',
  message:
    '서비스 이용에 불편을 드려 죄송합니다.\n더 나은 서비스로 찾아뵙겠습니다.',
  duration: 0,
};

export const WarningToast: Story = (args: ToastType) => {
  return <ToastItem {...args} />;
};

WarningToast.args = {
  ...SuccessToast.args,
  type: 'warning',
};

export const InformationToast: Story = (args: ToastType) => {
  return <ToastItem {...args} />;
};

InformationToast.args = {
  ...SuccessToast.args,
  type: 'info',
};
