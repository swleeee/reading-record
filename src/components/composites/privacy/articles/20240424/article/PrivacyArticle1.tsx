import React from 'react';

import * as S from './PrivacyArticle.styled';

const PrivacyArticle1 = () => {
  return (
    <S.Article>
      <S.H4 id="제1조 이용자 및 법정대리인의 권리/의무 및 그 행사방법">
        제1조 이용자 및 법정대리인의 권리/의무 및 그 행사방법
      </S.H4>
      <S.Ol>
        <S.Li>
          ① 이용자는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를
          행사할 수 있습니다.
          <S.Ul>
            <S.Li depth={2}>1. 개인정보 열람요구</S.Li>
            <S.Li depth={2}>2. 삭제 요구</S.Li>
            <S.Li depth={2}>3. 처리정지 요구</S.Li>
          </S.Ul>
        </S.Li>
        <S.Li>
          ② 이용자는 홈페이지의 “개인정보수정", “회원탈퇴" 메뉴 및 회사에 대해
          회사 이메일을 통하여 권리 행사를 하실 수 있으며 회사는 이에 대해
          지체없이 조치하겠습니다.
          <S.Ol>
            <S.Li depth={2}>
              1. 개인정보 수정, 회원 탈퇴 경로 및 방법
              <S.Ul>
                <S.Li depth={3}>- 로그인 ⟶ 마이 페이지 ⟶ 개인정보 수정</S.Li>
                <S.Li depth={3}>
                  - 해당 경로를 통해 ‘비밀번호 재확인' 후 직접 개인정보 수정 및
                  회원 탈퇴, 사용자 데이터 삭제 가능
                </S.Li>
              </S.Ul>
            </S.Li>
          </S.Ol>
        </S.Li>
        <S.Li>
          ③ 이용자는 개인정보 보호 유관법령을 위반하여 회사가 처리하고 있는
          이용자 본인이나 타인의 개인정보 및 사생활을 침해하여서는 아니됩니다.
        </S.Li>
      </S.Ol>
    </S.Article>
  );
};

export default PrivacyArticle1;
