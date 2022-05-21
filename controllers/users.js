const User = require('../models/user')

/* 400 — переданы некорректные данные в методы создания карточки, пользователя, обновления аватара пользователя или профиля;
404 — карточка или пользователь не найден.
500 — ошибка по-умолчанию. */

const getUsers = (req, res) => {
  User.find({})
    .then((users) => res.send({ data: users }))
    .catch(() => res.status(500).send({ message: 'Ошибка на сервере' }))
};

const getUserById = (req, res) => {
  User.findById(req.params.userId)
    .then((users) => {
      if (!users) {
        res.status(404).send({ message: 'Пользователь не найден' });
        return;
      }
      res.send({ data: users });
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        res.status(400).send({ message: 'Некорректные данные id' });
        return;
      }
      res.status(500).send({ message: 'Ошибка на сервере' })
    });
};

const createUsers = (req, res) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(201).send({ data: user }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        res.status(400).send({ message: 'Некорректные данные пользователя' });
        return;
      }
      res.status(500).send({ message: 'Ошибка на сервере' })
    });
}

module.exports = { getUsers, getUserById, createUsers }