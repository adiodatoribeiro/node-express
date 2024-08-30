const express = require('express');
const PostController = require('../controllers/PostController');
const PostRotas = express.Router();

const postController = new PostController();

PostRotas.get('/posts', postController.listar);
PostRotas.get('/posts/:id', postController.consultarPorId);
PostRotas.post('/posts', postController.criar)
PostRotas.put('/posts/:id', postController.atualizar)
PostRotas.delete('/posts/:id', postController.deletar)

module.exports = PostRotas;