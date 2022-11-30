const test = async (req, res) => {
  try {
    res.status(200).json({ valueDuHeader: req.params.username });
  } catch (error) {
    res.status(500).send('Une erreur est survenue');
  }
};

module.exports = {
  test,
};
