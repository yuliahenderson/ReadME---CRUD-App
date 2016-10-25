const express = require('express');
const BookController = require('../controllers/BookController');

const router = express.Router();

router.get('/', BookController.getAll);
router.post('/', BookController.create);

module.exports = router;
