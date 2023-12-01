<h1 fontSize="50px">미디어쿼리로 반응형 사이트 만들기</h1><br>

## 프로젝트 설명🐱‍🏍
웹사이트를 다양한 디바이스의 크기에 맞춰서 보여주는 것을 반응형 웹사이트라고한다. <br>
실제로 다양한 회사에서 이러한 반응형웹사이트 제작에도 많이 노력하고 있기에 프로젝트 진행하였다. <br>
@media라는 미디어쿼리를 이용해 CSS속성값 변경만으로도 반응형웹사이트 제작 가능하다.<br>
화면이 작아지면서 나타는 햄버거메뉴는 jQuery를 사용하여 기능 구현하였다.<br>
서브페이지는 블로그 형식으로 구성하였으며, 오른쪽 서브 메뉴바는 크기에 따라 오른쪽/아래로 이동한다.<br><br>
REFER TO 1hotel Website <br><br>

## 사이트주소🚀
[Main] https://seonnieee.github.io/responsiveWebsite/ <br>
[Sub] https://seonnieee.github.io/responsiveWebsite/sub.html <br><br>

## 기술 스택👩‍🔧
<p>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
</p>

### [HTML5]
• 홈페이지의 뼈대가 되는 구조 <br>
• 시맨트태그(semantic tag)로 레이아웃 구성 : header, nav, section, article, footer<br>
• 메인페이지 : 네비게이션 메뉴, 식당 소개 내용, 운영시간, 연관 이벤트, 고객리뷰, 메뉴 섹션으로 구성 <br>
• 서브페이지 : 네비게이션 메뉴, 식당 관련 블로그, 검색 섹션으로 구성 <br>

### [CSS]
• @media쿼리를 이용해 min-width / max-width에 따라 css속성값 다르게 적용 <br>
&nbsp;– 스마트폰, 태블릿, 데스크탑 등 다양한 디바이스 화면에 맞춰서 화면 구성 다르게 적용<br>
&nbsp;– https://github.com/seonnieee/responsiveWebsite/tree/main/css <br>
• 홈페이지의 HTML요소를 다채롭게 만드는 기능<br>
• 일부 Img태그 hover 기능 추가<br>
&nbsp;– transition속성을 이용해 부드럽게 효과 적용 <br>
• stylesheet 파일로 참조하여 header 및 footer 서브페이지 재활용 <br><br>

### [JavaScript]
• 토글 메뉴창<br>
&nbsp;– @media(max-with:599px)일 때, 상단 네비게이션 메뉴 햄버거메뉴로 변경 및 클릭 시, toggle이벤트 발생<br>
&nbsp;– toggle된 각각의 메뉴들은 mouseover시, background/color 변경<br>
&nbsp;– CSS: https://seonnieee.github.io/responsiveWebsite/css/common_max599.css <br>
&nbsp;– JS: https://seonnieee.github.io/responsiveWebsite/js/menu.js <br><br>

## 주요 기능⚙
• 메인페이지 네비게이션 메뉴 구성 <br>
• 메인페이지 식당 소개 제공 <br>
• 메인페이지 운영시간 제공 <br>
• 메인페이지 식당 리뷰 제공 <br>
• 서브페이지 식당 관련 블로그 내용 제공 <br>
• 서브페이지 검색 섹션 제공 <br>
• width 599px, 600px, 1000px, 1650px에 따라 구성변경(반응형)<br><br>

## 진행 과정🏃‍♀️
<strong>Step1.</strong> 미디어쿼리 문법 학습 <br>
<strong>Step2.</strong> 메인페이지 구성(html / css) <br>
<strong>Step3.</strong> 미디어쿼리를 활용해 크기별 css수정 <br>
<strong>Step4.</strong> 깃허브 1차 배포 <br>
<strong>Step5.</strong> 토글 메뉴 JS 적용 <br>
<strong>Step6.</strong> 서브페이지 구성(html / css) <br>
<strong>Step7.</strong> 서브페이지 미디어쿼리에 맞춰 css수정 <br>
<strong>Step8.</strong> 깃허브 2차 배포 <br><br>

## 최종 정리🤸‍♀️
• 미디어쿼리 문법만 익힌다면 HTML/CSS 변경은 어렵지 않음 <br>
• 반응형 웹페이지 제작으로 화면별 다른 구성을 경험하니 이용자들에게는 편리성 제공가능 <br>
• 스마트폰에서 내가 구현한 화면을 잘림없이 확인 할 수 있으니 깔끔해보이고 좋았음✌

