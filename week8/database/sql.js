import mysql from 'mysql2';

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root',
    database: 'week8',
    password: '1234',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);

const promisePool = pool.promise();

// getEmployee, getDepartment 객체 생성
export const selectSql = {
  // 데이터 select
  getEmployee: async () => {
    const [rows] = await promisePool.query('select * from employee');
    console.log(rows);
    return rows;
  },
  // 데이터 select
  getDepartment: async () => {
    const [rows] = await promisePool.query('select * from department');

    return rows;
  },
};

// setEmployee, setDepartment 객체 생성
export const insertSql = {
  // 데이터 insert
  setEmployee: async data => {
    const sql = `insert into employee values (
      "${data.Fname}", "${data.Minit}", "${data.Lname}", "${data.Ssn}","${data.Bdate}",
      "${data.Address}", "${data.Sex}", "${data.Salary}", "${data.Super_ssn}", "${data.Dno}" )`;

    await promisePool.query(sql);
  },

  //  데이터 insert
  setDepartment: async data => {
    const sql = `insert into department values (
      "${data.Dname}", "${data.Dnumber}", "${data.Mgr_ssn}", "${data.Mgr_start_date}")`;

    await promisePool.query(sql);
  },
};

// updateEmployee, updateDepartment 객체 생성
export const updateSql = {
  // Ssn = 123456789인 열의 salary를 수정
  updateEmployee: async data => {
    const sql = `update employee set salary=${data.Salary} where Ssn=123456789`;
    await promisePool.query(sql);
  },
  // Dnumber = 0 인 열의 Dname 수정
  updateDepartment: async data => {
    const sql = `update department set dname=${data.Dname} where Dnumber = 0`;
    await promisePool.query(sql);
  },
};
