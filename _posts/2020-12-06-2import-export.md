---
title: "2. import & export"
layout: post
date: 2020-12-06
categories: javascript
tags: [javascript, react]
comment: yes
---





### Name ๐

```
export const name = 'value';
import { name } from '...';
console.log(name); // 'value'
```



### Default ๐

default๋ฅผ ์จ์ export๋ฅผ ํ๋ฉด ์ด๋ค ์ด๋ฆ์ผ๋ก๋ import๋ฅผ ํ  ์ ์๋ค.

```
export default 'value'

import anyName from '...';
console.log(anyName); // 'value'
```



### 1+2 ๐ค

```
export const name = 'value';
export default 'value'
import anyName, { name } from '...';
```



### Export List ๐ค

**์๋ name1, name2๋ ๊ฐ์ฒด๊ฐ ์๋๋ผ export list์ด๋ค. (์ ์!)**

```
const name1 = 'value1';
const name2 = 'value2';
export {
  name1,
  name2
}
import {
  name1,
  name2
} from '...'
console.log(
  name1, // 'value1'
  name2, // 'value2'
)
```



### Rename Export & Import

```
//export
const name = 'value'
export {
  name as newName ๐ค
}
import { newName } from '...'
console.log(newName); // 'value'
// Original name is not accessible
console.log(name); // โ undefined

//import
const name1 = 'value1';
const name2 = 'value2';
export {
  name1,
  name2 as newName2
}
import {
  name1 as newName1, ๐ค
  newName2
} from '...'
console.log(newName1); // 'value1'
console.log(newName2); // 'value2'
โ
name1; // undefined
name2; // undefined
```



### Import All โ๏ธ

```
export const name = 'value';
export default 'defaultValue';
import * as anyName from '...';
console.log(anyName.name); // 'value'
console.log(anyName.default); // 'defaultValue' ๐ค
```



### ์ฐธ๊ณ 

[https://medium.com/dailyjs/javascript-module-cheatsheet-7bd474f1d829](https://medium.com/dailyjs/javascript-module-cheatsheet-7bd474f1d829)