import * as S from './PrivacyArticle.styled';

const PrivacyArticle4 = () => {
  return (
    <S.Article>
      <S.H4 id="제4조 제3자 제공 현황">제4조 제3자 제공 현황</S.H4>
      <S.Ol>
        <S.Li>
          ① 회사는 이용자의 사전 동의 없이 개인정보를 외부에 제공하지 않습니다.
        </S.Li>
        <S.Li>
          ② 다만, 다음 사항은 예외적으로 동의 없이 개인정보 제공이 가능합니다.
          <S.Ul>
            <S.Li depth={2}>
              1. 법령에 정해진 의무 또는 수사목적으로 법령에서 정해진 절차와
              방법에 따라 수사기관의 정당한 요청이 있는 경우
            </S.Li>
          </S.Ul>
        </S.Li>
      </S.Ol>
    </S.Article>
  );
};

export default PrivacyArticle4;
