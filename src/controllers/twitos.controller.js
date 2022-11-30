const test = async (req, res) => {
  try {
    res.status(200).json({ valueDuHeader: req.headers.username });
  } catch (error) {
    res.status(500).send('Une erreur est survenue');
  }
};

module.exports = {
  test,
};
