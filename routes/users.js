const router = require('express').Router();

const {
  getUsers, getUserById, updateUser, updateAvatar, getCurrentUser,
} = require('../controllers/users');

const { validateUpdateUser, validateId, validateAvatar } = require('../utils/validation');

router.get('/users', getUsers);
router.get('/users/:userId', validateId, getUserById);
router.get('/users/me', getCurrentUser);
router.patch('/users/me', validateUpdateUser, updateUser);
router.patch('/users/me/avatar', validateAvatar, updateAvatar);

module.exports = router;
