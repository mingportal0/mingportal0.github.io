---
title: "가상 클래스, 가상 요소 선택자"
layout: post
date: 2021-05-27
categories: css
tags: [css]
comment: yes
---



Pseudo Class Selector, Pseudo Element Selector.
참고로 Pseudo를 [다음 사전][https://dic.daum.net/word/view.do?wordid=ekw000133098]에서 찾아보면 다음과 같다. ![image-20210527095716519](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210527095716519.png)

### 1. 가상 클래스 선택자(Pseudo Class Selector)

가상 클래스 선택자는 HTML에 존재하는 요소를 다양한 방법으로 선택하는 선택자



### :firtst-child, :last-child, nth-child(2n+1)

- :firtst-child : 자식 요소 중 첫 번쨰 자식만 선택

- :last-child : 자식 요소 중  마지막 자식만 선택
- :nth-child(2n+1) : 자식 요소 중 홀수번쨰 자식만 선택

<iframe height="200" style="width: 100%;" scrolling="no" title="pseudo-class1" src="https://codepen.io/mingportal0/embed/xxqLdOK?height=260&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/mingportal0/pen/xxqLdOK'>pseudo-class1</a> by mingportal0
  (<a href='https://codepen.io/mingportal0'>@mingportal0</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


### :link, :visited

- :link : 방문한 적이 없는 링크
- :visited : 방문한 적이 있는 링크

<iframe height="125" style="width: 100%;" scrolling="no" title="pseudo-class2" src="https://codepen.io/mingportal0/embed/qBrXmjO?height=125&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/mingportal0/pen/qBrXmjO'>pseudo-class2</a> by mingportal0
  (<a href='https://codepen.io/mingportal0'>@mingportal0</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



### :hover, :active, :focus

- :hover : 마우스를 롤오버 했을 때
- :active : 마우스를 클릭했을 때
- :focus : 포커스 되었을 때

<iframe height="156" style="width: 100%;" scrolling="no" title="pseudo-class3" src="https://codepen.io/mingportal0/embed/vYxJmdm?height=156&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/mingportal0/pen/vYxJmdm'>pseudo-class3</a> by mingportal0
  (<a href='https://codepen.io/mingportal0'>@mingportal0</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



### 2. 가상 요소 선택자(Pseudo Element Selector)

가상 요소 선택자는 HTML에 존재하지 않는 요소를 존재하는 것 처럼 선택하는 선택자



### ::before, ::after

- ::before : 요소의 컨텐츠 시작 부분에 생성된 컨텐츠를 추가한다.
- ::after : 요소의 컨텐츠 끝 부분에 생성된 컨텐츠를 추가한다.

content라는 가상의 속성과 같이 쓰이며 content에 텍스트를 넣거나 이미지를 넣을 수 있다.

그러나 content에 넣은 이미지는 크기 조절이 안되기 때문에 배경 이미지로 지정해 크기를 변경해야 한다.

텍스트에 줄바꿈을 할 때는 `\A`를 넣고 `white-space: pre`를 지정하면 된다.

<iframe height="373" style="width: 100%;" scrolling="no" title="RwpZgEE" src="https://codepen.io/mingportal0/embed/RwpZgEE?height=316&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/mingportal0/pen/RwpZgEE'>RwpZgEE</a> by mingportal0
  (<a href='https://codepen.io/mingportal0'>@mingportal0</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



### ::first-line, ::first-letter

- ::first-line : 요소의 텍스트에서 첫 줄을 선택한다.

  다음 속성과 사용 가능.

  clear, background, font, color, text-decoration, text-transform, vertical-align, line-height, word-spacing, letter-spacing

- ::first-letter : 요소의 첫 번째 글자를 선택한다.

  다음 속성과 사용 가능.

  float, clear, margin, padding, border, background, font, color, text-decoration, text-transform, vertical-align(float 아닐 때), line-height

<iframe height="450" style="width: 100%;" scrolling="no" title="pseudo-element1" src="https://codepen.io/mingportal0/embed/GRWvWeq?height=419&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/mingportal0/pen/GRWvWeq'>pseudo-element1</a> by mingportal0
  (<a href='https://codepen.io/mingportal0'>@mingportal0</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


### ::selection, ::placeholder

- ::selection : 사용자가 드래그하는 부분을 고칠 수 있음.
- ::placeholder : placeholder 부분을 고칠 수 있음.

<iframe height="228" style="width: 100%;" scrolling="no" title="pseudo-element2" src="https://codepen.io/mingportal0/embed/oNZeWJB?height=228&theme-id=light&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/mingportal0/pen/oNZeWJB'>pseudo-element2</a> by mingportal0
  (<a href='https://codepen.io/mingportal0'>@mingportal0</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>






##### 참고

[https://dasima.xyz/css-content/][https://dasima.xyz/css-content/]

[http://blog.hivelab.co.kr/%EA%B3%B5%EC%9C%A0before%EC%99%80after-%EA%B7%B8%EB%93%A4%EC%9D%98-%EC%A0%95%EC%B2%B4%EB%8A%94/][http://blog.hivelab.co.kr/%EA%B3%B5%EC%9C%A0before%EC%99%80after-%EA%B7%B8%EB%93%A4%EC%9D%98-%EC%A0%95%EC%B2%B4%EB%8A%94/]