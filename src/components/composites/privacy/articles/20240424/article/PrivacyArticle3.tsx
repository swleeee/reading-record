import React from 'react';

import * as S from './PrivacyArticle.styled';

const PrivacyArticle3 = () => {
  return (
    <S.Article>
      <S.H4 id="제3조 개인정보 수집·이용 목적, 수집하는 개인정보 항목 및 수집 방법">
        제3조 개인정보 수집·이용 목적, 수집하는 개인정보 항목 및 수집 방법
      </S.H4>
      <S.Ol>
        <S.Li>
          ① 회사는 회원가입, 회원 관리 등 각종 서비스의 제공을 위해 개인정보를
          수집하고 있습니다.
          <S.Ol>
            <S.Li depth={2}>
              1. 회원가입/마이페이지 이용 시
              <S.Table>
                <S.Caption>
                  회원가입/마이페이지 이용 시 개인정보수집 항목 표
                </S.Caption>
                <S.Thead>
                  <tr>
                    <S.Th scope="col">목적</S.Th>
                    <S.Th scope="col">수집 항목</S.Th>
                    <S.Th scope="col">수집 목적</S.Th>
                    <S.Th scope="col">보유 및 이용기간</S.Th>
                  </tr>
                </S.Thead>
                <tbody>
                  <tr>
                    <S.Td>회원가입, 마이페이지</S.Td>
                    <S.Td>
                      (필수): 닉네임, 성별, 생년월일, 비밀번호, 이메일,
                      연락처(휴대폰 or 전화번호)
                    </S.Td>
                    <S.Td>
                      본인확인, 회원관리, 회원특성에 따른 서비스 이용 통계
                    </S.Td>
                    <S.Td>회원 탈퇴 시까지 (단, 관계법령에 따름)</S.Td>
                  </tr>
                  <tr>
                    <S.Td>마이페이지</S.Td>
                    <S.Td>(선택): 프로필 이미지</S.Td>
                    <S.Td>회원관리</S.Td>
                    <S.Td>회원 탈퇴 시까지 (단, 관계법령에 따름)</S.Td>
                  </tr>
                </tbody>
              </S.Table>
            </S.Li>
            <S.Li depth={2}>
              2. 서비스 이용 시 추가 수집 유형
              <S.Table>
                <S.Caption>서비스 이용 시 추가 수집 유형 표</S.Caption>
                <S.Thead>
                  <tr>
                    <S.Th scope="col">구분</S.Th>
                    <S.Th scope="col">수집 항목</S.Th>
                  </tr>
                </S.Thead>
                <tbody>
                  <tr>
                    <S.Td>자동 생성 정보</S.Td>
                    <S.Td>
                      IP Address, 쿠키, 방문 일시, OS종류, 브라우져 종류, 서비스
                      이용 기록, 불량 이용 기록, 단말기 모델, 이동통신사 정보,
                      하드웨어 ID, 단말기 OS 종류, IMEI, 회원번호, PC 모바일
                      여부, 연령, 성별, 검색키워드, 시간
                    </S.Td>
                  </tr>
                </tbody>
              </S.Table>
            </S.Li>
          </S.Ol>
        </S.Li>
        <S.Li>
          ② 회사는 이용자가 제공한 모든 정보를 상기 목적에 필요한 용도 이외로는
          사용하지 않으며, 이용 목적이 변경될 시에는 사전에 별도 동의를 구할
          것입니다.
        </S.Li>
      </S.Ol>
    </S.Article>
  );
};

export default PrivacyArticle3;
