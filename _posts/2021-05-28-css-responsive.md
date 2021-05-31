---
title: "반응형 웹"
layout: post
date: 2021-05-28
categories: css
tags: [css]
comment: yes
---



### @media

```css
@media screen {
    * { color: red; }
}
@media print {
    * { color: blue; }
}
```

미디어 타입별로 스타일을 줄 수 있다. `@media print` 같은 경우 `@page`와 함께 쓰이고 인쇄 한 페이지 내 여러 요소에 대해 스타일 설정을 할 수 있다.



### Media Queries

요즘은 다양한 모바일 기기가 나오면서 화면 크기 또한 다양한데.. 화면 크기가 커지고 줄어듬에 따라 사이트 내 여러 요소들이 일그러질 수도 있고 너무 작게 보일 수도 있다.  이때 화면 크기에 따라 스타일을 다르게 적용할 수 있다.

아래는 화면 너비에 따라 다르게 작동함.

<iframe height="200" style="width: 100%;" scrolling="no" title="css-responsive1" src="https://codepen.io/mingportal0/embed/qBrPEPJ?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/mingportal0/pen/qBrPEPJ'>css-responsive1</a> by mingportal0
  (<a href='https://codepen.io/mingportal0'>@mingportal0</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



### Typical Breakpoints

보통 화면 너비에 따라 여러 가지 스타일을 만드는데 일반적으로 사용하는 breakpoint가 있다. [(참고 사이트)][https://www.bitdegree.org/learn/responsive-media]

![Responsive Media](https://www.bitdegree.org/learn/storage/media/images/3a40a9ef-ab2c-4c9d-89e8-b5c50315042d.png)

```css
/* For devices with width of 480px and less, like phones */
@media only screen and (max-width: 480px) {
    background-color: pink;
} 

/* For devices with width between 481px and 768px, like larger phones and portrait tablets */
@media only screen and (min-width: 481px) {
    background-color: red;
} 

/* For devices with width between 769px and 1279px, like landscape tablets and laptops */
@media only screen and (min-width: 769px) {
    background-color: blue;
} 

/* For devices with width of 1280px and more, like desktop computers */
@media only screen and (min-width: 1280px) {
    background-color: green;
}
```

<iframe height="200" style="width: 100%;" scrolling="no" title="css-responsive2" src="https://codepen.io/mingportal0/embed/poeWvVr?height=265&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/mingportal0/pen/poeWvVr'>css-responsive2</a> by mingportal0
  (<a href='https://codepen.io/mingportal0'>@mingportal0</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>





참고

https://poiemaweb.com/css3-responsive-web-design