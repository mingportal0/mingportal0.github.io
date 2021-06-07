---
title: "Heap, Stack 메모리"
layout: post
date: 2021-06-07
categories: java
tags: [java]
comment: yes
---



Java로 코딩을 하다보면 아래와 같은 에러를 보게된다.

> java.lang.OutOfMemoryError
>
> java.lang.StackOverflowError

- OutOfMemoryError : 너무 많이 인스턴스 객체를 생성했을 때 Heap 메모리 공간이 부족해서 일어나는 에러이며 

- StackOverflowError : 너무 많이 메소드를 호출했을 때 Stack 메모리 공간이 부족해서 일어나는 에러이다.

그렇다면 Heap, Stack 메모리는 무엇인가.



### Java 메모리 구조

Java 메모리 구조는 다음과 같다. 

- Stack 메모리 : 메소드가 호출되면 Stack 메모리 내 Stack 프레임에 쌓이고 메소드가 종료되면 삭제된다.
- Heap 메모리 : 인스턴스가 생성되는 공간.

![image-20210607170655957](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210607170655957.png)

아래의 예제를 보자.

```java
class Dog {
    private String name;
    public Dog (String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
}
public class Main {
    public static void main(String[] args) {
        int x = 10;
        int[] y = {2, 3, 4};
        Dog dog1 = new Dog("강아지1");
        Dog dog2 = new Dog("강아지2");
        // 함수 실행
        foo(x, y, dog1, dog2);
        // 어떤 결과가 출력될 것 같은지 혹은 값이 어떻게 변할지 예상해보세요!
        System.out.println("x = " + x);
        System.out.println("y = " + y[0]);
        System.out.println("dog1.name = " + dog1.getName());
        System.out.println("dog2.name = " + dog2.getName());
    }
    public static void foo(int x, int[] y, Dog dog1, Dog dog2) {
        x++;
        y[0]++;
        dog1 = new Dog("이름 바뀐 강아지1");
        dog2.setName("이름 바뀐 강아지2");
    }
}
```

결과는 다음과 같다.

1. x = 10
2. y = 3
3. dog1.name = 강아지1
4. dog2.name = 이름 바뀐 강아지2



왜 이렇까 알아보면 다음과 같다.

#### 1. 변수의 할당

- Stack 영역에 다음과 같은 순서로 변수가 할당된다.

  1. x : 10
  2. y : y 배열 객체 주소1
  3. dog1 : Dog 객체 주소1
  4. dog2 : Dog 객체 주소2

  x는 원시 변수이기 때문에 값이 그대로 들어간다.

- Heap 영역에 객체의 값이 들어간다.

  - y : y[0] 객체 주소, y[1] 객체 주소, y[2] 객체 주소
  - y[0] : 2
  - y[1] : 3
  - y[2] : 4
  - Dog : 강아지1
  - Dog : 강아지2

#### 2. foo 함수 호출 및 실행 - x

x 값을 11로 증가시키는 것은 Stack 영역에서 새로운 x의 값이 선언되는 것이다. 따라서 Stack 영역에 새로운 값이 입력된다.

- Stack 영역
  1. x : 10
  2. y : y 배열 객체 주소1
  3. dog1 : Dog 객체 주소1
  4. dog2 : Dog 객체 주소2
  5. x : 11

#### 3. foo 함수 호출 및 실행 - y[0]

y[0]의 값을 증가시키는 것은 앞선 상황과 많이 다른데 Stack 영역의 y가 참조하고 있는 Heap 영역의 y[0]의 값을 증가시키기 때문이다. 그래서 foo함수로 인해 배열의 값은 증가되게 된다. 또한 Stack 영역에 새로운 값이 입력된다.

- Stack 영역
  1. x : 10
  2. y : y 배열 객체 주소1
  3. dog1 : Dog 객체 주소1
  4. dog2 : Dog 객체 주소2
  5. x : 11
  6. y : y 배열 객체 주소1

#### 4. foo 함수 호출 및 실행 - dog1

dog1을 새로 생성하고 있기 때문에 Stack 영역에서 dog1이 이전과 새로운 값으로 입력되게 된다. 그리고 Heap 영역에 새로운 Dog이 생기게 된다. 따라서 foo 함수가 종료되면 기존 dog1은 아무 변화가 없게 된다.

- Stack 영역
  1. x : 10
  2. y : y 배열 객체 주소1
  3. dog1 : Dog 객체 주소1
  4. dog2 : Dog 객체 주소2
  5. x : 11
  6. y : y 배열 객체 주소1
  7. dog1 : Dog 객체 주소3
- Heap 영역
  - y : y[0] 객체 주소, y[1] 객체 주소, y[2] 객체 주소
  - y[0] : 2
  - y[1] : 3
  - y[2] : 4
  - Dog : 강아지1
  - Dog : 강아지2
  - Dog : 이름 바뀐 강아지1



#### 5. foo 함수 호출 및 실행 - dog2

마지막으로 dog2의 set 메소드는 기존의 dog2주소를 통해 Heap 영역에 접근해 값을 변화시키는 것이다. 따라서 foo 함수가 종료되면 dog2의 이름이 변화하게 된다.



- Stack 영역
  1. x : 10
  2. y : y 배열 객체 주소1
  3. dog1 : Dog 객체 주소1
  4. dog2 : Dog 객체 주소2
  5. x : 11
  6. y : y 배열 객체 주소1
  7. dog1 : Dog 객체 주소3
  8. dog2 : Dog 객체 주소2
- Heap 영역
  - y : y[0] 객체 주소, y[1] 객체 주소, y[2] 객체 주소
  - y[0] : 2
  - y[1] : 3
  - y[2] : 4
  - Dog : 강아지1
  - Dog : 이름 바뀐 강아지2
  - Dog : 이름 바뀐 강아지1



### 참고

[https://stage-diary.tistory.com/136](https://stage-diary.tistory.com/136)

[https://mangkyu.tistory.com/106](https://mangkyu.tistory.com/106)

