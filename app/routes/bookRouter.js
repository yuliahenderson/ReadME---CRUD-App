const express = require('express');
const BookController = require('../controllers/BookController');

const router = express.Router();

router.get('/', BookController.getCurrentUserBooks);
router.post('/', BookController.create);
router.post('/:id', BookController.create);
module.exports = router;
