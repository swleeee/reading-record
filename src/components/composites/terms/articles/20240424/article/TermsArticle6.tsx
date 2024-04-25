import React from 'react';

import * as S from './TermsArticle.styled';

const TermsArticle6 = () => {
  return (
    <S.Section>
      <S.H3 id="제6장 특별규정">제6장 특별규정</S.H3>
      <S.Article>
        <S.H4 id="제20조 (개별 약관)">제20조 (개별 약관)</S.H4>
        <S.Ol>
          <S.Li>
            1. 이 약관은 회사와 회원간에 성립되는 서비스 이용계약의 기본
            약정입니다. 회사는 필요한 경우 특정 서비스에 관하여 적용될 사항(이하
            개별약관이라고 합니다)을 정하여 미리 공지할 수 있습니다. 회원이
            이러한 개별약관에 동의하고 특정 서비스를 이용하는 경우에는
            개별약관이 우선적으로 적용되고, 이 약관은 보충적인 효력을 갖습니다.
          </S.Li>
          <S.Li>
            2. 회사는 필요한 경우 서비스 이용과 관련된 세부적인
            개별내용(이용정책 등)을 정하여 사이트 등을 통하여 공지할 수
            있습니다.
          </S.Li>
        </S.Ol>
      </S.Article>
    </S.Section>
  );
};

export default TermsArticle6;
