import { Meta, StoryObj } from '@storybook/react';

import { BookRecordCard } from '@/components';
import Book1Img from '@/assets/image/book1.png';
import Book2Img from '@/assets/image/book2.png';
import Profile1Img from '@/assets/image/profile1.png';
// import Profile2Img from '@/assets/image/profile2.png';
// import { BookCardType } from '@/types';

const meta = {
  title: 'Design System/Components/Card/BookRecordCard',
  component: BookRecordCard,
  argTypes: {
    bookImgSrc: {
      table: {
        disable: true,
      },
    },
    profileImgSrc: {
      table: {
        disable: true,
      },
    },

    userName: {
      name: 'User name',
      description: '유저 이름',
      // type: {
      //   required: true,
      // },
    },
    likeCount: {
      name: 'Like count',
      description: '좋아요 수',
      type: 'number',
    },
    content: {
      name: 'Record content',
      description: '감상문 내용',
    },
    id: {
      table: {
        disable: true,
      },
    },
    linkToBaseUrl: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof BookRecordCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HasProfile: Story = {
  args: {
    id: '1',
    linkToBaseUrl: 'book',
    bookImgSrc: Book1Img,
    profileImgSrc: Profile1Img,
    userName: '홍길동',
    likeCount: 14,
    content:
      'dsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjflj',
  },
};

export const NoneProfile: Story = {
  args: {
    id: '2',
    linkToBaseUrl: 'book',
    bookImgSrc: Book2Img,
    profileImgSrc: null,
    userName: '박주영',
    likeCount: 8,
    content: 'dsfkld',
  },
};
