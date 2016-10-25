const db = require('../config/sql/db');
const sql = require('../config/sql/sqlProvider').books;
const Book = require('../models/Book');

class BookDAO {
  static all() {
   return db.map(sql.all, [], (row) => new Book(row));
  }
  static create({title, author}) {
    return db.one(sql.create, [title, author])
             .then((data) => new Book(data));
  }
}

module.exports = BookDAO;
