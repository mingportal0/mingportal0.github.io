---
title: "아파치 로그 파일 생성"
layout: post
date: 2021-02-08
categories: server
tags: [server, apache]
comment: yes
---

`{아파치가 설치된 경로}/httpd.conf` 파일에서



`log_config_module`이 아래처럼 주석이 없는 것을 확인 후 (기본 설정이면 주석이 없다.)

````
LoadModule log_config_module modules/mod_log_config.so
````



`<IfModule log_config_module>`안에서

`CustomLog "logs/access.log" common` 라고 되어있는 것을

이렇게 바꾸면 하루(86400초) 마다 파일이 새로 생성되고

````
CustomLog "|bin/rotatelogs.exe logs/%Y%m%d_access.log 86400" combined
````



이렇게 바꾸면 100MB 마다 파일이 새로 생성된다.

```
CustomLog "|bin/rotatelogs.exe logs/%Y%m%d_access.log 100M" combined
```



Windows 운영체제에선 반드시 rotatelogs 다음에 **.exe** 를 붙여주어야 한다. [참고](https://stackoverflow.com/questions/17201679/apache-2-4-4-rotatelogs-error-parameter-is-incorrect)

다른 것은 달라질 것이 없으니 [Apache2.4 문서](https://httpd.apache.org/docs/2.4/en/programs/rotatelogs.html)를 참고하면 된다.



### 참고

[https://floor5th.tistory.com/86](https://floor5th.tistory.com/86)

[https://bearpro.tistory.com/6](https://bearpro.tistory.com/6)

