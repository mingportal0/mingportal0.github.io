---
title: "Github 블로그 만들기 2/2"
layout: post
date: 2019-08-16
categories: blog
tags: [blog, github page]
comment: yes
---

이제 내 취향에 맞게 블로그를 수정하는 방법을 소개하고자 한다.<br/>
블로그를 수정하기에 앞서 로컬에서 블로그를 실행하기 위해 준비를 해야 합니다.<br/>
그 이유는 깃허브에서 직접 수정하기에는 수정사항이 바로 적용되지 않기 때문에 불편하기 때문입니다.<br/>

### 1. 루비 설치
링크<br/>
http://jekyll-windows.juthilo.com/1-ruby-and-devkit/<br/>

### 2. 깃허브 데스크탑 설치 & 로컬에 repository 만들기
링크<br/>
https://desktop.github.com/<br/>

깃허브 데스크탑에서 'clone repository'를 한다.
그러면 로컬에서 자신의 Repository를 수정할 수 있습니다.

![makeblog6](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/makeblog6.png)


### 3. 로컬에서 블로그 실행하기
그러면 가져온 Repository를 로컬에서 실행해보겠습니다.
일단 루비 콘솔창을 엽니다.
여기까지 잘 따라오셨다면 시작화면에서 검색하시면 아래와 같이 나올 것입니다.

![makeblog7](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/makeblog7.png)


그리고 자신의 Repository로 이동합니다.

![makeblog8](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/makeblog8.png)


그리고 Gemfile을 수정해야 합니다.

![makeblog9](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/makeblog9.png)


```yaml
---
source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins
gem "jekyll", "~> 3.5"
gem "minimal-mistakes-jekyll"
---
```

그리고 콘솔창에
>bundle install
이라고 치면 Gemfile에 있는 theme를 모두 설치하게 됩니다.

그리고 
>bundle exec jekyll serve
라고 치고 나서 브라우저 주소창에
>localhost:4000
이라고 치면 자신의 블로그로 이동할 수 있습니다.
이제 블로그 수정을 위한 준비가 끝났습니다.

![makeblog10](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/makeblog10.png)


### 4. _config 파일 수정
우선 _config.yml을 수정해야 합니다.
주의사항으로는 깃허브 블로그는 파일이름과 파일 내 인코딩에 굉장히 민감합니다.
그래서 파일이름이나 확장자도 대소문자를 구분하기 때문에 조심히 작성해야 합니다.
파일 인코딩은 유닉스, UTF-8로 하니까 괜찮더라구요. 다른분들은 어떻게 했는지 모르겠지만
저는 notepad++에서 작업을 했는데 다른 인코딩은 자꾸 에러가 나서 힘들었습니다.
자세한 것은 아래 링크를 참고해주세요.
https://mmistakes.github.io/minimal-mistakes/docs/configuration/

```yaml
---
# theme                  : "minimal-mistakes-jekyll"
# remote_theme           : "mmistakes/minimal-mistakes"
minimal_mistakes_skin    : "air" # "default", "air", "aqua", "contrast", "dark", "dirt", "neon", "mint", "plum", "sunrise" #적용시킬 테마

# Site Settings
locale                   : "ko-KR"
title                    : "Sunflower's Blog" #블로그 상단 제목
title_separator          : "-"
subtitle                 : # site tagline that appears below site title in masthead
name                     : "Myung-jin"
description              : "Fisrt Blog"
---
```

```yaml
---
# Site Author
author:
  name             : "Myung-jin" #좌측 블로그 주인 프로필
  avatar           : "/assets/images/waffle.jpg"
  bio              : "Being Better"
  location         : "Seoul Korea"
  email            : "mingportal0@gmail.com"
---
```
그 외 내용에 대해서는 위의 주소나 다른 사람들이 잘 설명해둔 것 같더라구요. 참고해주세요.
저는 이 외 상단 네비게이션 바하고 댓글창을 넣기 위해 다른 사람 글을 참고하거나 위에 링크를 보면서 따라했습니다.

### 5. 블로그에 글 쓰기
글을 쓰실 때는 아래와 같이 파일 이름을 보통 아래와 같이 정하고 _posts폴더에 넣어줍니다. 그러면 자동으로 블로그에 글이 올라가게 됩니다.
>현재일(yyyy-mm-dd-포스팅제목.md

![makeblog11](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/makeblog11.png)

그리고 내용에는 아래와 같은 형식을 지켜주셔야 깃허브가 포스트를 인식할 수 있습니다.
저는 아래와 같이 설정했습니다.
헤더 : 티저그림, 맨 처음 이미지
카테고리
태그
toc (우측에 뜨는 네비게이션 바)

![makeblog12](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/makeblog12.png)


### 6. 깃허브데스크탑을 이용해 커밋 & PUSH 하기
여러가지 수정하고 로컬로 열어보고 등등
아무튼 수정이 끝나셨으면 실제 블로그에 수정사항을 업데이트 해야겠죠?
지금까지 문서 변경사항을 저장하시면 자동으로 깃허브 데스크탑이 변경사항을 인식하고 커밋을 하라고 상태가 바뀝니다.

![makeblog13](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/makeblog13.png)


그러면 커밋을 하시고 마지막 PUSH까지 하시면 깃허브 Repository에 이 수정사항이 업데이트 되게 됩니다.
그러나 블로그에 바로 수정사항이 업데이트가 되는 것은 아니니 커피 한잔 하시고 확인해보세요.

지금까지 깃허브 블로그 작성 방법이었습니다.
다른 블로그와 달리 깃허브 블로그는 만들기 많이 어렵지만 무언가 다른 매력이 있는 것 같더라구요.
앞으로도 열심히 포스팅해보겠습니다.
감사합니다.