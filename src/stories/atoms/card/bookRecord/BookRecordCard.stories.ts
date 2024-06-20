import { Meta, StoryObj } from '@storybook/react';

import { BookRecordCard } from '@/widgets/bookRecordCard';
import Book1Img from '@/shared/assets/image/book1.png';
import Book2Img from '@/shared/assets/image/book2.png';
import Profile1Img from '@/shared/assets/image/profile1.png';

const meta = {
  title: 'Design System/Components/Card/BookRecordCard',
  component: BookRecordCard,
  argTypes: {
    bookRecord: {
      thumbnail: {
        table: {
          disable: true,
        },
      },
      profile_url: {
        table: {
          disable: true,
        },
      },
      nickname: {
        name: 'User name',
        description: '유저 이름',
        // type: {
        //   required: true,
        // },
      },
      like_count: {
        name: 'Like count',
        description: '좋아요 수',
        type: 'number',
      },
      record_comment: {
        name: 'Record record_comment',
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
  },
} satisfies Meta<typeof BookRecordCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HasProfile: Story = {
  args: {
    bookRecord: {
      created_at: '',
      updated_at: '',
      id: '1',
      user_id: '1',
      isbn: '1',
      rating: 0,
      reading_start_at: '',
      reading_end_at: '',
      thumbnail: Book1Img,
      profile_url: Profile1Img,
      nickname: '홍길동',
      like_count: 14,
      record_comment:
        'dsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjfljdsfkldsjfldsjfkldsjflj',
    },
  },
};

export const NoneProfile: Story = {
  args: {
    bookRecord: {
      created_at: '',
      updated_at: '',
      id: '2',
      user_id: '2',
      isbn: '2',
      rating: 0,
      reading_start_at: '',
      reading_end_at: '',
      thumbnail: Book2Img,
      profile_url: null,
      nickname: '박주영',
      like_count: 8,
      record_comment: 'dsfkld',
    },
  },
};
