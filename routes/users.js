const router = require('express').Router();

const { getUsers, getUserById, createUsers } = require('../controllers/users');

router.get('/users', getUsers);
router.get('/users/:userId', getUserById);
router.post('/users', createUsers);

module.exports = router;