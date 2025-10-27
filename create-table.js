import { sql } from './db.js';

sql`
CREATE TABLE videos (
    title TEXT NOT NULL,
    description TEXT,
    duration INTEGER
);
`.then(() => {
  console.log('Tabela criada com sucesso!');
});
