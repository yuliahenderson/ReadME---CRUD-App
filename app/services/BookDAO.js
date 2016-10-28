const db = require('../config/db');
const sql = require('../config/sqlProvider').books;
const Book = require('../models/Book');

class BookDAO {
  static create({ title, author, user_id }) {
    return db.one(sql.create, [ title, author, user_id ])
             .then((data) => new Book(data));
  }
  static delete(id) {
    return db.none(sql.delete, [id]);
  }
  static searchBy(keyValue) {
  const key = Object.keys(keyValue)[0];
  const value = keyValue[key];
  return db.map(sql.find, [key, value], (row) => new Book(row));
  }
}

module.exports = BookDAO;
