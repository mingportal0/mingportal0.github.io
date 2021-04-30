---
title: "Windchill 구조"
layout: post
date: 2021-04-28
categories: windchill
tags: [windchill]
comment: yes
---



### 아키텍쳐 구조

![image-20210428171947005](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210428171947005.png)

- 위치
  1. Apache : `<Windchill_Directory>\HTTPServer`
  2. Java : `<Windchill_Directory>\Java`
  3. Directory Server: `<Windchill_Directory>\WindchillDS`
  4. Tomcat: `<Windchill_Home>\tomcat`
  5. Java Files : `<Windchill_Home>\src`
  6. Class Files : `<Windchill_Home>\class`




### 컴파일 명령어

`<Windchill_Home>\src` 폴더 내 JAVA 파일을 CLASS 파일로 컴파일하여 `<Windchill_Home>\codebase` 폴더에 생성한다.

Windchill Shell 내에서 입력

```
ant -f bin/tools.xml class -Dclass.includes=com/e3ps/stagegate/** -Dclass.force=true
```





