import tw, { css, styled } from 'twin.macro';

export const bookDetailLink = css`
  ${tw`flex gap-x-[12px] mb-[8px] border border-white rounded-[4px] px-[8px] py-[12px] bg-white shadow-light_sm tablet:(gap-x-[20px] mb-[16px]) desktop:(gap-x-[32px] mb-[24px])`}

  &:hover > img {
    ${tw`scale-105 duration-200`}
  }
`;

export const BookThumbnail = tw.img`shrink-0 border border-brown300 w-[120px] tablet:w-[130px] desktop:w-[160px]`;

/*  FIXME: 말줄임 라인 수를 설정했지만 라인이 계속 변화하여 제대로 보여지지 않는 이슈
    a) 말줄임 라인 수 동적으로 설정
    b) contents 영역은 상세 조회 시 보여주고 
       목록 조회 시에는 보여주지 않고 다른 항목들을 대신하여 보여주도록 수정
*/
export const BookContentWrapper = styled.div`
  ${tw`text-ellipsis break-all overflow-hidden`}

  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
`;

export const BookTitle = tw.span`inline-block m-body-m15 mb-[6px] tablet:t-body-m15 desktop:d-body-m17`;

export const PersonWrapper = styled.div`
  ${tw`mb-[4px]`}

  & > span {
    ${tw`m-body-r12 tablet:t-body-r12 desktop:d-body-r14`}

    & > b {
      ${tw`m-body-m12 tablet:t-body-m12 desktop:d-body-m14`}
    }
  }
`;

export const Publishing = styled.div`
  ${tw`mb-[4px]`}
`;

export const publisherLink = css`
  ${tw`inline-block p-0 tablet:p-0`}
`;

export const Time = tw.time`m-body-r12 text-gray-600 tablet:t-body-r12 desktop:d-body-r14`;

export const BookContent = tw.p`m-body-r13 tablet:t-body-r13 desktop:d-body-r15`;
