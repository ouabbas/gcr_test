const ObjectId = require('mongoose').Types.ObjectId;

const signupDto = (req, res, next) => {
  try {
    const { username } = req.body;

    if (!username?.length) {
      res.status(400).send('Username required');
      return;
    }
    if (!username?.length > 100) {
      res.status(400).send('Username length max 100');
      return;
    }

    next();
  } catch (error) {
    res.status(500).send('ERROR');
  }
};

const patchUserDto = (req, res, next) => {
  try {
    const { id } = req.params;
    const { username } = req.body;

    if (!ObjectId.isValid(id)) {
      res.status(400).send('UserId incorrect');
      return;
    }
    if (username) {
      if (!username?.length) {
        res.status(400).send('Username required');
        return;
      }
      if (!username?.length > 100) {
        res.status(400).send('Username length max 100');
        return;
      }
    }

    next();
  } catch (error) {
    res.status(500).send('Une erreur est survenue');
  }
};

module.exports = {
  signupDto,
  patchUserDto,
};
