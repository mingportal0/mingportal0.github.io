---
title: "Spring Security 5"
layout: post
date: 2021-05-17
categories: java
tags: [java, spring, security]
comment: yes
---



### 로그인 실패 시 메세지 추가

#### SecurityConfig

`.failureUrl("/login?error=true")`와 `.failureHandler(new CustomLoginFailureHandler())`을 추가한다.

```java
@Override
protected void configure(HttpSecurity http) throws Exception {
    http
        //csrf 토큰 검사 비활성화
        .csrf().disable()
        //acess 제한 허용
        .authorizeRequests()
        //login page는 허용 (안그러면 무한루프에 빠짐)
        .antMatchers("/login")
        .permitAll()
        //saveUser page는 허용
        .antMatchers("/user/saveUser", "/user/saveUserAction")
        .permitAll()
        //그 외 모든 접속은 제한됨
        .anyRequest()
        .authenticated()
        .and()
        //로그인하는 경우에 대해 설정함
        .formLogin()
        //로그인 페이지
        .loginPage("/login")
        .loginProcessingUrl("/loginAction")
        .failureUrl("/login?error=true")
        .usernameParameter("email")
        .passwordParameter("pw")
        .failureHandler(new CustomLoginFailureHandler())
        .successHandler(new CustomLoginSeccessHandler())
        .and()
        .logout()
        .logoutUrl("/logoutAction")
        .logoutSuccessUrl("/login");
}
```



#### CustomLoginFailureHandler

위에서 넣었던 `CustomLoginFailureHandler` 클래스를 생성한다.

```java
public class CustomLoginFailureHandler implements AuthenticationFailureHandler {

	private final String DEFAULT_FAILURE_URL = "/login?error=true";
	
	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
			AuthenticationException exception) throws IOException, ServletException {
		String msg = "";
		
		if(exception instanceof BadCredentialsException) {
			msg = "아이디나 비밀번호가 일치하지 않습니다.";
		}else if(exception instanceof DisabledException) {
			msg = "계정이 비활성화 되었습니다. 관리자에게 문의하세요.";
		}else if(exception instanceof CredentialsExpiredException) {
			msg = "비밀번호의 유효기간이 만료되었습니다. 관리자에게 문의하세요.";
		}else {
			msg = "알 수 없는 이유로 로그인을 실패하였습니다. 관리자에게 문의하세요.";
		}
		
		request.setAttribute("errorMessage", msg);

		request.getRequestDispatcher(DEFAULT_FAILURE_URL).forward(request, response);;
	}
}
```

예외 중 `UsernameNotFoundException`이 있어서 아이디가 일치하지 않을 때 사용해볼까 했지만 Spring Security 기본 설정 상 아이디와 비밀번호가 일치하지 않을 때는 `BadCredentialsException`을 사용하도록 기본 설정되어 있었다. 그래서 `BadCredentialsException`만 사용하였다.



#### login.html

`<div th:if="${param.error}" th:text="${errorMessage}"></div>`을 추가해 error가 있을 때 errorMessage가 출력 되도록 하였다.

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
<meta charset="UTF-8">
<title>Login Page</title>
</head>
<body>
<form action="/loginAction" method="POST">
	<div><p>Login</p></div>
	<div th:if="${param.error}" th:text="${errorMessage}"></div>
	<div><input type="text" id="email" name="email" placeholder="e-mail"/></div>
	<div><input type="password" id="pw" name="pw" placeholder="password"/></div>
	<div><input type="submit" value="sign-in"/></div>
	<div><a href="/user/saveUser">회원가입</a></div>
</form>
</body>
</html>
```



#### 결과

![image-20210517164006864](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210517164006864.png)


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTgxMjk5NzY0Nl19
-->