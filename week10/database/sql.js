import mysql from 'mysql2';

const pool = mysql.createPool(
  process.env.JAWSDB_URL ?? {
    host: 'localhost',
    user: 'root',
    database: 'week10',
    password: '1234',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  }
);

const promisePool = pool.promise();

// select query
export const selectSql = {
  // user table select
  getUsers: async () => {
    const [rows] = await promisePool.query('select * from user');

    return rows;
  },
  // department table select
  getDepartment: async () => {
    const [rows] = await promisePool.query('select * from department');

    return rows;
  },

  getProject: async () => {
    const [rows] = await promisePool.query('select * from project');

    return rows;
  },
};

// delete query
export const deleteSql = {
  // data.Dnumber에 해당하는 Dnumber 데이터 부분을 delete
  deleteDepartment: async data => {
    console.log('deleteSql.deleteDepartment:', data.Dnumber);
    const sql = `delete from department where Dnumber=${data.Dnumber}`;

    await promisePool.query(sql);
  },

  deleteProject: async data => {
    console.log('deleteSql.deleteProject:', data.Pnumber);
    const sql = `delete from project where Pnumber=${data.Pnumber}`;

    await promisePool.query(sql);
  },
};
