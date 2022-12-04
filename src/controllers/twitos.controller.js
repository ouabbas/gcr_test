const Twito = require('../models/Twito');

const createTwito = async (req, res) => {
  try {
    const { content, isSurvey, answers } = req.body;

    const twito = new Twito();

    twito.content = content;
    twito.isSurvey = isSurvey;
    twito.user = req.user;

    if (isSurvey) {
      twito.answers = answers;
    }

    await twito.save();

    res.status(200).json({
      twito,
    });
  } catch (error) {
    res.status(500).send('Une erreur est survenue');
  }
};

module.exports = {
  createTwito,
};
