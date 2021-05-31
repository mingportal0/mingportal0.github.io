---
title: "위치. Position"
layout: post
date: 2021-04-29
categories: css
tags: [css]
comment: yes
---



### Position

position 프로퍼티는 top, bottom, left, right와 함께 쓰이며 요소의 위치를 지정한다.

기본값은 `static`이다.

##### top, bottom, left, right

top, bottom, left, right는 양수값이면 박스 안쪽 방향으로 움직이고 음수값이면 박스 바깥 방향으로 움직인다.

또한 top, bottom, left, right는 위치 이동의 기준이 된다.

예를 들면 박스를 좌측 상단에 위치하고자 하면 top, left를 가지고 제어한다.



##### 종류

1. static

   기본값. 부모가 있으면 부모의 위치를 기준으로 배치함. 위에서 아래로, 왼쪽에서 오른쪽으로 배치한다.

   top, bottom, left, right와 함께 쓰지 못한다.

2. relative

   static과 유사하지만 <u>top, bottom, left, right을 쓸 수 있다.</u>

3. absolute

   부모 또는 가장 가까이에 있는 조상 요소를 기준으로 top, bottom, left, right 만큼 이동한다. (<u>부모가 static이면 document body가 기준</u>이 된다.)

   다른 요소가 점유하고 있어도 뒤로 밀리지 않고 그 위에 뜬 것처럼 보이게 된다. (<u>부유 객체</u>)

   block 레벨 요소의 width는 inline 요소와 같이 content에 맞게 변화하므로 적절한 width를 지정해야 한다.

4. fixed

   <u>부모와 상관 없이</u> 브라우저의 viewport를 기준으로 top, bottom, left, right 만큼 이동한다.

   <u>스크롤이 되더라도 항상 같은 위치에 위치한다.</u>

   block 레벨 요소의 width는 inline 요소와 같이 content애 맞게 변화하므로 적절한 width를 지정해야 한다.



### z-index

z-index 수치가 클 수록 화면 앞에 위치한다. static 이외 요소만 적용된다.

<iframe height="218" style="width: 100%;" scrolling="no" title="css-z-index" src="https://codepen.io/mingportal0/embed/QWpMQWa?height=218&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/mingportal0/pen/QWpMQWa'>css-z-index</a> by mingportal0
  (<a href='https://codepen.io/mingportal0'>@mingportal0</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



### overflow

자식 요소가 부모를 벗어났을 때 처리방법을 정의한다.

1. visible : 영역을 벗어난 부분을 표시함.
2. hidden : 영역을 벗어난 부분을 표시하지 않음.
3. scroll : 영역을 벗어난 부분은 스크롤로 표시함.
4. auto : 영역을 벗어난 부분이 있을 때만 스크롤로 표시함.







##### 참고

[https://poiemaweb.com/css3-position][https://poiemaweb.com/css3-position]
