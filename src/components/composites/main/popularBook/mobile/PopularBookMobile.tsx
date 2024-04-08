import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { SegmentedButton } from '@/components';
import Book1Img from '@/assets/image/book1.png';
import Book2Img from '@/assets/image/book2.png';
import type { PopularBookCardType, SelectOptionType } from '@/types';
import * as S from './PopularBookMobile.styled';

const PopularBookMobile = () => {
  const DATE_OPTIONS = [
    { key: 'week', label: 'Week' },
    { key: 'month', label: 'Month' },
    { key: 'year', label: 'Year' },
  ];

  const popularBooks: PopularBookCardType[] = [
    {
      id: '1',
      bookImgSrc: Book1Img,
      title:
        '트렌드코리아 2024 트렌드코리아 2024 트렌드코리아 2024 트렌드코리아 2024 트렌드코리아 2024 트렌드코리아 2024 트렌드코리아 2024',
      content:
        '모든 일은 서서히 준비되고 있다가 갑작스럽게 나타난다. 챗GPT가 그랬다. 인공지능 기술과 이야기가 수도 없이 나왔지만, 챗GPT만큼 우리에게 충격을 주는 것은 없었다. 무엇이 달랐던 것일까? ‘자연어’ 소통이 가능하다는 점일 것이다. “가장 인기 있는 새로운 프로그래밍 언어는 영어”라는 말이 나오는 이유다. 여기서 말하는 ‘영어’는 한국어도 될 수 있고, 일본어도 될 수 있다. 그러니까 그냥 평상시의 말과 글로 이루어지는 인공지능 시대에 돌입한 것이다. 모든 학자들이, 모든 책들이 ‘AI’와 ‘인공지능’, ‘챗GPT’를 얘기하는 이 시점에서 『트렌드 코리아 2024』는 인간의 역할 혹은 역량에 주목했다. 중요한 점은 이것이다. 즉, AI는 자신이 내놓은 결과물을 평가할 수 없다. 그것에 점수를 매기고 그 결과물을 채택할지 말지를 결정하는 것은 궁극적으로 인간의 몫이다. 미드저니가 아무리 환상적인 그림을 그릴지라도, 그 마지막 터치는 인간에게 남겨져 있다. 바로 ‘화룡점정’이다. 오롯이 인간만의 역량을 최대한 끌어올리는 것. 이를 위해 우리는 무엇을 알아야 하고, 무엇을 준비해야 할까? 2배속 사회에서 균형점을 찾기 위한 여백은 무엇인가? 올해의 〈트렌드 코리아〉는 유독 천천히 읽기를 권한다. ',
    },
    {
      id: '2',
      bookImgSrc: Book2Img,
      title: '우아한 타입스크립트 with 리액트',
      content:
        '주니어 프론트엔드 개발자를 위한 타입스크립트+리액트 온보딩 가이드 우아한형제들은 자바스크립트와 자체 개발 웹 프레임워크인 WoowahanJS를 사용했었다. 그러나 서비스가 대규모 웹 애플리케이션으로 성장하면서 기존 기술의 한계를 느끼고 타입스크립트와 리액트를 프론트엔드 표준 기술로 도입했다. 타입스크립트는 자바스크립트와 100% 호환되는 확장 언어로, 정적 타입을 지원하여 안정성과 유지보수성을 높여준다. 또한 객체 지향 프로그래밍을 지원하여 복잡한 애플리케이션을 개발하는 데 적합하다. 리액트는 UI를 개발하기 위한 라이브러리로 컴포넌트 기반의 개발 방식을 지원하여 코드의 재사용성과 유지보수성을 높여준다. 이 책은 우아한형제들의 실제 코드를 기반으로 타입스크립트의 기본 개념 및 특성과 리액트 환경에서의 타입스크립트 활용법을 알려준다. 또한 배달의민족 개발 사례와 우아한형제들 구성원의 인터뷰를 통해 실무에 바로 적용할 수 있는 다양한 기술 활용 팁을 소개한다.',
    },
    {
      id: '3',
      bookImgSrc: Book1Img,
      title:
        '트렌드코리아 2024 트렌드코리아 2024 트렌드코리아 2024 트렌드코리아 2024 트렌드코리아 2024',
      content:
        '모든 일은 서서히 준비되고 있다가 갑작스럽게 나타난다. 챗GPT가 그랬다. 인공지능 기술과 이야기가 수도 없이 나왔지만, 챗GPT만큼 우리에게 충격을 주는 것은 없었다. 무엇이 달랐던 것일까? ‘자연어’ 소통이 가능하다는 점일 것이다. “가장 인기 있는 새로운 프로그래밍 언어는 영어”라는 말이 나오는 이유다. 여기서 말하는 ‘영어’는 한국어도 될 수 있고, 일본어도 될 수 있다. 그러니까 그냥 평상시의 말과 글로 이루어지는 인공지능 시대에 돌입한 것이다. 모든 학자들이, 모든 책들이 ‘AI’와 ‘인공지능’, ‘챗GPT’를 얘기하는 이 시점에서 『트렌드 코리아 2024』는 인간의 역할 혹은 역량에 주목했다. 중요한 점은 이것이다. 즉, AI는 자신이 내놓은 결과물을 평가할 수 없다. 그것에 점수를 매기고 그 결과물을 채택할지 말지를 결정하는 것은 궁극적으로 인간의 몫이다. 미드저니가 아무리 환상적인 그림을 그릴지라도, 그 마지막 터치는 인간에게 남겨져 있다. 바로 ‘화룡점정’이다. 오롯이 인간만의 역량을 최대한 끌어올리는 것. 이를 위해 우리는 무엇을 알아야 하고, 무엇을 준비해야 할까? 2배속 사회에서 균형점을 찾기 위한 여백은 무엇인가? 올해의 〈트렌드 코리아〉는 유독 천천히 읽기를 권한다. ',
    },
    {
      id: '4',
      bookImgSrc: Book2Img,
      title: '우아한 타입스크립트 with 리액트',
      content:
        '주니어 프론트엔드 개발자를 위한 타입스크립트+리액트 온보딩 가이드 우아한형제들은 자바스크립트와 자체 개발 웹 프레임워크인 WoowahanJS를 사용했었다. 그러나 서비스가 대규모 웹 애플리케이션으로 성장하면서 기존 기술의 한계를 느끼고 타입스크립트와 리액트를 프론트엔드 표준 기술로 도입했다. 타입스크립트는 자바스크립트와 100% 호환되는 확장 언어로, 정적 타입을 지원하여 안정성과 유지보수성을 높여준다. 또한 객체 지향 프로그래밍을 지원하여 복잡한 애플리케이션을 개발하는 데 적합하다. 리액트는 UI를 개발하기 위한 라이브러리로 컴포넌트 기반의 개발 방식을 지원하여 코드의 재사용성과 유지보수성을 높여준다. 이 책은 우아한형제들의 실제 코드를 기반으로 타입스크립트의 기본 개념 및 특성과 리액트 환경에서의 타입스크립트 활용법을 알려준다. 또한 배달의민족 개발 사례와 우아한형제들 구성원의 인터뷰를 통해 실무에 바로 적용할 수 있는 다양한 기술 활용 팁을 소개한다.',
    },
    {
      id: '5',
      bookImgSrc: Book1Img,
      title:
        '트렌드코리아 2024 트렌드코리아 2024 트렌드코리아 2024 트렌드코리아 2024 트렌드코리아 2024',
      content:
        '모든 일은 서서히 준비되고 있다가 갑작스럽게 나타난다. 챗GPT가 그랬다. 인공지능 기술과 이야기가 수도 없이 나왔지만, 챗GPT만큼 우리에게 충격을 주는 것은 없었다. 무엇이 달랐던 것일까? ‘자연어’ 소통이 가능하다는 점일 것이다. “가장 인기 있는 새로운 프로그래밍 언어는 영어”라는 말이 나오는 이유다. 여기서 말하는 ‘영어’는 한국어도 될 수 있고, 일본어도 될 수 있다. 그러니까 그냥 평상시의 말과 글로 이루어지는 인공지능 시대에 돌입한 것이다. 모든 학자들이, 모든 책들이 ‘AI’와 ‘인공지능’, ‘챗GPT’를 얘기하는 이 시점에서 『트렌드 코리아 2024』는 인간의 역할 혹은 역량에 주목했다. 중요한 점은 이것이다. 즉, AI는 자신이 내놓은 결과물을 평가할 수 없다. 그것에 점수를 매기고 그 결과물을 채택할지 말지를 결정하는 것은 궁극적으로 인간의 몫이다. 미드저니가 아무리 환상적인 그림을 그릴지라도, 그 마지막 터치는 인간에게 남겨져 있다. 바로 ‘화룡점정’이다. 오롯이 인간만의 역량을 최대한 끌어올리는 것. 이를 위해 우리는 무엇을 알아야 하고, 무엇을 준비해야 할까? 2배속 사회에서 균형점을 찾기 위한 여백은 무엇인가? 올해의 〈트렌드 코리아〉는 유독 천천히 읽기를 권한다. ',
    },
    {
      id: '6',
      bookImgSrc: Book2Img,
      title: '우아한 타입스크립트 with 리액트',
      content:
        '주니어 프론트엔드 개발자를 위한 타입스크립트+리액트 온보딩 가이드 우아한형제들은 자바스크립트와 자체 개발 웹 프레임워크인 WoowahanJS를 사용했었다. 그러나 서비스가 대규모 웹 애플리케이션으로 성장하면서 기존 기술의 한계를 느끼고 타입스크립트와 리액트를 프론트엔드 표준 기술로 도입했다. 타입스크립트는 자바스크립트와 100% 호환되는 확장 언어로, 정적 타입을 지원하여 안정성과 유지보수성을 높여준다. 또한 객체 지향 프로그래밍을 지원하여 복잡한 애플리케이션을 개발하는 데 적합하다. 리액트는 UI를 개발하기 위한 라이브러리로 컴포넌트 기반의 개발 방식을 지원하여 코드의 재사용성과 유지보수성을 높여준다. 이 책은 우아한형제들의 실제 코드를 기반으로 타입스크립트의 기본 개념 및 특성과 리액트 환경에서의 타입스크립트 활용법을 알려준다. 또한 배달의민족 개발 사례와 우아한형제들 구성원의 인터뷰를 통해 실무에 바로 적용할 수 있는 다양한 기술 활용 팁을 소개한다.',
    },
  ];

  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(
    DATE_OPTIONS[0],
  );

  const handleOptionSelect = (option: SelectOptionType) => () => {
    setSelectedOption(option);
  };

  return (
    <S.PopularBookSection>
      <header>
        <S.Title>가장 인기있는 도서는?</S.Title>
        <SegmentedButton
          css={S.dateSegmentedButton}
          options={DATE_OPTIONS}
          selectedOption={selectedOption}
          onClick={handleOptionSelect}
        />
      </header>
      <Swiper
        css={S.swiper}
        breakpoints={{
          375: {
            width: 375,
            slidesPerView: 2.6,
          },
          476: {
            width: 476,
            slidesPerView: 3,
          },
          576: {
            width: 576,
            slidesPerView: 3.6,
          },
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={2.4}
        slidesOffsetBefore={24}
        slidesOffsetAfter={24}
        spaceBetween={2}
      >
        {popularBooks.map((popularBook) => (
          <SwiperSlide key={popularBook.id}>
            <Link css={S.bookDetailLink} to={`book/${popularBook.id}`}>
              <S.BookThumbnail
                src={popularBook.bookImgSrc}
                alt="book thumbnail"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.PopularBookSection>
  );
};

export default PopularBookMobile;