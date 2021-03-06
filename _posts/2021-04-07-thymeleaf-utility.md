---
title: "Thymeleaf Utility"
layout: post
date: 2021-04-07
categories: java
tags: [java, spring, thymeleaf]
comment: yes
---



### 유틸리티 목록

- `#dates`: `java.util.Date`와 유사. 서식 지정, 구성 요소 추출 등

- `#calendars`: `#dates`와 유사. `java.util.Calendar`객체에 사용됩니다.

- `#numbers`: 숫자 개체 형식을 지정

- `#strings`: `String`객체에 대한 유틸리티 메서드

  contains, startsWith, prepending / appending 등

- `#objects`: 일반적으로 객체에 대한 유틸리티 메서드.

- `#bools`: Boolean 평가를위한 유틸리티 메소드.

- `#arrays`: 배열을 위한 유틸리티 메소드.

- `#lists`: 목록에 대한 유틸리티 메서드.

- `#sets`: 세트에 대한 유틸리티 방법.

- `#maps`:지도에 대한 유틸리티 방법.

- `#aggregates`: 배열 또는 컬렉션에서 집계를 만드는 유틸리티 메서드입니다.

- `#messages`: # {…} 구문을 사용하여 얻은 것과 동일한 방식으로 변수 표현식 내에서 외부화 된 메시지를 얻기위한 유틸리티 메소드.

- `#ids`: 반복 될 수있는 id 속성을 처리하기위한 유틸리티 메소드입니다 (예 : 반복의 결과).



### 사용

표현식은 ${#유틸리티클래스.메서드(파라미터)}이다. (단, 유틸리티클래스는 소문자로 적어야 한다.)

```html
<!-- Dates, today = new Date() -->
<div th:text="${#dates.format(today,'yyyy-MM-dd HH:mm:ss')}"></div>
<div th:text="${#dates.day(today)}"></div>
<div th:text="${#dates.monthName(today)}"></div>
<div th:text="${#dates.dayOfWeek(today)}"></div>
<div th:text="${#dates.dayOfWeekName(today)}"></div>
<br>

<!-- Numbers, number = 100000 -->
<div th:text="${#numbers.formatInteger(number,3,'COMMA')}"></div>
<br>

<!-- Strings, string == rohmyungjin -->
<div th:text="${#strings.contains(string,'roh')}"></div>
<div th:text="${#strings.containsIgnoreCase(string,'roh')}"></div>
<div th:text="${#strings.substring(string,3,5)}"></div>

<div th:text="${#strings.substringAfter(string,'roh')}"></div>
<div th:text="${#strings.substringBefore(string,'myungjin')}"></div>
<div th:text="${#strings.replace(string,'myung','mmmm')}"></div>
<div th:text="${#strings.length(string)}"></div>
<div th:text="${#strings.defaultString(null, 'default')}"></div>
```



### 결과

- Dates

  2021-04-07 16:26:30

  7

  4월

  4

  수요일

- Numbers

  100,000

- Strings

  false

  true

  my

  myungjin

  roh

  rohmmmmjin

  11

  default



### 참고

[https://www.thymeleaf.org/doc/tutorials/2.1/usingthymeleaf.html#expression-utility-objects](https://www.thymeleaf.org/doc/tutorials/2.1/usingthymeleaf.html#expression-utility-objects)

[https://kim-jong-hyun.tistory.com/20](https://kim-jong-hyun.tistory.com/20)

