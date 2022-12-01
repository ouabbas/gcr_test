require('dotenv').config();

const test = async (req, res) => {
  try {
    res.status(200).json({
      valueDuHeader: req.params.username,
      apikey: process.env.API_KEY,
      BIGBOSS: process.env.BIGBOSS || 'personne',
    });
  } catch (error) {
    res.status(500).send('Une erreur est survenue');
  }
};

module.exports = {
  test,
};
