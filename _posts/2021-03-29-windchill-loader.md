---
title: "데이터 로더"
layout: post
date: 2021-03-29
categories: windchill
tags: [windchill]
comment: yes
---





윈칠에서 엑셀파일을 사용해 객체를 한번에 save 하려면 로더를 만들어서 돌리게 되는데..

로더 돌리는 방법

1. 메소드 서버가 동작하고 있어야 함.
2. Windchill Shell에서 windchill com.e3ps.load.CodeLoader %WT_HOME%\loadFiles\e3ps\NumberCode_class.xls wcadmin wcadmin 입력.
3. 메소드 서버 디버깅.
4. DB 확인.