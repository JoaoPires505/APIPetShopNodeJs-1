const express = require('express')
const ControllerUsuario = require('../controllers/usuario.js')
const authMiddleware = require('../middleware/auth.js')

const controller = new ControllerUsuario()
const RouterUsuarios = express.Router()

RouterUsuarios.get("/petlife/Login", controller.Login)
RouterUsuarios.get('/petlife/usuario/:id', authMiddleware, controller.PegarUm)
RouterUsuarios.get('/petlife/usuario/', authMiddleware, controller.PegarTodos)
RouterUsuarios.post('/petlife/usuario', authMiddleware, controller.Add)
RouterUsuarios.put('/petlife/usuario/:id', authMiddleware, controller.Update)
RouterUsuarios.delete('/petlife/usuario/:id', authMiddleware, controller.Delete)

module.exports = RouterUsuarios