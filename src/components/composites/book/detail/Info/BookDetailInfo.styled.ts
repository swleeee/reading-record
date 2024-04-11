import tw, { css, styled } from 'twin.macro';

export const BookDetailSection = tw.section`mb-[64px]`;

export const BookInfoWrapper = tw.section`w-full max-w-[768px] h-full mx-auto rounded-[4px] px-[24px] desktop:max-w-[1200px]`;

export const BookSubInfoList = tw.dl`relative flex justify-center gap-x-[12px] mt-[-25px] mb-[24px] desktop:mt-[-32px]`;

export const BookSubInfoWrapper = tw.div`flex-1 border border-brown100 rounded-[4px] shadow-light_sm overflow-hidden`;

export const BookSubInfoTitle = tw.dt`py-[4px] m-body-m13 text-center bg-white tablet:t-body-m13 desktop:d-body-m15`;

export const BookSubInfoDescription = tw.dt`h-full py-[6px] m-body-r12 text-center bg-brown100 tablet:t-body-r12 desktop:d-body-r14`;

export const BookThumbnailSection = styled.section<{ src: string }>`
  ${({ src }) => css`
    ${tw`relative flex justify-center items-center w-full h-[300px] before:(content-[''] absolute top-0 left-0 right-0 bottom-0 bg-no-repeat bg-cover bg-blend-multiply opacity-70) tablet:h-[500px] desktop:h-[660px]`}

    &::before {
      // FIXME: tw를 이용한 방법 실패하여 하기와 같이 작성. 추후 수정 필요
      background-image: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 1) 100%
        ),
        url(${src});

      // FIXME: tw를 이용한 방법 실패하여 하기와 같이 작성. 추후 수정 필요
      mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
      -webkit-mask-image: linear-gradient(
        to bottom,
        black 80%,
        transparent 100%
      );
    }
  `}
`;

export const BookThumbnail = tw.img`relative w-[144px] h-[216px] rounded-[4px] object-fill shadow-light_lg tablet:(w-[178px] h-[252px]) desktop:(w-[198px] h-[286px])`;

export const BookInfoList = tw.dl`grid grid-cols-[minmax(80px, auto) 1fr] gap-y-[4px] rounded-[4px] px-[12px] py-[10px] bg-brown50 tablet:mx-auto`;

export const BookInfoTitle = tw.dt`m-body-m13 tablet:t-body-m13 desktop:d-body-m15`;

export const BookInfoDescription = tw.dd`m-body-r12 tablet:t-body-r12 desktop:d-body-r14`;
