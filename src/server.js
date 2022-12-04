const express = require('express');
const event = require('events');
// const isAuthenticated = require('./middlewares/auth.middleware');
// const dtos = require('./dtos');
// const controllers = require('./controllers');

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('OK BG !'));

app.listen(process.env.PORT || 3000, () => {
  console.log('Server running on port 3000');
});
