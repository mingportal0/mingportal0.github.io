---
title: "Spring 어노테이션"
layout: post
date: 2021-05-17
categories: java
tags: [java, spring]
comment: yes
---

### ajax

ajax의 요청 대부분은 JSON으로 되어 있고 컨트롤러에서는 자바 객체로 응답해주는 형식을 취한다.  스프링에서는 이와 관련된 @MVC 관련 어노테이션을 통해 기능을 제공하고 있다.

#### @RequestBody

이 어노테이션이 메소드 파람에 붙으면 HTTP 요청 Body를 자바 객체로 전달받을 수 있다. 주의할 것은 Get 방식에서는 URL을 통해 파람을 전달받을 수 있다는 점이다.

#### @ResponseBody

이 어노테이션이 메소드 상단에 붙으면 메소드가 리턴하는 오브젝트는 뷰를 통해 경과를 만들어내는 모델이 아닌 메세지 컨버터를 통해 HTTP 응답 Body가 된다.

### @RequestParam

private ModelAndView methodTest(@RequestParam("id") int id){  
 System.out.println("id==" + id);  
...

위와 같이 넘어오는 파람을 받을 수 있다. 그러나 해당 파람을 지정하지 않았을 경우 400 에러가 발생하게 된다.

private ModelAndView methodTest(@RequestParam(value="id", required=false, defaultValue="0" ) int id){  
 System.out.println("id==" + id);  
...

그래서 `required=false, defaultValue="0"`로 기본값을 지정해 이를 방지할 수 있다.

하지만 파람이 많아지면 코드가 불필요하게 많아진다.

private ModelAndView methodTest(@RequestParam Map<String, Object> reqMap){  
 int id = (int) reqMap.get("id");  
...

`@RequestParam Map<String, Object> reqMap` 처럼 Map으로 파라미터를 받을 수 있다.

### @ModelAttribute

@Data  
public class Member{  
 private int seq;  
 private String name;  
 private int age;  
}

이렇게 세터, 게터를 만든 빈 클래스가 있다고 가정한다.

아래 처럼 컨트롤러를 만들고

private ModelAndView methodTest(@ModelAttribute("m") Member m){  
 try{  
 Member member = MemberService.service.getMember(m);  
 model.addAttribute("result", member);  
 }  
...

m.jsp가 다름과 같다면.

<tr>  
 <th>Seq</th>  
 <td><input name="seq" value="${m.seq}"</td>  
</tr>  
 <th>Name</th>  
 <td><input name="name" value="${m.name}"</td>  
</tr>  
 <th>Age</th>  
 <td><input name="age" value="${m.age}"</td>  
</tr>

결과는 이렇게 나온다.

![image-20210517130806343](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210517130806343.png)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1MjUwMzM5MF19
-->