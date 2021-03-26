---
title: "오라클 DB 연습 문제"
layout: post
date: 2019-09-15
categories: db
tags: [oracle, database]
comment: yes
---

### EMP 테이블에서 부서 인원이 4명보다 많은 부서의 부서 번호, 인원수, 급여의 합을 출력하라
- 방법1.
- TO_CHAR 활용
```
SELECT deptno,
       COUNT(*) deptnum,
       TO_CHAR(SUM(sal),'999,999,999,999') sal
FROM emp
GROUP BY deptno
HAVING COUNT(*) >4;
```
- 방법2.
- REGEXP 활용
```
SELECT deptno,
       COUNT(*) deptnum,
       REGEXP_REPLACE(REVERSE(REGEXP_REPLACE( REVERSE(TO_CHAR(SUM(sal))), '([0-9]{3})','\1,')), '^,','') sal
FROM emp
GROUP BY deptno
HAVING COUNT(*) >4;
```
### EMP테이블에서 가장 많은 사원이 속해 있는 부서번호와 사원수를 출력하라
- 방법1.
- ROWNUM으로 첫번재 행만 검색
```
SELECT *
FROM(
    SELECT deptno,
           COUNT(*) deptnum
    FROM emp
    GROUP BY deptno
    ORDER BY deptnum DESC
)
WHERE ROWNUM = 1;
```
- 방법2.
- 서브쿼리로 조건에 맞는 행 검색
```
SELECT *
FROM(
    SELECT deptno,
           COUNT(*) deptnum
    FROM emp
    GROUP BY deptno
    )
WHERE deptnum = (
    SELECT max(deptnum)
    FROM (SELECT deptno,
               COUNT(*) deptnum
        FROM emp
        GROUP BY deptno)
);
```
### EMP테이블에서 사원번호가 7369인 사원의 직업과 같고 사원번호가 7900 사원의 급여보다 많은 사원의 사원번호, 이름, 직업, 급여를 출력하라.
```
SELECT empno, 
      ename,
      job,
      sal
FROM emp
WHERE job = (
    SELECT job
    FROM emp
    WHERE empno = 7369
)
AND sal > (
    SELECT sal
    FROM emp
    WHERE empno = 7900
);
```
### EMP테이블에서 직급별로 최소 급여를 받는 사원의 정보를 사원번호, 이름, 업무, 부서명을 출력하라
```
SELECT empno, ename, job, sal
FROM emp
WHERE sal IN (
SELECT MIN(sal) 
FROM emp
GROUP BY job
);
```
### 부서별 평균 급여가 2000이상이면 초과, 그렇지 않으면 미만을 출력하라.
```
SELECT d.dname, CASE
                     WHEN NVL(AVG(sal),0)>=2000 THEN '초과'
                     ELSE '미만'
                END sal
FROM emp e JOIN dept d
ON e.deptno = d.deptno
GROUP BY d.dname;
```
### 각 사원 별 시급을 계산하여 부서번호, 사원이름, 시급을 출력하라
- 조건1.한달 근무일수는 20일, 하루 근무시간을 8시간이다
- 조건2.시급은 소수 두 번째 자리에서 반올림한다
- 조건3.부서별로 오름차순 정렬
- 조건4.시급이 많은 순으로 출력
```
SELECT deptno 부서번호,
       ename 사원이름,
       TO_CHAR(ROUND(sal/160,2),'$999,999.99') 시급
FROM emp
ORDER BY deptno, sal desc;
```
### 현재 시간과 현재 시간으로부터 한 시간 후의 시간을 출력하라.
```
SELECT TO_CHAR(SYSDATE,'yyyy-MM-dd hh24:mi:ss') 현재시간,
       TO_CHAR(SYSDATE+1/24,'yyyy-MM-dd hh24:mi:ss') 한시간후
FROM dual;
```
### 각 부서별 사원수를 출력하라
- 조건1. 부서별 사원수가 없더라도 부서번호, 부서명은 출력
- 조건2. 부서별 사원수가 0인 경우 '없음' 출력
- 조건3. 부서번호 오름차순 정렬
```
SELECT d.deptno 부서번호, 
       d.dname 부서명, 
       DECODE(COUNT(*),0,'없음',COUNT(*)) 사원수
FROM emp e JOIN dept d
ON e.deptno = d.deptno
GROUP BY d.deptno, d.dname;
```
### 본인의 매니저 보다 많은 급여를 받는 사원의 사원번호, 사원명, 매니저번호, 매니저명을 출력하라
```
SELECT e1.empno 사원번호,
       e1.ename 사원명,
       e1.mgr 매니저번호,
       e2.ename 매니저명
FROM emp e1 JOIN emp e2
ON e1.mgr = e2.empno
WHERE e1.sal > e2.sal;
```
### 사원의 첫 글자가 ‘A’이고, 처음과 끝 사이에 ‘LL’이 들어가는 사원의 커미션이 COMM2일때, 모든 사원의 커미션에 COMM2를 더한 결과를 사원명, COMM, COMM2, COMM+COMM2로 출력하라.
```
SELECT e1.ename 사원명,
       NVL(e1.comm,0) comm,
       (SELECT e2.comm
FROM emp e2
WHERE e2.ename LIKE 'A%LL%_') comm2,
       NVL(e1.comm,0)+NVL((SELECT e2.comm
FROM emp e2
WHERE e2.ename LIKE 'A%LL%_'),0) "COMM+COMM2"
FROM emp e1;
```
### 부서별로 1981년 5월 31일 이후 입사자의 부서번호, 부서명, 사원번호, 사원명, 입사일을 출력하시오.
- 조건1. 부서별 사원정보가 없더라도 부서번호, 부서명은 출력
- 조건2. 부서번호 오름차순 정렬
- 조건3. 입사일 오름차순 정렬
```
SELECT e1.deptno,
       d1.dname,
       e1.ename,
       e1.hiredate
FROM emp e1 JOIN dept d1
ON e1.deptno = d1.deptno
WHERE e1.hiredate > '1981/05/31'
ORDER BY e1.deptno, e1.hiredate;
```
### 입사일로부터 지금까지 근무년수가 38년 이상인 사원의 사원번호, 사원명, 입사일, 근무년수를 출력하라.
- 조건1. 근무년수는 월을 기준으로 버림
```
SELECT e.deptno 사원번호,
       e.ename 사원명,
       e.hiredate 입사일,
       FLOOR(MONTHS_BETWEEN(SYSDATE,e.hiredate))/12 근무년수
FROM emp e
WHERE FLOOR(MONTHS_BETWEEN(SYSDATE,e.hiredate))/12>=38;
```
