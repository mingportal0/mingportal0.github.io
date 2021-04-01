---
title: "xconfManager 사용법, properties 파일 관리"
layout: post
date: 2021-03-29
categories: windchill
tags: [windchill]
comment: yes
---



properties 파일은 xconf 파일을 사용해 관리한다.

그래서 properties 파일을 직접 변경하면 문제가 생길 수 있다. 

물론 xconf 파일도 직접 변경하는게 아닌 xconfManager를 사용해 변경해야 한다.

xconf 파일 내용

![image-20210329143819193](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210329143819193.png)



### 명령어

- xconfmanager -h : help

- xconfmanager -d <property_names> : property_name 에 대한 정보를 본다.

  ​	ex) xconfmanager -d product.context.name

- xconfmanager -s <property_name>=<property_value> -t <property_file> -p : property_name 의 value를 변경하고 targetFile(properties 파일)의 value를 변경한다.

  ​	ex) xconfmanager -s product.context.name=E3PS -t codebase\com\e3ps\eSolution.properties -p

- xconfmanager -p : 모든 xconf 변경 내용 properties에 적용.

