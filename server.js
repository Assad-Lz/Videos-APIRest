import { fastify } from 'fastify';
import { databaseMemory } from './database-memory.js';

const server = fastify();
const database = new databaseMemory();

// POST https://localhost:3333/videos <-- Cria um vídeo
server.post('/videos', (request, reply) => {
  const { title, description, duration } = request.body;

  database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});

// GET https://localhost:3333/videos <-- Lista os vídeos
server.get('/videos', (request) => {
  const search = request.query.search;

  const videos = database.list(search);

  return videos;
});

// PUT https://localhost:3333/videos/:id <-- Atualiza um vídeo
server.put('/videos/:id', (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  database.update(videoId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send();
});

// DELETE https://localhost:3333/videos/:id <-- Deleta um vídeo
server.delete('/videos/:id', (request, reply) => {
  const videoId = request.params.id;

  database.delete(videoId);

  return reply.status(204).send();
});

server.listen({
  port: 3333,
});
