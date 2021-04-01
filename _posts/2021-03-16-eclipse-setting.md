---
title: "이클립스 초기 세팅"
layout: post
date: 2021-03-16
categories: java
tags: [java]
comment: yes
---

### 1. ini 설정

```ini
exlipse.ini
-Xms256m
-Xmx2048m
-Duser.name=mjroh
```



### 2. Preferences 설정

- Heap 메모리 표시

  Window - Preferences - General

  ![image-20210330134100422](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210330134100422.png)



- 주석

  Window - Preferences - Java - Code Style - Code Templates

  1. File

  ```java
  /**
    * @FileName : ${file_name}
    * @Project : ${project_name}
    * @Date : ${date}
    * @작성자 : ${user}
    * @프로그램 설명 : 
    */
  ```

  2. Method

  ```java
  /**
    * @Method Name : ${enclosing_method}
    * @작성일 : ${date}
    * @작성자 : ${user}
    * @Method 설명 : 
    * ${tags}
    */
  ```

  

### 2. svn 사용자 지정

svn 추가하고 아이디, 비번 세팅 (까먹어서 다른 사람꺼로 커밋치면 안됨.)



