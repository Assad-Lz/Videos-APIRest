//Import a biblioteca nativa do Node.js para gerar UUIDs
import { randomUUID } from 'node:crypto';

//Classe que simula um banco de dados em memória
export class databaseMemory {
  //Mapa privado para armazenar vídeos
  #videos = new Map();

  //Método para listar todos os vídeos
  list(search) {
    return Array.from(this.#videos.entries())
      .map((videoArray) => {
        const id = videoArray[0];
        const data = videoArray[1];

        return {
          id,
          ...data,
        };
      })
      .filter((video) => {
        if (search) {
          return video.title.includes(search);
        }
        return true;
      });
  }

  //Método para criar um novo vídeo
  create(video) {
    const videoId = randomUUID();

    this.#videos.set(videoId, video);
  }

  //Método para atualizar um vídeo existente
  update(id, video) {
    this.#videos.set(id, video);
  }

  //Método para deletar um vídeo pelo ID
  delete(id) {
    this.#videos.delete(id);
  }
}
