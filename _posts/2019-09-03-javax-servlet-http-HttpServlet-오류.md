---
title: "The superclass 'javax.servlet.http.HttpServlet' was not found 오류 해결"
layout: post
date: 2019-09-03
categories: java
tags: [java, spring, error]
comment: yes
---

프로젝트를 임포트하다가 이런 오류가 발생했다.<br>
<br>
해결방법은<br>
<br>
프로젝트 우클릭 -> Properties -> Java Build Path -> Libraries 탭 -> add library -> server runtime -> Finish<br>
<br>
이게 안되면 Server를 못찾는 거기 때문에<br>
<br>
Window -> Preferences -> server -> Runtime Environment 에서 기존 서버를 지운 후 새로 만든다.<br>
<br>
그리고 해결!<br>
그러나.. DB문제가 생겼다......... 집에 있는 노트북에서 해봐야 겠다...