---
title: "Hibernate Entity"
layout: post
date: 2021-04-05
categories: java
tags: [java, spring, hibernate]
comment: yes
---



- id

  ```
  @Id
  	@GeneratedValue(strategy = GenerationType.IDENTITY)
  	private Long id;
  ```

- column

  ```
  @Column(nullable=false, length=40)
  	private String email;
  ```

- date (default sysdate)

  ```
  @Column(nullable=false)
      @Temporal(TemporalType.TIMESTAMP)
      protected Date createStamp = new Date();
  ```

- 기본값

  ```
  @Column(nullable=false, length=1)
  	private int isEnabled = 1;
  ```

  

### 구현

```java
@Entity
public class MUser{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(nullable=false, length=40)
	private String email;
	
	@Column(nullable=false, length=40)
	private String pw;
	
	@Column(nullable=false, length=60)
	private String name;
	
	@Column(nullable=false, length=13)
	private String phone;
	
	@Column(nullable=false, length=1)
	private int isEnabled = 1;
	
	@Column(nullable=false, length=1)
	private int isDeleted = 0;
	
	@Column(nullable=false)
    @Temporal(TemporalType.TIMESTAMP)
    protected Date createStamp = new Date();
	
	@Column(nullable=false)
	@Temporal(TemporalType.TIMESTAMP)
	protected Date modifyStamp = new Date();
	
	@Column(nullable=true, length=40)
	private String modifier;
	
	(constructor...)
	(setter, getter...)
}

```



