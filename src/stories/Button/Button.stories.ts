import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/components';

const meta = {
  title: 'Design System/Components/Button',
  component: Button,
  // tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
    actionType: {
      control: {
        type: 'radio',
        options: ['button', 'submit', 'reset'],
      },
      name: 'Button Action',
      description: '버튼 행동 방식',
    },
    isDisabled: {
      control: 'boolean',
      if: { arg: 'isLoading', truthy: false },
      name: 'Disable status',
      description: '버튼 활성화 상태',
    },
    isLoading: {
      control: 'boolean',
      if: { arg: 'isDisabled', truthy: false },
      name: 'Loading status',
      description: '버튼 로딩 상태',
    },
    label: {
      control: {
        type: 'text',
      },
      defaultValue: '추가',
      description: '버튼 이름',
    },
    styleType: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'tertiary'],
      },
      name: 'Button Style', // NOTE: etc - Button Type, Button Variations
      description: '버튼 스타일',
    },
    sizeType: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'la'],
      },
      if: { arg: 'tertiary', truthy: false },
      name: 'Button Size',
      description: '버튼 크기',
    },
    onClick: {
      action: 'clicked',
      description: '버튼 클릭',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
/** A primary button is important! */
export const Primary: Story = {
  args: {
    isLoading: false,
    isDisabled: false,
    actionType: 'button',
    label: 'Button',
    sizeType: 'md',
    styleType: 'primary',
  },
  parameters: {
    docs: {
      // story: { inline: true }, // render the story in an iframe
      source: { type: 'code' }, //// forces the raw source code (rather than the rendered JSX).
      canvas: { sourceState: 'shown' }, // start with the source open
    },
    layout: 'centered',
    defaultViewport: 'responsive',
    viewMode: 'docs', // 스토리의 보기 모드 설정
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    styleType: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    ...Primary.args,
    styleType: 'tertiary',
  },

  argTypes: {
    ...meta.argTypes,
    sizeType: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'la'],
      },
    },
  },
};

/* 
Storybook은 UI 컴포넌트 개발을 돕는 도구로, UI 컴포넌트를 문서화하고 시각적으로 테스트할 수 있는 환경을 제공합니다. Storybook에서 meta는 컴포넌트의 메타 데이터를 정의하는 객체입니다. meta 객체는 주로 다음 세 가지 속성을 포함합니다.

title: 컴포넌트의 제목 또는 이름을 나타냅니다. Storybook에서는 이 제목을 사용하여 해당 컴포넌트의 이야기(Story)를 구분합니다. 예를 들어, "버튼"이라는 컴포넌트의 경우 title에 "버튼"이라는 제목을 지정할 수 있습니다.

argTypes: 컴포넌트의 인풋 프로퍼티 (props)들과 그에 대한 설정을 정의합니다. 이를 통해 Storybook은 컴포넌트와 상호작용하면서 다양한 프로퍼티 값을 설정하고 변경할 수 있습니다. 예를 들어, 버튼 컴포넌트에 size와 disabled 같은 프로퍼티가 있다면, argTypes를 사용하여 이러한 프로퍼티들의 속성과 기본값을 정의할 수 있습니다.

component: 해당 Story에 표시할 컴포넌트를 지정합니다. 이것은 Storybook에서 컴포넌트를 시각적으로 렌더링하고 인터랙션을 테스트하는 데 사용됩니다. component 속성에는 렌더링하려는 실제 컴포넌트를 가리키는 참조가 들어갑니다.

meta 객체를 사용하면 Storybook에서 컴포넌트를 이해하고 문서화하는 데 도움이 됩니다. 이 메타 데이터를 활용하면 컴포넌트의 예제와 다양한 설정을 보여주는 Story를 작성하고, 컴포넌트에 대한 사용법과 특성을 쉽게 이해할 수 있습니다. 이는 컴포넌트 라이브러리를 개발하거나 협업 프로젝트에서 UI 구성 요소를 공유하고 문서화할 때 매우 유용합니다.
*/
