INSERT INTO books (title, author) VALUES($1, $2) RETURNING *;
