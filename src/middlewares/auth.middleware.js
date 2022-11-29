const User = require('../models/User');

const isAuthenticated = async (req, res, next) => {
  try {
    const username = req.headers.username;

    if (!username) {
      res.status(401).send("Connecte toi d'abord");
      return;
    }

    const user = await User.findOne({ username: username });
    if (!user) {
      res.status(401).send("Vérifie l'othographe");
      return;
    }

    req.user = user;

    next();
  } catch (error) {
    res.status(500).send('ERROR auth');
  }
};

module.exports = isAuthenticated;
