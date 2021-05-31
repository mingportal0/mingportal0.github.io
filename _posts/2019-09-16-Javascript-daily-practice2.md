---
title: "생활코딩 Javascript 수업 09/16"
layout: post
date: 2019-09-16
categories: javascript
tags: [javascript]
comment: yes
---

### CSS Selector
CSS를 선택하는 우선순위는 '태그<클래스<아이디'이다.
```
<head>
<style>
  span{
    color:blue;
  }
  .target_class{
    color:red;
  }
  #target_id{
    color:powderblue;
  }
</style>
</head>
<body>
<p>This text is in Black.You can also add your own text by typing over the <span>top</span> of this <span class="target_class">text</span>.This text is in Black.You can also add your own text by typing over the <span>top</span> of this <span class="target_class">text</span>.This text is in Black.You can also add your <span id="target_id">own text</span> by typing over the <span>top</span> of this <span class="target_class">text</span>.</p>
</body>
```


### 실행화면

<html>

<head>
<style>
  span{
    color:blue;
  }
  .target_class{
    color:red;
  }
  #target_id{
    color:powderblue;
  }
</style>
</head>
<body>

<p>This text is in Black.You can also add your own text by typing over the <span>top</span> of this <span class="target_class">text</span>.This text is in Black.You can also add your own text by typing over the <span>top</span> of this <span class="target_class">text</span>.This text is in Black.You can also add your <span id="target_id">own text</span> by typing over the <span>top</span> of this <span class="target_class">text</span>.</p>
</body>
</html>

