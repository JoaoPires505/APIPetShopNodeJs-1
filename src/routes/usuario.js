const express = require('express')
const ControllerUsuario = require('../controllers/usuario.js')
const authMiddleware = require('../middleware/auth.js')
const {admin} = require("../helpers/admin")

const controller = new ControllerUsuario()
const RouterUsuarios = express.Router()

RouterUsuarios.get("/petlife/Login", controller.Login)
RouterUsuarios.get('/petlife/usuario/:id', authMiddleware, controller.PegarUm)
RouterUsuarios.get('/petlife/usuario/', authMiddleware, controller.PegarTodos)
RouterUsuarios.post('/petlife/usuario', authMiddleware, controller.Add)
RouterUsuarios.put('/petlife/usuario/:id', authMiddleware, controller.Update)
RouterUsuarios.delete('/petlife/usuario/:id', authMiddleware, controller.Delete)

RouterUsuarios.get("/petlife/Login", admin, controller.Login)
RouterUsuarios.get('/petlife/usuario/:id', admin, authMiddleware, controller.PegarUm)
RouterUsuarios.get('/petlife/usuario/', admin, authMiddleware, controller.PegarTodos)
RouterUsuarios.post('/petlife/usuario', admin, authMiddleware, controller.Add)
RouterUsuarios.put('/petlife/usuario/:id', admin, authMiddleware, controller.Update)
RouterUsuarios.delete('/petlife/usuario/:id', admin, authMiddleware, controller.Delete)



module.exports = RouterUsuarios