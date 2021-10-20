import express from 'express';
import { selectSql } from '../database/sql';

const router = express.Router();

router.get('/', async function (req, res) {
  // /select에서 employee와 department 데이터를 가져옴
  const employee = await selectSql.getEmployee();
  const department = await selectSql.getDepartment();

  // 가져온 데이터를 렌더링해줌
  res.render('select', {
    title: '직원 테이블',
    title2: '부서 테이블',
    employee,
    department,
  });
});

module.exports = router;
