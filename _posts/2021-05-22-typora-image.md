---
title: "Typora 이미지 설정"
layout: post
date: 2021-05-22
categories: blog
tags: [blog]
comment: yes
---



블로그에 포스트를 작성할 때 이미지를 넣는 방법을 정리한다.

### 로컬 폴더로 이미지 넣기

이 방법은 이미지를 로컬에 원하는 폴더에 넣을 수 있어서 로컬에서 이미지를 관리하기 좋다.

방법은..

파일 - 환경설정 - 이미지 에서 Copy image to custom folder 설정 후 원하는 폴더 지정

![image-20210522173320528](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210522173320528.png)



### 깃허브에 직접 이미지 넣기

이 방법은 깃허브 블로그 Repository의 원하는 폴더로 바로 업로드할 수 있어서 간편하다는 장점이 있다. 그러나 깃허브 Repository의 용량 한계가 1GB라고 해서 무한정 쓰기에는 한계가 있다.

파일 - 환경설정 - 이미지 에서 image Uploader를 PicGo-Core로 설정한다. 

![image-20210522174049803](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210522174049803.png)



Download of Upgrade를 누른 후 설치를 기다린 뒤 Open Config File 버튼을 누른다.

![image-20210522175656600](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210522175656600.png)



Config 파일 수정

아래와 같이 수정한 후 저장한다.

```json
{
    "picBed": {
      "current": "github",
      "github": {
        "repo": "깃허브ID/Repository이름",
        "token": "d4f8438afcbae214b9ede6abd8ef0e674340c227",
        "path": "Repository내 폴더 경로/",
        "customUrl": "https://raw.githubusercontent.com/깃허브ID/Repository이름/branch명",
        "branch": "branch명(기본 master)"
      }
    },
    "settings": {
      "showUpdateTip": true,
      "autoStart": true,
      "uploadNotification": true,
      "miniWindowOntop": true
    },
    "needReload": false,
    "picgoPlugins": {}
}
```



이제 Typora에서 이미지를 오른쪽 클릭하면 Upload Image 버튼이 생긴 것을 볼 수 있다.

![image-20210522175215838](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210522175215838.png)


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTcwMjExMzc0OV19
-->