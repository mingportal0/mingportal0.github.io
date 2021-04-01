---
title: "Resource Build 수정"
layout: post
date: 2021-03-29
categories: windchill
tags: [windchill]
comment: yes
---



윈칠에서 enum은 rbinfo 파일을 사용하여 관리한다.

### enum 관련 파일

1. enum java : @GenAsEnumeratedType로 정의된 파일

   ```java
   package com.e3ps.common.code;
   
   import com.ptc.windchill.annotations.metadata.GenAsEnumeratedType;
   
   @GenAsEnumeratedType
   public class NumberCodeType extends _NumberCodeType {
   
      protected NumberCodeType() {
   
      }
   
   }
   ```
   

   
2. enum class : java를 컴파일한 파일

3. enum rbinfo : @GenAsEnumeratedType로 인해 만들어진 파일

4. enum ser : ResourceBuild를 통해 만들어진 파일

   Windchill Shell에서 ResourceBuild com.e3ps.common.code.NumberCodeType***을 입력하면

   <Windchill_Home>\src\com\e3ps\common\code\NumberCodeType 으로 시작하는 rbinfo 파일들을  대상으로 리소스 빌드하여 <Windchill_Home>\codebase\com\e3ps\common\code 폴더 내 ser파일을 생성한다.

5. ser파일이 변경된다면 Windchill Shell에서 codebase\ant -f makejar.xml을 해야 서버에 반영된다.

   

### 명령어

ResourceBuild com.e3ps.common.code.NumberCodeType*** : rbinfo 파일 빌드. ser 파일 생성.

enumVerify.bat com.e3ps.common.code.NumberCodeType : 해당 번들 내 값을 확인 할 수 있다.

<Windchill_Home>\bin\enumcustomize.bat  : ser파일을 열어서 상세 정보를 볼 수 있다.

![image-20210329141118759](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210329141118759.png)