---
title: "Hibernate 시작"
layout: post
date: 2021-04-05
categories: java
tags: [java, spring, hibernate]
comment: yes
---



### 의존성 추가

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
```



### Model 만들기

```java
@Entity
public class MDocument {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String name;
	
	public MDocument() {
		
	}
	public MDocument(Long id, String name) {
		super();
		this.id = id;
		this.name = name;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@Override
	public String toString() {
		return "MDocument [id=" + id + ", name=" + name + "]";
	}
}
```



### JpaRepository 상속한 Dao 만들기

JpaRepository를 상속해 만들면 JPA가 알아서 기본적인 CRUD를 만들어준다.

```java
public interface DocDao extends JpaRepository<MDocument, Long>{

}
```



### 컨트롤러 만들기

```java
@Controller
@RequestMapping(value = "/doc")
public class DocController {
	@Autowired
	private DocDao docDao;
	
	@RequestMapping(value = "/saveDocAction")
	@ResponseBody
	public List<MDocument> saveDocAction(MDocument doc){
		System.out.println(doc);
		docDao.save(doc);
		
		return docDao.findAll();
	}
	
	@RequestMapping(value = "/saveDoc")
	public ModelAndView saveDoc() {
		ModelAndView model = new ModelAndView();
		MDocument doc = new MDocument();
		model.addObject("doc", doc);
		model.setViewName("doc/saveDoc");
		return model;
	}
}
```



### 뷰 만들기

```html
<!DOCTYPE html>
<html xmlns:th="http://www.thymeleaf.org">
<head>
<meta charset="UTF-8">
<title>Save Doc</title>
</head>
<body>
<form action="#" th:action="@{/doc/saveDocAction}" th:object="${doc}" method="post">
	<input type="text" th:field="*{name}" placeholder="name"/>
	<input type="submit"/>
</form>
</body>
</html>
```



### 테이블 만들기

![image-20210405141305513](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210405141305513.png)



### 테스트

name 입력하고 제출을 누르면 saveDocAction이 호출되면서 데이터가 들어가야 한다.

![image-20210405140949532](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210405140949532.png)



### 에러 발생

```
java.sql.SQLException: Field 'id' doesn't have a default value
```

id의 기본값을 AUTO_INCREMENT로 바꿔준다.

![image-20210405141325652](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210405141325652.png)



### 다시 테스트

정상적으로 데이터가 입력되었다!

![image-20210405141443954](https://raw.githubusercontent.com/mingportal0/mingportal0.github.io/main/img/image-20210405141443954.png)