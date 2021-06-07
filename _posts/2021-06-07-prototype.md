---
title: "proto type, 프로토 타입"
layout: post
date: 2021-06-07
categories: javascript
tags: [javascript]
comment: yes
---



Javascript는 Java와 같이 class라는 개념은 없지만 프로토타입이라는 개념이 있다. 이 프로토타입을 이용해 새로운 객체를 만들고 이를 통해 OOP를 구현한다.



### 내부구조

![image-20210607160452142](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210607160452142.png)

```javascript
function Person(){}

var joon = new Person();
var jisoo = new Person();

Person.prototype.getType = function(){
    return "인간";
}

console.log(joon.getType()); //인간
console.log(jisoo.getType()); //인간
```

- Person 함수는 new라는 연산자와 함께 쓰이면서 Person 프로토타입 객체를 참조하게 된다.
- Person 함수 내 prototype 속성은 Person 프로토타입 객체를 참조하고 Person 프로토타입 객체 내 constructor 속성은 Person 함수를 참조한다.
- joon, jisoo 모두 Person 프로토타입 객체를 참조한다.
- Person 프로토타입 객체 내 속성을 추가하려면 Person 함수의 prototype을 통해 접근하여 추가할 수 있다. 이때 joon, jisoo 모두 Person 프로토타입 객체를 참조하기 때문에 접근가능하다.



그래서 jisoo의 속성만 추가하면 joon에는 추가되지 않는다.

```javascript
jisoo.age = 25;
console.log(joon.age); //undefined
console.log(jisoo.age); //25
```



### 프로토타입

위의 그림과 같이 Person 프로토타입 객체로 만든 jisoo 객체 내 `_proto_ `과 같은 속성이 있다.

이 속성은 자신을 만들어낸 원형인 프로토타입 객체를 참조하는 숨겨진 링크가 있다. 이 링크를 프로토타입이라고 한다.



### 상속 방법

프로토타입을 이용해 Java의 상속과 같이 만드는 방법에 대해 알아보자.

1~4번은 classical 방식이고 5번은 prototypal 방식이다.

#### 1. 프로토타입 지정하기

```javascript
function Person(type){
    this.type = type || "사람";
}
Person.prototype.getType = function(){
    return this.type;
}
function Korean(type){}
Korean.prototype = new Person();

var kor1 = new Korean();
console.log(kor1.getType()); // 사람

var kor2 = new Korean("한국인");
console.log(kor2.getType()); // 사람
```

위와 같이 `kor2.getName()`가 사람으로 나오는 문제가 있다. 위 코드를 그림으로 표현해보면 아래와 같은데..

![image-20210607161314393](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210607161314393.png)

Korean 함수의 prototype을 `new Person()`으로 정의했기 때문에 kor1, kor2 객체는 모두 프로토타입이 Person 프로토타입 객체로 지정되어 있다. 또한 Korean 함수는 name 속성이 없기 때문에 한국인이 나오지 않고 사람이라고 출력되었다.



#### 2. 생성자 빌려쓰기

위 문제를 해결하기 위해 부모 함수의 this에 자식 객체를 바인딩하는 방법을 쓴다.

```javascript
function Person(type){
    this.type = type || "사람";
}
Person.prototype.getType = function(){
    return this.type;
}
function Korean(type){
    Person.apply(this, arguments);
}

var kor1 = new Korean("한국인");
console.log(kor1.type); //한국인
```

![image-20210607161305797](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210607161305797.png)

Korean 함수 내 apply를 사용해 Person 대신 Korean을 넘겨줌으로써 `new Person()` 시 Person 함수가 호출되도록 하였다. 그래서 객체를 생성할 때 한국인이 출력되는 것을 볼 수 있다.

하지만 이 방법은 Korean 프로토타입 객체의 멤버들만 물려받게 되기 때문에 부모인 Person 프로토타입 객체의 멤버인 `getType()`을 사용하지 못한다.



#### 3. 생성자 빌려쓰고 프로토타입 지정해주기

위 문제를 해결하기 위해 생성자와 프로토타입 모두 부모의 것을 사용하는 방법이 있다. 이는 Java의 상속과 비슷하게 동작한다.

```javascript
function Person(type){
    this.type = type || "사람";
}
Person.prototype.getType = function(){
    return this.type;
}
function Korean(type){
    Person.apply(this, arguments);
}
Korean.prototype = new Person();

var kor1 = new Korean("한국인");
console.log(kor1.getType()); //한국인
```

![image-20210607161258029](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210607161258029.png)

Korean 함수의 prototype과 Korean 프로토타입 객체의 생성자를 Person 함수로 지정하였다. 그래서 Korean의 객체인 kor1은 `name`과 `getName()` 모두 사용할 수 있다.

하지만 이 방법에도 문제가 있는데 name에 대해 부모 생성자와 자식 생성자에서 두번 호출한다.



#### 4. 프로토타입 공유

이 방법은 부모 생성자를 한번도 호출하지 않고 프로토타입 객체를 공유한다.

```javascript
function Person(type){
    this.type = type || "사람";
}
Person.prototype.getType = function(){
    return this.type;
}
function Korean(type){
    this.type = type;
}
Korean.prototype = Person.prototype;

var kor1 = new Korean("한국인");
console.log(kor1.getType()); // 한국인
```

![image-20210607162811302](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210607162811302.png)



#### 5. prototypal한 방식

이 방식은 `Object.create()`를 사용해 객체 생성과 동시에 프로토타입 객체를 생성하고 부모 객체의 속성을 모두 물려받을 수 있다.

```javascript
var person = {
  type: "사람",
  getType: function(){
    return this.type;
  }
}

var kor1 = Object.create(person);
kor1.type = "한국인";
console.log(kor1.getType()); // 한국인
```

1줄을 보면 `person`을 객체 리터럴 이용 방식으로 생성하였다

`person`은 `Object.create()`에 사용됨으로써 객체와 프로토타입 객체를 함께 생성하였고 부모 객체의 속성 또한 물려받았다.

이 방식을 사용하면 1~4 방법의 문제점을 생각할 필요 없이 간단하게 부모 객체를 상속받은 자식 객체를 만들 수 있다.





### 참고

[https://www.nextree.co.kr/p7323/](https://www.nextree.co.kr/p7323/)

