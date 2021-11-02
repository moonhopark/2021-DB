import express from 'express';
import { selectSql, deleteSql } from '../database/sql';

const router = express.Router();

router.get('/', async (req, res) => {
  // department 데이터 가져옴
  const department = await selectSql.getDepartment();
  const project = await selectSql.getProject();

  // department table 렌더링
  res.render('delete', {
    title: '삭제 기능',
    title2: 'project 삭제',
    department,
    project,
  });
});

router.post('/department', async (req, res) => {
  // body 출력
  console.log('delete router:', req.body.del_department_Btn);

  // 넘겨받은 del_department_Btn을 data 객체 속 Dnumber로 선언
  const data = {
    Dnumber: req.body.del_department_Btn,
  };

  // data를 인자로 넘겨주면서 deleteSql.deleteDepartment 함수 실행
  await deleteSql.deleteDepartment(data);

  // /delete로 redirect
  res.redirect('/delete');
});

router.post('/project', async (req, res) => {
  // body 출력
  console.log('project router:', req.body.del_project_Btn);

  // 넘겨받은 delBtn을 data 객체 속 Dnumber로 선언
  const data = {
    Pnumber: req.body.del_project_Btn,
  };

  // data를 인자로 넘겨주면서 deleteSql.deleteProject 함수 실행
  await deleteSql.deleteProject(data);

  // /delete로 redirect
  res.redirect('/delete');
});

module.exports = router;
