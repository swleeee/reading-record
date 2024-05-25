# <img src="./public/favicon.svg" width="24px"> Reading Record

## 프로젝트 정보 및 소개

- Reading Record는 사용자들이 독서 기록을 작성하고 공유할 수 있는 웹 서비스입니다.
  도서를 검색하여 정보를 조회할 수 있으며, 마음에 드는 감상문에 좋아요를 누를 수 있습니다.

## 배포 주소 & 테스트 계정

### 배포 주소

- <ins>(추후 작성 예정)</ins>

### 테스트 계정

```html
email: (추후 작성 예정) password: (추후 작성 예정)
```

- <ins>(추후 작성 예정)</ins>

## 시작 가이드

### 요구사항

- <span style="color: #2B7FFF">Node.js</span>
- <span style="color: #2B7FFF">Npm</span>

### 설치 및 실행

```bash
$ git clone
$ cd
$ nvm use
$ npm install
$ npm run dev
```

## 기술 스택

- vite, react, typescript, recoil, react-query, tailwind, (twin.macro), react-hook-form, supabase

<div>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white"/>
</div>

<div>
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
  <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=Recoil&logoColor=white"/>
  <img src="https://img.shields.io/badge/React query-FF4154?style=flat-square&logo=React query&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>
  <img height="18" src="https://github.com/ben-rogerson/twin.macro/raw/master/.github/logo-light.svg" />
  <img src="https://img.shields.io/badge/React hook form-EC5990?style=flat-square&logo=React hook form&logoColor=white"/>
</div>

<div>
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=flat-square&logo=Supabase&logoColor=white"/>
</div>

## 화면 구성

<table style="border: 1px;">
  <caption style="display: none">회원가입 화면</caption>
  <thead>
    <tr>
      <th colspan="2">1. 회원가입 화면</th>
    </tr>
    <tr>
      <th>PC</th>
      <th>Mobile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 600px; padding: 0;">
        <img src="https://github.com/swleeee/reading-record/assets/42002888/882c9e69-6be8-4077-b11e-0c7517a0a24b"/>
     </td>
    <td style="width: 150px; padding: 0;">
    <img src="https://github.com/swleeee/reading-record/assets/42002888/cce060f8-85f4-406a-bc7c-e01433418e19" />
    </td>
    </tr>
    <tr>
      <td colspan="2">
        <p>
          상단 로고 클릭 시 메인 화면으로 이동합니다.
        </p>
        <p>
          회원 가입은 아이디(이메일 주소), 비밀번호, 비밀번호 확인, 닉네임, 생년월일, 성별, 그리고 이용약관 동의로 이루어져 있습니다. 각 항목은 유효성 검증을 진행하며 통과하지 못 할 경우 각 항목 하단에 에러메시지를 표시하고 <span style="color: blue">회원 가입</span> 버튼이 비활성화됩니다.
        </p>
        <p>
          닉네임은 <span style="color: blue">중복 확인</span> 버튼을 통해 이미 사용 중인 닉네임과의 중복을 방지할 수 있습니다.
        </p>
        </p>
        <p>
          이용약관과 개인정보 수집 동의에 대한 자세한 내용은 각각의 <span style="color: blue">약관 보기</span> 링크를 통해 확인할 수 있습니다.
        </p>
        <p>
          모든 항목의 유효성을 통과하고 <span style="color: blue">회원 가입</span> 버튼을 클릭하면 성공적으로 가입이 완료되며 메인 화면으로 이동합니다.
        </p>
      </td>
    </tr>
  </tbody>
</table>

