const router = require('express').Router();

const { getCards, createCard, deleteCard } = require('../controllers/cards');

router.get('/cards', getCards);
router.post('/cards', createCard);
router.post('/cards/:cardId', deleteCard);

module.exports = router;
