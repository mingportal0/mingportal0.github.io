---
title: "Thymeleaf Layout"
layout: post
date: 2021-04-07
categories: java
tags: [java, spring, thymeleaf, layout]
comment: yes
---



### 의존성 추가

```xml
<!-- https://mvnrepository.com/artifact/nz.net.ultraq.thymeleaf/thymeleaf-layout-dialect -->
<dependency>
	<groupId>nz.net.ultraq.thymeleaf</groupId>
	<artifactId>thymeleaf-layout-dialect</artifactId>
</dependency>
```



### commonHeadder.html

공통 css, js를 추가할 수도 있다.

```html
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- 컨텐츠 페이지 CSS 삽입 -->
<link rel="stylesheet" href="/static/css/mstyle.css">
```



### commonFooter.html

`<html xmlns:th="http://www.thymeleaf.org">`는 footer에만 추가하였다.

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
    <footer th:fragment="commonFooter">
        Layout Common Footer
    </footer>
</html>
```



### defaultLayout.html

xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout" 라고 해야 해당 html을 레이아웃 화면으로 쓴다고 정의할 수 있다.

```html
<!DOCTYPE html>
<html xmlns:layout="http://www.ultraq.net.nz/thymeleaf/layout">
<head>
	<title layout:title-pattern="$LAYOUT_TITLE : $CONTENT_TITLE">Demo</title>
	<!-- common header -->
	<th:block th:replace="fragments/commonHeader"></th:block>
</head>
<body>
	<h1>기본 레이아웃</h1>
	<!-- page content body -->
	<th:block layout:fragment="content"></th:block>
	<!-- common footer -->
	<footer th:replace="fragments/commonFooter :: commonFooter"></footer>
</body>
</html>
```



### index.html (적용 화면)

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org"
  xmlns:layout="http://www.ultraq.net.nz/web/thymeleaf/layout"
  layout:decorator="layout/defaultLayout">
	<div layout:fragment="content">
		<h1>Hello, html!</h1>
		<div><a href="/logoutAction">로그아웃</a></div>
	</div>
</html>
```

`xmlns:layout="http://www.ultraq.net.nz/web/thymeleaf/layout"`  를 선언해야 레이아웃을 쓸 수 있다.

`layout:decorator="layout/defaultLayout` 적용할 레이아웃을 지정한다.



### 테스트

무사히 적용되었다.

![image-20210407111902361](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210407111902361.png)

타임리프는 적용하는데 간편하고 빨라서 좋았다.

그러나 적용할 페이지 마다 레이아웃을 지정해주어야 해서 불편한 점도 있는 것 같다.



### 참고

[https://bamdule.tistory.com/33](https://bamdule.tistory.com/33)
