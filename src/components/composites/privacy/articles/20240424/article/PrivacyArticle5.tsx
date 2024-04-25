import React from 'react';

import * as S from './PrivacyArticle.styled';

const PrivacyArticle5 = () => {
  return (
    <S.Article>
      <S.H4 id="제5조 보유 및 이용 기간, 파기 절차 및 파기 방법">
        제5조 보유 및 이용 기간, 파기 절차 및 파기 방법
      </S.H4>
      <S.P>
        이용자의 개인정보는 원칙적으로 회원탈퇴 시 지체없이 파기합니다. 단,
        다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
      </S.P>
      <S.Ol>
        <S.Li>
          ① 회사 내부 방침에 의한 정보보유 사유
          <S.Ol>
            <S.Li depth={2}>
              - 보존 항목 : 닉네임, 도서 기록물 (도서 읽은 기간, 도서 평점, 도서
              감상문)
            </S.Li>
            <S.Li depth={2}>- 보존 근거 : 서비스 이용의 혼선 방지</S.Li>
            <S.Li depth={2}>- 보존 기간 : 영구</S.Li>
          </S.Ol>
        </S.Li>
        <S.Li>
          ② 파기절차
          <S.Ul>
            <S.Li depth={2}>
              - 회사는 파기 사유가 발생한 개인정보를 파기 합니다.
            </S.Li>
          </S.Ul>
        </S.Li>
        <S.Li>
          ③ 파기방법
          <S.Ul>
            <S.Li>
              1. 종이에 출력된 개인정보는 파쇄 방법으로 완전 파기합니다.
            </S.Li>
            <S.Li>
              2. 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는
              기술적 방법(재사용 시 덮어쓰기, 로우(low) 포맷 등) 등을 사용하여
              삭제합니다.
            </S.Li>
          </S.Ul>
        </S.Li>
      </S.Ol>
    </S.Article>
  );
};

export default PrivacyArticle5;
