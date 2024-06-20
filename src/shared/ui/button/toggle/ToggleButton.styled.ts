import tw, { styled } from 'twin.macro';

export const Container = tw.label`relative inline-block w-[44px] h-[24px] desktop:(w-[60px] h-[34px])`;

export const Input = styled.input`
  ${tw`w-0 h-0`}

  &:checked + span {
    ${tw`bg-brown400`}
  }

  &:checked + span::before {
    ${tw`translate-x-[20px] desktop:translate-x-[26px]`}
  }
`;

export const Span = tw.span`absolute w-full h-full rounded-[34px] bg-gray100 cursor-pointer transition-[background-color 0.2s] before:(content-[''] absolute top-[4px] left-[4px] w-[16px] h-[16px] rounded-[50%] bg-white transition-[transform 0.2s] desktop:(w-[26px] h-[26px]))`;
