import { fastify } from 'fastify';
import { databaseMemory } from './database-memory.js';

const server = fastify();
const database = new databaseMemory();

// POST https://localhost:3333/videos <-- Cria um vídeo
server.post('/videos', (request, reply) => {
  const body = request.body;

  database.create({
    title: 'Video 01',
    description: 'Descrição do vídeo 01',
    duration: 1800,
  });
  console.log(body);
  return reply.status(201).send();
});

// GET https://localhost:3333/videos <-- Lista os vídeos
server.get('/videos', () => {
  return 'Hello Video';
});

// PUT https://localhost:3333/videos/:id <-- Atualiza um vídeo
server.put('/videos/:id', () => {
  return 'Hello Video';
});

// DELETE https://localhost:3333/videos/:id <-- Deleta um vídeo
server.delete('/videos/:id', () => {
  return 'Hello Video';
});

server.listen({
  port: 3333,
});
