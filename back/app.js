const express = require('express');
const db = require('./models');

const app = express();

const postRouter = require('./routes/post');

app.use('/post', postRouter);
db.sequelize.sync().then(() => console.log('sequelize sync'));

app.listen(3065, () => {
  console.log('Server is running');
});
