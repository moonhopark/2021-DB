# 2021-DB

- 데이터베이스 설계

## 3주차 실습 실행 방법

1. 레포지토리 복사(wsl 환경에서 명령어 입력)

   - (https) https://github.com/moonhopark/2021-DB.git

2. week3 폴더로 이동
   > cd week3
3. 콘솔창(powershell)에서 npm package 설치
   > npm install
4. databases/sql.js에서 본인의 데이터베이스 정보 입력(주석 부분)
<pre>
<code>
const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root', // 본인의 mysql user id
    database: 'dbdesign', // 본인이 만든 데이터베이스 이름
    password: '1234',     // 본인의 mysql password
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);
</code>
</pre>

<br>

## <span style="color:red">3주차 테이블</span>

| 학번     | 이름        | 전공 | 학년 | 이메일               |
| -------- | ----------- | ---- | ---- | -------------------- |
| 12171928 | moonhopark  | stat | 3    | moonho4199@gmail.com |
| 12171929 | minakim     | stat | 2    | mina@naver.com       |
| 12171930 | gildonghong | stat | 1    | gildong@google.com   |

## 텍스트 강조

- **데이터베이스** 실습은 재미 ~~없어요~~있어요.

## 8주차 실습

### 실행 방법은 전주와 동일

### employee table

| Fname | Minit | Lname | Ssn       | Bdate      | Address   | Sex | Salary | Super_ssn | Dno |
| ----- | ----- | ----- | --------- | ---------- | --------- | --- | ------ | --------- | --- |
| 짱구  | A     | 신    | 11112222  | 1998-11-04 | undefined | 남  | 1500   |           | 4   |
| 철수  | M     | 김    | 12345678  | 2000-01-01 | undefined | 남  | 1500   |           | 1   |
| 미선  | B     | 봉    | 22221111  | 1997-10-04 | undefined | 여  | 1600   |           | 5   |
| 영희  | B     | 이    | 234567890 | 2000-01-02 | undefined | 여  | 1100   | 123456789 | 2   |
| 길동  | A     | 홍    | 987654321 | 1999-12-12 | undefined | 남  | 1200   |           | 3   |

### department table

| Dname    | Dnumber | Mgr_ssn   | Mgr_start_date |
| -------- | ------- | --------- | -------------- |
| 영업부   | 1       | 123456789 | 2021-01-01     |
| 개발부서 | 2       | 987654321 | 2021-02-01     |
| 인사부   | 5       | 22221111  | 2020-12-25     |

- /update/employee, /update/department 각 라우팅에 따라서 테이블 업데이트 기능 구현

## 10주차 실습

### 실행 방법은 전주와 동일

### department table

| Dname          | Dnumber |
| -------------- | ------- |
| 전기공학과     | 2       |
| 전자공학과     | 3       |
| 정보통신공학과 | 0       |

### project table

| Pname    | Pnumber |
| -------- | ------- |
| project1 | 1       |
| project2 | 2       |
| project3 | 3       |
| project4 | 4       |
| project5 | 5       |

- 각 테이블 별로 delete 기능 구현
