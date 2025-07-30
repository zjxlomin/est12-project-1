# YouTube 클론 사이트
  기초 웹 프론트엔드 기술을 기반으로 제작한 유튜브 클론 웹사이트입니다. 실제 유튜브의 주요 UI 요소와 반응형 레이아웃을 HTML, CSS, JavaScript를 이용하여 모방하였습니다.

## 프로젝트 개요
  * 목표
    * 웹 표준을 지키며 HTML/CSS/JS로 UI 구현
    * YouTube의 핵심 기능과 UI를 모방하여 구조적 사고 훈련
    * 추후 백엔드 연동을 위한 웹 컴포넌트 설계 이해

## 사용 기술
  * HTML5 : Bootstrap 프레임워크로 레이아웃 구성
  * CSS
  * JavaScript : DOM 조작, 이벤트 처리, 데이터 바인딩, 렌더링 구현

## 주요 기능
  * 상단 네비게이션 바 : 홈 화면으로 이동하거나 검색어 입력, 설정 메뉴 띄우기
  * 좌측 사이드 바: 홈 화면, 구독 화면 이동
  * 홈 화면, 구독 화면
    * 영상 썸네일 카드 나열
  * 영상 상세 화면
    * 영상 시청
    * 좋아요/싫어요 반영
    * 댓글 작성 및 삭제
    * 우측 사이드바에 다른 영상 나열
   
## 폴더 구조
  /est12-project-1<br>
  ├── /img<br>
  │ └── /profiles<br>
  ├── home.html<br>
  ├── subscribe.html<br>
  ├── video.html<br>
  ├── externalJs.js<br>
  └── style.css<br>

## 문제 상황 및 해결 방법
1. __Bootstrap의 그리드 시스템 사용 시 CSS로 설정한 width, height값이 적용되지 않고, 자동으로 1:1의 비율로 적용되는 문제__
    * max-width, max-height 등의 속성을 사용하여 해결
2. __홈/구독 화면의 썸네일 카드 나열 시 3열을 넘어 한 줄에 다 나오는 문제__
    * ```<div class="col-3">``` 와 같이 클래스를 설정하여 해결
3. __댓글 추가 시 js 배열에 push한 후, HTML문 내부의 script 함수를 재호출하는 방식을 사용해보려 했으나 기존의 레이아웃이 초기화되는 문제__
    * ```insertAdjacent(위치, HTML문)```를 대신 사용하여, 댓글 내용을 포함한 HTML문을 직접 삽입하여 추가된 댓글이 표시되도록 해결
    * 그러나 ```<div>${value}</div>```와 같은 방식으로 댓글 내용을 삽입하려 할 경우, \</div>\<div>와 같은 텍스트가 HTML문으로 인식되는 취약점이 발생함
    * ```
      <div id="text"></div>
      ...
      document.getElementById("text").textContent = value;
      ```
      와 같은 방법으로 textContent를 사용하여 해결
4. __textarea에 댓글 입력 시, 너비를 초과하는 긴 문자열(예: aaaaa....)을 입력하면 줄바꿈이 되지 않고 너비값 자체가 바뀌는 문제. 또한 이 입력값을 pre 태그로 출력할 때에도 동일한 문제가 발생함__
     * ```word-break: break-all;``` 속성으로 너비 기준으로 문자열이 잘리게 할 수 있지만, 느낌표(!)와 같은 특수기호에는 통하지 않고, 멀쩡한 단어가 분리되는 문제가 있음
     * 대신 ```word-wrap: break-word; overflow-wrap: anywhere;``` 속성을 사용하여 단어 단위로도 줄바꿈을 할 수 있고, 너비초과 문자열도 자동 줄바꿈 처리를 할 수 있음. 이 속성을 textarea와 pre 태그에 모두 적용하여 해결
