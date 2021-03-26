---
title: "Oracle Query"
layout: post
date: 2021-03-22
categories: db
tags: [database, oracle]
comment: yes

---



B에 속하지 않은 A

![image-20210323171456994](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210323171456994.png)

```
SELECT *                                           
FROM (                                             
    SELECT *                                       
    FROM muserm A MINUS (                          
        SELECT m.* FROM sgroupuserlinkm g, muserm m
        WHERE GROUPCODE = ?                        
        AND g.USERID = m.USERID                    
    )                                              
)                               
```

