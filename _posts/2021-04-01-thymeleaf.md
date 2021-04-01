---
title: "Thymeleaf"
layout: post
date: 2021-04-01
categories: java
tags: [java, spring]
comment: yes
---



### 의존성 추가

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```



### application.properties 수정

1. 템플릿 시작 위치 참조
2. 템플릿 확장자 이름 참조
3. 해당 위치에 파일 유무를 체크
4. 캐시를 남기지 않아 서버 재시작을 해도 바로 반영됨.

```properties
spring.thymeleaf.prefix=classpath:templates/
spring.thymeleaf.suffix=.html
spring.thymeleaf.check-template-location=true
spring.thymeleaf.cache=false
```



### th 태그 정의

html xmlns 태그 추가

```xml
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	searchUser Page
	<a href="javascript:getUserList();">click me</a>
</body>
</html>

```



### 리스트 데이터 출력

```html
<table id="userTable">
	<thead>
		<tr>
			<th>Email</th>
			<th>Name</th>
			<th>CreateDate</th>
		</tr>
	</thead>
	<tbody>
		<tr th:each="user : ${userList}">
			<td th:text="${user.email}">email</td>    
			<td th:text="${user.name}">name</td>
			<td th:text="${user.createStamp}">createStamp</td>
		</tr>
	</tbody>
</table>
```



참고

https://yulfsong.tistory.com/97