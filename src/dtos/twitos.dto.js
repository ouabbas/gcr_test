const dtoGetUserTodolist = (req, res, next) => {
  try {
    const user = req.params.user;

    if (!user?.length) {
      res.status(400).send('User name has to be grander than 0');
      return;
    }
    next();
  } catch (error) {
    res.status(500).send('ERROR');
  }
};

const dtoCreateUserTodolist = (req, res, next) => {
  try {
    const user = req.body.user;

    if (!user) {
      res.status(400).send('Username missing');
      return;
    }

    next();
  } catch (error) {
    res.status(500).send('Une erreur est survenue');
  }
};

const dtoPatchUserTodolist = (req, res, next) => {
  try {
    const user = req.params.user;
    const data = req.body.todos;

    if (!user?.length) {
      res.status(400).send("User can't be empty");
      return;
    }

    if (!data?.length) {
      res.status(400).send("Todos can't be empty");
      return;
    }

    next();
  } catch (error) {
    res.status(500).send('EROOR');
  }
};

const dtoDeleteUserTodolist = (req, res, next) => {
  try {
    const user = req.params.user;

    if (!user?.length) {
      res.status(400).send('User have not to be empty');
      return;
    }

    next();
  } catch (error) {
    res.status(500).send('ERROR');
  }
};

const dtoDeleteUserTodolistTask = (req, res, next) => {
  try {
    const { user, index } = req.params;

    if (!user?.length) {
      res.status(400).send("Envoie un nom d'utilisateur non vide !");
      return;
    }

    if (!parseInt(index) || parseInt(index) <= -1) {
      res.status(400).send('Envoie un index supérieur ou égal à 0');
      return;
    }

    next();
  } catch (error) {
    res.status(500).send('Une erreur est survenue');
  }
};

module.exports = {
  dtoGetUserTodolist,
  dtoCreateUserTodolist,
  dtoPatchUserTodolist,
  dtoDeleteUserTodolist,
  dtoDeleteUserTodolistTask,
};
