const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  users: {
    all: sql('./sql/user/all.sql'),
    find: sql('./sql/user/find.sql'),
    create: sql('./sql/user/create.sql'),
    delete: sql('./sql/user/delete.sql'),
  },
  books: {
    all: sql('./sql/book/all.sql'),
    create: sql('./sql/book/create.sql'),
    delete: sql('./sql/book/delete.sql'),
  },
};

module.exports = sqlProvider;
