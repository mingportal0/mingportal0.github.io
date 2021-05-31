---
title: "브라우저별 기능. Vendor Prefix"
layout: post
date: 2021-05-07
categories: css
tags: [css]
comment: yes
---



CSS3 표준으로 확정되기 전에는 브라우저별 개발 중인 기능을 사용하려면 벤더 프리픽스를 사용해야 했다.

| Browser            | Vendor Prefix |
| :----------------- | :------------ |
| IE or Edge         | -ms-          |
| Chrome             | -webkit-      |
| Firefox            | -moz-         |
| Safari             | -webkit-      |
| Opera              | -o-           |
| iOS Safari         | -webkit-      |
| Android Browser    | -webkit-      |
| Chrome for Android | -webkit-      |

```css
* {
  -webkit-user-select: none;  /* Chrome all / Safari all */
  -moz-user-select: none;     /* Firefox all */
  -ms-user-select: none;      /* IE 10+ */
  user-select: none;          /* Likely future */
}
```

위 처럼 사용한다.

그러나 위와 같이 하려면 코드가 불필요하게 길어지기 때문에 Prefix Free 라이브러리를 사용하는 방법이 있다.

```css
<script src="prefixfree.min.js"></script>
```

[프리픽스를 다운](https://projects.verou.me/prefixfree/)받고 위와 같이 라이브러리를 로드하면 벤더 프리픽스 없이 모든 CSS를 사용할 수 있다.



##### 참고

[https://poiemaweb.com/css3-inheritance-cascading][https://poiemaweb.com/css3-inheritance-cascading]

