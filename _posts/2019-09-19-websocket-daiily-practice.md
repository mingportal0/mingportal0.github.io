---
title: "웹소켓이란?"
layout: post
date: 2019-09-19
categories: computing
tags: [computing]
comment: yes
---



웹 소켓은 사용자의 브라우저와 서버 사이의 인터액티브 통신 세션을 설정할 수 있게 하는 고급 기술

+ 종류
   WebSocket
   - W3C 웹 표준
   - IE10 이상 부터 가능(JS)
   SockJS
   - socket.io(NodeJS 사용 시)
   - IE8 이상 부터 가능
   STOMP(Streaming Text Oriented Messaging Protocol)
   - 토픽 구동 방식
   - stomp js lib이 있음.
+ ws:// 보다 wdd://을 사용함. 보안 때문에..
+ Full duplex, 2-way communicaion, Polling, Long Polling 이라서 계속 연결 유지
+ Client가 Server에 Handshake를 요청함 -> Bi-directional Messages -> One Side Closes channel(연결된 Session이 종료)



### 설치
+ pom.xml



### 참고
[https://www.youtube.com/watch?v=gQyRxPjssWg](https://www.youtube.com/watch?v=gQyRxPjssWg) [https://developer.mozilla.org/ko/docs/WebSockets](https://developer.mozilla.org/ko/docs/WebSockets)
