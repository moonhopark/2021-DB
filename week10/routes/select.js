import express from 'express';
import { selectSql } from '../database/sql';

const router = express.Router();

router.get('/', async function (req, res) {
  // /selectSql에서 department 데이터를 가져옴
  const department = await selectSql.getDepartment();
  const project = await selectSql.getProject();

  // 가져온 데이터를 렌더링해줌
  res.render('select', {
    title: 'IT 공대',
    title2: 'PROJECT',
    department,
    project,
  });
});

module.exports = router;
