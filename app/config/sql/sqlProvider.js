const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  books: {
    all: sql('./sql/book/all.sql'),
    create: sql('./sql/book/create.sql'),
    delete: sql('./sql/book/delete.sql'),
  },
};

module.exports = sqlProvider;
