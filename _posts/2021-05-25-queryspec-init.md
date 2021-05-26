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

밑에는 자주 쓰이는 것 위주로 정리하였다.



### 1. from, appendClassList

**sql**

```sql
SELECT * FROM WTDocument;
```

다음의 쿼리를 쿼리스펙으로 만든다면 다음과 같다.

**방법 1 - 생성자 활용** 

```java
QuerySpec qs = new QuerySpec(WTDocument.class);
```

**방법 2 - appendClassList**

`addClassList()`도 쓸 수 있지만 `appendClassList()`를 쓰는 것이 좋다.

```java
QuerySpec qs = new QuerySpec();
qs.appendClassList(WTDocument.class, true);
```



위와 같이 두 가지로 만들 수 있지만 쿼리 결과를 활용할 때 차이점이 있다.

**방법 1의 경우 활용** 

```java
QueryResult qr = PersistenceHelper.manager.find(qs);
while(qr.hasMoreElements()){
	WTDocument doc = (WTDocument) qr.nextElement();
}
```

**방법 2의 경우 활용**

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
SELECT A0.* FROM WTDocument A0;
```

보면 `appendClassList`했던 순서에 따라 A0로 alias가 매겨지는 것을 확인할 수 있다.



### 3. alias

위 alias를 활용해 좀 더 복잡한 쿼리를 만들어보자. (아래 `A0.idA3D2iterationInfo`는 creator_id 이다.)

또한 `qs.getFromClause().setAliasPrefix()`를 써서 alias를 직접 지정할 수도 있다.

**sql**

```sql
SELECT * FROM WTDocument B0, WTUser B1
WHERE B0.idA3D2iterationInfo = B1.ida2a2;
```

**QuerySpec**

```java
QuerySpec qs = new QuerySpec();
qs.getFromClause().setAliasPrefix("B");
int doc_idx = qs.appendClassList(WTDocument.class, true);
int user_idx = qs.appendClassList(WTUser.class, true);
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

  inner-join을 할 떄 쓰인다.

  

- ##### SearchCondition(Persistable-class,  columName, 연산자, 피연산자)

  하나의 테이블의 컬럼에 대해 비교할 떄 쓰인다.
  
  ```java
  QuerySpec qs = new QuerySpec();
  int doc_idx = qs.appendClassList(WTDocument.class, true);
  qs.appendWhere(
  		new SearchCondition(
  				WTDocument.class, WTDocument.CREATOR + ".key.id", 
  				SearchCondition.EQUAL, new Long(11)), 
		new int[]{0});
  ```

  **sql**
  
  ```sql
  SELECT A0.* FROM WTDocument A0 
WHERE A0.idA3D2iterationInfo = 11
  ```

  여기서 `A0.idA3D2iterationInfo = 11` 부분임.

  

- ##### SearchCondition(ClassAttribute, 연산자, ClassAttribute)

  ClassAttribute 끼리 연산자로 비교할 때와 Outer-Join을 할 때 쓰인다.

  ```java
  QuerySpec qs = new QuerySpec();
  int doc_idx = qs.appendClassList(WTDocument.class, true);
  int user_idx = qs.appendClassList(WTUser.class, true);
  qs.appendWhere(
  		new SearchCondition(
  				new ClassAttribute(WTDocument.class, WTDocument.CREATOR + ".key.id"), 
  				SearchCondition.NOT_EQUAL, 
  				new ClassAttribute(WTUser.class, WTUser.PERSIST_INFO + ".theObjectIdentifier.id")), 
  		new int[]{doc_idx, user_idx});
  ```

  **sql**

  ```sql
  SELECT A0.*,A1.* FROM WTDocument A0, WTUser A1 
  WHERE A0.idA3D2iterationInfo <> A1.idA2A2
  ```

  여기서 `A0.idA3D2iterationInfo <> A1.idA2A2` 부분임.

  

- ##### SearchCondition(ClassAttribute, 연산자, SubSelectExpression)

  위 ClassAttribute 대신 SubSelectExpression를 써서 하나의 테이블의 컬럼을 서브쿼리 결과와 비교할 때 쓰인다.
  
  ```java
  QuerySpec subQs = new QuerySpec();
  int user_idx = subQs.appendClassList(WTUser.class, false);
  subQs.appendSelect(new ClassAttribute(WTUser.class, WTUser.PERSIST_INFO + ".theObjectIdentifier.id"), true);
  
  QuerySpec qs = new QuerySpec();
  int doc_idx = qs.appendClassList(WTDocument.class, true);
  qs.appendWhere(
  		new SearchCondition(
  				new ClassAttribute(WTDocument.class, WTDocument.CREATOR + ".key.id"), 
  				SearchCondition.IN, new SubSelectExpression(subQs)), 
  		new int[]{0});
  ```

  **sql**
  
  ```sql
  SELECT A0.* FROM WTDocument A0 
  WHERE A0.idA3D2iterationInfo IN (SELECT A0.idA2A2 FROM WTUser A0)
  ```
  
  `A0.idA3D2iterationInfo IN (SELECT A0.idA2A2 FROM WTUser A0)` 부분이고 `SubSelectExpression`을 이용해 서브쿼리를 넣을 수 있다.



### 5. Join

- ##### Inner-Join

  SearchCondition(Persistable-class,  columName, Persistable-class,  columName)

- ##### Outer-Join

  `SearchCondition.LEFT_OUTER_JOIN, SearchCondition.RIGHT_OUTER_JOIN`를 써서 비교한다.

  1. SearchCondition(ClassAttribute, SearchCondition.LEFT_OUTER_JOIN, ClassAttribute)
  
  2. SearchCondition(ClassAttribute, SearchCondition.RIGHT_OUTER_JOIN, ClassAttribute)



### 6. SQLFunction

sql 기본함수 MAX, COUNT, UPPER, DECODE 등을 사용할 떄 쓰인다.

```java
QuerySpec qs = new QuerySpec();
int idxA = qs.appendClassList(WTDocument.class, false);
ClassAttribute name = new ClassAttribute(WTDocument.class, WTDocument.TITLE, "A0");
SQLFunction max = SQLFunction.newSQLFunction("UPPER", name);
qs.appendSelect(max, false);
```

**sql**

```sql
SELECT UPPER(A0.title) FROM WTDocument A0
```



### 7. Sort

sql 에서 Order By를 사용하고 싶을 때 쓰인다.

```java
QuerySpec qs = new QuerySpec();
int idxA = qs.appendClassList(WTDocument.class, true);
qs.appendOrderBy(new OrderBy(new ClassAttribute(WTDocument.class, WTDocument.TITLE), false), new int[] { idxA });
```

**sql**

```sql
SELECT A0.* FROM WTDocument A0 ORDER BY A0.title
```



### 8. Navigate

링크테이블의 role 중 하나로 다른 role를 가져오고 싶을 때 쓰인다.

```java
WTPartMaster master = (WTPartMaster) CommonUtil.getObject("wt.part.WTPartMaster:1182143");
QueryResult qr = PersistenceHelper.manager.navigate(master, "roleA", MasterACLWTUserLink.class);
while(qr.hasMoreElements()){
	WTUser doc = (WTUser) qr.nextElement();
}
```

QueryResult로 받을 때 WTUser로 바로 받을 수 있다.



위 navigate()를 쿼리로 바꾸면 아래와 같이 Inner-Join이 쓰인 쿼리로 볼 수 있다.

**sql**

```sql
SELECT A1.* FROM MasterACLWTUserLink A0, WTUser A1
WHERE A0.ida3a5 = A1.ida2a2
AND A0.ida3b5 = '1182143'
```

