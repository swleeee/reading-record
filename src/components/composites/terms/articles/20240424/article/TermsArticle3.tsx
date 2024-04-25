import React from 'react';

import * as S from './TermsArticle.styled';

const TermsArticle3 = () => {
  return (
    <S.Section>
      <S.H3 id="제3장 정보의 처리">제3장 정보의 처리</S.H3>
      <S.Article>
        <S.H4 id="제12조 (개인정보보호 및 이용)">
          제12조 (개인정보보호 및 이용)
        </S.H4>
        <S.Ol>
          <S.Li>
            1. 회사는 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』,
            『개인정보 보호법』 등 관계 법령이 정하는 바에 따라 이용자의
            개인정보를 보호하기 위해 노력합니다.
          </S.Li>
          <S.Li>
            2. 개인정보의 보호 및 활용에 대해서는 관련법 및 회사의
            개인정보처리방침이 적용됩니다. 다만, 회사의 공식 사이트 이외의
            링크된 사이트에서는 회사의 개인정보처리방침이 적용되지 않습니다.
            또한 회사는 이용자의 귀책사유로 인해 노출된 정보에 대해서 일체의
            책임을 지지 않습니다.
          </S.Li>
        </S.Ol>
      </S.Article>
    </S.Section>
  );
};

export default TermsArticle3;