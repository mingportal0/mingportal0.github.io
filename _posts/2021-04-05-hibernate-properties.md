---
title: "Hibernate Properties"
layout: post
date: 2021-04-05
categories: java
tags: [java, spring, hibernate]
comment: yes
---



### application.properties 수정

```xml
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MariaDBDialect
spring.jpa.properties.hibernate.show_sql=true
spring.jpa.properties.hibernate.format_sql=true
spring.jpa.properties.hibernate.use_sql_comments=true
logging.level.org.hibernate.type.descriptor.sql=trace
```

- dialect로 MariaDBDialect 추가 (JPA에 MariaDB 사용을 명시함.)
- log에 sql문 추가
- sql문을 보기 좋게 출력
- sql문 이외 추가적인 정보 출력
- sql문의 bind Parameter 출력

