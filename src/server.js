const express = require('express');
require('dotenv').config();
// const isAuthenticated = require('./middlewares/auth.middleware');
// const dtos = require('./dtos');
// const controllers = require('./controllers');

const app = express();
app.use(express.json());

app.get('/', (_, res) =>
  res.status(200).send(`OK BG :) -> ${process.env.BIGBOSS ?? 'NADA'}`)
);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port 3000');
});
