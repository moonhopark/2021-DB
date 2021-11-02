import express from 'express';
import logger from 'morgan';
import path from 'path';

import loginRouter from '../routes/login';
import selectRouter from '../routes/select';
import deleteRouter from '../routes/delete';

const PORT = 4000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));

// router 설정
app.use('/', loginRouter);
app.use('/select', selectRouter);
app.use('/delete', deleteRouter);

// app 실행
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhos:${PORT}`);
});