<table style="border: 1px;">
  <caption style="display: none">로그인 화면</caption>
  <thead>
    <tr>
      <th colspan="2">2. 로그인 화면</th>
    </tr>
    <tr>
      <th>PC</th>
      <th>Mobile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 600px; padding: 0;">
        <img src="https://github.com/swleeee/reading-record/assets/42002888/25873f16-bacd-4406-b4db-43ee1619f611"/>
    </td>
    <td style="width: 150px; padding: 0;">
      <img src="https://github.com/swleeee/reading-record/assets/42002888/9f8c6042-b1a9-4093-aab1-07d4507d1921"/>
    </td>
    </tr>
    <tr>
      <td colspan="2">
        <p>
          상단 로고 클릭 시 메인 화면으로 이동합니다.
        </p>
        <p>        
          로그인은 아이디(이메일 주소)와 비밀번호로 이루어져 있습니다. 각 항목은 유효성 검증을 진행하며, 검증을 통과하지 못하면 <span style="color: blue">로그인</span> 버튼이 비활성화됩니다. 모든 항목의 유효성을 통과한 후 <span style="color: blue">로그인</span> 버튼을 클릭하면 성공적으로 로그인이 완료되며 메인 화면으로 이동합니다.
        </p>      
        <p>
          모든 항목의 유효성을 통과하고 <span style="color: blue">로그인</span> 버튼을 클릭하면 성공적으로 로그인이 완료되며 메인 화면으로 이동합니다.
        </p>
        <p>
          <span style="color: blue">아이디 찾기</span>, <span style="color: blue">비밀번호 찾기</span>, <span style="color: blue">회원가입</span> 링크 클릭를 클릭하면 각각의 해당 페이지로 이동합니다.
          <br />
          (<ins>※ 아이디 찾기와 비밀번호 찾기 기능은 현재 구현되지 않아 '서비스 준비중'이라는 내용이 담긴 토스트 팝업이 표시됩니다.</ins>)        
        </p>
        <p>
          <span style="color: blue">카카오 로그인</span> 및 <span style="color: blue">네이버 로그인</span> 버튼을 클릭하면 간편 로그인을 진행할 수 있습니다. 
          <br />
          (<ins>※ 간편 로그인 기능은 현재 구현되지 않아 '서비스 준비중'이라는 내용이 담긴 토스트 팝업이 표시됩니다.</ins>)    
        </p>
      </td>
    </tr>
  </tbody>
</table>
<table style="border: 1px;">
  <caption style="display: none">메인 화면 - 현재 읽고 있는 도서 리스트</caption>
  <thead>
    <tr>
      <th colspan="2">3-1. 메인 화면 內 현재 읽고 있는 도서</th>
    </tr>
    <tr>
      <th>PC</th>
      <th>Mobile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 600px; padding: 0;">
        <img src="https://github.com/swleeee/reading-record/assets/42002888/b3abb65a-0119-41d7-894d-9fefa24b30ab"/>
    </td>
    <td style="width: 150px; padding: 0;">
      <img src="https://github.com/swleeee/reading-record/assets/42002888/322ed33a-fb6d-478b-8393-1d1b47df7b17"/>
    </td>
    </tr>
    <tr>
      <td colspan="2">
        <p>
          현재 읽고 있는 도서 리스트가 표시되며, 도서가 없을 경우 <span style="color: blue">도서 검색</span> 버튼이 나타납니다. <br/><span style="color: blue">도서 검색</span> 버튼을 클릭하면 도서 검색 화면으로 이동합니다.</br>현재 읽고 있는 도서 카드는 도서 썸네일 이미지, 제목, 저자, 출판사, 읽기 시작한 날짜로 구성되어 있으며, 각 카드를 클릭하면 해당 도서의 상세 화면으로 이동합니다.
        </p>
      </td>
    </tr>
  </tbody>
