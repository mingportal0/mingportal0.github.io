---
title: "생활코딩 Javascript 수업 09/15"
layout: post
date: 2019-09-15
categories: javascript
tags: [javascript]
comment: yes
---

### 수업소개
웹페이지는 한번 출력이 끝나면 더 이상 사용자와 상호작용을 할 수 없다.
그래서 Javascript를 활용해서 사용자와 웹페이지가 상호작용을 할 수 있도록 한다.
예를 들면 `<input type="button" onclick=""/>` 에서 onclick 안에는 javascript가 와야 한다.
```
<input type="button" value="night" onclick="
   document.querySelector('body').style.backgroundColor='black';
   document.querySelector('body').style.color='white';
"/>
```
### HTML과 JS의 만남 : script 태그
javascript의 시작과 끝을 알리는 태그
```
<script>
   document.write('hello world');
</script>
```
### HTML과 JS의 만남 : 이벤트
웹브라우저에서 일어날 수 있는 이벤트를 javascript로 구현할 수 있다.
```
<input type="button" value="hi" onclick="alert('hi')"/>
```
구글에서 검색할 때 'javascript XXX attribute'으로 검색한다.

### HTML과 JS의 만남 (콘솔)
크롬에서 F12를 누르면 콘솔이 뜨는데 이것은 현재 페이지를 대상으로 실행된다.
그래서 따로 파일을 만들지 않더라도 콘솔을 통해 사용자가 실행시키고 싶은 코드를 실행할 수 있다.