//Import a biblioteca nativa do Node.js para gerar UUIDs
import { randomUUID } from 'node:crypto';

//Classe que simula um banco de dados em memória
export class databaseMemory {
  //Mapa privado para armazenar vídeos
  #videos = new Map();

  //Método para listar todos os vídeos
  list() {
    return this.#videos.values();
  }

  //Método para criar um novo vídeo
  create(video) {
    const videoId = randomUUID();

    this.#videos.set(videoId, video);
  }

  //Método para atualizar um vídeo existente
  update(id, video) {
    this.#videos = set(id, video);
  }

  //Método para deletar um vídeo pelo ID
  delete(id) {
    this.#videos.delete(id);
  }
}
