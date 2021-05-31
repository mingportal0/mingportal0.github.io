---
title: "Ping, Telnet, Traceroute"
layout: post
date: 2021-03-02
categories: computing
tags: [computing]
comment: yes
---



### 1. Ping

목적지 서버를 통하는 네트워크 체크

**명령어**

ping 192.168.50.151

**ping 테스트를 할때 방화벽 때문에 안되는 경우**

ping 테스트를 할때 방화벽 때문에 안되는 경우가 많으니 인바운드 받는 pc의 방화벽에서 파일 및 프린터 공유가 막혀있는지 확인해야 한다.

![DaCapture_20210303-14381803](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/DaCapture_20210303-14381803.png)

### 2. Telnet

목적지 서버의 application까지 살아있는지 확인

기본 포트는 23임.

아래와 같이 ping은 네트워크 레이어까지 검사하지만 telnet은 어플리케이션 레이어까지 검사함.

![DaCapture_20210302-16093203](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/DaCapture_20210302-16093203.png)

출처 : [https://data-pioneer.tistory.com/4](https://data-pioneer.tistory.com/4)



**명령어**

telnet 192.168.50.151 80 (해당 서버의 80포트 검사)

ctrl + ] : 빠져나오기

### 3. Traceroute

![DaCapture_20210302-16004203](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/DaCapture_20210302-16004203.png)

출처 : [https://m.blog.naver.com/p_rain/220674878863](https://m.blog.naver.com/p_rain/220674878863)



**해당 명령어로 얻을 수 있는 정보** (Vmware NAT는 TTL 값을 128로 초기화시키므로 경로 추적이 안됨.)

1. 경유하는 라우터의 수
2. 경유하는 라우터의 IP와 도착시간 (망 사이의 속도)
3. 필터링의 유무
4. 보더 라우터의 IP

**명령어**

+ win : tracert
+ unix : traceroute

