---
title: "상속. inherit"
layout: post
date: 2021-05-07
categories: css
tags: [css]
comment: yes
---



모든 프로퍼티가 상속되는 것은 아니다.

| property              | Inherit |
| :-------------------- | :-----: |
| width/height          |   no    |
| margin                |   no    |
| padding               |   no    |
| border                |   no    |
| box-sizing            |   no    |
| display               |   no    |
| visibility            |   yes   |
| opacity               |   yes   |
| background            |   no    |
| font                  |   yes   |
| color                 |   yes   |
| line-height           |   yes   |
| text-align            |   yes   |
| vertical-align        |   no    |
| text-decoration       |   no    |
| white-space           |   yes   |
| position              |   no    |
| top/right/bottom/left |   no    |
| z-index               |   no    |
| overflow              |   no    |
| float                 |   no    |



### inherit 프로퍼티

부모에게 상속되지 않는 프로퍼티에 inherit라고 주면 의도적으로 상속받을 수 있다.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    .text-red {
      color: red;
      border: 1px solid #bcbcbc;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="text-red">
    <p>Heading</p>
    <button>Button</button>
  </div>
</body>
</html>
```

![image-20210507160358672](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210507160358672.png)

원래 `color`는 상속되는 프로퍼티지만 button에는 상속되지 않는다.



```css
.text-red button {
	color: inherit;
}
```

![image-20210507160320474](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210507160320474.png)

그러나 `color: inherit;` 같이 의도적으로 상속되게 할 수 있다.



### Cascading

CSS 적용 우선 순위를 지정하는 것을 Cascading이라고 한다.

규칙

##### 1. CSS가 어디서 선언되었는지에 따라 중요도에 영향을 끼침. (1번이 가장 높음)

   1. head 태그 내 style 요소

   2. head 태그 내 style 요소 내 `@import`문

      ```html
      <head>
        <link rel="stylesheet" href="style.css">
        <style>
          body {
            background-color: beige;
            color: navy;
          }
        </style>
      </head>
      ```

   3. link로 연결된 CSS 파일

   4. link로 연결된 CSS 파일 내 `@import`문

      

##### 2. 대상을 특정하게 명시할 수록 중요도가 높아짐.

   1. !important

      ```css
      p        { color: red !important; }
      ```

   2. 인라인 스타일

   3. 아이디 선택자

      ```css
      #thing   { color: blue; }
      ```

   4. 클래스/어트리뷰트/가상 선택자

      ```css
      div.food { color: chocolate; }
      ```

   5. 태그 선택자

      ```css
      div      { color: orange; }
      ```

   6. 전체 선택자

   7. 상위 요소에 의해 상속된 속성

      

##### 3. 나중에 선언될 수록 중요도가 높아짐.



### 참고

[https://poiemaweb.com/css3-inheritance-cascading](https://poiemaweb.com/css3-inheritance-cascading)
