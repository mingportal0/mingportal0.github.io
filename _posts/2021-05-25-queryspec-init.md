---
title: "QuerySpec 기초"
layout: post
date: 2021-05-25
categories: windchill
tags: [windchill, query]
comment: yes

---



### QuerySpec

객체를 생성 후 사용한다.

```java
QuerySpec qs = new QuerySpec();
```



### 1. from, addClassList

**sql**

```sql
SELECT * FROM WTDocument;
```

다음의 쿼리를 쿼리스펙으로 만든다면 다음과 같다.

**QuerySpec 1**

```java
QuerySpec qs = new QuerySpec(WTDocument.class);
```

**QuerySpec 2**

```java
QuerySpec qs = new QuerySpec();
qs.addClassList(WTDocument.class, true);
```

위와 같이 두 가지로 만들 수 있지만 쿼리 결과를 활용할 때 차이점이 있다.

**QuerySpec 1의 경우 활용** 

```java
QueryResult qr = PersistenceHelper.manager.find(qs);
while(qr.hasMoreElements()){
	WTDocument doc = (WTDocument) qr.nextElement();
}
```

**QuerySpec 2의 경우 활용**

```java
QueryResult qr = PersistenceHelper.manager.find(qs);
while(qr.hasMoreElements()){
	Object[] obj = (Object[]) qr.nextElement();
	WTDocument doc = (WTDocument) obj[0];
}
```



### 2. toString, 실제 쿼리문 보기

QuerySpec은 `toString()`으로 실제 쿼리문을 볼 수 있다.

위 QuerySpec의 toString()은 다음과 같다.

```java
out.print(qs.toString());
```

**sql**

```sql
SELECT A0.* FROM wt.doc.WTDocument A0;
```

보면 `addClassList`했던 순서에 따라 A0로 alias가 매겨지는 것을 확인할 수 있다.



### 3. alias

위 alias를 활용해 좀 더 복잡한 쿼리를 만들어보자. (아래 `A0.idA3D2iterationInfo`는 creator_id 이다.)

**sql**

```sql
SELECT * FROM WTDocument A0, WTUser A1
WHERE A0.idA3D2iterationInfo = A1.ida2a2;
```

**QuerySpec**

```java
QuerySpec qs = new QuerySpec();
int doc_idx = qs.addClassList(WTDocument.class, true);
int user_idx = qs.addClassList(WTUser.class, true);
qs.appendWhere(
		new SearchCondition(
				WTDocument.class, WTDocument.CREATOR + ".key.id", 
				WTUser.class, WTUser.PERSIST_INFO + ".theObjectIdentifier.id"), 
		new int[]{doc_idx, user_idx});
```

`new int[]{doc_idx, user_idx}` 은 `new int[]{0, 1}`로 바꿀 수도 있다.



### 4. SearchCondition

- ##### SearchCondition(Persistable-class,  columName, Persistable-class,  columName)

  위 예시에서 `A0.idA3D2iterationInfo = A1.ida2a2` 부분임.

  inner-join을 만드는 방법.

  

- ##### SearchCondition(Persistable-class,  columName, 연산자, 피연산자)

  ```java
  QuerySpec qs = new QuerySpec();
  int doc_idx = qs.addClassList(WTDocument.class, true);
  qs.appendWhere(
  		new SearchCondition(
  				WTDocument.class, WTDocument.CREATOR + ".key.id", 
  				SearchCondition.EQUAL, new Long(11)), 
  		new int[]{0});
  ```

  **sql**

  ```sql
  SELECT A0.* FROM wt.doc.WTDocument A0 
  WHERE A0.idA3D2iterationInfo = 11
  ```

  

  여기서 `A0.idA3D2iterationInfo = 11` 부분임.

  

- ##### SearchCondition(ClassAttribute, 연산자, ClassAttribute)

  ```java
  QuerySpec qs = new QuerySpec();
  int doc_idx = qs.addClassList(WTDocument.class, true);
  int user_idx = qs.addClassList(WTUser.class, true);
  qs.appendWhere(
  		new SearchCondition(
  				new ClassAttribute(WTDocument.class, WTDocument.CREATOR + ".key.id"), 
  				SearchCondition.NOT_EQUAL, 
  				new ClassAttribute(WTUser.class, WTUser.PERSIST_INFO + ".theObjectIdentifier.id")), 
  		new int[]{doc_idx, user_idx});
  ```

  **sql**

  ```sql
  SELECT A0.*,A1.* FROM wt.doc.WTDocument A0,wt.org.WTUser A1 
  WHERE A0.idA3D2iterationInfo <> A1.idA2A2
  ```

  여기서 `A0.idA3D2iterationInfo <> A1.idA2A2` 부분임.

  

- ##### SearchCondition(ClassAttribute, 연산자, SubSelectExpression)

  ```java
  QuerySpec subQs = new QuerySpec();
  int user_idx = subQs.addClassList(WTUser.class, false);
  subQs.appendSelect(new ClassAttribute(WTUser.class, WTUser.PERSIST_INFO + ".theObjectIdentifier.id"), true);
  
  QuerySpec qs = new QuerySpec();
  int doc_idx = qs.addClassList(WTDocument.class, true);
  qs.appendWhere(
  		new SearchCondition(
  				new ClassAttribute(WTDocument.class, WTDocument.CREATOR + ".key.id"), 
  				SearchCondition.IN, new SubSelectExpression(subQs)), 
  		new int[]{0});
  ```

  **sql**

  ```sql
  SELECT A0.* FROM wt.doc.WTDocument A0 
  WHERE A0.idA3D2iterationInfo IN (SELECT A0.idA2A2 FROM WTUser A0)
  ```

  `A0.idA3D2iterationInfo IN (SELECT A0.idA2A2 FROM WTUser A0)` 부분이고 `SubSelectExpression`을 이용해 서브쿼리를 넣을 수 있다.



### 5. Join

- ##### Inner-Join

  SearchCondition(Persistable-class,  columName, Persistable-class,  columName)

- ##### Outer-Join

  1. SearchCondition(ClassAttribute, SearchCondition.LEFT_OUTER_JOIN, ClassAttribute)

  2. SearchCondition(ClassAttribute, SearchCondition.RIGHT_OUTER_JOIN, ClassAttribute)

