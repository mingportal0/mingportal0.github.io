---
title: "Model 변경"
layout: post
date: 2021-04-26
categories: windchill
tags: [windchill]
comment: yes
---



### Model 변경 사항 체크

Windchill Shell에 `updatemanager -cs`입력

`<Windchill-Home>\Upgrade\UpgradeReports\UpgradeDatabaseSchema` 에서 로그 파일 확인 후 필요한 DB 작업 실시

만약 updatemanager가 Fail일 경우 `<Windchill-Home>\logs` 에서 로그 파일 확인



### Model 삭제

Windchill에 Model이 등록되면 `Windchill-Home\codebase` 내 다음 3개 파일에 기록된다.

- associationRegistry.properties
- modelRegistry.properties
- descendentRegistry.properties

따라서 Model을 삭제하려면 위 3개 파일 내에서 삭제해주어야 한다.



##### 삭제 명령어 (Windchill Shell 내에서 입력)

```
ant -f bin/tools.xml model_uninstall -Dmodel_uninstall.filter="com.e3ps.stagegate.*"
```

만약 위 명령어를 입력해도 잘못된 Model이 계속 등록되면

`Windchill-Home\codebase`내 컴파일할 폴더를 삭제 후 다시 컴파일을 해주면 잘된다.



##### 컴파일 명령어 (Windchill Shell 내에서 입력)

```
ant -f bin/tools.xml class -Dclass.includes=com/e3ps/stagegate/** -Dclass.force=true
```



