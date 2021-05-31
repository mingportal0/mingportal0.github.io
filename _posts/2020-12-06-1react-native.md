---
title: "1. react-native란"
layout: post
date: 2020-12-06
categories: javascript
tags: [javascript, react]
comment: yes
---



### React-Native란?

+ [React](https://reactjs.org/) 와 앱 플랫폼의 기본 기능을 사용하여 Android 및 iOS 애플리케이션을 빌드하기위한 오픈 소스 프레임 워크

  ![뷰라는 원자 적 요소를 기반으로 구축 된 Android 및 iOS 앱의 다이어그램.](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/diagram_ios-android-views.svg)



### 표기법

+ camelCase
+ PascalCase
+ snake_case
+ kebab-case



### JSX 어트리뷰트는 hypen-case(kebab-case)로 작성해야 한다.



### 핵심 구성 요소

| 네이티브 UI 구성 요소 반응 | 웹 아날로그             | 기술                                                         |
| :------------------------- | :---------------------- | :----------------------------------------------------------- |
| `<View>`                   | 스크롤하지 않는 `<div>` | 플렉스 박스, 스타일, 일부 터치 처리 및 접근성 컨트롤이있는 레이아웃을 지원하는 컨테이너 |
| `<Text>`                   | `<p>`                   | 텍스트 문자열을 표시, 스타일 및 중첩하고 터치 이벤트도 처리합니다. |
| `<Image>`                  | `<img>`                 | 다양한 유형의 이미지를 표시합니다.                           |
| `<ScrollView>`             | `<div>`                 | 여러 구성 요소 및보기를 포함 할 수있는 일반 스크롤 컨테이너  |
| `<TextInput>`              | `<input type="text">`   | 사용자가 텍스트를 입력 할 수 있습니다.                       |



### 예제

```react-native
import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
}

export default App;
```



### 참고

[https://reactnative.dev/docs/getting-started](https://reactnative.dev/docs/getting-started)

