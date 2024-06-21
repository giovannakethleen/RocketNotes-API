const createUsers = `
CREATE TABLE IF NOT EXISTS users (  
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR,
  email VARCHAR,
  password VARCHAR,
  avatar VARCHAR NULL,
  created_ad TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_ad TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
`;

module.exports = createUsers;

//TABLE IF NOT EXISTS = so cria a tabela se nao existir outra igual