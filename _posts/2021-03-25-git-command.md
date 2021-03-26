---
title: "git 명령어"
layout: post
date: 2021-03-25
categories: computing
tags: [computing]
comment: yes
---



### 1.체크인 & 체크아웃

+ 시작
  
  + git init
+ 업데이트
  + git pull : 모든 변경 사항 업데이트
  + git pull origin master : origin master 업데이트
  + git pull origin branch_name : branch_name 업데이트
+ 브랜치 생성
  + git branch branch_name : 브랜치 생성
  + git branch -d branch_name : 브랜치 삭제 (remote branch 삭제하려면 push해야함.)
  + git checkout branch_name : 브랜치 선택 (local에 branch가 없으면 만듬)

    + git checkout -b branch_name1  origin/branch_name : remote branchd을 local에 branch_name1으로 만듬
    + git checkout -t branch_name  : remote branch 그대로 local에 만듬
  + git switch branch_name : 브랜치 이동 (그 전에 작업하던 건 스태시에 있음. 스태시 신경써야 함.)
+ 변경사항 보기
  
  + git status
+ 체크인
  + git add . : Stage Changes에 변경사항 모두(.)올림
  + git commit -m "msg" : 커밋 -m은 메세지 다는 것.
  + git push : 모두 push
  + git push origin master : master에 push 
  + git push origin branch_name : branch_name에 push 

+ 스태시

  + git stash : 스택에 새로운 스태시 만들기
  + git stash list : 스태시 리스트 확인
  + git stash apply @stash_name : 해당 스태시 적용 (ex. git stash apply stash@{0})
  + git stash drop : 해당 스태시 삭제
  + git stash pop : 가장 최근 스태시 적용 및 삭제

+ gitignore 삭제

  + git rm -r --cached : Stage Changes에 gitignore tracking 파일이 올라옴. 이후 커밋->푸시

  

