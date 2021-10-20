import express from 'express';
import { insertSql } from '../database/sql';

const router = express.Router();

// get method
router.get('/', (req, res) => {
  res.render('home');
});

// post method
router.post('/', (req, res) => {
  // req.body를 상수로 선언
  const vars = req.body;
  const var_length = Object.keys(req.body).length;

  // employee를 수정할 때
  if (var_length > 4) {
    const data = {
      Fname: vars.fname,
      Minit: vars.minit,
      Lname: vars.lname,
      Ssn: vars.ssn,
      Bdate: vars.bdate,
      Address: vars.address,
      Sex: vars.sex,
      Salary: vars.salary,
      Super_ssn: vars.super_ssn,
      Dno: vars.dno,
    };

    insertSql.setEmployee(data);
  } else {
    // department
    const data = {
      Dname: vars.dname,
      Dnumber: vars.dnumber,
      Mgr_ssn: vars.mgr_ssn,
      Mgr_start_date: vars.mgr_start_date,
    };

    insertSql.setDepartment(data);
  }

  res.redirect('/');
});

module.exports = router;
