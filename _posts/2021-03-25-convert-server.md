---
title: "변환 서버 구축"
layout: post
date: 2021-03-25
categories: windchill
tags: [windchill, creo]
comment: yes
---



# 시나리오

1. 매트릭스 확인
2. Creo pstd 확인 및 백업
3. Recipe 확인 및 백업
4. Agent 확인 및 백업
5. Adaptor 설치
6. Config 셋업
7. Recipe 설정
8. Agent 설정



# AS-IS

WC version : 11.0 M030 CPS16

Creo View Adaptor version : 

proe2pv version : Creo 3.0 M030 (13.2.30.38)

![image-20210325155803494](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210325155803494-1616747947725.png)



# To-Be

1. 설치 가능한 버전 확인 후 공유

   1. 현재 Windchill 버전으로 설치 가능한 Adaptor

      https://www.ptc.com/en/support/article/CS236395

      Windchill 11.0 M030 CPS16 의 경우 Adaptor 6.0까지 설치 가능하며 Adaptor 7.1을 설치하려면 11.0 M030 CPS20을 설치해야 함.

   2. Adaptor 6.0 지원 가능한 Creo 버전

      https://www.ptc.com/en/support/article/CS74838?&language=en&posno=2&q=Creo%206.0%20matrix&source=search#Creo%20View%20Client

      Adaptor 6.0의 경우 Creo 4.0(아래 주석 3, 4 참고) ~ 6.0 까지 설치 가능함.

      ![image-20210325164610810](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210325164610810-1616748025240.png)

   3. Creo View Toolkits은 Web Toolkit, WebGL Toolkit 지원

      Web Toolkit는 지원하지만 Java Toolkit, Office Toolkit는 지원하지 않는다.

      WebGL Toolkit은 지원한다.

      

2. 시스템 접속 정보 숙지

3. 그 외 이슈 사항

   1. VPS 변환 시 운영서버에서 Creo Toolkit 시작 오류 발생. -> 협의 필요



# Action

### Application Server

51 - VPSThread.java 내 소스 변경



### Worker Server

53 - Creo 설치, Adaptor 설치 

152(VPS) - Creo 설치, Adaptor 설치, VPS config 설정

153 - Creo 설치, Adaptor 설치

154 - Creo 설치, Adaptor 설치



### Adaptor 설치

Creo View 6.0 Adaptors (MCAD, ECAD)_6-0-0-0_windows

**설치 전** 

- 서비스에 GS worker Deamon 있는 지 확인. (있으면 기존 것 삭제 후 진행.)

**설치**

- **설치 대상**
  - creo 6.0 축소판 생성기, worker 체크

- **설치 디렉토리** 
  - creo 설치 폴더 d:\\ptc\\creo_view_adaptors_6.0_ver
  - worker deamon을 windows 서비스로 구성
  - 서비스 설정에서 복구탭에서 서비스 다시시작으로 설정하면 좋다.

**설치 후**

- workerDeamon 바탕화면에 등록됨.

- 서비스에 GS worker Deamon 등록됨.



### Config 셋업

proe2pv_config.exe 실행 : 서버랑 윈칠 연결

기존 - proe_setup\adaptor.pvi 에 설치되어 있으면 참고

setup_directory : D:\\ptc\\creo_view_adaptors\proe_setup

start Command (proe 경로) : D:\\ptc\Creo 6.0\..\parametric.bat

Server Host : nhpdm.hyosung.com

Server Port : 5600

Setup 클릭



### Recipe 설정

proe_setup\proe2pv.rcp

Basic, Parameters, Advanced : ptc doc 확인

Save 클릭

서비스 종료를 위해 재시작

안되면 둘 다 실행

- obj\WorkerDeamon.exe
- proe_setup\proeworker.bat



### 그 외

WEB-INF\conf\wvs.properties

worker.exe.whitelist.prefixex....

2D, 3D, dwg 큐 따로 설정 가능



### 테스트

WVS 작업모니터 - 다시 제출

작업자 에이전트 관리 에서 빨간 깃발 안올라올 때

- 왼쪽 깃발 : Creo 문제

- 오른쪽 깃발 : Worker 문제



### 이 후 Creo pro-standard 설정



