import express from 'express';
import { selectSql } from '../database/sql';

const router = express.Router();

// get method
router.get('/', (req, res) => {
  res.render('login');
});

// post method
router.post('/', async (req, res) => {
  const vars = req.body;
  const users = await selectSql.getUsers();
  let whoAmI = '';
  let checkLogin = false;

  // 입력한 id와 password가 db에 있는 id와 password에 있는지 map 함수를 사용하여 확인
  users.map(user => {
    console.log(user.Id);
    if (vars.id === user.Id && vars.password === user.Password) {
      console.log('login success!');
      checkLogin = true;
      if (vars.id === 'admin') {
        whoAmI = 'admin';
      } else {
        whoAmI = 'user';
      }
    }
  });

  // 로그인한 사람이 admin이면 delete 페이지로 이동
  // 로그인한 사람이 user면 select 페이지로 이동
  // 로그인 실패한 경우 에러 출력
  if (checkLogin && whoAmI === 'admin') {
    res.redirect('/delete');
  } else if (checkLogin && whoAmI === 'user') {
    res.redirect('/select');
  } else {
    console.log('login failed!');
    res.send("<script>alert('로그인에 실패했습니다.'); location.href='/';</script>");
  }
});

module.exports = router;
