---
title: "SSL 통신 과정"
layout: post
date: 2021-04-16
categories: computing
tags: [computing]
comment: yes
---



호스트 서버와 클라이언트 서버 모두 실제 데이터는 대칭키로 암호화되어 관리된다.

대칭키의 키는 공개키 방식으로 서로 주고받게 된다.

+ 실제 데이터 : 대칭키
+ 대칭키의 키 : 공개키



### 통신과정

HandShake -> Session -> Session 종료



### HandShake : 대칭키 교환

1. Client Hello. 클라이언트가 서버에 접속을 한다.
   1. 클라이언트 측에서 생성한 랜덤 데이터를 서버로 전송
   2. 클라이언트가 지원하는 암호화 방식들을 서버로 전송
   3. 세션 아이디를 전송
2. Server Hello. 서버는 클라이언트에 응답한다.
   1. 서버 측에서 생성한 랜덤 데이터를 전송
   2. 서버가 선택한 클라이언트의 암호화 방식을 전송
   3. 인증서 전송
3. 클라이언트는 서버가 전송한 인증서를 확인한다.
   1. 인증서가 CA에 의해 발급된 것인지 확인
   2. 있다면 믿을 수 있는 인증서이다.
   3. 클라이언트는 서버의 랜덤 데이터와 자신의 랜덤 데이터를 조합해 pre master secret를 생성한다.
   4. 이 인증서로 pre master secret을 암호화하여 서버에 전송
   5. 서버는 pre master secret를 자신의 비밀키로 복호화한다.
   6. 양측은 pre master secret를 이용해 master key를 생성해 Session Key를 생성한다.
   7. HandShake의 종료를 서로에게 알린다.



### Session : 데이터 교환

대칭키(세션키) 방식으로 데이터 교환

1. 클라이언트는 세션키를 이용해 데이터를 암호화해 서버에게 전송
2. 서버는 받은 데이터를 자신의 세션키를 이용해 복호화한다.
3. 서버는 자신의 세션키를 이용해 데이터를 암호화해 클라이언트에게 전송
4. 클라이언트는 받은 데이터를 자신의 세션키를 이용해 복호화한다.



### Session 종료

1. 데이터 전송이 끝나면 SSL 통신이 끝났음을 서로에게 알려줌
2. 이 때 사용된 대칭키인 세션키를 폐기함.



