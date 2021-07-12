---
title: "Flexbox"
layout: post
date: 2021-05-31
categories: css
tags: [css]
comment: yes
---



Flexbox는 기존 레이아웃을 보다 세련된 방식으로 구현하기 위해 나온 것이라고 한다.

기존 방법으로 만든 레이아웃이 있다.

<iframe height="300" style="width: 100%;" scrolling="no" title="flex-box1" src="https://codepen.io/mingportal0/embed/GRWOBPd?height=298&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/mingportal0/pen/GRWOBPd'>flex-box1</a> by mingportal0
  (<a href='https://codepen.io/mingportal0'>@mingportal0</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
기존 방법으로 위와 같이 만드려면 `flex-item`에 `float: left;`를 쓴 뒤 부모 요소에 clearfix를 해야 한다. 

하지만 flexbox를 쓰면 좀 더 간단하게 위의 레이아웃을 구현할 수 있다.

<iframe height="300" style="width: 100%;" scrolling="no" title="flex-box2" src="https://codepen.io/mingportal0/embed/jOBapoj?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/mingportal0/pen/jOBapoj'>flex-box2</a> by mingportal0
  (<a href='https://codepen.io/mingportal0'>@mingportal0</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



### flexbox 사용

`display: flex;` 처럼 선언 해야 한다.

만약 부모가 inline 요소면 `display: inline-flex;` 처럼 선언 한다.



### flex-direction

- `flex-direction : row` : flexbox-item을 수평 방향으로 배치
- `flex-direction : row-reverse` : 위와 같지만 역배치
- `flex-direction : column` : flexbox-item을 수직 방향으로 배치
- `flex-direction : column-reverse` : 위와 같지만 역배치



### flex-wrap

- `flex-wrap: nowrap` : 기본값. flexbox-item이 width를 넘어갈 경우 개행을 하지 않고 1행 내에 배치한다. 만약 width가 작아질 경우 부모 요소가 깨지므로 `overflow: auto;`를 사용하여 스크롤을 만들어야 한다.
- `flex-wrap: wrap` : flexbox-item이 width를 넘어갈 경우 개행 한다.
- `flex-wrap: wrap-reverse` : 위와 같지만 맨 아래에서 부터 시작한다.



### flex-flow : flex-direction + flex-wrap

flex-direction 및 flex-wrap을 모두 선언할 수 있는 shorthand이다.

```css
.flex-container {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```



### justify-content

flexbox-item을 수평 정렬할 때 사용한다.

- `justify-content: flex-start` : 좌측을 기준으로 정렬.
- `justify-content: flex-end` : 우측을 기준으로 정렬.
- `justify-content: center` : 중앙을 기준으로 정렬.
- `justify-content: space-between` :  양측 정렬
- `justify-content: space-around` :  모든 flexbox-item이 균등한 간격으로 정렬



### align-items

flexbox-item을 수직 정렬할 때 사용한다.

- `align-items: stretch` : flex-container의 높이 만큼 꽉찬 높이를 가진다.
- `align-items: flex-start` : 위쪽 정렬
- `align-items: flex-end` : 아래쪽 정렬
- `align-items: center` : 중앙 정렬
- `align-items: baseline` : flex-container의 baseline을 기준으로 정렬한다.



### align-content

- `align-content: stretch` : flexbox-item은 flex-container에 균등하게 분배되어 배치된다.
- `align-content: flex-start` : flexbox-item은 위쪽 부터 stack 정렬된다.
- `align-content: flex-end` : flexbox-item은 아래쪽 부터 stack 정렬된다.
- `align-content: center` : flexbox-item은 중앙 축에 stack 정렬된다.
- `align-content: space-between` : flexbox-item은 양측에 stack 정렬된다.
- `align-content: space-around` : 모든 flexbox-item이 균등한 간격으로 stack 정렬된다.



##### 참고

[https://poiemaweb.com/css3-flexbox][https://poiemaweb.com/css3-flexbox]