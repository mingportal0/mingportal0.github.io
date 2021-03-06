---
title: "선택자. Selector"
layout: post
date: 2021-04-08
categories: css
tags: [css]
comment: yes
---



### 복수 선택

```css
h1, p { color: red; }
```



### 전체 선택

```css
* { color: red; }
```



### tag, ID, class 선택

```css
p { color: red; }
#p1 { color: red; }
.container { color: red; }
```



### attribute 선택

지정된 attribute를 갖는 모든 요소를 선택한다.

셀렉터[어트리뷰트=”값”]의 패턴도 가능하다.

```css
a[href] { color: red; }
a[target="_blank"] { color: red; }
```



- ~=

  셀렉터[어트리뷰트~=”값”]의 패턴과 같이 공백으로 분리된 지정된 값이 포함된 요소를 찾을 수도 있다. 

  ```css
  h1[title~="first"] { color: red; }
  ```

  아래에서 첫번째 경우만 선택될 수 있다.

  ```html
  <h1 title="heading first">Heading first</h1>
  <h1 title="heading-first">Heading-first</h1>
  <h1 title="heading second">Heading second</h1>
  <h1 title="heading third">Heading third</h1>
  ```

- |=

  셀렉터[어트리뷰트|=”값”]의 패턴과 같이 지정된 값과 일치하거나 `값- `으로 시작하는 요소를 찾을 수도 있다. 

  ```css
  p[lang|="en"] { color: red; }
  ```

  아래에서 1~3번째 경우만 선택될 수 있다.

  ```html
  <p lang="en">Hello!</p>
  <p lang="en-us">Hi!</p>
  <p lang="en-gb">Ello!</p>
  <p lang="us">Hi!</p>
  <p lang="no">Hei!</p>
  ```

- ^=

  셀렉터[어트리뷰트^=”값”]의 패턴과 같이 지정된 값으로 시작하는 요소를 찾을 수도 있다. 

  ```css
  a[href^="https://"] { color: red; }
  ```

  아래에서 첫번째 경우만 선택될 수 있다.

  ```html
  <a href="https://www.test.com">https://www.test.com</a><br>
  <a href="http://www.test.com">http://www.test.com</a>
  ```
  
- ^=
  
  셀렉터[어트리뷰트^=”값”]의 패턴과 같이 지정된 값으로 시작하는 요소를 찾을 수도 있다. 
  
  ```css
  a[href^="https://"] { color: red; }
  ```
  
  아래에서 첫번째 경우만 선택될 수 있다.
  
  ```html
  <a href="https://www.test.com">https://www.test.com</a><br>
  <a href="http://www.test.com">http://www.test.com</a>
  ```
  
- $=

  셀렉터[어트리뷰트$=”값”]의 패턴과 같이 지정된 값으로 끝나는 요소를 찾을 수도 있다. 

  ```css
  a[href$=".html"] { color: red; }
  ```

  아래에서 첫번째 경우만 선택될 수 있다.

  ```html
  <a href="test.html">test.html</a><br>
  <a href="test.jsp">test.jsp</a>
  ```

- *=

  셀렉터[어트리뷰트*=”값”]의 패턴과 같이 지정된 값이 포함된 요소를 찾을 수도 있다. 

  ```css
  div[class*="test"] { color: red; }
  ```

  아래에서 1,3번째 경우만 선택될 수 있다.

  ```html
  <div class="first_test">The first div element.</div>
  <div class="second">The second div element.</div>
  <div class="test">The third div element.</div>
  <p class="test">This is some text in a paragraph.</p>
  ```



### 후손 셀렉터(Descendant Combinator)

```css
div p { color: red; }
```

해당 코드는 div의 모든 자식 중 p태그에 해당하는 요소에 적용된다.

아래에서 paragraph1~3만 빨강색으로 적용될 것이다.

```html
<div>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
    <span><p>paragraph 3</p></span>
</div>
<p>paragraph 4</p>
```



### 자식 셀렉터(Child Combinator)

```css
div > p { color: red; }
```

해당 코드는 div의 자식 중 p태그인 것만 적용된다.

아래에서 paragraph1~2만 빨강색으로 적용될 것이다.

```html
<div>
    <p>paragraph 1</p>
    <p>paragraph 2</p>
    <span><p>paragraph 3</p></span>
</div>
<p>paragraph 4</p>
```



### 형제 셀렉터(Sibling Combinator)

```html
<p>The first paragraph.</p>
<ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>
<h2>Another list</h2>
<ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>
```

The first paragraph의 li 태그들이 적용됨

```css
p + ul { color: red; }
```

The first paragraph에서 Another list의 li 태그들이 적용됨

```css
p ~ ul { color: red; }
```







### 참고

[https://poiemaweb.com/css3-selector](https://poiemaweb.com/css3-selector)