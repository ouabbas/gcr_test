const User = require('../models/User');

const createUser = async (req, res) => {
  try {
    const { username } = req.body;

    const user = new User();
    user.username = username;
    await user.save();

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).send('Une erreur est survenue');
  }
};

const patchUser = async (req, res) => {
  try {
    const { username } = req.body;
    const user = req.body;

    user.username = username ?? user.username;
    await user.save();

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).send('Une erreur est survenue');
  }
};

module.exports = {
  createUser,
  patchUser,
};
