const router = require('express').Router();

const {
  getCards, createCard, deleteCard, likeCard, dislikeCard,
} = require('../controllers/cards');

const { validateCard, validateId } = require('../utils/validation');

router.get('/cards', getCards);
router.post('/cards', validateCard, createCard);
router.delete('/cards/:cardId', validateId, deleteCard);
router.put('/cards/:cardId/likes', validateId, likeCard);
router.delete('/cards/:cardId/likes', validateId, dislikeCard);

module.exports = router;
