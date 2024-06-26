import tw, { css, styled } from 'twin.macro';

export const ProfileWrapper = tw.div`flex flex-col gap-y-[8px]`;

export const profile = css`
  ${tw`w-[128px] h-[128px] border border-white rounded-[64px]`}
`;

export const LoadingWrapper = styled.div`
  ${profile};
  ${tw`flex justify-center items-center border-light-grey-800 dark:border-dark-grey-100`}
`;

export const ProfileImage = styled.img`
  ${profile};
`;

export const DefaultProfile = styled.div`
  ${profile};
  ${tw`flex justify-center items-center bg-light-grey-600 dark:bg-dark-grey-300`}
`;

export const defaultProfileIcon = css`
  ${tw`w-full h-full fill-transparent`}

  & > path:first-of-type {
    ${tw`fill-transparent`}
  }
`;

export const ProfileEditInput = tw.input`hidden`;

export const ProfileEditButton = tw.button`relative`;

export const profileEditIcon = css`
  ${tw`absolute top-0 right-0 w-[32px] h-[32px] border-2 border-white rounded-full bg-light-brown-300 dark:bg-dark-brown-700`}
`;
