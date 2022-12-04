const twitosDto = require('./twitos.dto');
const usersDto = require('./users.dto');

module.exports = {
  ...twitosDto,
  ...usersDto,
};
