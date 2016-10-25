const BookDAO = require('../services/BookDAO');

class BookController {
  static getAll(req, res) {
    BookDAO.all()
           .then((books) => {
            res.status(200).json(books);
           })
  }
  static create(req, res) {
    const bookData = {
      title: req.body.title,
      author: req.body.author,
    };
    BookDAO.create(bookData)
           .then((book) => res.status(200).json(book));
  }
}

module.exports = BookController;
