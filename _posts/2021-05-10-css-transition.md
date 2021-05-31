---
title: "일정 기간의 변화. Transition"
layout: post
date: 2021-05-10
categories: css
tags: [css]
comment: yes
---



### 프로퍼티 값의 변화가 일정기간에 걸쳐 일어난다.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      width: 100px;
      height: 100px;
      background: red;
      transition: all 2s;
    }
    div:hover {
      border-radius: 50%;
      background: blue;
    }
  </style>
</head>
<body>
  <div></div>
</body>
</html>
```
div에 주면 2초에 걸쳐 변화가 일어난다.

<iframe height="208" style="width: 100%;" scrolling="no" title="vYxOvBB" src="https://codepen.io/mingportal0/embed/vYxOvBB?height=208&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/mingportal0/pen/vYxOvBB'>vYxOvBB</a> by mingportal0
  (<a href='https://codepen.io/mingportal0'>@mingportal0</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<br>
그러나 div:hover에 주면 mouseover 할 때는 반영되지만 mouseleave 할 때는 반영되지 않는다.

<iframe height="212" style="width: 100%;" scrolling="no" title="ZEeGVEx" src="https://codepen.io/mingportal0/embed/ZEeGVEx?height=212&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/mingportal0/pen/ZEeGVEx'>ZEeGVEx</a> by mingportal0
  (<a href='https://codepen.io/mingportal0'>@mingportal0</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



### shorthand

```css
div{
    transition: width 1s ease-in 1s;
}
```

#### 순서

- property : 변화 대상

  - Box model

    width height max-width max-height min-width min-height

    padding margin

    border-color border-width border-spacing

  - Background

    background-color background-position

  - 좌표

    top left right bottom

  - 텍스트

    color font-size font-weight letter-spacing line-height

    text-indent text-shadow vertical-align word-spacing

  - 기타

    opacity outline-color outline-offset outline-width visibility z-index

    

- duration : 변화가 일어나는 시간

- function

  - ease
  - linear
  - ease-in
  - ease-out
  - ease-in-out
  <iframe height="393" style="width: 100%;" scrolling="no" title="transition3" src="https://codepen.io/mingportal0/embed/rNyVZeZ?height=393&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/mingportal0/pen/rNyVZeZ'>transition3</a> by mingportal0
  (<a href='https://codepen.io/mingportal0'>@mingportal0</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

- delay : 지연 시간 이후 변화가 일어남



### 참고

[https://poiemaweb.com/css3-transition](https://poiemaweb.com/css3-transition)