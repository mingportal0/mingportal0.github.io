---
title: "2. import & export"
layout: post
date: 2020-12-06
categories: javascript
tags: [javascript, react]
comment: yes
---





### Name 😂

```
export const name = 'value';
import { name } from '...';
console.log(name); // 'value'
```



### Default 👏

default를 써서 export를 하면 어떤 이름으로도 import를 할 수 있다.

```
export default 'value'

import anyName from '...';
console.log(anyName); // 'value'
```



### 1+2 🤝

```
export const name = 'value';
export default 'value'
import anyName, { name } from '...';
```



### Export List 🤓

**아래 name1, name2는 객체가 아니라 export list이다. (유의!)**

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
  name as newName 🤓
}
import { newName } from '...'
console.log(newName); // 'value'
// Original name is not accessible
console.log(name); // ❌ undefined

//import
const name1 = 'value1';
const name2 = 'value2';
export {
  name1,
  name2 as newName2
}
import {
  name1 as newName1, 🤓
  newName2
} from '...'
console.log(newName1); // 'value1'
console.log(newName2); // 'value2'
❌
name1; // undefined
name2; // undefined
```



### Import All ☝️

```
export const name = 'value';
export default 'defaultValue';
import * as anyName from '...';
console.log(anyName.name); // 'value'
console.log(anyName.default); // 'defaultValue' 🤓
```



### 참고

[https://medium.com/dailyjs/javascript-module-cheatsheet-7bd474f1d829](https://medium.com/dailyjs/javascript-module-cheatsheet-7bd474f1d829)