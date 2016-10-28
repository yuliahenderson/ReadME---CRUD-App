const BookDAO = require('../services/BookDAO');

class BookController {

  static getCurrentUserBooks(req, res) {
  BookDAO.searchBy({ user_id: req.session.currentUser.id }).then((books) => {
    res.status(200).json(books);
    });
  }
  static create(req, res) {
    const bookData = {
      title: req.body.title,
      author: req.body.author,
    };
    // const title = req.body.title;
    // let author = req.body.author;
    BookDAO.create(bookData)
           .then((book) => res.status(200).json(book));
  }
  static delete(req,res) {
    BookDAO.delete(req.params.id)
           .then(() => res.status(204).end());
  }
}

module.exports = BookController;
