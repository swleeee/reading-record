import React from 'react';

import { BookListCard, NoData, Pagination } from '@/components';
import Book1Img from '@/assets/image/book1.png';
import Book2Img from '@/assets/image/book2.png';
import { BOOK_READING_STATUS_OPTIONS } from '@/constants';
import type { GetMyLibraryServerModel } from '@/types';

interface MyLibraryPanelProps {
  queryStatus: (typeof BOOK_READING_STATUS_OPTIONS)[number]['key'] | 'all';
}

// TODO: queryStatus 추후 사용
const MyLibraryPanel = ({ queryStatus }: MyLibraryPanelProps) => {
  const myLibraryServerData: GetMyLibraryServerModel = {
    pageInfo: {
      totalCount: 15,
      totalPages: 2,
    },
    books: [
      {
        isbn: '234 263355',
        readingStatus: 'completed',
        rating: 4,
        thumbnail: Book1Img,
        bookTitle: '우아한 타입스크립트 with 리액트',
        bookContent:
          '주니어 프론트엔드 개발자를 위한 타입스크립트+리액트 온보딩 가이드 우아한형제들은 자바스크립트와 자체 개발 웹 프레임워크인 WoowahanJS를 사용했었다. 그러나 서비스가 대규모 웹 애플리케이션으로 성장하면서 기존 기술의 한계를 느끼고 타입스크립트와 리액트를 프론트엔드 표준 기술로 도입했다. 타입스크립트는 자바스크립트와 100% 호환되는 확장 언어로, 정적 타입을 지원하여 안정성과 유지보수성을 높여준다. 또한 객체 지향 프로그래밍을 지원하여 복잡한 애플리케이션을 개발하는 데 적합하다. 리액트는 UI를 개발하기 위한 라이브러리로 컴포넌트 기반의 개발 방식을 지원하여 코드의 재사용성과 유지보수성을 높여준다. 이 책은 우아한형제들의 실제 코드를 기반으로 타입스크립트의 기본 개념 및 특성과 리액트 환경에서의 타입스크립트 활용법을 알려준다. 또한 배달의민족 개발 사례와 우아한형제들 구성원의 인터뷰를 통해 실무에 바로 적용할 수 있는 다양한 기술 활용 팁을 소개한다.',
        authors: ['기시미 이치로', '고가 후미타케'],
        translators: ['전경아'],
        publisher: '인플루엔셜',
        datetime: '2014-11-17T00:00:00.000+09:00',
      },
      {
        isbn: '234 263357',
        readingStatus: 'ongoing',
        rating: null,
        thumbnail: Book2Img,
        bookTitle: '우아한 타입스크립트 with 리액트',
        bookContent:
          '주니어 프론트엔드 개발자를 위한 타입스크립트+리액트 온보딩 가이드 우아한형제들은 자바스크립트와 자체 개발 웹 프레임워크인 WoowahanJS를 사용했었다. 그러나 서비스가 대규모 웹 애플리케이션으로 성장하면서 기존 기술의 한계를 느끼고 타입스크립트와 리액트를 프론트엔드 표준 기술로 도입했다. 타입스크립트는 자바스크립트와 100% 호환되는 확장 언어로, 정적 타입을 지원하여 안정성과 유지보수성을 높여준다. 또한 객체 지향 프로그래밍을 지원하여 복잡한 애플리케이션을 개발하는 데 적합하다. 리액트는 UI를 개발하기 위한 라이브러리로 컴포넌트 기반의 개발 방식을 지원하여 코드의 재사용성과 유지보수성을 높여준다. 이 책은 우아한형제들의 실제 코드를 기반으로 타입스크립트의 기본 개념 및 특성과 리액트 환경에서의 타입스크립트 활용법을 알려준다. 또한 배달의민족 개발 사례와 우아한형제들 구성원의 인터뷰를 통해 실무에 바로 적용할 수 있는 다양한 기술 활용 팁을 소개한다.',
        authors: ['기시미 이치로', '고가 후미타케'],
        translators: ['전경아'],
        publisher: '인플루엔셜',
        datetime: '2014-11-17T00:00:00.000+09:00',
      },
      {
        isbn: '234 263358',
        readingStatus: 'pending',
        rating: null,
        thumbnail: Book1Img,
        bookTitle: '우아한 타입스크립트 with 리액트',
        bookContent:
          '주니어 프론트엔드 개발자를 위한 타입스크립트+리액트 온보딩 가이드 우아한형제들은 자바스크립트와 자체 개발 웹 프레임워크인 WoowahanJS를 사용했었다. 그러나 서비스가 대규모 웹 애플리케이션으로 성장하면서 기존 기술의 한계를 느끼고 타입스크립트와 리액트를 프론트엔드 표준 기술로 도입했다. 타입스크립트는 자바스크립트와 100% 호환되는 확장 언어로, 정적 타입을 지원하여 안정성과 유지보수성을 높여준다. 또한 객체 지향 프로그래밍을 지원하여 복잡한 애플리케이션을 개발하는 데 적합하다. 리액트는 UI를 개발하기 위한 라이브러리로 컴포넌트 기반의 개발 방식을 지원하여 코드의 재사용성과 유지보수성을 높여준다. 이 책은 우아한형제들의 실제 코드를 기반으로 타입스크립트의 기본 개념 및 특성과 리액트 환경에서의 타입스크립트 활용법을 알려준다. 또한 배달의민족 개발 사례와 우아한형제들 구성원의 인터뷰를 통해 실무에 바로 적용할 수 있는 다양한 기술 활용 팁을 소개한다.',
        authors: ['기시미 이치로', '고가 후미타케'],
        translators: ['전경아'],
        publisher: '인플루엔셜',
        datetime: '2014-11-17T00:00:00.000+09:00',
      },
    ],
  };

  return (
    <div>
      {myLibraryServerData.books.length ? (
        myLibraryServerData.books.map((book) => (
          <BookListCard
            key={book.isbn}
            readingStatus={book.readingStatus}
            rating={book.rating}
            isbn={book.isbn}
            thumbnail={book.thumbnail}
            bookTitle={book.bookTitle}
            authors={book.authors}
            translators={book.translators}
            publisher={book.publisher}
            datetime={book.datetime}
            bookContent={book.bookContent}
          />
        ))
      ) : (
        <NoData content={`비어 있습니다`} />
      )}

      <Pagination
        totalPages={myLibraryServerData.pageInfo.totalPages}
        maxPageCount={10}
      />
    </div>
  );
};

export default MyLibraryPanel;
