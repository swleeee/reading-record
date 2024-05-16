import React from 'react';

import { Link } from '@/components';
import * as S from './Footer.styled';

const Footer = () => {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.Contents>
          <S.MenuList>
            <S.MenuItem>
              <Link sizeType="sm" styleType="tertiaryGray" to="/terms">
                이용약관
              </Link>
            </S.MenuItem>
            <S.MenuItem>
              <Link sizeType="sm" styleType="tertiaryGray" to="/privacy">
                개인정보처리방침
              </Link>
            </S.MenuItem>
          </S.MenuList>
          <S.InfoBox>
            <S.InfoText>대표: 이상원</S.InfoText>
            <S.InfoText>수원신 권선구 구운동</S.InfoText>
            <S.InfoText>사업자등록번호 : 100-83-70687</S.InfoText>
            <S.InfoText>tkddnjs0687@naver.com</S.InfoText>
            <S.InfoText>통신판매업신고번호 제3783-수원권선-0687호</S.InfoText>
          </S.InfoBox>
          <S.CopyLight>© 리딩레코드</S.CopyLight>
        </S.Contents>
      </S.Wrapper>
    </S.Footer>
  );
};

export default Footer;
