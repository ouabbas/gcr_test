const ObjectId = require('mongoose').Types.ObjectId;

const createTwitoDto = (req, res, next) => {
  try {
    const { content, answers, isSurvey } = req.body;

    if (!content?.length) {
      res.status(400).send('Twito content required');
      return;
    }
    if (content?.length > 250) {
      res.status(400).send('Twito content length max 250');
      return;
    }

    if (isSurvey) {
      if (answers?.length === 2) {
        res
          .status(400)
          .send('Twito survey answers length has to be equal to 2');
        return;
      }
    }

    next();
  } catch (error) {
    res.status(500).send('ERROR');
  }
};

const patchTwitoDto = (req, res, next) => {
  try {
    const { id } = req.params;
    const { content } = req.body;

    if (!ObjectId.isValid(id)) {
      res.status(400).send('Twito id incorrect');
      return;
    }

    if (!content?.length) {
      res.status(400).send('Twito content required');
      return;
    }
    if (content?.length > 250) {
      res.status(400).send('Twito content length max 250');
      return;
    }

    next();
  } catch (error) {
    res.status(500).send('Une erreur est survenue');
  }
};

module.exports = {
  createTwitoDto,
  patchTwitoDto,
};
