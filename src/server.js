const express = require('express');
const isAuthenticated = require('./middlewares/auth.middleware');
const dto = require('./dtos/twitos.dto');
const controllers = require('./controllers/twitos.controller');
require('./database/index');

const app = express();
app.use(express.json());

app.get('/test/:id', isAuthenticated, controllers.test);

app.get('/', isAuthenticated, controllers.test);

app.put('/', isAuthenticated, controllers.test);
app.patch('/', isAuthenticated, controllers.test);

app.delete('/', isAuthenticated, controllers.test);

app.post('/', isAuthenticated, controllers.test);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
