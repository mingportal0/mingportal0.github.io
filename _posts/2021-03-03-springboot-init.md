---
title: "Springboot 프로젝트 시작"
layout: post
date: 2021-03-03
categories: java
tags: [java, spring]
comment: yes
---



### 프로젝트 생성

1. [https://start.spring.io][https://start.spring.io]에서 만들기

![DaCapture_20210315-12004603](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/DaCapture_20210315-12004603.png)

​	generate 하면 zip파일을 받을 수 있고 이를 sts에서 연다.

2. sts에서 File - New - Spring Starter Project

![image-20210331143757307](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210331143757307.png)

​	의존성 추가 후 Finish

![image-20210331143828646](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210331143828646.png)



프로젝트 폴더 우클릭 - Maven - update Project를 누르면 프로젝트가 생성됨.

![DaCapture_20210315-12020203](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/DaCapture_20210315-12020203.png)



### pom.xml

Maven 프로젝트가 생성되면 pom.xml이 생성된다.

dependency를 추가해 컴포넌트를 추가할 수 있다.

아래 dependency처럼 spring-boot-starter-*같은 경우에는 부모 pom.xml에서 이미 버전정보가 있어서 version은 따로 지정할 필요가 없다.

- spring-boot-starter : Springboot 프로젝트를 만들면 기본적으로 생성됨.

- spring-boot-starter-test : Springboot 프로젝트를 만들면 기본적으로 생성됨.

- spring-boot-starter-web : 웹개발하는데 필수. Spring MVC, REST 및 Tomcat을 기본 임베디드 서버로 사용한다.



### 서버 실행

Main클래스에서 Spring Boot App으로 실행하면

![image-20210331143937678](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210331143937678.png)

Boot Dashboard에서 local\만든 프로젝트의 아이콘이 회색에서 초록 상향화살표로 바뀌는 것을 볼 수 있다.

@SpringBootApplication이 적힌 Main 클래스는 Springboot에서 최상위 클래스로 인식하기 때문에 위치를 유의한다.

![image-20210331144204676](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210331144204676.png)

### resources 폴더

- templates : html 파일
- static : js, css, image 파일
- META-INF : jar 파일

![image-20210401164354341](C:\Users\mjroh\Pictures\typora\image-20210401164354341.png)

### index.html 보기

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
Hello, html!
</body>
</html>

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
Hello, html!
</body>
</html>
```

그리고 서버를 다시시작 후 localhost:8080/index.html로 이동하면 다음과 같이 출력된다.

![image-20210331144527274](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210331144527274.png)

### application.properties 수정

- 뷰파일을 수정할때 새로고침만 하면 반영됨.

```
spring.devtools.livereload.enabled=true
```

