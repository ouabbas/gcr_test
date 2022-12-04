const twitosController = require('./twitos.controller');
const usersController = require('./users.controller');

module.exports = {
  ...twitosController,
  ...usersController,
};
