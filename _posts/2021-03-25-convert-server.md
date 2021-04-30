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

![image-20210325155803494](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210325155803494.png)



# To-Be

1. 설치 가능한 버전 확인 후 공유

   1. 현재 Windchill 버전으로 설치 가능한 Adaptor

      https://www.ptc.com/en/support/article/CS236395

      **Windchill 11.0 M030 CPS16 의 경우 Adaptor 6.0까지 설치 가능**하며 Adaptor 7.1을 설치하려면 11.0 M030 CPS20을 설치해야 함.

   2. Adaptor 6.0 지원 가능한 Creo 버전

      https://www.ptc.com/en/support/article/CS74838?&language=en&posno=2&q=Creo%206.0%20matrix&source=search#Creo%20View%20Client

      Adaptor 6.0의 경우 Creo 4.0(아래 주석 3, 4 참고) ~ 6.0 까지 설치 가능함.

      ![image-20210325164610810](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210325164610810.png)

   3. Creo View Toolkits은 Web Toolkit, WebGL Toolkit 지원

      Web Toolkit는 지원하지만 Java Toolkit, Office Toolkit는 지원하지 않는다.

      WebGL Toolkit은 지원한다.

2. 설치 S/W 확인

   1. Creo Parametric 6.0
   2. Creo View Adaptor 6.0

3. 시스템 접속 정보 숙지

4. 그 외 이슈 사항

   1. VPS 변환 시 운영서버에서 Creo Toolkit 시작 오류 발생. 



# Action

### 시스템 정보

##### 1. Application Server

​	51 - VPSThread.java 내 소스 변경

##### 2. Worker Server

​	53 - Creo 설치, Adaptor 설치, VPS 변환된 파일 위치

​	152(VPS) - Creo 설치, Adaptor 설치, VPS config 설정파일 및 실행 위치

​	153 - Creo 설치, Adaptor 설치

​	154 - Creo 설치, Adaptor 설치



### Adaptor 설치

Creo 설치 후 진행한다.

Creo View 6.0 Adaptors (MCAD, ECAD)_6-0-0-0_windows

**설치 전** 

- 서비스에 GS worker Deamon 있는 지 확인. (있으면 기존 것 삭제 후 진행하거나 그냥 진행하여도 덮어쓰기 됨.)
- 참고) 서비스 제거 cmd.exe에서 workerdaemon -remove <port#>

**설치**

동의함 체크

![image-20210330155756819](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210330155756819.png)

**설치 대상**

- creo 6.0 축소판 생성기, worker 체크

![image-20210330155828940](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210330155828940.png)

**설치 디렉토리** 

- creo 설치 폴더 d:\\ptc\\creo_view_adaptors_6.0_ver

![image-20210330155849325](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210330155849325.png)

worker deamon을 windows 서비스로 구성

![image-20210330155904987](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210330155904987.png)

서비스 설정에서 복구탭에서 서비스 다시시작으로 설정하면 좋다.

또한 일반탭에서 서비스 실행 파일 경로를 확인해 제대로 서비스가 만들어졌는지 확인할 수 있다.

![image-20210329150454700](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210329150454700.png)



### Config 셋업

설치한 Creo View Adaptor의 bin 폴더 내 Proe2pv_config.exe 를 실행하여 설정한다.  역할은 Worker와 Windchill을 연결하는 것이다.

기존에 설치되어 있었다면 proe_setup\adaptor.pvi에서 참고 가능.

- Existing Configuration Setup Directory : 설치한 Adaptor 위치 확인

- Start Command : 설치한 Creo폴더 내Parametric\bin\parametric.bat
- Version : Creo 버전 확인
- Server Host : Windchill Host
- Server Port : 5600

Setup 클릭 후 옆에 Recipe Editor를 누르면 Recipe를 설정할 수 있다.



### Recipe 설정

역할은 출력물을 설정하는 것이다.

기존에 설치되어 있었다면 proe_setup\proe2pv.rcp에서 참고 가능.



참고) Recipe 설정[http://support.ptc.com/help/creo/view/r6.0/en/index.html#page/creo_view_mcad_adapters%2FTheRecipe_Editor%2FD_The_Basic_Tab.html%23](http://support.ptc.com/help/creo/view/r6.0/en/index.html)



Save 클릭 후 서비스 종료를 위해 OS를 재시작한다.

서비스가 제대로 안 올라올 시 수동으로 올릴 때는 아래 2개를 실행한다.

- obj\WorkerDeamon.exe

- proe_setup\proeworker.bat



### 작업자 에이전트 관리

사이트 - 유틸리티 - 작업자 에이전트 관리

구성을 클릭해 설정화면으로 이동한다.

![image-20210329151158277](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210329151158277.png)

작업자 추가를 클릭한다.

![image-20210329151246513](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210329151246513.png)

호스트, 데이터 유형 선택

![image-20210430094442790](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210430094442790.png)

작업자 위치 선택

![image-20210430094228210](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210430094228210.png)

실행 명령 입력 및 자동 시작 체크

(로컬에서 실행을 체크하면 서비스가 자동으로 안올라올 수 있다.)

![image-20210430094316884](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210430094316884.png)

포트 선택

![image-20210430094349625](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210430094349625.png)

공유폴더 경로

WVS 작업모니터 - 다시 제출

![image-20210430094517893](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210430094517893.png)

### 그 외

WEB-INF\conf\wvs.properties 에서 worker.exe.whitelist.prefixex....

2D, 3D, dwg 큐 따로 설정이 가능하다.

이 후 Creo Pro-Standard를 설정한다



### 테스트

작업자 에이전트 관리 에서 빨간 깃발 안올라올 때

- 왼쪽 깃발 : Creo 문제
- 오른쪽 깃발 : Worker 문제

![image-20210430093946766](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210430093946766.png)

### 이 후 Creo pro-standard 설정