</table>
<table style="border: 1px;">
  <caption style="display: none">메인 화면 - 주간 베스트 독서 감상문</caption>
  <thead>
    <tr>
      <th colspan="2">3-2. 메인 화면 內 주간 베스트 독서 감상문</th>
    </tr>
    <tr>
      <th>PC</th>
      <th>Mobile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 600px; padding: 0;">
        <img src="https://github.com/swleeee/reading-record/assets/42002888/d8a854ae-0c96-4d6f-a895-ba08fda1e8f8"/>
     </td>
    <td style="width: 150px; padding: 0;">
      <img src="https://github.com/swleeee/reading-record/assets/42002888/d3d8caed-6240-4016-9b50-9c430890bb24"/>
    </td>
    </tr>
    <tr>
      <td colspan="2">   
        <p>
          주간 독서 베스트 감상문 리스트(최대 10개)가 표시됩니다. 감상문 카드는 감상문을 작성한 도서의 썸네일 이미지, 사용자 프로필 이미지, 사용자 닉네임, 독서 감상문 작성 날짜, 좋아요 수, 독서 감상문으로 구성되어 있으며, 각 카드를 클릭하면 독서 기록 상세 모달이 표시됩니다.
        </p>
        <p>
          독서 기록 상세 모달은 카드와 동일한 정보로 구성되며, 추가적인 기능은 다음과 같습니다:
          <br />          
          • 상세 화면 보기: 해당 도서의 상세 화면으로 이동합니다.<br />
          • 좋아요 아이콘: 좋아요를 추가하거나 해제할 수 있습니다.<br />
          • <span style="color: blue">닫기</span> 및 <span style="color: blue">X</span> 버튼: 모달을 종료할 수 있습니다.
        </p>       
      </td>
    </tr>
  </tbody>
</table>

<table style="border: 1px;">
  <caption style="display: none">도서 검색 화면</caption>
  <thead>
    <tr>
      <th colspan="2">4. 도서 검색 화면</th>
    </tr>
    <tr>
      <th>PC</th>
      <th>Mobile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 600px; padding: 0;">
        <img src="https://github.com/swleeee/reading-record/assets/42002888/fd411db2-7d3e-4a4c-af4f-133c16daf325" />
     </td>
      <td style="width: 150px; padding: 0;">
        <img src="https://github.com/swleeee/reading-record/assets/42002888/df56a916-6b3e-4833-8b83-4e733a55551d" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <p>
          상단에 위치한 검색 영역은 검색어를 입력할 수 있는 필드와 검색 키워드를 선택할 수 있는 드롭다운으로 구성되어 있습니다. <br/> 드롭다운 항목은 제목, ISBN, 출판사, 인명으로 이루어져 있으며, 기본 값은 제목입니다.
        </p>
        <p>
          검색을 하지 않았을 경우, "검색창을 이용해 주세요"라는 내용의 문구가 표시됩니다. <br/>검색 결과가 없을 경우, "검색어를 확인해 주세요"라는 내용의 문구가 표시됩니다. <br/>결과가 있을 경우, 도서 목록이 표시되며, 각 목록은 도서 썸네일 이미지, 제목, 저자, 번역, 출판사, 출판 날짜, 내용, 평균 평점으로 구성되어 있습니다. <br/>각 목록을 클릭하면 도서 상세 화면으로 이동합니다.
        </p>
        <p>
          하단 페이지 번호를 클릭하여 이전 페이지나 이후 페이지로 이동할 수 있습니다.
        </p>
      </td>
    </tr>
  </tbody>
</table>

<table style="border: 1px;">
  <caption style="display: none">도서 상세 화면</caption>
  <thead>
    <tr>
      <th colspan="2">5. 도서 상세 화면</th>
    </tr>
    <tr>
      <th>PC</th>
      <th>Mobile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 600px; padding: 0;">
        <img src="https://github.com/swleeee/reading-record/assets/42002888/f822f023-edce-4606-9206-a0cd261ab24e" />
     </td>
      <td style="width: 150px; padding: 0;">
        <img src="https://github.com/swleeee/reading-record/assets/42002888/0279c690-2b17-429c-92d8-a3ce3dfacdfa" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <p>
          상단에는 도서 썸네일 이미지, 도서의 평균 평점, 사용자들이 도서를 읽은 수, 도서 읽기 상태(읽기 전, 읽는 중, 읽기 완료)가 표시됩니다.
        </p>
        <p>
          <span style="color: blue">변경</span> 버튼을 클릭하여 독서 기간, 평점, 독서 감상문 내용 및 공개 여부를 선택하여 도서 읽기 상태를 변경할 수 있습니다.
        </p>
        <p>
          도서 정보(도서 제목, 출간 날짜, ISBN, 저자, 번역자, 출판사, 상세 내용)가 표시됩니다.
        </p>
        <p>
          사용자들이 작성한 도서 감상 내용 및 평점을 확인할 수 있으며, 마음에 드는 감상문에 좋아요를 누를 수 있습니다.
        </p>
      </td>
    </tr>
  </tbody>
