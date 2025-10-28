import { fastify } from 'fastify';
import { databasePostgres } from './database-postgres.js';

const server = fastify();
const database = new databasePostgres();

// POST https://localhost:3333/videos <-- Cria um vídeo
server.post('/videos', async (request, reply) => {
  const { title, description, duration } = request.body;

  await database.create({
    title,
    description,
    duration,
  });

  return reply.status(201).send();
});

// GET https://localhost:3333/videos <-- Lista os vídeos
server.get('/videos', async (request) => {
  const search = request.query.search;

  const videos = await database.list(search);

  return videos;
});

// PUT https://localhost:3333/videos/:id <-- Atualiza um vídeo
server.put('/videos/:id', async (request, reply) => {
  const videoId = request.params.id;
  const { title, description, duration } = request.body;

  await database.update(videoId, {
    title,
    description,
    duration,
  });

  return reply.status(204).send();
});

// DELETE https://localhost:3333/videos/:id <-- Deleta um vídeo
server.delete('/videos/:id', async (request, reply) => {
  const videoId = request.params.id;

  await database.delete(videoId);

  return reply.status(204).send();
});

server.listen({
  host: '0.0.0.0',
  port: process.env.PORT ?? 3333,
});
