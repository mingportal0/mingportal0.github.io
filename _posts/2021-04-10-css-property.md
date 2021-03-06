---
title: "크기, 색상 단위. px, color"
layout: post
date: 2021-04-10
categories: css
tags: [css]
comment: yes
---



### 크기

css에서 사용하는 대표적인 크기 단위는 px, em, %이다.

#### 1. px

픽셀을 의미한다. 22인치 LCD 모니터의 경우 해상도가 1680 * 1050인데 이것은 가로 1680 픽셀, 세로 1050 픽셀을 갖는다는 의미이다. 그러나 디바이스 별로 픽셀의 크기는 제각각이기 때문에 대부분의 브라우저는 1px을 1/96인치의 절대 단위로 인식한다.

#### 2. em

요소에 지정된 크기의 배수 단위이다.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-size: 14px;
      text-align: center;
    }
    div {
      font-size: 1.2em; /* 14px * 1.2 = 16.8px */
      font-weight: bold;
      padding: 2em;     /* 16.8px * 2 = 33.6px */
      background-color: rgba(255, 0, 0, 0.2);
    }
  </style>
</head>
<body>
  <div>Font size: 1.2em → 14px * 1.2 = 16.8px</div>
</body>
</html>
```

그러나 아래와 같이 자식 요소에 중첩되어 적용되기 때문에 조심히 사용해야 한다.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-size: 14px;
      text-align: center;
    }
    div {
      font-size: 1.2em; /* 14px * 1.2 = 16.8px */
      font-weight: bold;
      padding: 2em;
    }
  </style>
</head>
<body>
  <div class='box1'>
    Font size: 1.2em ⇒ 14px * 1.2 = 16.8px
    <div class='box2'>
      Font size: 1.2em ⇒ 16.8px * 1.2 = 20.16px
      <div class='box3'>
        Font size: 1.2em ⇒ 20.16px * 1.2 = 24.192px
      </div>
    </div>
  </div>
</body>
</html>
```

#### 3. rem

그래서 em과 달리 최상위(root)의 크기를 기준으로 배수 설정하는 것이 rem이다.

위와 같은 예에서 rem을 사용하면 box1~box3의 폰트는 모두 같은 크기를 갖는다.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    html {
      font-size: 14px;
      /* font-size 미지정 시에는 16px */
    }
    div {
      font-size: 1.2rem; /* html font-size: 14px * 1.2 = 16.8px */
      font-weight: bold;
      padding: 2em;
      text-align: center;
    }
    .box1 { background-color: rgba(255, 0, 0, 0.2); }
    .box2 { background-color: rgba(255, 0, 0, 0.6); }
    .box3 { background-color: rgba(255, 0, 0, 0.8); }
  </style>
</head>
<body>
  <div class='box1'>
    Font size: 1.2rem ⇒ 14px * 1.2 = 16.8px
    <div class='box2'>
      Font size: 1.2rem ⇒ 14px * 1.2 = 16.8px
      <div class='box3'>
        Font size: 1.2rem ⇒ 14px * 1.2 = 16.8px
      </div>
    </div>
  </div>
</body>
</html>
```



#### 4. % 

상대적인 크기 단위

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-size: 14px;
      text-align: center;
    }
    div {
      font-size: 120%; /* 14px * 1.2 = 16.8px */
      font-weight: bold;
      padding: 2em;    /* 16.8px * 2 = 33.6px */
      background-color: rgba(255, 0, 0, 0.2);
    }
  </style>
</head>
<body>
  <div>Font size: 14px * 120% → 16.8px</div>
</body>
</html>
```



사용자의 브라우저의 기본 폰트 크기를 변경할 경우 상대적인 크기 단위로 설정할 경우 문제가 생길 수 있기 때문에 사전에 Reset CSS로 폰트 크기를 지정해놓는 것이 좋다.

```css
.container {
  width: 70rem; /* 70rem ⇒ 14px * 70 = 980px */
}
```



### 색상

| 단위                                            | 사용예                 |
| :---------------------------------------------- | :--------------------- |
| HEX 코드 단위 (Hexadecimal Colors)              | #000000                |
| RGB (Red, Green, Blue)                          | rgb(255, 255, 0)       |
| RGBA (Red, Green, Blue, Alpha/투명도)           | rgba(255, 255, 0, 1)   |
| HSL (Hue/색상, Saturation/채도, Lightness/명도) | hsl(0, 100%, 25%)      |
| HSLA (Hue, Saturation, Lightness, Alpha)        | hsla(60, 100%, 50%, 1) |



### 참고

[https://poiemaweb.com/css3-units](https://poiemaweb.com/css3-units)