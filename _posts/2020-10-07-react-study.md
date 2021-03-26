---
title: "리엑트 공부"
layout: post
date: 2020-10-07
categories: Javascript
tags: [Javascript, react]
comment: yes
---

### 1. JSX 기본 규칙

1. HTML 같이 생긴 Javascript

2. 규칙

   + 태그는 꼭 닫혀있어야 한다.
   + 여러개의 태그는 꼭 감싸주어야 한다. 아래와 같이 <>도 가능.

   +  camelCase 형태로 네이밍 해주어야 한다. 아래와 같이 background-color는 backgroundColor로 해야한다.
   + class="" 는 className=""로 해야 한다. 아래와 같이!
   + 주석은 {/* 이런 형태로 */} 으로 작성한다.

   ```
   const style = {
       backgroundColor: 'black',
       color: 'aqua',
       fontSize: 24, // 기본 단위 px
       padding: '1rem' // 다른 단위 사용 시 문자열로 설정
     }
   
     return (
       <>
         {/* 주석은 화면에 보이지 않습니다 */}
         <Hello />
         <Hello 
           // 열리는 태그 내부에서는 이렇게 주석을 작성 할 수 있습니다.
         />
         <div className="gray-box" style={style}>{name}</div>
       </>
     );
   ```

   

### 2. prop과 state의 차이

1. prop

   ```
   static defaultProps = {
       name: "기본이름"
     };
   ```

   prop은 이런 식으로 선언하면..

   ```
   <div>
   	안녕하세요! 제 이름은 <b>{this.props.name}</b>입니다.
   </div>
   ```

   this.props.name으로 사용할 수 있다.

   하지만..

   ```
   MyName.defaultProps = {
     name: "velopert"
   };
   ```

   이렇게 재선언하여도 다시 랜더링되지는 않는다.

2. state

   ```
   state = {
       number: 0
     };
   ```

   state는 이렇게 선언하고

   ```
   handleIncrease = () => {
       this.setState({
         number: this.state.number + 1
       });
     };
   ```

   prop과 달리  setState가 되면 자동적으로 랜더링이 된다.
   
   

### 3. lifecycle api

1. component 안 실행 순서

   + 컴포넌트 실행 시

     constructor ->  componentWillMount -> render -> componentDidMount

   + 컴포넌트 제거 시

     componentWillUnmount 메소드만 실행

   + 컴포넌트의 props 변경시

     componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate

   + 컴포넌트의 state 변경시

     shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate

2. 메소드 역할

   + constructor : init state 선언
   + componentWillMount : render 전 실행되는 함수
   + render : 렌더링 담당
   + componenetDidMount : render 후 실행되는 함수. 다른 api 호출 시 사용.
   + componentWillReceiveProps : 컴포넌트가 props를 새로 받았을 때 실행. 이 안에서 setState해도 자동 렌더링은 되지 않는다.
   + shouldComponentUpdate  : props 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정함.
   + componentWillUpdate : reRender 전 실행되는 함수. 여기서 setState 사용 시 무한 루프에 빠질 수 있음.
   + componentDidUpdate : reRender 후 실행되는 함수