</table>

<table style="border: 1px;">
  <caption style="display: none">독서 기록 화면</caption>
  <thead>
    <tr>
      <th colspan="2">6. 독서 기록 화면</th>
    </tr>
    <tr>
      <th>PC</th>
      <th>Mobile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 600px; padding: 0;">
        <img src="https://github.com/swleeee/reading-record/assets/42002888/3ebac89c-9c8c-4b83-87a2-180dd8b3305e" />
     </td>
      <td style="width: 150px; padding: 0;">
        <img src="https://github.com/swleeee/reading-record/assets/42002888/37322ef2-4f1a-456b-b837-05568caf2226" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <p>
          상단에는 도서 썸네일 이미지, 도서의 평균 평점, 사용자들이 도서를 읽은 수, 도서 읽기 상태(읽기 전, 읽는 중, 읽기 완료)가 표시됩니다.
        </p>
        <p>
          <span style="color: blue">변경</span> 버튼을 클릭하여 독서 기간, 평점, 독서 감상문 내용 및 공개 여부를 선택하여 도서 읽기 상태를 변경할 수 있습니다.
        </p>
        <p>
          도서 정보(도서 제목, 출간 날짜, ISBN, 저자, 번역자, 출판사, 상세 내용)가 표시됩니다.
        </p>
        <p>
          사용자들이 작성한 도서 감상 내용 및 평점을 확인할 수 있으며, 마음에 드는 감상문에 좋아요를 누를 수 있습니다.
        </p>
      </td>
    </tr>
  </tbody>
</table>

<table style="border: 1px;">
  <caption style="display: none">회원정보 수정 화면</caption>
  <thead>
    <tr>
      <th colspan="2">7. 회원정보 수정 화면</th>
    </tr>
    <tr>
      <th>PC</th>
      <th>Mobile</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="width: 600px; padding: 0;">
        <img src="https://github.com/swleeee/reading-record/assets/42002888/9c3d3788-206f-4c62-beef-f29fdebdb277" />
     </td>
      <td style="width: 150px; padding: 0;">
        <img src="https://github.com/swleeee/reading-record/assets/42002888/307754f9-8656-4525-823b-f35acfa115c2" />
      </td>
    </tr>
    <tr>
      <td colspan="2">
        <p>
          회원정보 수정 화면은 프로필 이미지, 아이디(이메일 주소), 닉네임, 생년월일, 성별로 구성되어 있습니다. 각 항목은 유효성 검증을 진행하며, 통과하지 못할 경우 해당 항목 하단에 에러 메시지가 표시되고 <span style="color: blue">저장</span> 버튼이 비활성화됩니다.
          <br/>
          유효성 검증을 통과하면 수정된 정보로 변경됩니다.
        </p>
        <p>
          프로필 이미지를 업로드할 수 있으며, 업로드한 이미지를 삭제할 수도 있습니다.
        </p>
      </td>
    </tr>

  </tbody>
</table>

## 추후 개발 예정

- 예외 처리
- **최적화**

  - 코드 스플리팅 & Lazy loading
    <br />

- 독서 기록 화면 기능 수정
  - 모든 사용자의 독서 기록을 확인할 수 있는 화면으로 개편
  - 기존 화면은 설정의 나의 기록으로 이동
- 소장 기능 추가
- 아이디, 비밀번호 찾기 / 소셜 로그인 / 회원탈퇴 기능 추가
- 다크 모드 추가
- 독서 감상문 댓글 작성 기능 추가
- 회원 등급 추가 (+메인화면 內 주/월간 독서 점수 랭킹 조회)
- 팔로우 기능 추가
- 웹 푸시알림 추가
  <br />

- **스토리북**
- **테스트 코드 작성**
- Next.js 마이그레이션
