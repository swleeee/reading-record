import React from 'react';

import * as S from './PrivacyArticle.styled';

const PrivacyArticle6 = () => {
  return (
    <S.Article>
      <S.H4 id="제6조 처리위탁 현황">제6조 처리위탁 현황</S.H4>

      <S.Ol>
        <S.Li>
          ① 회사는 기본적인 서비스의 제공, 서비스의 유지/관리, 이용자 편의 제공
          등 원활한 업무 수행을 위하여 다음과 같이 개인정보 처리업무를 외부
          전문업체에 위탁 운영하고 있습니다. 회사의 개인정보 위탁처리 업체 및
          위탁업무 내용은 아래와 같습니다.
          <S.Table>
            <S.Caption>
              회사의 개인정보 위탁처리 업체 및 위탁업무 내용 표
            </S.Caption>
            <S.Thead>
              <tr>
                <S.Th scope="col">위탁 업체</S.Th>
                <S.Th scope="col">위탁 업무</S.Th>
                <S.Th scope="col">보유 및 이용기간</S.Th>
              </tr>
            </S.Thead>
            <tbody>
              <tr>
                <S.Td>Supabase</S.Td>
                <S.Td>클라우드 인프라 구축 및 운영</S.Td>
                <S.Td>회원 탈퇴 시 혹은 위탁 계약 종료시</S.Td>
              </tr>
            </tbody>
          </S.Table>
        </S.Li>
        <S.Li>
          ② 회사는 업무처리를 위하여 해당 업체에 업무 수행에 필요한 최소한의
          정보만을 제공하고 있으며, 관계 법령에 따라 위탁 계약 시 개인정보가
          안전하게 관리될 수 있도록 필요한 사항들을 규정하여 위탁된 개인정보가
          위법하게 이용되지 않도록 관리·감독 하고 있습니다.
        </S.Li>
        <S.Li>
          ③ 회사는 이용자의 사전 동의가 있거나, 관계 법령의 규정에 의한 경우를
          제외하고는 어떠한 경우에도 개인정보 처리위탁 안내에 명시한 범위를 넘어
          이용자 개인정보를 이용하거나 제3자에게 제공하지 않습니다. 단, 이용자의
          문의 내용이나 불만 내용이 회사 매장 내 입점한 협력업체와의 관계라고
          판단될 경우에는 신속한 서비스를 위해 해당 협력업체에 접수 내용을
          제공할 수 있습니다.
        </S.Li>
      </S.Ol>
    </S.Article>
  );
};

export default PrivacyArticle6;