---
title: "CSS block, inline, inline-block"
layout: post
date: 2021-05-07
categories: css
tags: [css]
comment: yes
---



태그 마다 block 요소, inline 요소로 지정되어 있고 이는 html에서 다르게 작동된다. 그것은 user agent stylesheet라고 불리는 브라우저의 내장 스타일에서 지정된다.



### block Element

block 요소는 모든 인라인 요소를 포함할 수 있고 다른 block 요소도 포함할 수 있다.

기본적으로 가로 넓이가 100%이며 다음 블럭 요소는 줄바꿈이 이루어진다.

#### 종류

address, article, aside, audio

blockquote

canvas

dd, **div**, dl

fieldset, figcaption, figure, **footer**, **form**

**h1**, **h2**, **h3**, **h4**, **h5**, **h6**, **header**, hgroup, hr

noscript

ol, output

**p**, pre

section

**table**

**ul**

video




### inline Element

inline 요소는 항상 block 요소 내에 있고 다른 inline 요소를 포함할 수 있다.

기본적으로 가로, 세로 너비는 컨텐츠 크기에 좌우된다. 그래서 임의로 width, height를 변경할 수 없다. (margin이나 padding도 좌우 간격만 반영이 됨.)

다음 inline 요소는 줄바꿈이 없고 우측에 바로 표시가 된다.

줄의 높낮이는 `line-height`로 조절하고 텍스트 정렬은 `text-align`으로 한다.

#### 종류

**a**, abbr, acronym

**b**, bdo, big, br, **button**

cite, code

dfn

em

i, **img**, **input**

kbd

label

map

object

q

samp, small, script, **select**, **span**, **strong**, sub, sup

**textarea**, tt

var



### inline-block

inline과 block 요소의 속성을 모두 갖는 속성. `display:inline-block`으로 설정한다.

inline 요소처럼 다음 inline-block 요소가 오면 줄바꿈이 일어나지 않는다.

그리고 inline 요소에서 지정하지 못한 width, height와 margin, padding의 상하 간격을 지정할 수 있다.



참고
https://junistory.blogspot.com/2017/07/html5.html

https://www.daleseo.com/css-display-inline-block/