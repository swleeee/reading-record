import { useForm } from 'react-hook-form';
import { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/components';

const meta = {
  title: 'Design System/Components/Input',
  component: Input,
  // decorators: [
  //   (Story) => {
  //     const form = useForm();
  //     return <Story {...form} />;
  //   },
  // ],
  tags: ['autodocs'],
  argTypes: {
    isDisabled: {
      control: 'boolean',
      name: 'Disable status',
      description: '입력창 활성화 상태',
    },
    hasError: {
      control: 'boolean',
      name: 'Error status',
      description: '입력창 에러 상태',
    },
    maxLength: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
      },
      name: 'Max length',
      description: '입력창 최대 길이',
    },
    placeholder: {
      control: 'text',
      name: 'Placeholder',
      description: '입력창 안내 문구',
    },
    value: {
      control: false,
    },
    type: {
      control: false,
      // control: 'select',
      // options: [
      //   'text',
      //   'number',
      //   'file',
      //   'checkbox',
      //   'radio',
      //   'search',
      //   'email',
      //   'password',
      // ],
    },
    register: {
      control: false,
    },
    className: {
      control: false,
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultInputComponent = (args: any) => {
  const { watch, register } = useForm({ defaultValues: { input: '' } });

  return (
    <Input {...args} value={watch('input')} register={register('input')}>
      {args.children}
    </Input>
  );
};

// QUESTION: Story 작성 시 react-hook-form을 어떻게 활용해야 되는가
export const DefaultInput: Story = {
  render: (args) => <DefaultInputComponent {...args} />,
  args: {
    isDisabled: false,
    hasError: false,
    maxLength: 100,
    placeholder: '입력해주세요.',
    type: 'text',
    value: '',
    // register: {
    //   // onChange: action('onChange'),
    //   onChange: async (e) => {
    //     // 비동기 작업 수행
    //     return true;
    //   },
    //   // onBlur: action('onBlur'),
    //   onBlur: async (e) => {
    //     // 비동기 작업 수행
    //     return true;
    //   },
    //   ref: (instance) => {
    //     // ref 처리
    //   },
    //   name: 'myField',
    //   // mount: false,
    // },
  },
};
