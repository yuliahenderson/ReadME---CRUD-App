INSERT INTO books (title, author, user_id) VALUES($1, $2, $3) RETURNING *;
