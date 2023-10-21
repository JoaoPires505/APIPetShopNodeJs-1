const express = require('express')
const ControllerUsuario = require('../controllers/usuario.js')
const authMiddleware = require('../middleware/auth.js')
const checarpermissao = require('../middleware/auth.js')

const controller = new ControllerUsuario()
const RouterUsuarios = express.Router()

RouterUsuarios.get("/petlife/Login", controller.Login)
RouterUsuarios.get('/petlife/usuario/:id', authMiddleware, controller.PegarUm)
RouterUsuarios.get('/petlife/usuario/', authMiddleware, controller.PegarTodos)
RouterUsuarios.post('/petlife/usuario', authMiddleware, controller.Add)
RouterUsuarios.put('/petlife/usuario/:id', authMiddleware, controller.Update)
RouterUsuarios.delete('/petlife/usuario/:id', authMiddleware, controller.Delete)

router.get('/admin', checarpermissao(0), (req, res) => {
    res.json({ message: 'Você é um administrador.' });
  });

  router.get('/cliente', checarpermissao(1), (req, res) => {
    res.json({ message: 'Você é um cliente.' });
  });
  router.get('/funcionario', checarpermissao(2), (req, res) => {
    res.json({ message: 'Você é um funcionário.' });
  });

module.exports = RouterUsuarios