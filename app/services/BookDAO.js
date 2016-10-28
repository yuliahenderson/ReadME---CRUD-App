const db = require('../config/sql/db');
const sql = require('../config/sql/sqlProvider').books;
const Book = require('../models/Book');

class BookDAO {
  static create({ title, author }) {
    return db.one(sql.create, [ title, author ])
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
