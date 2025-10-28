//Import a biblioteca nativa do Node.js para gerar UUIDs
import { randomUUID } from 'node:crypto';
import { sql } from './db.js';

//Classe que interage com um banco de dados PostgreSQL
export class databasePostgres {
  //Método para listar todos os vídeos
  async list(search) {
    let videos;

    if (search) {
      videos = await sql`SELECT * FROM videos WHERE title ILIKE ${
        '%' + search + '%'
      } `;
    } else {
      videos = await sql`SELECT * FROM videos`;
    }

    return videos;
  }

  //Método para criar um novo vídeo
  async create(video) {
    const videoId = randomUUID();
    const { title, description, duration } = video;

    await sql`INSERT INTO videos (id, title, description, duration) VALUES (${videoId}, ${video.title}, ${video.description}, ${video.duration})`;
  }

  //Método para atualizar um vídeo existente
  async update(id, video) {
    const { title, description, duration } = video;
    await sql`UPDATE videos SET title = ${title}, description = ${description}, duration = ${duration} WHERE id = ${id}`;
  }

  //Método para deletar um vídeo pelo ID
  async delete(id) {
    await sql`DELETE FROM videos WHERE id = ${id}`;
  }
}
